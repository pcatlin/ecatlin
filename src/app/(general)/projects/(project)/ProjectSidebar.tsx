'use client';

import { useSelectedLayoutSegment } from "next/navigation";
import { cashbackPythonSidebar } from "./cashback-python/sidebar";
import {CustardGiftCardsSidebar} from "./custard-app/sidebar";
import {CustardSidebar} from "./custard/sidebar";
import {OhMyDoshSidebar} from "@/app/(general)/projects/(project)/ohmydosh/sidebar";

const sidebarLinksByProject = {
    "cashback-python": cashbackPythonSidebar,
    "custard-app": CustardGiftCardsSidebar,
    "custard": CustardSidebar,
    "ohmydosh": OhMyDoshSidebar,
} as const;

export default function ProjectSidebar() {
    const project = useSelectedLayoutSegment();
    const links = project ? sidebarLinksByProject[project as keyof typeof sidebarLinksByProject] : undefined;

    if (!links?.length) {
        return null;
    }

    return (
        <nav className="sticky top-20 hidden lg:flex flex-col text-base gap-3">
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

