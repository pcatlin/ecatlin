import FeaturedProjects from "@/app/components/FeaturedProjects";
import HomeCarousel from "@/app/components/HomeCarousel";
import JsonLd from "@/app/components/JsonLd";
import RecentProjects from "@/app/components/RecentProjects";
import {PERSON_SAME_AS, SITE_DESCRIPTION, SITE_NAME, SITE_URL} from "@/app/site";
import type {Metadata} from "next";
import Link from "next/link";
import styles from "@/app/styles";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Paul Catlin — Software Engineer",
    description: SITE_DESCRIPTION,
    alternates: {
        canonical: "/",
    },
};

const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            name: SITE_NAME,
            url: SITE_URL,
            description: SITE_DESCRIPTION,
            inLanguage: "en-GB",
            author: {"@id": `${SITE_URL}/#person`},
        },
        {
            "@type": "Person",
            "@id": `${SITE_URL}/#person`,
            name: "Paul Catlin",
            url: SITE_URL,
            jobTitle: "Software Engineer",
            description: SITE_DESCRIPTION,
            sameAs: [...PERSON_SAME_AS],
        },
        {
            "@type": "WebPage",
            "@id": `${SITE_URL}/#webpage`,
            url: SITE_URL,
            name: "Paul Catlin — Software Engineer",
            description: SITE_DESCRIPTION,
            isPartOf: {"@id": `${SITE_URL}/#website`},
            about: {"@id": `${SITE_URL}/#person`},
            inLanguage: "en-GB",
        },
    ],
};

export default function Home() {
    return (
        <main className="grow pt-8">
            <JsonLd data={homeJsonLd}/>
            <section className="mx-5 text-center mb-15">
                <h1 className="flex flex-col text-5xl text-orange-500">Paul Catlin
                    <span className="font-light text-3xl">Software Engineer</span>
                </h1>
            </section>

            <section className="mx-5 mb-15">
                <div className="mx-auto max-w-7xl">
                    <div className="flex gap-5 items-center flex-col lg:flex-row">
                        <HomeCarousel/>
                        <div className="flex flex-col text-xl">
                            <p>I build and maintain production web applications using React, TypeScript and modern
                                full-stack tools, with a focus
                                on <strong>performance</strong>, <strong>accessibility</strong> and <strong>clean
                                    system design</strong>.
                            </p>

                            <p>
                                This site includes selected software engineering projects alongside creative and
                                personal
                                work that explores photography, experimentation and other interests.
                            </p>

                            <p>
                                I’m always learning, building and refining how I approach both software and
                                problem-solving.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <FeaturedProjects/>

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
