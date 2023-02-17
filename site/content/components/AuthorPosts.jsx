import { useState } from "react";
import allBlogs from "../../.contentlayer/generated/Blog/_index.json";
import { formatDate } from "@/lib/formatDate.js";
import { PostBody } from "./getPageBody.jsx";

const BLOGS_LOAD_COUNT = 6

export function AuthorPosts({ id, name }) {
  const [postsCount, setPostsCount] = useState(BLOGS_LOAD_COUNT);

  const handleLoadMore = () => {
    setPostsCount((prevCount) => prevCount + BLOGS_LOAD_COUNT);
  };

  const authorPosts = allBlogs.filter(post => post.authors.includes(id))
    .sort((a,b) => new Date(b.created) - new Date(a.created))
  
  return (
    <>
      <div>
        <h2>Posts by {name}</h2>
      </div>
      <ul className="list-none p-0 grid grid-cols-2 gap-4">
        {authorPosts && authorPosts.slice(0, postsCount).map(post => (
          <li key={post._id} className="flex flex-col overflow-hidden rounded-lg shadow-lg p-0">
            <div className="flex-shrink-0 m-0">
              {post.image && <img className="h-48 w-full object-cover m-0" src={post.image} alt="" />}
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6 m-0">
              <div className="flex-1">
                <p className="text-sm font-medium text-primary space-x-2">
                  {post.categories?.map(category =>
                    <span key={category} className="underline capitalize">
                      {category}
                    </span>
                  )}
                </p>
                <a href={`/${post.url_path}`} className="mt-2 block no-underline">
                  <p className="text-xl font-semibold font-headings text-gray-900 underline">{post.title}</p>
                  <PostBody code={post.body.code} frontmatterImage={post.image} />
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex space-x-1 text-sm text-gray-500">
                  <span aria-hidden="true">&middot;</span>
                  <time dateTime={post.created}>{formatDate(post.created)}</time>
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