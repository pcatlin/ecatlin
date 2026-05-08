import {ReactNode} from "react";

export default function PrivacyNoticeLayout({children}: { children: ReactNode }) {
    return (
        <main className="text-lg mb-20">
            <div className="max-w-7xl mx-auto p-8">
                {children}
            </div>
        </main>
    )
}