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

            <TechStack tech={tech}/>
        </article>
    )
}