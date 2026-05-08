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
            <div className="flex items-center justify-center gap-5">
                <img src="/images/player-picker/logo.svg"
                     alt="Player Picker logo"
                     width="300" height="50"
                     className="bg-white p-3 rounded-xl"
                />
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