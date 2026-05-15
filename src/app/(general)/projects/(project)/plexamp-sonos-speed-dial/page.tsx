import TechStack from "@/app/components/shared-features/TechStack";
import {projectMetadata, projects} from "@/app/projects";
import {Metadata} from "next";
import styles from "@/app/styles";

const slug = "plexamp-sonos-speed-dial";

export function generateMetadata(): Metadata {
    return projectMetadata(slug);
}

export default function PlexampSonosSpeedDial() {
    const {tech} = projects[slug] || null;

    return (
        <article>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <img
                    src="/images/plexamp-sonos-speed-dial/logo.png"
                    alt="Plexamp Sonos Speed Dial logo"
                    width={192}
                    height={192}
                    className="rounded-3xl shadow-lg"
                />
                <h1 className="text-4xl font-bold text-orange-500 text-center">Plexamp Sonos Speed Dial</h1>
            </div>

            <h2 className={styles.h2} id="what-is-it">What is Plexamp Sonos Speed Dial?</h2>
            <p>
                A self-hosted web app for a very specific home-audio workflow: browse your Plex music library, start
                playback on <strong>Plexamp headless</strong> players, and route that audio to <strong>Sonos</strong>{" "}
                speakers over <strong>Line-In</strong>—so you get Plexamp&apos;s crossfades and queue behaviour on real
                Sonos hardware without Plexamp&apos;s casting UI.
            </p>
            <p>
                The stack is API-first (FastAPI + OpenAPI), with a React single-page UI served behind nginx in Docker.
                Configuration (Plex URL, OAuth token, Sonos discovery, per-player line-in) lives in Postgres and is
                edited through an in-app <strong>Setup</strong> modal.
            </p>

            <h2 className={styles.h2} id="plexamp-sonos-line-in">Plexamp → Sonos via Line-In</h2>
            <p>
                Each Plexamp player can be bound to a Sonos speaker that exposes Line-In. On play, the backend
                coordinates Plexamp&apos;s companion HTTP API (queue creation, play/pause/skip) with Sonos control
                (switch input, group speakers, volume). You can also target Plexamp only and skip Sonos routing.
            </p>

            <h2 className={styles.h2} id="pick-music-browsing">Flexible &quot;pick music&quot; browsing</h2>
            <p>
                Play from playlists, albums, artists, individual tracks, or a <strong>random album</strong> drawn from
                a Plex collection. Artist playback supports <strong>artist radio</strong> (station) vs library-only
                tracks. Playlist and artist flows support <strong>shuffle</strong>. Track preview loads up to 50 tracks
                with client and server timeouts so huge playlists do not hang the API.
            </p>

            <h2 className={styles.h2} id="speed-dial-favorites">Speed dial favorites</h2>
            <p>
                Save any current pick (media type, IDs, player, speakers, shuffle/radio flags) as a one-tap{" "}
                <strong>speed dial</strong> button with cover art. Replay or delete favorites from the main screen
                without re-navigating the library.
            </p>

            <h2 className={styles.h2} id="play-to">Play to: speakers, players, and presets</h2>
            <p>
                A collapsible <strong>Play to</strong> section lists Sonos speakers and Plexamp players in selectable
                grids (with visual selection state). <strong>Group presets</strong> store named multi-speaker Sonos
                groups. Speaker selection persists in <code className="text-accent">localStorage</code> across reloads.
            </p>

            <h2 className={styles.h2} id="live-playback-controls">Live playback controls</h2>
            <p>
                Sticky bottom <strong>control rail</strong>: play, pause, stop, skip, volume up/down for the active
                Plexamp player and grouped Sonos targets. Playback state can be polled or streamed over a{" "}
                <strong>WebSocket</strong> for near-real-time UI updates.
            </p>

            <h2 className={styles.h2} id="setup-and-plex-auth">Setup and Plex auth</h2>
            <p>
                Browser <strong>Plex OAuth</strong> (PIN flow) with server URL, TLS verification toggle, and
                connectivity test. Multiple Plexamp players are registered by host. Sonos discovery supports{" "}
                <strong>seed IPs</strong> when SSDP does not work (typical in Docker). Credits and diagnostics live in
                Setup and a separate credits route.
            </p>

            <h2 className={styles.h2} id="pwa-deploy">PWA and Cloudflare Access–friendly deploy</h2>
            <p>
                The UI is built as a <strong>progressive web app</strong> (manifest + service worker). A Vite plugin{" "}
                <strong>inlines the web manifest</strong> as a data URL so protected deployments (e.g. Cloudflare Access)
                are not broken by a separate <code className="text-accent">/manifest.webmanifest</code> redirect to
                login. nginx proxies <code className="text-accent">/api</code> to the API container with tuned timeouts
                for slow Plex responses. Multi-arch images are published on Docker Hub as{" "}
                <code className="text-accent">paulcatlin/plexamp-speed-dial-api</code> and{" "}
                <code className="text-accent">paulcatlin/plexamp-speed-dial-web</code>.
            </p>
            <p>
                Integrations use{" "}
                <a href="https://github.com/pkkid/python-plexapi" className={styles.link}>
                    python-plexapi
                </a>{" "}
                (Plex Media Server) and{" "}
                <a href="https://github.com/SoCo/SoCo" className={styles.link}>
                    SoCo
                </a>{" "}
                (Sonos).
            </p>

            <TechStack tech={tech} />
        </article>
    );
}
