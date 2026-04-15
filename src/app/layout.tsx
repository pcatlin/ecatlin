import type {Metadata} from "next"
import React, {ReactNode} from "react"
import {Analytics} from "@vercel/analytics/next"
import {Geist, Geist_Mono} from "next/font/google"
import Script from "next/script";
import "./globals.css"
import Footer from "@/app/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    metadataBase: new URL("https://www.ecatlin.com"),
    title: "eCatlin",
    description: "Showcasing the projects and work of Paul Catlin, along with some top tips along the way",
    openGraph: {
        siteName: "eCatlin",
        type: "website",
    },
    twitter: {
        card: "summary",
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
