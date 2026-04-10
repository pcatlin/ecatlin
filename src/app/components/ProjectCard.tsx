import {Project} from "@/app/types";
import Link from "next/link";

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
        <Link href={`/projects/${slug}`} className="text-black">
            <article className="rounded-xl bg-slate-100 border-4 shadow-lg" style={{borderColor: colour}}>
                <div className="flex">
                    <img src={"/images/" + slug + "/logo.png"} alt={name + " logo"}
                         className="rounded-tl-lg rounded-br-3xl w-25 h-25"
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