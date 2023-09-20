import Link from "next/link";
import { Avatar } from "@/components/Avatar";

import { formatDate } from "@/lib/formatDate.js";


export function BlogsFeatured({ posts }) {
  const [featuredPost, ...otherPosts] = posts;

  return (
    <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
      <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
        <time dateTime={featuredPost.created} className="block text-sm leading-6 text-gray-600">
          {formatDate(featuredPost.created)}
        </time>
        <h2 id="featured-post" className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {featuredPost.title}
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">{featuredPost.description}</p>
        <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
          <div className="flex">
            <Link
              href={'/' + featuredPost.url_path}
              className="text-sm font-semibold leading-6 text-indigo-600"
              aria-describedby="featured-post"
            >
              Continue reading <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <Avatar
            img={featuredPost.authors[0]?.avatar}
            href={'/' + featuredPost.authors[0]?.url_path}
            name={featuredPost.authors[0]?.name}
            size="6"
            className="flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
          />
        </div>
      </article>
      <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
        <div className="-my-12 divide-y divide-gray-900/10">
          {otherPosts.map((post) => (
            <article key={post._id} className="py-12">
              <div className="group relative max-w-xl">
                <time dateTime={post.created} className="block text-sm leading-6 text-gray-600">
                  {formatDate(post.created)}
                </time>
                <h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                  <Link href={'/' + post.url_path}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-4 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="mt-4">
                <Avatar
                  img={featuredPost.authors[0]?.avatar}
                  href={'/' + featuredPost.authors[0]?.url_path}
                  name={featuredPost.authors[0]?.name}
                  size="6"
                  className="flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
