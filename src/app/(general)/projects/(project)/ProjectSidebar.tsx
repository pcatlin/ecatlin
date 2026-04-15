'use client';

import {useSelectedLayoutSegment} from "next/navigation";
import {projects} from "@/app/projects";
import styles from "@/app/styles";

export default function ProjectSidebar() {
    const slug = useSelectedLayoutSegment();
    const links = slug ? projects[slug]?.sidebar : undefined;

    if (!links?.length) {
        return null;
    }

    return (
        <nav className="sticky top-20 hidden h-min sm:flex flex-col text-right md:text-left text-base gap-3">
            <h2 className="text-md font-semibold text-slate-200 tracking-widest uppercase mb-1">
                Table of Contents
            </h2>
            {links.map((link) => (
                <a key={link.href}
                   href={link.href}
                   onClick={(e) => {
                       e.preventDefault()
                       const target = document.querySelector(link.href)
                       if (target){
                           target.scrollIntoView({behavior: "smooth"})
                       }
                   }}
                   className={styles.linkSubtle}>
                    {link.label}
                </a>
            ))}
        </nav>
    );
}

