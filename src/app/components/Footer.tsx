import Link from 'next/link'
import {sortedProjects} from "@/app/projects";
import styles from "@/app/styles";

export default function Footer() {
    return (
        <footer className="text-slate-200 bg-slate-900 pt-20 pb-8">
            <div className="flex flex-col sm:flex-row items-center justify-around gap-10 mb-5">
                <div className="flex flex-col items-center justify-center gap-3 justify-self-start">
                    <Link href="/"><h2 className="font-display text-3xl text-slate-300">eCatlin</h2></Link>
                    <ul className="flex gap-1">
                        <li><a className="block py-1 sm:py-0" href="https://www.linkedin.com/in/paul-catlin-62a7983b6/"
                               aria-label="LinkedIn"><i className="fa-brands fa-linkedin text-2xl"></i></a></li>
                        <li><a className="block py-1 sm:py-0" href="https://github.com/pcatlin" aria-label="GitHub"><i
                            className="fa-brands fa-github text-2xl"></i></a></li>
                        <li><a className="block py-1 sm:py-0" href="https://www.youtube.com/@pcatlin"
                               aria-label="YouTube"><i className="fa-brands fa-youtube text-2xl"></i></a></li>
                        <li><a className="block py-1 sm:py-0" href="https://www.instagram.com/reinstall/"
                               aria-label="Instagram"><i className="fa-brands fa-instagram text-2xl"></i></a></li>
                    </ul>
                </div>
                <ul className="flex flex-col text-center sm:text-start">
                    <li className="mb-3"><h2 className="text-orange-500 font-bold uppercase tracking-wider">Projects</h2>
                    </li>
                    {sortedProjects(6).map(([slug, project]) => (
                        <li key={slug} className="block py-1 sm:py-0"><Link className={styles.linkSubtle}
                            href={'/projects/' + slug}>{project.name}</Link></li>
                    ))}
                    <li><Link className={styles.linkSubtle + " block py-1 sm:py-0"} href='/projects'>See All</Link></li>
                </ul>
                {/*<ul className="flex flex-col">*/}
                {/*    <li><h2>Top Tips</h2></li>*/}
                {/*    <li></li>*/}
                {/*    <li></li>*/}
                {/*    <li></li>*/}
                {/*</ul>*/}
                <ul className="flex flex-col text-center sm:text-start">
                    <li className="mb-3"><h2 className="font-bold uppercase tracking-wider text-orange-500">Sites</h2>
                    </li>
                    <li><a href="https://www.travel-rates.com" className={styles.linkSubtle + " block py-1 sm:py-0"}>Travel Rates</a></li>
                    <li><a href="https://www.tickitreminders.com" className={styles.linkSubtle + " block py-1 sm:py-0"}>TickIt Reminders</a>
                    </li>
                </ul>
            </div>
            <p className="mx-auto text-sm text-center text-slate-400">
                &copy; {new Date().getFullYear()} eCatlin. All rights reserved.
            </p>
        </footer>
    )
}