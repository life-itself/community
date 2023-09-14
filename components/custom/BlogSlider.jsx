import Link from "next/link";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { formatDate } from "@/lib/formatDate.js";

export default function BlogSlider({ posts }) {
  return (
    <div className="w-full">
      <Splide
        aria-label="From the blog"
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
        <div className="splide__arrows flex w-full justify-between items-center -mt-12">
          <button className="splide__arrow splide__arrow--prev">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="lg:w-40 h-10 lg:h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
          </button>
          {/* <a href="/blog" className="text-lg font-bold font-headings tracking-tight text-primary underline">View all posts</a> */}
          <button className="splide__arrow splide__arrow--next">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="lg:w-40 h-10 lg:h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>
        <SplideTrack >
          {posts?.map((post) => (
            <SplideSlide key={post._id} className="p-1">
              <div className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover object-center" src={post.image} alt={post.title} />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6 space-y-6 divide-y-2">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-primary/80">
                      {post.categories?.map(category => <a key={category} className="capitalize mr-3 hover:underline">{category}</a>)}
                    </p>
                    <Link href={`/${post.url_path}`} className="mt-2 block space-y-2">
                      <p className="text-lg font-bold font-headings text-primary h-[3.5rem] line-clamp-2 underline">{post.title}</p>
                      {post.description && <p className="mt-3 text-base text-gray-500 line-clamp-3">{post.description}</p>}
                    </Link>
                  </div>
                  <div className="flex items-center pt-4">
                    <div className="flex-shrink-0">
                      <a href={post.authors[0]?.url_path}>
                        <span className="sr-only">{post.authors[0]?.name}</span>
                        <img className="h-10 w-10 rounded-full" src={post.authors[0]?.avatar} alt={post.authors[0]?.name} />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.authors[0]?.url_path} className="hover:underline">
                          {post.authors[0]?.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time>{formatDate(post.created)}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  )
}
