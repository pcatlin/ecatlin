'use client';

import {useSelectedLayoutSegment} from "next/navigation";
import {projects} from "@/app/projects";
import styles from "@/app/styles";

const dateFormat: Intl.DateTimeFormatOptions = {month: "long", year: "numeric"};

export default function ProjectDates() {
    const slug = useSelectedLayoutSegment();
    const project = slug ? projects[slug] : undefined;

    if (!project) return null;

    const end = project.dt_end
        ? <time dateTime={project.dt_end.toISOString()}>
            {project.dt_end.toLocaleDateString("en-GB", dateFormat)}
        </time>
        : <time>Present</time>;

    return (
        <div
            className="bg-sky-900 border-r-4 border-orange-500 mb-5 flex flex-wrap items-center justify-between gap-3 px-3 py-2 rounded-s-lg">
            {project.github ? (
                <>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent inline-flex items-center gap-2 text-base"
                    >
                        <i className="fa-brands fa-github text-xl" aria-hidden="true"></i>
                    </a>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.link} inline-flex items-center gap-2 text-base`}
                    > GitHub
                    </a>
                </>
            ) : null}
            <p className={`text-lg text-right ${project.github ? "ml-auto" : "w-full"}`}>
                <time dateTime={project.dt_start.toISOString()}>
                    {project.dt_start.toLocaleDateString("en-GB", dateFormat)}
                </time>
                {" - "}
                {end}
            </p>
        </div>
    )
}
