import Link from "next/link"
import Script from "next/script"
import { allBlogs, allInitiatives } from "contentlayer/generated"
import getBlogs from "../content/getters/blogs"
import getResidencies from "../content/getters/residencies"
import getPodcasts from "../content/getters/podcasts"

import Collaborators from "components/custom/collaborators.jsx"
import BlogSlider from "components/custom/BlogSlider.jsx"
import InitiativeCard from "components/custom/InitiativeCard"

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import { formatDate } from "@/lib/formatDate"

export default function Home({ posts, keyWritings, keyInitiatives, upcomingResidencies, podcasts, learnTopics }) {
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
              <br /><br />
              Sign up to our monthly newsletter for latest updates, projects and community news.
            </p>
            <div className="mt-10 sm:mt-12">

              <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css" />
              <div className="!p-0 sib-form">
                <div
                  id="sib-form-container"
                  className="sm:mx-auto sm:max-w-xl lg:mx-0"
                >
                  <div id="sib-container" className="!p-0 !mb-3">
                    <form
                      id="sib-form"
                      method="POST"
                      action="https://1ebb0834.sibforms.com/serve/MUIEAHv8u1djsSIFAN7v4df8mi9xwfEWx_Lb1IsVhMTHmyWKns1oCWFTrJDN_8hj5kudlUMKTIbltfsV_UlYPq9FlNqAc0jVlyZCzmfHwI7ZrgYp2zVD4WcsCS1C76szNm16870ol677kE0fuRYr4L-v6bdsC7JvdpPMVRjMyfxYy93APXfDhXwqrXCVg_CTiCG6zQZTgK2om-L6"
                      data-type="subscription"
                    >
                      <div className="sm:flex items-center">
                        <div className="min-w-0 flex-1">
                          <div className="sib-input sib-form-block !p-0">
                            <div className="form__entry entry_block">
                              <div className="form__label-row ">
                                <div className="entry__field !rounded-md">
                                  <input
                                    className="input w-full !rounded-md !border-white !px-5 !py-1 !placeholder-gray-500 !focus:outline-none !focus:ring-2 focus:!ring-white focus:!ring-offset-2 focus:!ring-offset-secondary"
                                    type="text"
                                    id="EMAIL"
                                    name="EMAIL"
                                    placeholder="Enter your email"
                                    data-required="true"
                                    required=""
                                  />
                                </div>
                              </div>
                              <label className="!hidden entry__error entry__error--primary font-sm text-left text-[#661d1d]"></label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="mt-3 sm:ml-3 sm:mt-0">
                            <button
                              className="block flex justify-center w-full rounded-md bg-secondary px-4 py-3 font-medium text-primary shadow focus:outline-none focus:ring-2 focus:ring-primary"
                              form="sib-form"
                              type="submit"
                            >
                              <svg
                                className="hidden icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                                viewBox="0 0 512 512"
                              >
                                <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                              </svg>
                              Sign up
                            </button>
                          </div>
                        </div>
                        <input
                          type="text"
                          name="email_address_check"
                          defaultValue=""
                          className="input--hidden"
                        />
                        <input type="hidden" name="locale" defaultValue="en" />
                      </div>
                    </form>
                  </div>
                  <div
                    id="error-message"
                    className="sib-form-message-panel text-sm text-[#661d1d] bg-[#ffeded] border border-[#ff4949]"
                  >
                    <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                      <svg
                        viewBox="0 0 512 512"
                        className="sib-icon sib-notification__icon"
                      >
                        <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
                      </svg>
                      <span className="sib-form-message-panel__inner-text">
                        Your subscription could not be saved. Please try again.
                      </span>
                    </div>
                  </div>
                  <div
                    id="success-message"
                    className="sib-form-message-panel text-sm text-[#085229] bg-[#e7faf0] border border-[#13ce66]"
                  >
                    <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                      <svg
                        viewBox="0 0 512 512"
                        className="sib-icon sib-notification__icon"
                      >
                        <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
                      </svg>
                      <span className="sib-form-message-panel__inner-text">
                        Your subscription has been successful.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <Script dangerouslySetInnerHTML={{
                __html: `
            window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
            window.LOCALE = 'en';
            window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";

            window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";

            window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";

            window.translation = {
              common: {
                selectedList: '{quantity} list selected',
                selectedLists: '{quantity} lists selected'
              }
            };

            var AUTOHIDE = Boolean(0);
          `
              }} />
              <Script src="https://sibforms.com/forms/end-form/build/main.js" />

            </div>
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img className="absolute inset-0 mx-auto h-full object-fit" src="/assets/lifeitself-landingpage.webp" alt="" />
        </div>
      </section >

      <Collaborators />

      <section>
        <div className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold font-headings tracking-tight text-primary sm:text-4xl">What We're About</h2>
            <div className="mt-6 text-xl leading-8 text-primary space-y-6">
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
              <div className="mt-16 flex justify-center">
                <Link href="/about" className="bg-secondary rounded py-2 px-4 text-sm font-medium text-primary">
                  Learn More&nbsp;<span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-20">
          <div className="relative isolate">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-gray-900 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
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
                  <h2 className="text-3xl font-headings font-bold tracking-tight text-white sm:text-4xl">Join The Community</h2>
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
                  <div className="!mt-8 w-full">
                    <div className="flex">
                      <a href="https://chat.whatsapp.com/JNJCTZugNQn1fq89xbHtfA" className="bg-secondary rounded py-2 px-4 text-sm font-medium text-primary">
                        Join Here&nbsp;<span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                    <div className="flex">
                      <a href="https://lifeitself.org/community" className="bg-secondary rounded my-2 py-2 px-4 text-sm font-medium text-primary">
                        Learn More<span aria-hidden="true">&rarr;</span>
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
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-36rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-secondary to-[#ff80b5] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-headings font-bold tracking-tight text-primary sm:text-4xl">Key Ideas</h2>
              <p className="mt-2 text-lg leading-8 text-primary">
                Read some of our most essential pieces.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
          <div className="mt-16 flex justify-center">
            <Link href="/ideas" className="bg-secondary rounded py-2 px-4 text-sm font-medium text-primary">
              Discover More Ideas&nbsp;<span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold font-headings tracking-tight text-primary sm:text-4xl">What We're Up To</h2>
              <p className="mt-2 text-lg leading-8 text-primary">
                Read about some of our major initiatives.
              </p>
            </div>
            <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {keyInitiatives?.map((initiative) => (
                <InitiativeCard key={initiative._id} initiative={initiative} />
              ))}
            </ul>
          </div>
          <div className="mt-16 flex justify-center">
            <Link href="/initiatives" className="bg-secondary rounded py-2 px-4 text-sm font-medium text-primary">
              See More Initiatives&nbsp;<span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <BlogSlider posts={posts} />

      <section className="">
        <div className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-headings font-bold tracking-tight text-primary sm:text-4xl">Upcoming Residencies and Courses</h2>
            </div>
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
          </div>
          <div className="mt-16 flex justify-center">
            <Link href="/programs" className="bg-secondary rounded py-2 px-4 text-sm font-medium text-primary">
              See all programs&nbsp;<span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pt-16 pb-20 lg:px-8 lg:py-20">
        <div className="relative isolate space-y-4 lg:space-y-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-headings font-bold tracking-tight text-primary sm:text-4xl">Latest Podcasts</h2>
          </div>
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
          <div className="!mt-16 flex justify-center">
            <Link href="/podcast" className="bg-secondary rounded py-2 px-4 text-sm font-medium text-primary">
              More Episodes&nbsp;<span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-headings font-bold tracking-tight text-primary sm:text-4xl">Learn about a specific topic</h2>
            </div>
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

  return {
    props: {
      posts, keyWritings, keyInitiatives, upcomingResidencies, podcasts, learnTopics
    }
  }
}
