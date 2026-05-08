import {projects} from "@/app/projects";
import Link from "next/link";
import styles from "@/app/styles";

export default function PrivacyNotice() {
    const projectsWithPrivacyNotice = Object.entries(projects).filter(([, project]) => project.privacyNotice)

    return (
        <main>
            <h1 className={styles.h1 + " text-center mb-4"}>Privacy Notices</h1>
            {projectsWithPrivacyNotice.length === 0 ? (
                <p>No projects have a privacy notice.</p>
            ) : (
                <ul className="list-disc list-inside ml-5">
                    {projectsWithPrivacyNotice.map(([slug, project]) => (
                        <li key={slug} className="mb-2">
                            <Link href={'/privacy-notice/' + slug}
                                  className={styles.linkSubtle}>
                                {project.name} privacy notice
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </main>
    )
}