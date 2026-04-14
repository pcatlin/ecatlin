import {sortedProjects} from "@/app/projects";
import ProjectCard from "@/app/components/ProjectCard";

export default function RecentProjects() {
    return (
        <div className="py-5 grid gap-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(310px,1fr))]">
            {sortedProjects(6).map(([slug, project]) => (
                <ProjectCard key={slug} slug={slug} {...project} />
            ))}
        </div>
    )
}