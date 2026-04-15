'use client';

import {useSelectedLayoutSegment} from "next/navigation";
import {projects} from "@/app/projects";

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
        <p className="bg-sky-900 border-r-4 border-orange-500 text-lg text-right mb-5 px-3 py-2 rounded-s-lg">
            <time dateTime={project.dt_start.toISOString()}>
                {project.dt_start.toLocaleDateString("en-GB", dateFormat)}
            </time>
            {" - "}
            {end}
        </p>
    )
}