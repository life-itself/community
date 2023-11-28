import Link from "next/link";

import { formatDate } from "@/lib/formatDate.js";
import { Avatar } from "@/components/Avatar";


export function BlogsListItem({ post }) {
  // TODO pass ready url_paths instead of adding `/` or `#` here

  return (
    <div className="py-6 space-y-4">
      <h2 className="text-3xl font-bold md:tracking-tight md:text-3xl m-0 w-fit">
        <Link href={'/' + post.url_path} className="no-underline hover:underline">
          {post.title}
        </Link>
      </h2>
      <div className="flex items-center space-x-2">
        <p className="text-sm m-0">{formatDate(post.created)}</p>
        {post.authors && (
          <>
            <span className="text-md">·</span>
            {post.authors.map(author => (
              <Avatar key={author.name} name={author.name} img={author.avatar} href={'/' + author.url_path} size="6" />
            ))}
          </>
        )}
      </div>
      {post.categories && <div className="flex flex-wrap gap-x-2">
        {post.categories.map(category => (
          <Link key={category} href={'/categories/' + category + '#all-blog-posts'}>
            <span className="pr-3 underline m-0 text-xs uppercase">
              #{category}
            </span>
          </Link>
        ))}
      </div>}
      {post.description && <p className="my-0 line-clamp-3">{post.description}</p>}
      <Link href={'/' + post.url_path} className="block">
        <button className="text-sm text-gray-500 hover:text-gray-900 w-fit">
          {"[ Read more ]"}
        </button>
      </Link>
    </div>
  )
}
