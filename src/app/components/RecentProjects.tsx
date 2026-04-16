import {sortedProjects} from "@/app/projects";
import ProjectCard from "@/app/components/ProjectCard";
import styles from "./RecentProjects.module.css";

export default function RecentProjects() {
    return (
        <div className={styles.recentProjects +
            " py-5 grid gap-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(310px,1fr))]"}>
            {sortedProjects(9).map(([slug, project]) => (
                <ProjectCard key={slug} slug={slug} {...project} />
            ))}
        </div>
    )
}