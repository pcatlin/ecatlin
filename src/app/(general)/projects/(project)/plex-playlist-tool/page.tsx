import TechStack from "@/app/components/shared-features/TechStack";
import {projectMetadata, projects} from "@/app/projects";
import {Metadata} from "next";
import styles from "@/app/styles";

const slug = "plex-playlist-tool";

export function generateMetadata(): Metadata {
    return projectMetadata(slug);
}

export default function PlexPlaylistTool() {
    const {tech} = projects[slug] || null;

    return (
        <article>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <img
                    src="/images/plex-playlist-tool/logo.png"
                    alt="Plex Playlist Tool logo"
                    width={192}
                    height={192}
                    className="rounded-3xl shadow-lg"
                />
                <h1 className="text-4xl font-bold text-orange-500 text-center">Plex Playlist Tool</h1>
            </div>

            <h2 className={styles.h2} id="what-is-it">What is Plex Playlist Tool?</h2>
            <p>
                If you manage a large music library in Plex, you already know the gap between <em>having</em> music and{" "}
                <em>organizing</em> it into playlists. Plex is excellent at playback and library management, but
                assembling playlists from scattered sources—your own ratings, Spotify discoveries, spreadsheet exports, or
                a vague mood in your head—can be slow and repetitive.
            </p>
            <p>
                <strong>Plex Playlist Tool</strong> is a self-hosted web app that sits beside your Plex server and focuses
                on one job: find tracks, match them to your library, and drop them into Plex playlists quickly. The
                interface is a simple two-column layout: candidate tracks on the left, your Plex playlists on the right.
                Everything else—search, imports, matching, keyboard shortcuts, and drag-and-drop—is built to keep you in
                flow.
            </p>
            <p>
                You run it on your own hardware (or via Docker), connect Plex once, and optionally wire up Spotify and
                OpenAI. Your tokens and settings stay in a local SQLite database, not in a third-party cloud service for
                playlist editing.
            </p>

            <h2 className={styles.h2} id="plex-search">Plex Search</h2>
            <p>
                The <strong>Plex Search</strong> tab is the starting point when you already know what you want—or roughly
                what you want—from your own library. You can filter by artist, track name, minimum star rating, or
                unrated tracks only. Results come straight from your Plex music library, so every row you see is a real
                track you can add to a playlist immediately.
            </p>
            <p>
                Search is designed for incremental refinement rather than one-shot perfection. Maybe you remember the
                artist but not the exact title, or you want everything by a band above three stars. The app issues
                targeted Plex queries instead of loading your entire library into the browser, which keeps the experience
                responsive even on large collections.
            </p>
            <p>
                Because search results are native Plex tracks, there is no &quot;matching&quot; step: what you select is
                what you get. That makes this tab ideal for curating from your existing ratings and metadata, or for
                cleaning up playlists when you already know the recordings live in your library.
            </p>

            <h2 className={styles.h2} id="spotify-matching">Spotify playlist matching</h2>
            <p>
                Many people discover music on Spotify but listen on Plex. The <strong>Spotify</strong> tab closes that
                gap. After you connect a Spotify API application in Settings, you can load playlists you own or
                collaborate on, paste a public playlist link, and import the track list into the app.
            </p>
            <p>
                The important detail is how matching works. Tracks appear in the list right away with a &quot;checking
                Plex&quot; state, and the app matches each row to your Plex library in the background—several at a
                time—using exact search first and a wider fuzzy match when needed. You see progress as rows resolve, can
                stop matching mid-run, and only Plex-confirmed tracks can be selected for playlist actions. Rows that
                never match stay visible so you know what is missing from your library.
            </p>
            <p>
                Spotify&apos;s API limits which playlists you can read; followed playlists you do not own may not load.
                The UI explains that case and nudges you toward owned playlists, duplicates, or public URLs. For many
                users, this tab alone replaces hours of manual &quot;Spotify → search Plex → add&quot; repetition.
            </p>

            <h2 className={styles.h2} id="ai-suggestions">AI suggestions</h2>
            <p>
                The <strong>AI suggestions</strong> tab is for when you have a vibe, theme, or occasion in mind but not
                a ready-made track list. You describe the playlist you want in plain language—for example, &quot;10 tracks
                for a late-night drive with synthwave and electronic grooves.&quot; Optionally, a random-prompt button
                fills the text area with a curated example so you can explore without staring at a blank box.
            </p>
            <p>
                When you click <strong>Generate</strong>, the app sends your prompt to OpenAI (configured with{" "}
                <strong>GPT-4.1 mini</strong> in Settings) and asks for a structured list of artist and title pairs.
                Those suggestions land in the track list immediately; Plex matching then runs asynchronously, the same
                way as Spotify imports. You get creative breadth from the model and library accuracy from Plex.
            </p>
            <p>
                Unmatched suggestions remain visible but cannot be selected, so you always know what Plex could not
                resolve.
            </p>

            <h2 className={styles.h2} id="csv-import">CSV import</h2>
            <p>
                Not every track list lives in Spotify or in your head. The <strong>CSV</strong> tab imports spreadsheets
                with <strong>artist</strong> and <strong>track name</strong> columns. A downloadable template keeps the
                format obvious, and the file picker is built for real-world exports from Excel, Numbers, or other
                tools—including encodings like UTF-8, Windows-1252, and Mac Roman so apostrophes and accents survive
                import.
            </p>
            <p>
                As with Spotify and AI suggestions, parsing is fast and Plex matching is async. You are not stuck waiting
                for the entire library to be scanned before seeing a single row. Legacy column names such as{" "}
                <code className="text-accent">track title</code> still work for older files.
            </p>
            <p>
                CSV import is ideal for sharing lists between people, migrating from other tools, or batch-building
                playlists from charts, radio logs, or concert setlists without retyping metadata.
            </p>

            <h2 className={styles.h2} id="playlist-workflow">Playlist workflow</h2>
            <p>
                The right-hand <strong>playlist panel</strong> is where tracks become playlists. You can open multiple
                Plex playlists side by side, see track counts, and spot duplicates highlighted when the same title and
                artist appear more than once.
            </p>
            <p>
                On the left, multi-select works with click, shift-range selection, and select-all that respects only
                Plex-matched rows on import tabs. Keyboard shortcuts add selected tracks to the first ten loaded playlists
                (<code className="text-accent">A</code> through <code className="text-accent">J</code>), rate the
                selection with <code className="text-accent">0</code>–<code className="text-accent">5</code> (zero clears
                the rating), and support efficient playlist building without constant mouse travel. Drag-and-drop lets
                you drop one or many tracks onto a playlist; the drag preview lists up to four titles plus an overflow
                line when you move a large selection.
            </p>
            <p>
                Inside a playlist, you can reorder tracks, remove items, copy or move tracks to another playlist (Shift
                influences move vs copy on cross-playlist drops), create new playlists, and preview playback via Plexamp
                when configured. Export a playlist as CSV or a ZIP bundle for backup or use outside Plex.
            </p>
            <p>
                Each source tab—search, Spotify, AI, CSV—remembers its own track list and selection when you switch tabs,
                so you can compare sources without losing your place.
            </p>

            <h2 className={styles.h2} id="settings-privacy-deploy">Settings, privacy, and deploy</h2>
            <p>
                Setup is intentionally local. <strong>Sign in with Plex</strong> uses Plex&apos;s official pin flow;
                tokens are stored on your server in SQLite under a <code className="text-accent">data</code> directory
                that should never be committed to git. Spotify uses a standard OAuth redirect to your instance. The
                OpenAI API key is optional and stored server-side like other secrets—only a &quot;key is saved&quot; flag
                is shown in the UI.
            </p>
            <p>
                A published <strong>Docker</strong> image supports <code className="text-accent">linux/amd64</code> and{" "}
                <code className="text-accent">linux/arm64</code>, with Compose pulling a prebuilt image or building from
                source. In development, the Vue frontend and FastAPI backend run separately with hot reload; production
                serves the built UI from the API container on port 8000.
            </p>
            <p>
                The project is open source under the MIT license, with unit tests on the backend (pytest), and frontend
                tests (Vitest and Playwright) covering matching logic, playlist operations, and core UI flows.
            </p>

            <h2 className={styles.h2} id="who-is-it-for">Who is it for?</h2>
            <p>
                Plex Playlist Tool is for home listeners and collectors who treat Plex as the source of truth but still
                discover music elsewhere—or want help brainstorming lists. It does not replace Plex&apos;s player or
                server administration; it makes playlist <em>assembly</em> faster, more accurate, and more pleasant.
            </p>
            <p>
                Clone the repo or pull the Docker image, point it at your library, and spend less time searching and more
                time listening.
            </p>

            <TechStack tech={tech} />
        </article>
    );
}
