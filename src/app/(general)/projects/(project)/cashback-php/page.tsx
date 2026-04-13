import {projectMetadata, projects} from "@/app/projects";
import TechStack from "@/app/components/shared-features/TechStack";
import {Metadata} from "next";

const slug = "cashback-php";

export function generateMetadata(): Metadata {
    return projectMetadata(slug)
}

export default function CashbackPhp() {
    const {tech} = projects[slug] || null
    const h2_classes = "text-orange-500 font-bold text-3xl mt-30 mb-10"

    return (
        <article>
            <div className="flex justify-center">
                <img src="/images/cashback-python/white-cashback-and-logo.png"
                     alt="Cashback"
                     width="400" height="80"
                />
            </div>

            <h1 className={h2_classes} id="what-is-cashback">What is Cashback.co.uk</h1>
            <p>
                Cashback is a (kind of) successor to the popular 20 cogs site. The idea is that users chose from a
                small list of tasks to complete. These could be offers, surveys or simply to sign up to a site. They
                usually have a reward value. When this has been done, your account gets the reward and the next
                level opens up. There are 15 levels to complete, and when you reach the end you can cash out your
                built up earnings by bank transfer or paypal!
            </p>

            <h2 className={h2_classes} id="kubernetes-stack">Kubernetes Stack</h2>
            <p>
                Cashback was built from scratch on new technologies at the time. Using a Kubernetes cluster of 9 nodes
                and 3 database servers to improve reliability and support huge traffic demands.
            </p>
            <p>
                The backend used PHP to serve as an API server for the frontend and admin frontend to process data.
                The data was roughly evenly split over 2 MySQL database servers.
            </p>
            <p>
                Frontend was relatively dumb and ran on 2 pods using React and SCSS and connected to the API for all
                data and actions.
            </p>

            <TechStack tech={tech}/>
        </article>
    )
}