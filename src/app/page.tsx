import HomeCarousel from "@/app/components/HomeCarousel";

export default function Home() {
  return (
      <main className="grow">
        <section className="text-center mb-5">
          <h1 className="text-5xl text-orange-500">Paul Catlin
            <span className="ps-10 font-light text-3xl">Projects and Rememberings</span>
          </h1>
        </section>

        <section className="">
          <div className="flex gap-5 items-center">
            <HomeCarousel />
            <div className="flex flex-col text-xl">
              <p>How’s it going? <span className="ps-2 text-2xl font-bold">I’m Paul.</span></p>
              <p>Welcome to a collection of my favourite projects with notes on how they were achieved!</p>
              <p>I’m always learning, experimenting and looking for better ways to build.
                This space will keep evolving along with me.</p>
            </div>
          </div>
        </section>
      </main>
  );
}
