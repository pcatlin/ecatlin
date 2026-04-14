import {projectMetadata, projects} from "@/app/projects";
import TechStack from "@/app/components/shared-features/TechStack";
import {Metadata} from "next";
import styles from "@/app/styles";

const slug = "travel-rates";

export function generateMetadata(): Metadata {
    return projectMetadata(slug)
}

export default function TravelRates() {
    const {tech} = projects[slug] || null

    return (
        <article>
            <div className="flex justify-center">
                <img src="/images/travel-rates/travel-rates.png"
                     className="rounded-lg"
                     alt="Travel Rates - FREE quick currency cheatsheet"
                     width="984" height="366"
                />
            </div>

            <h1 className={styles.h2} id="what-is-it">What is the Travel Rates App?</h1>
            <p>
                Travel Rates is a free React Native (Expo) app for Android and iOS that shows you exchange rate
                conversions from one currency to another.
            </p>
            <p>
                It shows a handy cheatsheet table of common values, and also lets you type in or drag the slider to
                quickly find out how much the value would cost in your home currency.
            </p>

            <TechStack tech={tech}/>
        </article>
    )
}