import {sortedProjects} from "@/app/projects";
import ProjectCard from "@/app/components/ProjectCard";

export default function RecentProjects() {
    return (
        <div className="py-5 grid gap-5" style={{gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"}}>
            {sortedProjects(6).map(([slug, project]) => (
                <ProjectCard key={slug} slug={slug} {...project} />
            ))}
        </div>
    )
}