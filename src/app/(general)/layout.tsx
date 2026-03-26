import React, {ReactNode} from "react"
import "@/app/globals.css"
import Header from "@/app/components/Header"

export default function GeneralLayout({children}: Readonly<{ children: ReactNode; }>) {
    return (
        <>
            <Header/>
            <div className="grow">
                {children}
            </div>
        </>
    )
}