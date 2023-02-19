import { useState } from "react";
import { formatDate } from "@/lib/formatDate.js";

const BLOGS_LOAD_COUNT = 5

export function BlogsList({ posts }) {
  const [postsCount, setPostsCount] = useState(BLOGS_LOAD_COUNT);

  const handleLoadMore = () => {
    setPostsCount((prevCount) => prevCount + BLOGS_LOAD_COUNT);
  };

  return (
    <ol className="font-poppins px-0 pt-3 divide-y divide-secondary">
      {posts && posts.slice(0, postsCount).map(post => (
        <li key={post._id} className="list-none py-6 space-y-4">
          <div className="space-y-1">
            <a href={post.url_path} className="no-underline hover:underline">
              <h1 className="text-4xl font-bold md:tracking-tight md:text-3xl m-0 w-fit">{post.title}</h1>
            </a>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <p className="text-sm m-0">{formatDate(post.created)}</p>
                {post.authors && (
                  <>
                    <span>•</span>
                    {post.authors.map(author => (
                      <a key={author.id} href={author.url_path} className="group block flex-shrink-0">
                        <div className="flex items-center space-x-2">
                          <img
                            className="inline-block h-6 w-6 rounded-full m-0"
                            src={author.avatar}
                            alt={author.name}
                          />
                          <p className="text-sm font-medium text-primary dark:text-primary-dark ml-3">
                            {author.name}
                          </p>
                        </div>
                      </a>
                    ))}
                  </>
                )}
              </div>
            </div>
            {post.categories && <div className="flex flex-wrap space-x-2">
              {post.categories.map(category => (
                <p key={category} className="pr-3 underline m-0 text-xs uppercase">#{category}</p>
              ))}
            </div>}
          </div>
          <div className="flex flex-col space-y-1">
            {post.description && <p className="my-0 line-clamp-3">{post.description}</p>}
            <a href={post.url_path} className="text-sm text-gray-500 hover:text-gray-900 pt-2 w-fit">{"[ Read more ]"}</a>
          </div>
        </li>
      ))}
      {posts.length > postsCount && (
        <div className="pt-4">
          <button
            onClick={handleLoadMore}
            type="button"
            className="inline-flex items-center rounded bg-secondary px-2.5 py-1.5 text-sm font-medium text-primary shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            Show more
          </button>
        </div>
      )}
    </ol>
  )
}