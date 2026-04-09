import Tech from "@/app/components/Tech";
import Link from "next/link";
import SavingsCalculatorFeature from "@/app/components/SavingsCalculatorFeature";

export default function CustardApp() {
    const h2_classes = "text-orange-500 font-bold text-3xl mt-30 mb-10"

    return (
        <article>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <img src="/images/custard-app/app-logo.webp"
                     alt="Custard app logo"
                     width="150" height="150"
                     className="rounded-3xl shadow-lg"
                />
                <h1 className="text-4xl font-bold text-orange-500 text-center">Custard Gift Cards App</h1>
            </div>

            <h2 className={h2_classes} id="what-is-it">What is it?</h2>
            <p>
                The Custard Gift Cards app is a React Native Expo based app for iOS and Android devices.
                It allows users to buy gift cards and earn a percentage of cashback, which gets applied
                to their custard account.  When users earn over £10 they can cash out this money!
            </p>

            <p>The backend for the app is the same Python platform that also powers
                the <Link href="/projects/custard" className="text-accent">Custard website</Link>, with many new endpoints added just
                for the app. With pretty much all logic handled by the backend.</p>

            <SavingsCalculatorFeature/>

            <h2 className={h2_classes} id="tech-stack">Tech Stack</h2>
            <div className="flex flex-wrap gap-x-2 gap-y-3">
                <Tech name="React Native" stackType="frontend"/>
                <Tech name="Expo" stackType="backend"/>
                <Tech name="Figma" stackType="tools"/>
                <Tech name="Jest" description="Testing" stackType="tools"/>
                <Tech name="Maestro" stackType="tools"/>
                <Tech name="TypeScript" stackType="frontend"/>
                <Tech name="NPM" stackType="infrastructure"/>
                <Tech name="Sentry" stackType="tools"/>
                <Tech name="API" stackType="backend"/>
                <Tech name="Stripe" stackType="backend"/>
                <Tech name="TrueLayer" stackType="backend"/>
                <Tech name="React Query" stackType="frontend"/>
                <Tech name="OneSignal" stackType="frontend"/>
            </div>
        </article>
    )
}
