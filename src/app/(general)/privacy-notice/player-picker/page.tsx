import styles from "@/app/styles";
import Link from "next/link";

export default function PlayerPickerPrivacyNotice() {
    return (
        <main>
            <h1 className={styles.h1 + " text-center mb-20"}>Privacy Notice for Player Picker</h1>
            <p className="meta">
                Last updated: <time dateTime="2026-05-08">8th May 2026</time><br/>
                This notice explains
                how <Link href="/projects/player-picker" className={styles.link}>Player Picker</Link> handles
                information.
            </p>

            <h2 className={styles.termsH2}>1. Overview</h2>
            <p>
                Player Picker is a simple game utility app used to randomly pick a player from touch input.
                We designed the app to collect as little personal data as possible.
            </p>

            <h2 className={styles.termsH2}>2. Information We Collect</h2>
            <p>Player Picker does not require account signup and does not directly collect personal identity data like
                name, email, or phone number.</p>
            <p>Depending on app features, the following data may be processed:</p>
            <ul className="list-disc list-inside ml-5 mt-3 mb-3">
                <li><strong>App settings stored on your device:</strong> selected player colors, haptics preference, and
                    unlock state for premium features.
                </li>
                <li><strong>In-app purchase status:</strong> when purchase functionality is used, purchase/entitlement
                    data is processed through RevenueCat and app store providers (Apple/Google).
                </li>
                <li><strong>Basic technical data:</strong> app/platform services may process device or diagnostic
                    metadata needed to deliver purchases and app functionality.
                </li>
            </ul>

            <h2 className={styles.termsH2}>3. How We Use Information</h2>
            <ul className="list-disc list-inside ml-5 mt-3 mb-3">
                <li>To provide core app functionality (touch gameplay, winner selection, settings).</li>
                <li>To remember your app preferences on your device.</li>
                <li>To verify and restore paid feature access when applicable.</li>
            </ul>

            <h2 className={styles.termsH2}>4. In-App Purchases and Third Parties</h2>
            <p>
                Player Picker may use third-party services for in-app purchases and entitlement management, including:
            </p>
            <ul className="list-disc list-inside ml-5 mt-3 mb-3">
                <li>RevenueCat (<a href="https://www.revenuecat.com/privacy"
                                   target="_blank" rel="noopener noreferrer" className={styles.link}>Privacy
                    Policy</a>)
                </li>
                <li>Apple App Store / Google Play billing services</li>
            </ul>
            <p>
                These providers process transaction-related data under their own privacy terms.
            </p>

            <h2 className={styles.termsH2}>5. Data Storage and Retention</h2>
            <ul className="list-disc list-inside ml-5 mt-3 mb-3">
                <li>App preferences are primarily stored locally on your device.</li>
                <li>Purchase entitlements may be stored by third-party billing/entitlement providers to support restore
                    purchases.
                </li>
                <li>We keep only what is necessary to operate features described in this notice.</li>
            </ul>

            <h2 className={styles.termsH2}>6. Data Sharing</h2>
            <p>
                We do not sell personal information.
                Data is shared only with service providers needed to deliver app functionality (for example, purchase
                infrastructure).
            </p>

            <h2 className={styles.termsH2}>7. Children’s Privacy</h2>
            <p>
                Player Picker is not directed to children under 13 (or the equivalent age in your region).
                If you believe a child has provided personal information, contact us and we will address the issue
                promptly.
            </p>

            <h2 className={styles.termsH2}>8. Your Choices</h2>
            <ul className="list-disc list-inside ml-5 mt-3 mb-3">
                <li>You can stop using the app at any time.</li>
                <li>You can reset app data by uninstalling/reinstalling the app (local settings may be removed).</li>
                <li>You can manage subscriptions/purchases through your app store account settings.</li>
            </ul>

            <h2 className={styles.termsH2}>9. International Users</h2>
            <p>
                If you use the app outside your home country, your data may be processed in other countries by service
                providers.
            </p>

            <h2 className={styles.termsH2}>10. Changes to This Notice</h2>
            <p>
                We may update this Privacy Notice from time to time.
                Updated versions will be posted with a revised effective date.
            </p>

            <h2 className={styles.termsH2}>11. Contact</h2>
            <p>
                If you have privacy questions, contact: <strong>paul [@ this domain]</strong>
            </p>
        </main>
    )
}