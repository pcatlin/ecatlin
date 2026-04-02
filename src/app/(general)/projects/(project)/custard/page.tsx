import Tech from "@/app/components/Tech";
import {CodeBlock} from "@/app/components/CodeBlock";

export default function Custard() {
    const h2_classes = "text-orange-500 font-bold text-3xl mt-30 mb-10"

    return (
        <article>
            <div className="flex items-center justify-center gap-5">
                <img src="/images/custard/custard-logo.svg"
                     alt="Custard logo"
                     width="300" height="50"
                     className="bg-white p-3 rounded-xl"
                />
            </div>

            <h2 className={h2_classes}>What is Custard</h2>

            <p>
                Custard (joincustard.co.uk) is a modern cashback and rewards site that allows users to earn money
                through shopping, surveys, playing games, and completing &quot;RapidPay&quot; tasks (which payout faster
                than other offers). It acts as an aggregator of affiliate offers, presenting them in a highly
                categorised, user-friendly interface.
            </p>

            <h2 className={h2_classes}>Accessible keyboard navigation</h2>

            <p>The site is easily usable by a keyboard. A User can tab through the menu and the hover only
                popup opens due to the handy `:focus-visible` selector. This lets you tab through the menu
                and it&#39;s child list of links.</p>

            <CodeBlock lang="css">{`
    .dropdown-container {
        display:none;
    }
    
    .has-dropdown:focus-within .dropdown-container,
    .has-dropdown:hover .dropdown-container {
        display: flex;
    }
                    `}</CodeBlock>

            <h2 className={h2_classes}>Tech Stack</h2>

            <div className="flex flex-wrap gap-x-2 gap-y-3">
                <Tech name="Python 3.12" stackType="backend"/>
                <Tech name="Flask" description="Web framework" stackType="backend"/>
                <Tech name="Jinja2" stackType="frontend"/>
                <Tech name="Javascript" stackType="frontend"/>
                <Tech name="HTML" stackType="frontend"/>
                <Tech name="SCSS" stackType="frontend"/>
                <Tech name="CSS" stackType="frontend"/>
                <Tech name="PostgreSQL" stackType="backend"/>
                <Tech name="npm" stackType="infrastructure"/>
                <Tech name="Node 18" stackType="backend"/>
                <Tech name="Poetry" description="Python Package manager" stackType="backend"/>
                <Tech name="Flyway" description="DB migrations" stackType="backend"/>
                <Tech name="Git" description="Version Control" stackType="infrastructure"/>
                <Tech name="GitHub" description="Cloud Version Control" stackType="infrastructure"/>
                <Tech name="GitHub Actions" stackType="infrastructure"/>
                <Tech name="Ansible" stackType="infrastructure"/>
                <Tech name="pyTest" description="Backend Testing" stackType="backend"/>
                <Tech name="Playwright" description="Frontend Testing" stackType="frontend"/>
                <Tech name="Webpack" stackType="frontend"/>
                <Tech name="Ruff" description="Linter" stackType="backend"/>
                <Tech name="Bootstrap" description="CSS utilities" stackType="frontend"/>
                <Tech name="Font Awesome" stackType="tools"/>
                <Tech name="Swiper" stackType="frontend" description="JS Carousels"/>
                <Tech name="Bulma" stackType="frontend" description="CSS utilities (used in admin)"/>
            </div>
        </article>
    )
}