import Link from "next/link";


export default function CashbackPython() {
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

            <div className="flex flex-col-reverse lg:flex-row gap-5">
                <div className="">
                    <p>Cashback.co.uk is a reward-based platform where users complete
                        specific &quot;tasks&quot; - such
                        as signing up for free trials, entering competitions, or taking surveys - to
                        earn cash
                        rewards.
                        The site uses a &quot;level&quot; system where users must complete at least one
                        task per
                        level
                        across 10 levels to unlock their total payout.</p>

                    <p className="mb-3">I worked on most of the frontend of this site, making it look
                        similar to
                        it&apos;s <Link href="/projects/cashback-php" className="text-orange-500">previous
                            incantation</Link>,
                        but in jinja2 and javascript instead.
                        There were a few differences with the old cashback frontend though:</p>
                    <ul className="ms-5 list-disc list-inside">
                        <li>When a User completes the ladder, they can take offers in the new VIP
                            section.
                        </li>
                        <li>Tasks can be placed on multiple points of the ladder.</li>
                        <li>The task image numbers were reduced. Now there is only a task image and a
                            brand
                            image.
                        </li>
                    </ul>
                </div>
                <div className="">
                    <img src="/images/cashback-python/screenshot-home.webp"
                         alt="Screenshot of homepage"
                         className="rounded-lg"
                         width="700" height="798"
                    />
                </div>
            </div>

            <h2 className={h2_classes} id="optimal-images">Optimal images</h2>

            <p>All images are saved in
                the <span className="font-bold text-accent">svg</span> or <span
                    className="font-bold text-accent">webp</span> image
                formats.
                WebP provides superior lossless and lossy compression, allowing the download footprint
                to be as small as possible, which is vital for mobile use, where a nice fast wifi
                network
                connection is not always available.</p>
            <p>I used <a href="https://squoosh.app" target="_blank"
                         className="text-orange-400">squoosh.app</a> to
                convert and compress the images to webp.
                It is a nice site that shows the image quality and possible space savings that you can
                achieve.</p>
            <p>SVG is used for drawings that can scale to any size without reduction in quality, so was
                used
                where possible too!</p>
            <p>The images are all also stored on AWS S3 and use AWS Cloudfront CDN to speed up delivery.
                With its awesome caching and global servers.</p>


            <h2 className={h2_classes} id="container-based-card-layout">Container based Card layout</h2>

            <p>The layout uses a flexible container system that transitions seamlessly between mobile
                and
                desktop. The cards maintain their aspect ratio and readability without breaking the
                layout,
                using a mobile-first CSS approach</p>


            <h2 className={h2_classes} id="admin-changelog">Admin Changelog</h2>

            <p>I improved the changelog feature on the admin of the site.</p>


            <h2 className={h2_classes} id="blurred-background-card-images">Blurred Background Card
                Images</h2>

            <p>When the text and other contents for a &quot;task card&quot; is larger than anticipated,
                the
                image
                has
                a clever little trick up it&apos;s sleeve. It looks like it blurs to the top and bottom,
                filling
                the available space. This is achieved by displaying a copy of the card behind the
                original
                image with a blur filter applied.</p>

            <h2 className={h2_classes}>My Activity section - Async fetching and animation</h2>

            <p>To speed up the page for users with a lot of activity. I built this page to paginate the
                activity and allow you to choose from various categories of activity. It fetches the
                data
                asynchronously after the main page is loaded.
                There is also a cute little animated padlock that rotates when you cannot cash out yet.
                A
                nice touch.</p>

            <h2 className={h2_classes} id="tech-stack">Tech Stack</h2>

            <ul className="list-inside list-disc">
                <li>Python 3.13.0</li>
                <li>Flask - Web framework</li>
                <li>Jinja2</li>
                <li>Javascript - Frontend</li>
                <li>HTML</li>
                <li>SCSS - Styling</li>
                <li>CSS - Styling</li>
                <li>PostgreSQL 16 - Database</li>
                <li>npm - Package manager</li>
                <li>Node 18</li>
                <li>Poetry - Python Package manager</li>
                <li>Flyway - DB migrations</li>
                <li>Git - Version Control</li>
                <li>GitHub - Cloud Version Control</li>
                <li>GitHub Actions - Deployment</li>
                <li>Ansible - Deployment</li>
                <li>pyTest - Backend Testing</li>
                <li>Playwright - Frontend Testing</li>
                <li>Webpack - JS bundler</li>
                <li>Ruff - Linter</li>
                <li>Bootstrap - CSS utilities</li>
                <li>Font Awesome - Icons</li>
                <li>Swiper - JS Carousels</li>
                <li>Bulma - CSS utilities (used in admin)</li>
            </ul>
        </article>
    )
}
