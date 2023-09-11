import { allBlogs, allInitiatives } from "contentlayer/generated"
import getBlogs from "../content/getters/blogs"
import getResidencies from "../content/getters/residencies"
import getPodcasts from "../content/getters/podcasts"

import { BaseSection } from "components/custom/BaseSection"
import { Hero } from "components/custom/Hero"
import { BaseCard } from "components/custom/BaseCard"
import { BaseCardHorizontal } from "components/custom/BaseCardHorizontal"
import { BaseTile } from "../components/custom/BaseTile"
import BlogSlider from "components/custom/BlogSlider"
import PodcastSlider from "components/custom/PodcastSlider"


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
      <BaseSection>
        <div className="relative isolate">
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
          <div className="grid grid-cols-1 gap-x-8 gap-y-20 content-stretch lg:grid-cols-3">
            {keyWritings?.map((post) => (
              <BaseCard key={post._id} {...post} date={post.date ?? post.created} author={post.authors[0]} />
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

        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-20 content-stretch lg:grid-cols-3">
            {keyInitiatives?.map((initiative) => (
              <BaseCard key={initiative._id} {...initiative} />
            ))}
          </div>
        </div>

        <BaseSection.Link href="/initiatives">
          See More Initiatives&nbsp;<span aria-hidden="true">&rarr;</span>
        </BaseSection.Link>
      </BaseSection >

      {/* FROM THE BLOG */}
      <BaseSection>
        <BaseSection.Title>
          From The Blog
        </BaseSection.Title>

        <BlogSlider posts={posts} />

        <BaseSection.Link href="/blog">
          View all posts&nbsp;<span aria-hidden="true">&rarr;</span>
        </BaseSection.Link>
      </BaseSection >

      {/* UPCOMING RESIDENCIES AND COURSES */}
      < BaseSection >
        <BaseSection.Title>
          Upcoming Residencies and Courses
        </BaseSection.Title>

        <div className="space-y-20 max-w-2xl mx-auto">
          {upcomingResidencies.map((residency) => (
            <BaseCardHorizontal key={residency._id} {...residency} date={residency.start} authors={residency.facilitators} />
          ))}
        </div>

        <BaseSection.Link href="/programs">
          See all programs&nbsp;<span aria-hidden="true">&rarr;</span>
        </BaseSection.Link>

      </BaseSection >

      {/* LATEST PODCASTS */}
      <BaseSection>
        <BaseSection.Title>
          Latest Podcasts
        </BaseSection.Title>

        <PodcastSlider podcasts={podcasts} />

        <BaseSection.Link href="/podcast">
          More Episodes&nbsp;<span aria-hidden="true">&rarr;</span>
        </BaseSection.Link>
      </BaseSection >

      {/* LEARN ABOUT A SPECIFIC TOPIC */}
      <BaseSection>
        <BaseSection.Title>
          Learn about a specific topic
        </BaseSection.Title>

        <div className="w-full max-w-2xl lg:max-w-none grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {learnTopics?.map((site) => (
            <BaseTile {...site} />
          ))}
        </div>

      </BaseSection>
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
      image: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
    },
    {
      id: 2,
      title: "Ecosystem",
      link: "https://lifeitself.org/ecosystem",
      image: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
    },
    {
      id: 3,
      title: "Fundamental wellbeing",
      link: "https://lifeitself.org/learn/fundamental-wellbeing",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
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
