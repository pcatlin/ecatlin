import {CodeBlock} from "@/app/components/CodeBlock";
import SavingsCalculator from "@/app/components/shared-features/SavingsCalculator";
import AdminChangeLog from "@/app/components/shared-features/AdminChangeLog";
import TechStack from "@/app/components/shared-features/TechStack";
import {projectMetadata, projects} from "@/app/projects";
import {Metadata} from "next";

const slug = "custard"

export function generateMetadata(): Metadata {
    return projectMetadata(slug)
}

export default function Custard() {
    const {tech} = projects[slug] || null

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

            <h2 className={h2_classes} id="what-is-it">What is Custard</h2>

            <p>
                Custard (joincustard.co.uk) is a modern cashback and rewards site that allows users to earn money
                through shopping, surveys, playing games, and completing &quot;RapidPay&quot; tasks (which payout faster
                than other offers). It acts as an aggregator of affiliate offers, presenting them in a highly
                categorised, user-friendly interface.
            </p>

            <h2 className={h2_classes} id="accessible-keyboard-navigation">Accessible keyboard navigation</h2>

            <p>The site is easily usable by a keyboard. A User can tab through the menu and the hover only
                popup opens due to the handy `:focus-visible` selector. This lets you tab through the menu
                and it&#39;s child list of links.</p>

            <CodeBlock lang="css">
                {`
    .dropdown-container {
        display:none;
    }
    
    .has-dropdown:focus-within .dropdown-container,
    .has-dropdown:hover .dropdown-container {
        display: flex;
    }
                `}
            </CodeBlock>

            <SavingsCalculator/>

            <AdminChangeLog/>

            <TechStack tech={tech}/>

        </article>
    )
}