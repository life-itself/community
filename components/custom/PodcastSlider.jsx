import Link from "next/link";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { formatDate } from "@/lib/formatDate.js";

export default function PodcastSlider({ podcasts }) {
  return (
    <div className="w-full">
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
        <div className="splide__arrows flex w-full justify-between items-center -mt-12">
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
              <Link href={`/${podcast.url_path}`} className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg border">
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
  )
}
