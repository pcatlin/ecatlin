import Link from "next/link";
import TechStack from "@/app/components/shared-features/TechStack";
import {projectMetadata, projects} from "@/app/projects";
import {Metadata} from "next";
import styles from "@/app/styles";

const slug = "player-picker"

export function generateMetadata(): Metadata {
    return projectMetadata(slug)
}

export default function PlayerPicker() {
    const {tech} = projects[slug] || null

    return (
        <article>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <img src="/images/player-picker/logo.png"
                     alt="Player Picker logo"
                     width="192" height="192"
                     className="rounded-3xl shadow-lg"
                />
                <h1 className="text-4xl font-bold text-orange-500 text-center">Player Picker</h1>
            </div>

            <h2 className={styles.h2} id="what-is-it">What is Player Picker</h2>
            <p>
                Player Picker is a simple app that lets you quickly pick a player for whatever reason.
                Could be who goes first in a board game, or who gets to pick the movie for the night.
            </p>

            <TechStack tech={tech}/>
        </article>
    )
}