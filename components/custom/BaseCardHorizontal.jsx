import Link from "next/link"
import { formatDate } from "@/lib/formatDate"

export function BaseCardHorizontal({ image, date, title, description, url_path, authors }) {
  return (
    <div className="relative isolate flex flex-col gap-8 lg:flex-row">
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div>
        <div className="text-xs">
          <time dateTime={date}>{formatDate(date)}</time>
        </div>
        <div className="group relative max-w-xl">
          <h3 className="mt-3 text-xl font-semibold font-headings group-hover:text-primary/80">
            <Link href={url_path}>
              <span className="absolute inset-0" />
              {title}
            </Link>
          </h3>
          <p className="mt-3 text-sm">{description}</p>
        </div>
        <div className="mt-4 flex border-t border-primary/20 pt-4">
          <div className="relative flex flex-col gap-x-4 space-y-2">
            <h3 className="text-sm font-medium underline underline-offset-2 decoration-2 decoration-secondary">Facilitators:</h3>
            <div className="text-xs">
              {authors.map(author => (
                <p key={author} className="leading-4">
                  <span className="absolute inset-0" />
                  {author}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
