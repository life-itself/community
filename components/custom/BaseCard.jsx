import Link from "next/link"

import { formatDate } from "@/lib/formatDate"
import { Avatar } from "@/components/Avatar"


export function BaseCard({ image, title, description, url_path, date, categories, authors }) {
  return (
    <div className="flex flex-col items-start gap-6">
      {/* image */}
      {image && (
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="aspect-[16/9] sm:aspect-[2/1] lg:aspect-[3/2] rounded-2xl bg-gray-100 object-cover"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
      )}

      {/* meta */}
      {(date || categories) && (
        <div className="flex flex-col gap-2 text-sm">
          {date && (
            <time dateTime={date} className="text-gray-500">
              {formatDate(date)}
            </time>
          )
          }
          {categories && categories.length > 0 && (
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/categories/${category}#all-blog-posts`}
                  className="relative z-10 text-xs text-primary hover:text-gray-500 underline underline-offset-2 decoration-secondary decoration-2"
                >
                  {category}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {/* title and description */}
      <div className="group relative">
        <h3 className="text-lg font-semibold leading-6 text-primary group-hover:text-gray-600">
          <Link href={'/' + url_path}>
            <span className="absolute inset-0" />
            {title}
          </Link>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{description}</p>
      </div>

      {/* authors */}
      {authors && (
        <div className="flex items-end grow gap-4">
          {authors.map((author) => (
            <Avatar
              key={author.name}
              name={author.name}
              href={'/' + author.url_path}
              img={author.avatar}
              size="6"
            />
          ))}
        </div>

      )}
    </div>
  )
}
