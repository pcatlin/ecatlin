import FeaturedProjectCard from "@/app/components/FeaturedProjectCard";
import {randomProjects} from "@/app/projects";

export default function FeaturedProjects() {
    const featured = randomProjects(3);

    return (
        <section>
            <h2 className="text-4xl text-orange-500 font-bold text-center my-20">Featured Projects</h2>
            <div className="flex flex-col">
                {featured.map(([slug, project]) => (
                    <FeaturedProjectCard key={slug} slug={slug} project={project}/>
                ))}
            </div>
        </section>
    );
}
