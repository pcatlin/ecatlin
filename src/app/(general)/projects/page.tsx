import {sortedProjects} from "@/app/projects";
import ProjectCard from "@/app/components/ProjectCard";

export default function Projects() {
    return (
        <main>
            <h1 className="text-4xl text-orange-500 font-bold text-center mb-5">Projects</h1>

            <section className="mb-15 bg-slate-600 p-5">
                <div className="mx-auto max-w-7xl">
                    <div className="px-5 py-5 grid gap-5"
                         style={{gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"}}>
                        {sortedProjects().map(([slug, project]) => (
                            <ProjectCard key={slug} slug={slug} {...project} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}