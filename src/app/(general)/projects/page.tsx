import {sortedProjects} from "@/app/projects";
import ProjectCard from "@/app/components/ProjectCard";

export default function Projects() {
    return (
        <main>
            <h1 className="text-4xl text-orange-500 font-bold text-center mb-5">Projects</h1>

            <section className="bg-slate-600 p-5">
                <div className="mx-auto max-w-7xl">
                    <div className="px-5 py-5 grid gap-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(310px,1fr))]">
                        {sortedProjects().map(([slug, project]) => (
                            <ProjectCard key={slug} slug={slug} {...project} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}