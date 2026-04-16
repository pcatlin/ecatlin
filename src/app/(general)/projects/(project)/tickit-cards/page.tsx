import {projectMetadata, projects} from "@/app/projects";
import TechStack from "@/app/components/shared-features/TechStack";
import {Metadata} from "next";
import styles from "@/app/styles";

const slug = "tickit-cards";

export function generateMetadata(): Metadata {
    return projectMetadata(slug)
}

export default function TickItCards() {
    const {tech} = projects[slug] || null

    return (
        <article>
            <div className="flex justify-center items-center gap-5 flex-col md:flex-row">
                <img src="/images/tickit-cards/logo.png"
                     className="rounded-4xl shadow-xl max-w-35"
                     alt="TickIt Cards logo"
                     width="192" height="192"
                />
                <h1 className={styles.h1}>TickIt Cards</h1>
            </div>

            <h2 className={styles.h2} id="what-is-it">What is the TickIt Cards App?</h2>
            <p>
                TickIt Cards is a free React Native (Expo) app for Android and iOS that helps you to track your gift
                cards. It reminds you when the expiry date is approaching and lets you track how much money is left
                on each gift card.
            </p>

            <h2 className={styles.h2} id="notifications">Notifications</h2>
            <p>
                One of the most important parts of TickIt Cards is reminder reliability. I did not want “set and
                forget” notifications that silently fail, and I also did not want to spam users with too many
                alerts too early. So I built a scheduling strategy that adapts based on how far away the expiry date is.
            </p>
            <p>
                Every time I save a card, notification setup is handled in the same transaction-like flow:
                cancel old schedule, evaluate current card state, schedule the right trigger, then persist
                the returned notification ID.
            </p>

            <h3 className={styles.h3}>Cadence strategy (adaptive reminders)</h3>
            <p>
                When a card is saved, this happens:
            </p>
            <ol className="list-decimal ms-5 ps-5 mt-3 mb-3">
                <li>I schedule the notifications for the gift card when saving before writing to storage.</li>
                <li>scheduleNotification first checks for the required notification permissions.</li>
                <li>It cancels any existing scheduled notification to avoid duplicates.</li>
                <li>It applies guardrails (skip if notifications disabled, no expiry, zero value, or already expired).</li>
                <li>It selects cadence based on time-to-expiry.</li>
                <li>It schedules the notification and returns the notification ID.</li>
                <li>I store that ID back on the card for future reference (to cancel it later maybe).</li>
            </ol>
            <p>
                This design keeps notification state deterministic: one card {"->"} one active schedule.
            </p>

            <p>
                I use a simple but practical “urgency ladder”:
            </p>
            <ul className="list-disc ms-5 ps-5 mt-3 mb-3">
                <li>More than 6 months left {"->"} monthly reminders</li>
                <li>More than 1 month left {"->"} weekly reminders</li>
                <li>1 month or less (but still in future) {"->"} daily reminders</li>
                <li>Expiry today/past {"->"} no scheduling</li>
            </ul>
            <p>
                This keeps reminders low-noise when expiry is distant and increases frequency only when action
                becomes urgent.
            </p>


            <h3 className={styles.h3}>
                Reliability techniques that made the biggest difference
            </h3>

            <p>
                A few implementation details made this much more stable:
            </p>
            <ul>
                <li>Always cancel before re-scheduling to prevent duplicate notifications after edits.</li>
                <li>Store the returned notification ID so future updates can cancel the exact old schedule.</li>
                <li>Validate notification eligibility early (permissions, expiry date, value {">"} 0, notifications enabled).</li>
                <li>Keep scheduling coupled to save operations so notification state stays in sync with card state.</li>
            </ul>

            <h3 className={styles.h3}>What this gives users in practice</h3>
            <p>
                Users do not need to manually tune reminder frequency. They just add a card and expiry date, and
                TickIt Cards escalates reminders naturally as the date approaches. It feels simple from the UI side, but
                under the hood the app is continuously recalculating and maintaining the optimal schedule whenever
                card data changes.
            </p>


            <TechStack tech={tech}/>
        </article>
    )
}