
import { allBlogs, allInitiatives } from "contentlayer/generated"
import getBlogs from "../content/getters/blogs"

import Collaborators from "components/custom/collaborators.jsx"
import BlogSlider from "components/custom/BlogSlider.jsx"
import InitiativeCard from "components/custom/InitiativeCard"

import { formatDate } from "@/lib/formatDate"

export default function Home({ posts, keyWritings, keyInitiatives }) {
  return (
  <>
  <section className="lg:relative">
    <div className="font-archivo mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:pt-48 lg:text-left">
      <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
        <h1 className="text-2xl font-headings font-bold tracking-tight text-primary xl:text-4xl flex flex-col">
          Ever asked yourself ... How can I live a happier life? Create a better society?
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-base md:mt-5 md:max-w-3xl">
          We’re an open community dedicated to the art of wiser living and social transformation. We favor approaches that prioritize inner development and cultural change in a rigorous, practical way.
          <br/><br/>
          Sign up to our monthly newsletter for latest updates, projects and community news.
        </p>
        <div className="mt-10 sm:mt-12">
          <form action="#" className="sm:mx-auto sm:max-w-xl lg:mx-0">
            <div className="sm:flex">
              <div className="min-w-0 flex-1">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full rounded-md border-0 px-4 py-3 text-base text-primary placeholder-gray-500 ring-1 ring-primary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mt-3 sm:ml-3 sm:mt-0">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-secondary px-4 py-3 font-medium text-primary shadow focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
      <img className="absolute inset-0 mx-auto h-full object-fit" src="/assets/lifeitself-landingpage.webp" alt="" />
    </div>
  </section>

  <Collaborators />

  <BlogSlider posts={posts} />

  <section>
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">What We're About</h2>
        <div className="mt-6 text-xl leading-8 text-gray-600 space-y-6">
          <p>
            In the past four decades, a confirmation and expansion of wisdom traditions by scientific rigor has converged with an ever deepening polycrisis.
          </p>
          <p>
            There has never been a more important time to “grow up”, both personally and collectively. A paradigm shift is underway and we all have a part to play.
          </p>
          <p>
            The big question is ... how?
          </p>
          <p>
            Life itself is a home for people who are dedicated to rigorous enquiry and deliberate action for inner growth and cultural evolution in the service of social transformation -- creating an awakening society and a radically wiser, weller world.
          </p>
          <p>
            Inspired by integral theory, zen buddhism and other key concepts, we cultivate these ideas and apply them to life itself, through deliberately developmental programs and community building.
          </p>
          <p>
            <a
              href="/about"
              className="rounded-md bg-white px-3.5 py-2.5 font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Learn More
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt=""
            />
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join The Community</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Our community chat is bustling, come in and say hey! 

                This is a space for you if:
                - You want to connect with like-minded people interested in creating a wiser, weller world
                - You want to learn from and meet experts in different fields from psychology, education, technology, metamodern philosophy and more
                - You want to build your professional network with other professionals

                We meet online on a bi-monthly basis for deep discussions and communal gathering.
              </p>
              <div className="mt-10 flex">
                <a href="https://chat.whatsapp.com/JNJCTZugNQn1fq89xbHtfA" className="text-sm font-semibold leading-6 text-indigo-400">
                  Join Here <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl">
          <svg viewBox="0 0 1318 752" className="w-[82.375rem] flex-none" aria-hidden="true">
            <path
              fill="url(#ee394704-5802-4a27-9451-3d29bf7415a3)"
              fillOpacity=".25"
              d="m279.655 479.549-211.511-96.46L.638 751.469l279.017-271.92 380.928 173.723c-77.415-137.198-159.845-384.186 129.758-274.555C1152.34 515.756 1226.88 775.51 1299.76 547.101c58.31-182.726-41.07-382.222-98.04-459.13L964.951 386.243 771.295.416 279.655 479.55Z"
            />
            <defs>
              <linearGradient
                id="ee394704-5802-4a27-9451-3d29bf7415a3"
                x1="1452.56"
                x2="-101.59"
                y1="515.446"
                y2="760.592"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4F46E5" />
                <stop offset={1} stopColor="#80CAFF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Key Writings</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Read some of our most essential pieces.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {keyWritings?.map((post) => (
            <article key={post._id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.created} className="text-gray-500">
                    {formatDate(post.date ?? post.created)}
                  </time>
                  {post.categories?.map((category,index) => (
                    <a
                      key={`${category}-${index}`}
                      href={`/categories/${category}`}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {category}
                    </a>
                  ))}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-primary group-hover:text-gray-600">
                    <a href={post.url_path}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.authors[0]?.avatar} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.authors[0]?.url_path}>
                        <span className="absolute inset-0" />
                        {post.authors[0]?.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author?.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>

  <section>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What We're Up To</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Read about some of our major initiatives.
          </p>
        </div>
        <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {keyInitiatives?.map((initiative) => (
            <InitiativeCard key={initiative._id} initiative={initiative} />
          ))}
        </ul>
      </div>
    </div>
  </section>

  <section>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Upcoming Residencies and Courses</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
          </p>

          <h3 className="text-2xl font-bold">
            <a href="setting-the-world-to-rights-residency">Setting The World To Rights Residency</a>
          </h3>
          <p><span className="italic">April 5th - May 2nd 2023</span> with Liam Kavanagh and Victoria Wilding</p>
          <p>This residency challenges this attitude, seeing big topic conversations as a crucial job of citizens in a democracy. It will feature emotionally aware dialogue about our societies' greatest challenges and our part in responding to them.</p>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export async function getStaticProps() {
  const posts = await getBlogs(9)

  // key initiatives are these "ids" e.g. conscious-parenting
  // then i want to look up the initiative info from the source files

  const keyWritingsPaths = [
    "blog/2022/02/01/cultivating-an-emerging-paradigm"
  ]

  const keyInitiativesPaths = [
    // "initiatives/blind-spot-series",
  ]

  const keyWritings = await getBlogs(allBlogs.length)
    .filter(post => keyWritingsPaths?.includes(post.url_path))

  const keyInitiatives = keyInitiativesPaths.length > 0 
    ? allInitiatives
      .filter(
        initiative => keyInitiativesPaths?.includes(initiative.url_path)
      ) 
    : allInitiatives.filter(initiative => !(initiative.url_path === "initiatives"))
        .sort((a,b) => new Date(b.created) - new Date(a.created))
        .slice(0,6)
  /*
  const keyWritingsNew = [
    getBlogPostInfoByPath(...),
    getBlogPostInfoByPath(...),
    getBlogPostInfoByPath(...),
  ]

  const keyInitiatives = [
    getInitiativeBySlug('...')
  ]
  */

  return {
    props: { posts, keyWritings, keyInitiatives }
  }
}
