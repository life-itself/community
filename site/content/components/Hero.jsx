export default function Hero() {
  return (
    <section className="lg:relative">
      <div className="font-archivo mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:pt-48 lg:pb-32 lg:text-left">
        <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl flex flex-col">
            <span className="block xl:inline">We are</span>
            <span className="block text-theme-yellow xl:inline">pragmatic utopians.</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">We’re committed to practical action for a radically wiser, weller world. We create hubs, do research and engage in advocacy to pioneer a wiser culture.</p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a href="/about/" className="flex w-full items-center justify-center rounded-md border border-transparent bg-secondary px-8 py-3 text-base font-medium md:py-4 md:px-10 md:text-lg">LEARN MORE</a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="/upcoming-residencies-gatherings/" className="flex w-full items-center justify-center rounded-md border border-transparent bg-secondary px-8 py-3 text-base font-medium md:py-4 md:px-10 md:text-lg">JOIN A RESIDENCY</a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
        <img className="absolute inset-0 mx-auto h-full object-fit" src="assets/lifeitself-landingpage.webp" alt="" />
      </div>
    </section>
  )
}