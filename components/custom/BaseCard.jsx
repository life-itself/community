import { formatDate } from "@/lib/formatDate"

export function BaseCard({ image, title, description, url_path, date, categories, author }) {
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
              {/* TODO adjust href */}
              {categories.map((category, index) => (
                <a
                  key={`${category}-${index}`}
                  href={`/blog?category=${category}`}
                  className="relative z-10 text-xs text-primary hover:text-gray-500 underline underline-offset-2 decoration-secondary decoration-2"
                >
                  {category}
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      {/* title and description */}
      <div className="group relative">
        <h3 className="text-lg font-semibold leading-6 text-primary group-hover:text-gray-600">
          <a href={url_path}>
            <span className="absolute inset-0" />
            {title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{description}</p>
      </div>

      {/* author */}
      {author && (
        <div className="relative flex items-center gap-x-4 mt-auto">
          <img src={author.avatar} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href={author.url_path}>
                <span className="absolute inset-0" />
                {author.name}
              </a>
            </p>
            <p className="text-gray-600">{author.role}</p>
          </div>
        </div>
      )}
    </div>
  )
}
