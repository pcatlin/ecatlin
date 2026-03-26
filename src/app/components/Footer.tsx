import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="w-full flex flex-col items-center justify-center gap-10 text-gray-200">
            <div className="w-full flex justify-around gap-10">
                <div className="flex flex-col items-center justify-center gap-3">
                    <h2 className="font-display text-3xl text-gray-300">eCatlin</h2>
                    <ul className="flex gap-1">
                        <li><a href="https://www.linkedin.com/in/paul-catlin-62a7983b6/"><i className="fa-brands fa-linkedin text-2xl"></i></a></li>
                        <li><a href="https://github.com/pcatlin"><i className="fa-brands fa-github text-2xl"></i></a></li>
                        <li><a href="https://www.youtube.com/@pcatlin"><i className="fa-brands fa-youtube text-2xl"></i></a></li>
                    </ul>
                </div>
                <ul className="flex flex-col">
                    <li className="mb-3"><h2 className="font-bold uppercase tracking-wider text-gray-300">Projects</h2></li>
                    <li><Link href='/projects/cashback'>Cashback</Link></li>
                    <li><Link href='/projects/custard'>Custard</Link></li>
                    <li><Link href='/projects/ohmydosh'>OhMyDosh</Link></li>
                    <li><Link href='/projects'>See All</Link></li>
                </ul>
                {/*<ul className="flex flex-col">*/}
                {/*    <li><h2>Top Tips</h2></li>*/}
                {/*    <li></li>*/}
                {/*    <li></li>*/}
                {/*    <li></li>*/}
                {/*</ul>*/}
                <ul className="flex flex-col">
                    <li className="mb-3"><h2 className="font-bold uppercase tracking-wider text-gray-300">Sites</h2></li>
                    <li><a href="https://www.travel-rates.com">Travel Rates</a></li>
                    <li><a href="https://www.tickitreminders.com">TickIt Reminders</a></li>
                </ul>
            </div>
            <p className="text-sm text-center text-gray-500">
                &copy; {new Date().getFullYear()} eCatlin. All rights reserved.
            </p>
        </footer>
    )
}