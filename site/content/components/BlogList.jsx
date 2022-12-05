import { useState } from "react";
import { formatDate } from "@/lib/formatDate.js";

const POSTS_PER_PAGE = 5

function Pagination({ totalPages, currentPage }) {
  // const basePath = window.pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="py-3 mt-6">
      <nav className="flex justify-between text-sm font-poppins">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <a
            href={""}
            rel="prev"
          >
            Previous
          </a>
        )}
        <span>
          page {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <a href={`blog/`} rel="next">
            Next
          </a>
        )}
      </nav>
    </div>
  )
}

function getBody(post) {
  const body = /^[A-Za-z0-9 ].*/gm.exec(post)
  return body[0]
}

/* eslint import/no-default-export: off */
export default function BlogList ({ posts }) {
  const [ displayPosts, setDisplayPosts ] = useState(posts.slice(0, POSTS_PER_PAGE))

  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <ol className="font-poppins px-0 pt-3 divide-y divide-theme-yellow">
      {displayPosts && displayPosts.map(post => (
        <li key={post._id} className="list-none py-6 space-y-4">
          <div className="space-y-4">
            <a href={post.url_path} className="no-underline hover:underline">
              <h1 className="text-4xl font-bold md:tracking-tight md:text-3xl m-0">{post.title}</h1>
            </a>
            {post.tags && <div className="flex flex-wrap space-x-2">
              {post.tags.map(tag => (
                <a key={tag} href="#" className="pr-3 hover:underline dark:text-gray-900 m-0 capitalize">#{tag}</a>
              ))}
            </div>}
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <p className="text-sm m-0">{formatDate(post.created)}</p>
                <span>•</span>
                <p className="text-sm m-0">{post.authors.join(", ")}</p>
              </div>
            </div>
          </div>
          <div className="">
            {post.description 
              ? <p className="my-0">{post.description}</p>
              : <p className="mt-0 mb-2 line-clamp-3">{getBody(post.body.raw)}</p>
            }
            <a href={post.url_path} className="text-sm text-gray-500 hover:text-gray-900">{"[ Read more ]"}</a>
          </div>
        </li>
      ))}
      <Pagination totalPages={pagination.totalPages} currentPage={pagination.currentPage} />
      <div />
    </ol>
  )
}