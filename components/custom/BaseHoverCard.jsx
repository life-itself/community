import Link from "next/link";

import { LinkIcon } from "./icons";

export function BaseHoverCard({ url_path, image, title, description }) {
  return (
    <div className="group relative flex flex-col items-start gap-y-3 m-0 p-0">
      <div role="heading" className="text-base font-semibold text-primary">
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
        <Link href={url_path} className="flex flex-col gap-y-3 transition font-medium text-primary group-hover:text-secondary">
          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
          {image && <img src={image} className="z-10 w-full mb-2 aspect-video object-cover object-left m-0 rounded-lg shadow-sm" />}
          <span className="relative z-10">
            {!image &&
              <LinkIcon aria-hidden="true" className="z-10 h-4 w-4 inline" />
            }{" "}
            {title}
          </span>
        </Link>
      </div>
      <p className="relative z-10 text-sm text-primary/80 line-clamp-3">
        {description}
      </p>
    </div>
  )
}
