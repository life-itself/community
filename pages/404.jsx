import Link from "next/link"

export default function PageNotFound () {
  return (
    <section className="flex items-center h-full p-16 text-primary lg:max-h-[calc(100vh-350px)]">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-4 font-extrabold text-7xl md:text-9xl">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
          <p className="mt-2 mb-8 text-gray-500">But dont worry, you can find plenty of other things on our homepage.</p>
          <Link href="/" className="px-8 py-3 font-semibold rounded bg-secondary">Back to homepage</Link>
        </div>
      </div>
    </section>
  )
}