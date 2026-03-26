import type {Metadata} from "next"
import React, {ReactNode} from "react"
import {Analytics} from "@vercel/analytics/next"
import {Geist, Geist_Mono} from "next/font/google"
import Script from "next/script";
import "./globals.css"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "eCatlin",
    description: "Showcasing the projects and work of Paul Catlin, along with some top tips along the way",
}

export default function RootLayout({children}: Readonly<{ children: ReactNode; }>) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col">
        <Script src="https://kit.fontawesome.com/aaef8f0e02.js" crossOrigin="anonymous" strategy="beforeInteractive"></Script>
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <div className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between p-8 sm:items-start">
                <Header/>
                {children}
                <Footer/>
            </div>
        </div>
        <Analytics/>
        </body>
        </html>
    )
}
