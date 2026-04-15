import HomeCarousel from "@/app/components/HomeCarousel";
import RecentProjects from "@/app/components/RecentProjects";
import Link from "next/link";
import styles from "@/app/styles";

export default function Home() {
    return (
        <main className="grow pt-8">
            <section className="mx-5 text-center mb-15">
                <h1 className="flex flex-col text-5xl text-orange-500">Paul Catlin
                    <span className="font-light text-3xl">Projects and Rememberings</span>
                </h1>
            </section>

            <section className="mx-5 mb-15">
                <div className="mx-auto max-w-7xl">
                    <div className="flex gap-5 items-center flex-col lg:flex-row">
                        <HomeCarousel/>
                        <div className="flex flex-col text-xl">
                            <p>How’s it going? <span className="ps-2 text-2xl font-bold">I’m Paul.</span></p>
                            <p>Welcome to a collection of my favourite projects with notes on how they were
                                achieved!</p>
                            <p>I’m always learning, experimenting and looking for better ways to build.
                                This space will keep evolving along with me.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-300 px-5 py-10">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-sky-950 font-bold text-center text-3xl mb-10">Recent Projects</h2>
                    <RecentProjects/>
                    <Link href="/projects"
                          className={styles.button}>
                        All Projects
                        <i className="fa fa-chevron-right ml-3"></i>
                    </Link>
                </div>
            </section>

            {/*<section className="mb-15">*/}
            {/*    <TopTips/>*/}
            {/*</section>*/}
        </main>
    );
}
