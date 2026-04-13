'use client';

import {useSelectedLayoutSegment} from "next/navigation";
import {cashbackPythonSidebar} from "./cashback-python/sidebar";
import {custardGiftCardsSidebar} from "./custard-app/sidebar";
import {custardSidebar} from "./custard/sidebar";
import {ohMyDoshSidebar} from "./ohmydosh/sidebar";
import {cashbackPhpSidebar} from "./cashback-php/sidebar";
import {travelRatesSidebar} from "./travel-rates/sidebar";

const sidebarLinksByProject = {
    "cashback-python": cashbackPythonSidebar,
    "custard-app": custardGiftCardsSidebar,
    "custard": custardSidebar,
    "ohmydosh": ohMyDoshSidebar,
    "cashback-php": cashbackPhpSidebar,
    "travel-rates": travelRatesSidebar,
} as const;

export default function ProjectSidebar() {
    const project = useSelectedLayoutSegment();
    const links = project ? sidebarLinksByProject[project as keyof typeof sidebarLinksByProject] : undefined;

    if (!links?.length) {
        return null;
    }

    return (
        <nav className="sticky top-20 hidden h-min lg:flex flex-col text-base gap-3">
            <h2 className="text-md font-semibold text-slate-200 tracking-widest uppercase mb-1">
                Table of Contents
            </h2>
            {links.map((link) => (
                <a key={link.href} href={`/projects/${project}${link.href}`}>
                    {link.label}
                </a>
            ))}
        </nav>
    );
}

