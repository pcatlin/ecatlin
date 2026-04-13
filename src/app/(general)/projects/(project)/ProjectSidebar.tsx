'use client';

import {useSelectedLayoutSegment} from "next/navigation";
import {projects} from "@/app/projects";

export default function ProjectSidebar() {
    const slug = useSelectedLayoutSegment();
    const links = slug ? projects[slug]?.sidebar : undefined;

    if (!links?.length) {
        return null;
    }

    return (
        <nav className="sticky top-20 hidden h-min lg:flex flex-col text-base gap-3">
            <h2 className="text-md font-semibold text-slate-200 tracking-widest uppercase mb-1">
                Table of Contents
            </h2>
            {links.map((link) => (
                <a key={link.href} href={`/projects/${slug}${link.href}`}>
                    {link.label}
                </a>
            ))}
        </nav>
    );
}

