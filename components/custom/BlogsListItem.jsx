import { useContext } from "react";

import { formatDate } from "@/lib/formatDate.js";
import { Avatar } from "@/components/Avatar";
import { CategoryContext } from "@/contexts/CategoryContext";


export function BlogsListItem({ post }) {
  const { onCategorySelect } = useContext(CategoryContext);

  const handleCategoryClick = (e, category) => {
    e.preventDefault();
    onCategorySelect(category);
  }

  // TODO pass ready url_paths instead of adding `/` here

  return (
    <div key={post._id} className="py-6 space-y-4">
      <h2 className="text-3xl font-bold md:tracking-tight md:text-3xl m-0 w-fit">
        <a href={'/' + post.url_path} className="no-underline hover:underline">
          {post.title}
        </a>
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
      {post.categories && <div className="flex flex-wrap space-x-2">
        {post.categories.map(category => (
          <a key={category} href={'/categories/' + category} onClick={(e) => handleCategoryClick(e, category)} className="pr-3 underline m-0 text-xs uppercase">#{category}</a>
        ))}
      </div>}
      {post.description && <p className="my-0 line-clamp-3">{post.description}</p>}
      <a href={'/' + post.url_path} className="block text-sm text-gray-500 hover:text-gray-900 w-fit">{"[ Read more ]"}</a>
    </div>
  )
}
