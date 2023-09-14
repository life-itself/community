import { useState } from "react";
import { BlogsListItem } from "./BlogsListItem";

const BLOGS_LOAD_COUNT = 5


export function BlogsList({ posts }) {
  const [postsCount, setPostsCount] = useState(BLOGS_LOAD_COUNT);

  const handleLoadMore = () => {
    setPostsCount((prevCount) => prevCount + BLOGS_LOAD_COUNT);
  };

  return (
    <div className="divide-y divide-secondary">
      {posts && posts.slice(0, postsCount).map(post => (
        <BlogsListItem key={post._id} post={post} />
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
    </div>
  )
}
