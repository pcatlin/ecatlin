import {ReactNode} from "react";
import ProjectSidebar from "@/app/(general)/projects/(project)/ProjectSidebar";

export default function ProjectsLayout({children}: { children: ReactNode }) {
    return (
        <main className="text-lg mb-20">
            <div className="max-w-7xl mx-auto p-8">
                <div className="grid sm:grid-cols-[1fr_200px] gap-3 md:gap-10 relative">
                    {children}
                    <ProjectSidebar/>
                </div>
            </div>
        </main>
    )
}