import Tech from "@/app/components/Tech";
import Link from "next/link";

export default function OhMyDosh() {
    const h2_classes = "text-orange-500 font-bold text-3xl mt-30 mb-10"

    return (
        <article>
            <div className="flex items-center justify-center gap-5">
                <img src="/images/ohmydosh/omd-logo.svg"
                     alt="OhMyDosh logo"
                     width="300" height="50"
                     className="bg-white p-3 rounded-xl"
                />
            </div>

            <h2 className={h2_classes} id="what-was-it">What was OhMyDosh</h2>
            <p>
                OhMyDosh was very similar
                to <Link href="/projects/custard" className="text-accent">Custard</Link> (but came first).
                OhMyDosh was a website that gave the user
                cashback for taking offers and signing up for subscriptions and stuff.
                It never offered as many useful offers as other sites like
                TopCashback or Quidco. Mostly gambling and Amazon Prime Video offers which was probably why it
                was doomed.
            </p>

            <h2 className={h2_classes} id="tech-stack">Tech Stack</h2>

            <div className="flex flex-wrap gap-x-2 gap-y-3">
                <Tech name="React" stackType="frontend"/>
                <Tech name="Next.js" stackType="frontend"/>
                <Tech name="TypeScript" stackType="frontend"/>
                <Tech name="JavaScript" stackType="frontend"/>
                <Tech name="HTML" stackType="frontend"/>
                <Tech name="SCSS" stackType="frontend"/>
                <Tech name="CSS" stackType="frontend"/>
                <Tech name="PHP" stackType="backend"/>
                <Tech name="MySQL" stackType="backend"/>
                <Tech name="Docker" stackType="infrastructure"/>
                <Tech name="Kubernetes" stackType="infrastructure"/>
                <Tech name="npm" stackType="infrastructure"/>
                <Tech name="Node" stackType="backend"/>
                <Tech name="Git" description="Version Control" stackType="infrastructure"/>
                <Tech name="GitHub" description="Cloud Version Control" stackType="infrastructure"/>
                <Tech name="GitHub Actions" stackType="infrastructure"/>
                <Tech name="Tailwind" stackType="frontend"/>
                <Tech name="Font Awesome" stackType="tools"/>
                <Tech name="Swiper" stackType="frontend" description="JS Carousels"/>
            </div>
        </article>
    )
}