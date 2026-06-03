import TechStack from "@/app/components/shared-features/TechStack";
import {projectMetadata, projects} from "@/app/projects";
import {Metadata} from "next";
import styles from "@/app/styles";

const slug = "sweepstake-genius";

export function generateMetadata(): Metadata {
    return projectMetadata(slug);
}

export default function SweepstakeGenius() {
    const {tech} = projects[slug] || null;

    return (
        <article>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <img
                    src="/images/sweepstake-genius/logo.png"
                    alt="Sweepstake Genius logo"
                    width={192}
                    height={192}
                    className="rounded-3xl shadow-lg"
                />
                <h1 className="text-4xl font-bold text-orange-500 text-center">Sweepstake Genius</h1>
            </div>

            <h2 className={styles.h2} id="what-is-it">What is Sweepstake Genius?</h2>
            <p>
                <strong>Sweepstake Genius</strong> is a free web app for running a{" "}
                <strong>FIFA World Cup 2026 team sweepstake</strong> with friends, family, or colleagues. No accounts,
                no spreadsheets, and no arguing over who got Brazil—you get a private link, add names, run a fair random
                draw, and follow the tournament with a full fixture list and prize breakdown.
            </p>
            <p>
                Live at{" "}
                <a href="https://www.sweepstakegenius.com" className={styles.link} target="_blank">
                    sweepstakegenius.com
                </a>
                .
            </p>

            <h2 className={styles.h2} id="what-it-does">What it does</h2>
            <p>
                You create a sweepstake in one click, set how much
                each <strong> team </strong> costs and how prize money
                is split, add everyone&apos;s names (and how many teams each person wants), then run the draw once. Every
                participant is assigned World Cup teams at random. After the draw, the same link shows results, stakes,
                the match schedule, and who is still in the money as the tournament progresses.
            </p>
            <p>
                Draw links last about <strong>three months</strong>, then expire and are removed from the database
                automatically.
            </p>

            <h2 className={styles.h2} id="ready-in-seconds">Ready in seconds</h2>
            <p>
                There is no sign-up flow. Tap <strong>Create your sweepstake</strong> on the homepage and you immediately
                get a private URL (<code className="text-accent">/d/…</code>) to drop into WhatsApp or your group chat.
                Setup, adding people, and running the draw all happen on that one page—nothing to install and nothing for
                mates to register for before they can see the pot and the teams.
            </p>

            <h2 className={styles.h2} id="fair-team-draw">Fair team draw</h2>
            <p>
                Each person chooses how many teams they want (for example &quot;up to 2 teams&quot;). When you{" "}
                <strong>Start the draw</strong>, all <strong>48 World Cup teams</strong> are assigned randomly according
                to those preferences, so the split is transparent and the same for everyone in the group. The results
                screen lists who drew which nation, with flags and names, so there is no manual hat-pulling or disputed
                spreadsheets.
            </p>

            <h2 className={styles.h2} id="flexible-prize-pots">Flexible prize pots</h2>
            <p>
                You set a <strong>cost per team</strong> and pick a prize structure: winner takes all, top three, final
                four, knockout-round pools, and more. Sliders adjust how the pot is divided in whole currency amounts,
                with a live total so the group can see stakes and payouts before anyone pays in. Currency can be changed
                in setup (GBP, USD, EUR, and other common options), with amounts formatted for your locale.
            </p>

            <h2 className={styles.h2} id="match-schedule">Full match schedule</h2>
            <p>
                After the draw, the app includes the <strong>complete World Cup 2026 schedule</strong>—every group match
                and knockout fixture. Tap a <strong>team</strong> or a <strong> participant </strong> to filter the list
                and see only games involving those sides or that person&apos;s teams, which makes it easy to answer
                &quot;who is still in the money?&quot; as results come in. The layout is built for phones as well as
                desktop, with fixtures shown clearly on small screens.
            </p>

            <h2 className={styles.h2} id="easy-to-share">Easy to share</h2>
            <p>
                The sweepstake lives on a single shareable link. On the results page you can use the device{" "}
                <strong>Share</strong> button, open <strong>WhatsApp</strong> with the link pre-filled, or{" "}
                <strong>copy</strong> the URL. Because everything is web-based, anyone with the link can view the draw
                and schedule without installing an app—ideal for office pools and friend groups spread across different
                phones.
            </p>

            <TechStack tech={tech} />
        </article>
    );
}
