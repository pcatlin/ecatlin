import Link from "next/link";
import styles from "@/app/styles";

export default function Header() {
    return (
        <header className="py-5 text-orange-400 bg-linear-to-b from-slate-900 to-sky-950">
            <div className={styles.container}>
                <Link href="/">
                    <h2 className="text-4xl font-semibold py-2 mb-5 tracking-tight ">
                        e<span className="text-5xl">C</span>atlin<span className="text-2xl text-orange-500/75">.com</span>
                    </h2>
                </Link>
            </div>
        </header>
    )
}