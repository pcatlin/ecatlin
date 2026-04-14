'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { projects } from "@/app/projects"
import styles from "@/app/styles";

export default function Breadcrumbs() {
    const pathname = usePathname()
    const segments = pathname.split('/').filter(Boolean)
    const slug = segments[1]
    const projectName = slug ? (projects[slug]?.name ?? slug) : undefined

    return (
        <nav className={styles.container + " w-full breadcrumbs text-sm mb-6"}>
            <ul>
                <li><Link href="/">Home</Link></li>
                {segments[0] === 'projects' && (
                    <li><Link href="/projects">Projects</Link></li>
                )}
                {projectName && <li>{projectName}</li>}
            </ul>
        </nav>
    )
}
