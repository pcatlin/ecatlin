import React, {ReactNode} from "react"
import "@/app/globals.css"
import Header from "@/app/components/Header"
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function GeneralLayout({children}: Readonly<{ children: ReactNode; }>) {
    return (
        <>
            <Header/>
            <Breadcrumbs/>
            <div className="grow">
                {children}
            </div>
        </>
    )
}