import Link from "next/link"
import { allBlogs, allInitiatives } from "contentlayer/generated"
import getBlogs from "../content/getters/blogs"
import getResidencies from "../content/getters/residencies"
import getPodcasts from "../content/getters/podcasts"

import { BaseSection } from "components/custom/BaseSection"
import { Hero } from "components/custom/Hero"
import BlogSlider from "components/custom/BlogSlider"
import InitiativeCard from "components/custom/InitiativeCard"

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import { formatDate } from "@/lib/formatDate"


export default function Home({ collabs, posts, keyWritings, keyInitiatives, upcomingResidencies, podcasts, learnTopics }) {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* COLLABORATORS */}
      <BaseSection>
        <BaseSection.Title>
          Collaborators
        </BaseSection.Title>

        <div className="grid gap-8 grid-cols-2 md:grid-cols-6 lg:grid-cols-none lg:grid-flow-col lg:auto-cols-auto grayscale">
          {collabs.map(collaborator => (
            <a key={collaborator.title} href={collaborator.url} className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={collaborator.logo} alt={collaborator.title} />
            </a>
          ))}
        </div>
      </BaseSection>

      {/* WHAT WE'RE ABOUT */}
      <BaseSection>
        <BaseSection.Title>
          What We're About
        </BaseSection.Title>

        <div className="max-w-2xl mx-auto text-xl text-center leading-8 space-y-6">
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
        </div>

        <BaseSection.Link href="/about">
          Learn More&nbsp;<span aria-hidden="true">&rarr;</span>
        </BaseSection.Link>
      </BaseSection>

      {/* JOIN THE COMMUNITY */}

      <BaseSection className="relative isolate">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 bg-gray-900 rounded-2xl sm:rounded-3xl p-10 lg:p-20">
          <img
            className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
            src="assets/images/1909newsletter-gathering-meal-2019.jpg"
            alt=""
          />
          <div className="w-full flex-auto text-sm text-gray-300 space-y-4">
            <img
              src="/assets/images/whatsapp-general-chat-qr-code.png"
              alt="whatsapp community group"
              className="hidden md:inline-flex w-32 float-right"
            />
            <h2 className="text-3xl font-headings font-bold tracking-tight text-white sm:text-4xl">
              Join The Community
            </h2>
            <p className="mt-6 text-lg leading-8">
              Our community chat is bustling, come in and say hey!
            </p>
            <p>This is a space for you if:</p>
            <ul className="ml-4 list-disc space-y-2">
              <li>You want to connect with like-minded people interested in creating a wiser, weller world</li>
              <li>You want to learn from and meet experts in different fields from psychology, education, technology, metamodern philosophy and more</li>
              <li>You want to build your professional network with other professionals</li>
            </ul>
            <p>
              We meet online on a bi-monthly basis for deep discussions and communal gathering.
            </p>

            {/* LINKS */}
            <div className="flex items-center space-x-4">
              <BaseSection.Link href="https://chat.whatsapp.com/JNJCTZugNQn1fq89xbHtfA">
                Join Here&nbsp;<span aria-hidden="true">&rarr;</span>
              </BaseSection.Link>
              <BaseSection.Link href="https://lifeitself.org/community">
                Learn More<span aria-hidden="true">&rarr;</span>
              </BaseSection.Link>
            </div>

          </div>
        </div>

      </BaseSection>

      {/* KEY IDEAS */}
      <BaseSection>
        <BaseSection.Title>
          Key Ideas
        </BaseSection.Title>
        <BaseSection.Description>
          Read some of our most essential pieces.
        </BaseSection.Description>

        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-20 lg:grid-cols-3">
            {keyWritings?.map((post) => (
              <article key={post._id} className="flex flex-col items-start">
                <div className="relative w-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex flex-col gap-x-4 text-sm">
                    <time dateTime={post.created} className="text-gray-500">
                      {formatDate(post.date ?? post.created)}
                    </time>
                    <div className="flex flex-wrap space-x-4 my-1">
                      {post.categories?.map((category, index) => (
                        /* <a */
                        /*   key={`${category}-${index}`} */
                        /*   href={`/categories/${category}`} */
                        /*   className="relative z-10 text-xs text-primary hover:text-gray-500 underline underline-offset-2 decoration-secondary decoration-2" */
                        /* > */
                        /*   {category} */
                        /* </a> */
                        <span
                          key={`${category}-${index}`}
                          className="relative z-10 text-xs text-primary underline underline-offset-2 decoration-secondary decoration-2"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
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

        <BaseSection.Link href="/ideas">
          Discover More Ideas&nbsp;<span aria-hidden="true">&rarr;</span>
        </BaseSection.Link>
      </BaseSection>

      {/* WHAT WE'RE UP TO */}
      <BaseSection>
        <BaseSection.Title>
          What We're Up To
        </BaseSection.Title>
        <BaseSection.Description>
          Read about some of our major initiatives.
        </BaseSection.Description>

        <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {keyInitiatives?.map((initiative) => (
            <InitiativeCard key={initiative._id} initiative={initiative} />
          ))}
        </ul>

        <BaseSection.Link>
          See More Initiatives&nbsp;<span aria-hidden="true">&rarr;</span>
        </BaseSection.Link>
      </BaseSection >

      {/* FROM THE BLOG */}
      < section className="relative px-6 pt-16 pb-20 lg:px-8 lg:py-20" >
        <div className="relative mx-auto max-w-7xl space-y-4 lg:space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-headings tracking-tight text-primary sm:text-4xl">From the blog</h2>
          </div>
        </div>
        <BlogSlider posts={posts} />
        <div className="mt-16 flex justify-center">
          <a href="/blog" className="bg-secondary rounded py-2 px-4 text-sm font-medium text-primary">
            View all posts&nbsp;<span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </section >

      {/* UPCOMING RESIDENCIES AND COURSES */}
      < BaseSection >
        <BaseSection.Title>
          Upcoming Residencies and Courses
        </BaseSection.Title>

        <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20 text-primary max-w-3xl mx-auto">
          {upcomingResidencies.map((residency) => (
            <article key={residency._id} className="relative isolate flex flex-col gap-8 lg:flex-row">
              <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                <img
                  src={residency.image}
                  alt=""
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div>
                <div className="text-xs">
                  <time dateTime={residency.start}>{formatDate(residency.start)}</time>
                </div>
                <div className="group relative max-w-xl">
                  <h3 className="mt-3 text-xl font-semibold font-headings group-hover:text-primary/80">
                    <Link href={residency.url_path}>
                      <span className="absolute inset-0" />
                      {residency.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm">{residency.description}</p>
                </div>
                <div className="mt-4 flex border-t border-primary/20 pt-4">
                  <div className="relative flex flex-col gap-x-4 space-y-2">
                    <h3 className="text-sm font-medium underline underline-offset-2 decoration-2 decoration-secondary">Facilitators:</h3>
                    <div className="text-xs">
                      {residency.facilitators?.map(facilitator => (
                        <p key={facilitator} className="leading-4">
                          <span className="absolute inset-0" />
                          {facilitator}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <BaseSection.Link href="/programs">
          See all programs&nbsp;<span aria-hidden="true">&rarr;</span>
        </BaseSection.Link>

      </BaseSection >

      {/* LATEST PODCASTS */}
      < BaseSection >
        <BaseSection.Title>
          Latest Podcasts
        </BaseSection.Title>

        <div className="mx-auto lg:max-w-7xl lg:px-8">
          <Splide
            aria-label="Latest Podcasts"
            tag="div"
            hasTrack={false}
            options={{
              perPage: 1,
              rewind: true,
              gap: '1rem',
              pagination: false,
              mediaQuery: 'min',
              breakpoints: {
                768: {
                  perPage: 2,
                },
                1024: {
                  perPage: 3,
                }
              }
            }}>
            <div className="splide__arrows flex w-full justify-between items-center">
              <button className="splide__arrow splide__arrow--prev">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="lg:w-40 h-10 lg:h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
              </button>
              <button className="splide__arrow splide__arrow--next">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="lg:w-40 h-10 lg:h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </button>
            </div>
            <SplideTrack>
              {podcasts?.map((podcast) => (
                <SplideSlide key={podcast._id} className="p-1">
                  <Link href={`/${podcast.url_path}`} className="flex flex-col overflow-hidden rounded-lg shadow-lg border">
                    <div className="flex-shrink-0 pt-6">
                      <img className="h-48 w-full aspect-square object-contain" src={podcast.image} alt={podcast.title} />
                    </div>
                    <div className="flex flex-1 flex-col justify-between bg-white p-6 space-y-2">
                      <div className="flex items-center justify-center text-gray-500 text-sm">
                        <time>{formatDate(podcast.date)}</time>
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-bold font-headings text-primary line-clamp-2 underline">{podcast.title}</p>
                      </div>
                    </div>
                  </Link>
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </div>

        <BaseSection.Link href="/podcast">
          More Episodes&nbsp;<span aria-hidden="true">&rarr;</span>
        </BaseSection.Link>

      </BaseSection >

      {/* LEARN ABOUT A SPECIFIC TOPIC */}
      < BaseSection >
        <BaseSection.Title>
          Learn about a specific topic
        </BaseSection.Title>

        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-auto lg:max-w-6xl lg:grid-cols-3">
          {learnTopics?.map((site) => (
            <article
              key={site.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-60 sm:pt-48 lg:pt-60"
            >
              <img src={site.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={site.link}>
                  <span className="absolute inset-0" />
                  {site.title}
                </a>
              </h3>
            </article>
          ))}
        </div>

      </BaseSection >
    </>
  )
}


export async function getStaticProps() {
  const posts = await getBlogs(9)

  // key initiatives are these "ids" e.g. conscious-parenting
  // then i want to look up the initiative info from the source files

  const keyWritingsPaths = [
    "blog/2022/02/01/cultivating-an-emerging-paradigm",
    "blog/2021/10/05/deliberately-developmental-spaces-a-key-to-addressing-the-metacrisis",
    "blog/2020/12/21/pragmatic-utopianism",
  ]

  const keyInitiativesPaths = [
    "initiatives/ecosystem-mapping",
    "initiatives/hubs",
    "initiatives/conscious-coliving",
  ]

  const keyWritings = await getBlogs(allBlogs.length)
    .filter(post => keyWritingsPaths?.includes(post.url_path))

  const keyInitiatives = keyInitiativesPaths.length > 0
    ? allInitiatives
      .filter(
        initiative => keyInitiativesPaths?.includes(initiative.url_path)
      )
    : allInitiatives.filter(initiative => !(initiative.url_path === "initiatives"))
      .sort((a, b) => new Date(b.created) - new Date(a.created))
      .slice(0, 6)

  const upcomingResidencies = await getResidencies()
    .filter(residency => new Date(residency.start) > new Date())

  const podcasts = await getPodcasts().slice(0, 6)

  const learnTopics = [
    {
      id: 1,
      title: "Web3",
      link: "http://web3.lifeitself.org",
      imageUrl: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
    },
    {
      id: 2,
      title: "Ecosystem",
      link: "https://lifeitself.org/ecosystem",
      imageUrl: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
    },
    {
      id: 3,
      title: "Fundamental wellbeing",
      link: "https://lifeitself.org/learn/fundamental-wellbeing",
      imageUrl: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
    },
  ]

  const collabs = [
    {
      title: "Plum Village",
      url: "",
      logo: "assets/site/collaborators/Plum-village-logo.png"
    },
    {
      title: "LSE",
      url: "",
      logo: "assets/site/collaborators/LSE_Logo.png"
    },
    {
      title: "Open Knowledge International",
      url: "",
      logo: "assets/site/collaborators/Open-Knowledge-International-Logo.png"
    },
    {
      title: "Rockefeller Foundation",
      url: "",
      logo: "assets/site/collaborators/Rockefeller-Foundation.png"
    },
    {
      title: "IPPR",
      url: "",
      logo: "assets/site/collaborators/IPPR-Logo_pink.png"
    },
    {
      title: "Untitled",
      url: "",
      logo: "assets/site/collaborators/untitled_logo.png"
    },
    {
      title: "CRI",
      url: "",
      logo: "assets/site/collaborators/CRI-logo.png"
    },
  ]

  return {
    props: {
      collabs, posts, keyWritings, keyInitiatives, upcomingResidencies, podcasts, learnTopics
    }
  }
}
