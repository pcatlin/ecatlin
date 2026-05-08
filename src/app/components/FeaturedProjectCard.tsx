import type {Project} from "@/app/types";
import Link from "next/link";

type Props = {
    slug: string;
    project: Project;
};

const motionSafe =
    "motion-reduce:[animation:none] supports-[animation-timeline:view()]:[animation-fill-mode:both] supports-[animation-timeline:view()]:[animation-timing-function:linear]";

export default function FeaturedProjectCard({slug, project}: Props) {
    return (
        <div
            className="group flex min-h-[25vh] items-center overflow-x-clip border-y border-white/5 px-5 py-10 text-inherit no-underline odd:bg-sky-900 even:bg-[rgb(8_47_73)]"
        >
            <div
                className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
                <div
                    className={`mx-auto flex aspect-square max-w-md items-center justify-center overflow-hidden rounded-[1.75rem] border-[3px] shadow-[0_25px_50px_-12px_rgb(0_0_0_/_0.5)] supports-[animation-timeline:view()]:[animation:featured-image-in_linear_both] supports-[animation-timeline:view()]:[animation-timeline:view()] supports-[animation-timeline:view()]:[animation-range:entry_0%_cover_30%] ${motionSafe}`}
                    style={{borderColor: project.colour ?? "oklab(0.7 0 0)"}}
                >
                    <img
                        src={`/images/${slug}/logo.png`}
                        alt={`${project.name} logo`}
                        className="h-auto w-full max-w-64 object-contain drop-shadow-[0_8px_20px_rgb(0_0_0_/_0.25)]"
                        width={192}
                        height={192}
                    />
                </div>
                <div className="flex flex-col">
                    <h3
                        className={`mb-5 text-3xl font-bold leading-[1.05] tracking-tight text-orange-500 lg:text-4xl supports-[animation-timeline:view()]:[animation:featured-name-in_linear_both] supports-[animation-timeline:view()]:[animation-timeline:view()] supports-[animation-timeline:view()]:[animation-range:entry_00%_cover_20%] ${motionSafe}`}
                    >
                        {project.name}
                    </h3>
                    <p
                        className={`m-0 max-w-176 text-xl leading-normal text-slate-200 lg:text-2xl supports-[animation-timeline:view()]:[animation:featured-description-in_linear_both] supports-[animation-timeline:view()]:[animation-timeline:view()] supports-[animation-timeline:view()]:[animation-range:entry_0%_cover_20%] ${motionSafe}`}
                    >
                        {project.description}
                    </p>
                    <Link href={`/projects/${slug}`}
                          className={`mt-8 inline-flex max-w-fit items-center self-start rounded-lg bg-orange-500 px-5 py-3 font-bold text-slate-900 shadow-[0_10px_20px_-8px_rgb(249_115_22_/_0.6)] transition-[transform,box-shadow] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:shadow-[0_14px_24px_-8px_rgb(249_115_22_/_0.7)] supports-[animation-timeline:view()]:[animation:featured-cta-in_linear_both] supports-[animation-timeline:view()]:[animation-timeline:view()] supports-[animation-timeline:view()]:[animation-range:entry_0%_cover_10%] ${motionSafe}`}
                    >
                        View project
                        <i className="fa fa-chevron-right ml-2" aria-hidden="true"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}
