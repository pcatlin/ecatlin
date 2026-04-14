import {Project} from "@/app/types";
import Link from "next/link";
import {CSSProperties} from "react";

type Props = Project & {
    slug: string
}

export default function ProjectCard({name, colour, description, dt_start, dt_end, tech, slug}: Props) {
    let dateRange = dt_start?.toLocaleDateString("en-GB", {month: "short", year: "numeric"})
    if (dt_end){
        dateRange += " - " + dt_end?.toLocaleDateString("en-GB", {month: "short", year: "numeric"})
    }else{
        dateRange += " - Now"
    }

    return (
        <Link href={`/projects/${slug}`}
              className="text-black @container flex"
              style={{ "--project-colour": colour } as CSSProperties}
        >
            <article className="flex flex-col rounded-xl bg-slate-100 shadow-lg border-4 border-(--project-colour) hover:border-black hover:shadow-sm transition-all">
                <div className="grow flex">
                    <img src={"/images/" + slug + "/logo.png"} alt={name + " logo"}
                         className="rounded-tl-lg rounded-br-3xl w-15 h-15 @sm:w-25 @sm:h-25"
                         width="192" height="192"/>
                    <div className="p-3">
                        <h3 className="text-gray-800 font-semibold text-xl tracking-wide mb-1">{name}</h3>
                        <p className="text-gray-700 leading-snug tracking-tight text-sm">{description}</p>
                    </div>
                </div>
                <div className="fix flex justify-between items-end p-2 text-xs">
                    {tech && (
                        <p className="">
                            {tech.filter(t => t.primary).map(t => t.name).join(", ")}
                        </p>
                    )}
                    <p className="">{dateRange}</p>
                </div>
            </article>
        </Link>
    )
}