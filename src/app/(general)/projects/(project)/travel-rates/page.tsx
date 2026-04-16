import {projectMetadata, projects} from "@/app/projects";
import TechStack from "@/app/components/shared-features/TechStack";
import {Metadata} from "next";
import styles from "@/app/styles";

const slug = "travel-rates";

export function generateMetadata(): Metadata {
    return projectMetadata(slug)
}

export default function TravelRates() {
    const {tech} = projects[slug] || null

    return (
        <article>
            <div className="flex justify-center">
                <img src="/images/travel-rates/travel-rates.png"
                     className="rounded-lg"
                     alt="Travel Rates - FREE quick currency cheatsheet"
                     width="984" height="366"
                />
            </div>

            <h1 className={styles.h2} id="what-is-it">What is the Travel Rates App?</h1>
            <p>
                Travel Rates is a free React Native (Expo) app for Android and iOS that shows you exchange rate
                conversions from one currency to another.
            </p>
            <p>
                It shows a handy cheatsheet table of common values, and also lets you type in or drag the slider to
                quickly find out how much the value would cost in your home currency.
            </p>

            <h2 className={styles.h2} id="resilient-data">Resilient Data</h2>
            <p>
                The exchange-rate data flow in Travel Rates is designed to be both resilient and fast.
                When a user picks currencies, the app first checks local cache before making any network request.
                This means the app can often return a conversion immediately, without waiting on the internet.
                Cached data is keyed by the base currency code (for example, gbp), so each base currency
                keeps its own stored rate set.
            </p>
            <p>
                If cached data exists, the app checks its freshness using the payload’s date field. The cache policy
                is roughly one day: if the stored rates are newer than the previous day’s midnight threshold, those
                values are reused. That keeps conversions quick while still preventing stale data from hanging around
                too long. If the cache is missing or expired, the app fetches fresh data from the API and then stores
                it locally for future lookups.
            </p>
            <p>
                Live fetching uses a small fallback strategy. It tries the jsDelivr-hosted endpoint first, then falls
                back to latest.currency-api.pages.dev if needed. Both URLs are built with the selected base currency and
                include a short timestamp query (?d=...) so requests are refreshed regularly. Once a successful
                response arrives, the JSON is parsed and handed back to storage logic, which saves it and returns
                the exact rate pair the UI needs.
            </p>
            <p>
                This approach gives the app a practical balance: local-first responsiveness, automatic refresh when
                data ages out, and multi-endpoint failover for reliability. In everyday use, users get near-instant
                conversions from cache, while still benefiting from regularly updated rates from the remote API source.
            </p>


            <h2 className={styles.h2} id="speedy-slider">Speedy Slider</h2>
            <p>
                The quick-convert slider is built to make exchange-rate checking feel instant. Instead of typing values
                over and over, users can drag the control and immediately see converted amounts update on screen.
                The slider and text input are connected to the same value, so both interaction styles stay in sync:
                <strong>drag for speed, type for precision</strong>.
            </p>
            <p>
                Under the hood, the app scales the slider range to the selected currencies by using a multiplier and
                dynamic step sizes. That means smaller-value currencies get fine-grained movement, while large-value
                currencies can still jump quickly through meaningful ranges. The result is a control that feels
                responsive no matter which currency pair is selected.
            </p>
            <video src="/images/travel-rates/slider-recording.mp4"
                   preload="metadata" playsInline loop muted autoPlay
                   width="340" height="108"
                   className="rounded-xl mx-auto my-5"
            />
            <p>
                As the value changes, the app recalculates both directions of the conversion in real time and formats
                output using the device locale. This makes the feature useful for rapid “what if” checks: users can
                scrub through amounts, compare both sides of the rate, and get readable currency output without
                extra taps.
            </p>

            <TechStack tech={tech}/>
        </article>
    )
}