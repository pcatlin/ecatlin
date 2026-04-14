import {Metadata} from "next";
import {projectMetadata, projects} from "@/app/projects";
import styles from "@/app/styles";
import TechStack from "@/app/components/shared-features/TechStack";
import {CodeBlock} from "@/app/components/CodeBlock";

const slug = "alarm-clock";

export function generateMetadata(): Metadata {
    return projectMetadata(slug)
}

export default function AlarmClock() {
    const {tech} = projects[slug] || null

    return (
        <article>
            <div className="flex justify-center items-center gap-5 flex-col md:flex-row">
                <img src="/images/alarm-clock/logo.png"
                     className="rounded-4xl shadow-xl max-w-35"
                     alt="TickIt Cards logo"
                     width="192" height="192"
                />
                <h1 className={styles.h1}>Smart Alarm Clock</h1>
            </div>

            <h2 className={styles.h2} id="what-is-it">What is the Smart Alarm Clock?</h2>
            <p>
                The Smart Alarm Clock is a Home Assistant automation that is my attempt to make the ultimate Alarm Clock.
                It links a Sonos speaker with Google Calendar and my Phone to provide flexibility and reliability
                to waking up on time.
            </p>
            <p>
                Here are the problems I&apos;ve found with other alarm clocks:
            </p>
            <ul className="ml-3 pl-5 mb-5 list-disc">
                <li><strong>Phone</strong> - Repetitive sounds</li>
                <li><strong>Sonos</strong> -  Unreliable. Sometimes the alarm radio doesn&apos;t play, so it alerts with a boring fallback beep</li>
                <li><strong>Traditional</strong> -  Both of the above!</li>
            </ul>
            <p>
                Also when a bank holiday or real holiday comes around. You have to remember to turn off
                (and back again) the alarm!
            </p>


            <h2 className={styles.h2} id="integrations">Home Assistant Integrations</h2>
            <p>
                To make this work, we need to add some required integrations to Home Assistant:
            </p>
            <ul className="ml-3 pl-5 mb-5 list-disc">
                <li><a href="https://www.home-assistant.io/integrations/sonos/"
                       className={styles.link}>Sonos</a> - To play radio on the Sonos speaker</li>
                <li><a href="https://www.home-assistant.io/integrations/workday"
                       className={styles.link}>Workday Sensor</a> - To prevent the alarm triggering on weekends
                    and bank holidays. Add your locale and exclude weekends and holidays</li>
                <li><a href="https://www.home-assistant.io/integrations/google/"
                       className={styles.link}>Google Calendar</a> - To be able to schedule date and time for
                    a bespoke alarm, or to prevent the alarm going off on a particular day or range of days.
                    In Google Calendar, create a new calendar just for your alarm clock.
                </li>
                <li><strong>Home Assistant Phone App</strong> - To let you set a secondary alarm on your phone</li>
            </ul>
            <p>
                After these are added to Home Assistant, we can start creating the automations and scripts.
            </p>


            <h2 className={styles.h2} id="alarm-automation">Alarm Automation</h2>
            <p>
                We need to create an automation to trigger the alarm at a certain time every day.
                The <strong>conditions</strong> for this restrict when the alarm will start, so we need to add a few:
            </p>
            <ul className="ml-3 pl-5 mb-5 list-disc">
                <li>Workday sensor: On - This makes sure that it is a workday (not weekend or bank holiday)</li>
                <li>Calendar: Off - If the calendar has an event for now then we do not want the alarm to trigger.</li>
                <li>Person zone: Home - Make sure I am at home</li>
                <li>Alarms scheduled for today: Off - If another event is in the calendar, the alarm is scheduled for
                    later, so don&apos;t start now</li>
            </ul>

            <p>
                Here&apos;s my alarm automation yaml:
            </p>
            <CodeBlock lang="yaml">{`
    alias: Alarm for Paul
    description: ""
    triggers:
      - at: "07:30:00"
        trigger: time
    conditions:
      - condition: state
        entity_id: binary_sensor.workday_sensor
        state: "on"
      - condition: state
        entity_id: calendar.work
        state: "off"
      - condition: zone
        entity_id: person.paul
        zone: zone.home
      - condition: state
        entity_id: input_boolean.alarms_scheduled_today
        state: "off"
        enabled: true
    actions:
      - action: notify.mobile_app_honor_magic_v3
        data:
          data:
            intent_package_name: com.google.android.deskclock
            intent_action: android.intent.action.SET_ALARM
            intent_extras: >-
              android.intent.extra.alarm.HOUR:{{ (now() +
              timedelta(minutes=15)).strftime('%H')
              }},android.intent.extra.alarm.MINUTES:{{ (now() +
              timedelta(minutes=15)).strftime('%M')
              }},android.intent.extra.alarm.SKIP_UI:true
          message: command_activity
      - if:
          - condition: numeric_state
            entity_id: sensor.honor_magic_v3_battery_level
            below: 10
          - condition: and
            conditions:
              - condition: state
                entity_id: binary_sensor.honor_magic_v3_interactive
                for:
                  hours: 0
                  minutes: 2
                  seconds: 0
                state: "on"
                enabled: true
              - condition: not
                conditions:
                  - condition: state
                    entity_id: binary_sensor.honor_magic_v3_interactive
                    for:
                      hours: 1
                      minutes: 0
                      seconds: 0
                    state: "on"
                    enabled: true
        then:
          - data:
              message: "⏰️ "
              title: Alarm
              data:
                channel: Alarm
            action: notify.mobile_app_honor_magic_v3
          - stop: Phone is unlocked.. abort alarm and send notification instead
        else: []
        enabled: true
      - action: script.fade_in_radio
        metadata: {}
        data: {}
    mode: restart
                `}</CodeBlock>


            <TechStack tech={tech} />
        </article>
    )
}
