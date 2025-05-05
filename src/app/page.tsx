export default function Home() {
  return (
    <div className="flex h-dvh w-full">
      <div className="flex min-h-fit flex-auto items-center justify-center">
        <div className="mx-8 mt-[4.5rem] mb-[3.875rem] grid w-full max-w-[40rem] grid-cols-4 overflow-hidden rounded-md shadow-[0px_15px_30px_0px_rgba(0,81,171,0.15)] sm:rounded-lg">
          {/* Main 4-col Card */}
          <div className="bg-primaryWhite col-span-4 px-6 pt-7 pb-8 sm:col-span-4">
            <h2
              className="text-primaryCyan mb-6 text-xl font-bold tracking-tight sm:text-2xl sm:tracking-normal"
              aria-label="Card Heading"
            >
              Join our community
            </h2>
            <div
              className="text-primaryYellow mb-4 text-[0.9375rem] leading-tight font-bold sm:mb-2.5 sm:text-lg sm:leading-normal"
              role="doc-subtitle"
            >
              30-day, hassle-free money back guarantee
            </div>
            <p className="text-neutralBlue text-sm leading-relaxed font-normal sm:text-base">
              Gain access to our full library of tutorials along with expert
              code reviews. Perfect for any developers who are serious about
              honing their skills.
            </p>
          </div>
          {/* Left Sub Card */}
          <div className="bg-primaryCyan col-span-4 p-6 sm:col-span-2 sm:p-10">
            <h3 className="text-primaryWhite mb-[1.125rem] text-lg font-bold">
              Monthly Subscription
            </h3>
            <div className="mb-1 flex flex-row items-center gap-2.5">
              <div className="text-primaryWhite text-[2rem] leading-none font-bold">
                $29
              </div>
              <div className="text-primaryWhite text-base leading-relaxed font-normal opacity-50">
                per month
              </div>
            </div>
            <div className="text-primaryWhite mb-[1.625rem] text-base leading-relaxed font-normal">
              Full access for less than $1 a day
            </div>
            <button className="text-primaryWhite bg-primaryYellow hover:bg-primaryWhite hover:text-primaryYellow h-12 w-full cursor-pointer rounded-[5px] text-base font-bold shadow-[0px_10px_10px_0px_rgba(0,0,0,0.10)] transition">
              Sign Up
            </button>
          </div>
          {/* Right Sub Card */}
          <div className="bg-primaryCyan relative col-span-4 p-6 sm:col-span-2 sm:p-10">
            <span className="bg-primaryWhite pointer-events-none absolute inset-0 opacity-15"></span>
            <h3 className="text-primaryWhite mb-[1.125rem] text-lg font-bold">
              Why Us
            </h3>
            <ul className="text-primaryWhite text-sm leading-[1.25rem] font-normal opacity-75">
              <li>Tutorials by industry experts</li>
              <li>Peer & expert code review</li>
              <li>Coding exercises</li>
              <li>Access to our GitHub repos</li>
              <li>Community forum</li>
              <li>Flashcard decks</li>
              <li>New videos every week</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
