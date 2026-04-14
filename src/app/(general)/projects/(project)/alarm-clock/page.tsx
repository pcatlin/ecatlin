import {Metadata} from "next";
import {projectMetadata, projects} from "@/app/projects";
import styles from "@/app/styles";
import TechStack from "@/app/components/shared-features/TechStack";

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


            <h2 className={styles.h2} id="how-to-do-it">How to do it</h2>
            <p>
                We need to add a few Home Assistant integrations, automations and scripts. First integrations:
                <ul className="ml-3 pl-5 mb-5 list-disc">
                    <li><strong>Sonos</strong> - To play radio on the Sonos speaker</li>
                    <li><strong>Workday Sensor</strong> - To prevent the alarm triggering on a bank holiday</li>
                    <li><strong>Google Calendar</strong> - To be able to schedule date and time for a bespoke alarm,
                        or to prevent the alarm going off on a particular day or range of days</li>
                    <li><strong>Home Assistant Phone App</strong> - To let you set a secondary alarm on your phone</li>
                </ul>
            </p>

            <TechStack tech={tech} />
        </article>
    )
}
