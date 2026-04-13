import Link from "next/link";

export default function Header() {
    return (
        <header>
            <Link href="/"><h2 className="text-3xl font-semibold p-2 leading-10 tracking-tight text-black dark:text-zinc-50">
                eCatlin
            </h2></Link>
        </header>
    )
}