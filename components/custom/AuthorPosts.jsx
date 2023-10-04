import { useState } from "react";
import allBlogs from "../../.contentlayer/generated/Blog/_index.json";
import { formatDate } from "@/lib/formatDate.js";

const BLOGS_LOAD_COUNT = 6

export function AuthorPosts({ id, name }) {
  const [postsCount, setPostsCount] = useState(BLOGS_LOAD_COUNT);

  const handleLoadMore = () => {
    setPostsCount((prevCount) => prevCount + BLOGS_LOAD_COUNT);
  };

  const authorPosts = allBlogs.filter((post) => {
    // TODO shouldn't authors be required?
    if (!post.authors) return false
    return post.authors.includes(id)
  })
    .sort((a, b) => new Date(b.created) - new Date(a.created))

  return (
    <>
      <div>
        <h2>Posts by {name}</h2>
      </div>
      <ul className="list-none p-0 grid md:grid-cols-2 gap-4">
        {authorPosts && authorPosts.slice(0, postsCount).map(post => (
          <li key={post._id} className="flex flex-col overflow-hidden rounded-lg shadow-lg p-0">
            <div className="flex-shrink-0 m-0">
              {post.image
                ? <img className="h-48 w-full object-cover m-0" src={post.image} alt="" />
                : <span className="flex h-48 w-full bg-gray-200" />
              }
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6 m-0">
              <div className="flex-1">
                <p className="text-xs font-medium text-primary space-x-2">
                  {post.categories?.map(category =>
                    <span key={category} className="hover:underline">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </span>
                  )}
                </p>
                <a href={`/${post.url_path}`} className="mt-2 block no-underline">
                  <p className="text-lg font-semibold font-headings text-primary underline">{post.title}</p>
                  {post.description && <p className="mt-3 text-base text-gray-500 line-clamp-3">{post.description}</p>}
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time>{formatDate(post.created)}</time>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {authorPosts?.length > postsCount && (
        <div className="flex pt-4 w-full">
          <button
            onClick={handleLoadMore}
            type="button"
            className="inline-flex items-center justify-center rounded bg-secondary mx-auto px-2.5 py-1.5 text-sm font-medium text-primary shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            Show more
          </button>
        </div>
      )}
    </>
  )
}
