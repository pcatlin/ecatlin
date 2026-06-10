import type {Metadata} from "next"
import React, {ReactNode} from "react"
import {Analytics} from "@vercel/analytics/next"
import {Geist, Geist_Mono} from "next/font/google"
import Script from "next/script";
import "./globals.css"
import Footer from "@/app/components/Footer";
import {SITE_DESCRIPTION, SITE_NAME, SITE_URL} from "@/app/site";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "Paul Catlin — Software Engineer",
        template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    alternates: {
        canonical: "/",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    openGraph: {
        siteName: SITE_NAME,
        type: "website",
        locale: "en_GB",
        url: SITE_URL,
        title: "Paul Catlin — Software Engineer",
        description: SITE_DESCRIPTION,
        images: [{url: "/icon.png", alt: SITE_NAME}],
    },
    twitter: {
        card: "summary",
        title: "Paul Catlin — Software Engineer",
        description: SITE_DESCRIPTION,
        images: ["/icon.png"],
    },
}

export default function RootLayout({children}: Readonly<{ children: ReactNode; }>) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <body className="font-sans bg-sky-950 text-slate-300">
        <Script src="https://kit.fontawesome.com/aaef8f0e02.js" crossOrigin="anonymous" strategy="beforeInteractive"></Script>
        <div className="flex flex-col flex-1 min-h-svh">
            {children}
            <Footer/>
        </div>
        <Analytics/>
        </body>
        </html>
    )
}
