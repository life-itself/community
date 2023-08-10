/* eslint import/no-default-export: off */
import { formatDate } from "@/lib/formatDate.js";
import { Avatar } from "@/components/Avatar.jsx";
import Link from "next/link";

export default function BlogLayout({ children, frontMatter }) {
  const { title, created, image, authorsDetails, categories, tags } = frontMatter;

  return (
    <>
      <Link href="/blog" className="flex flex-col items-center w-fit mx-auto space-x-2 pt-6 text-gray-500 hover:text-gray-900 hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>
        <p>return to the blog list</p>
      </Link>
      <article className="docs prose prose-headings:font-headings dark:prose-invert prose-a:break-words mx-auto max-w-2xl px-6 pt-6">
        <header className="w-full mx-auto space-y-4 text-center">
          <div className="flex space-x-4 justify-center border-b border-t border-secondary">
            {/* {categories ? categories.map((category,i) => ( */}
            {/*   <a key={i} className="py-4 text-xs font-semibold tracking-wider uppercase no-underline hover:underline">#{category}</a> */}
            {/* )): <a className="py-4 text-xs font-semibold tracking-wider uppercase no-underline hover:underline">#uncategorized</a>} */}
            {categories ? categories.map((category, i) => (
              <p key={i} className="py-4 text-xs font-semibold tracking-wider uppercase no-underline ">#{category}</p>
            )) : <p className="py-4 text-xs font-semibold tracking-wider uppercase no-underline">#uncategorized</p>}
          </div>
          <div className="mb-4 flex-col items-center">
            {title && <h1 className="mb-0 text-4xl font-bold leading-tight md:text-5xl">{title}</h1>}
            <div className="flex items-center justify-center text-sm dark:text-gray-400 space-x-6">
              <div className="flex items-center space-x-1">
                {authorsDetails.map(({ name, avatar, isDraft, url_path }) => (
                  <Avatar
                    key={url_path}
                    name={name}
                    img={avatar}
                    href={url_path && !isDraft ? `/${url_path}` : undefined}
                  />
                ))}
              </div>
              <div className="flex items-center space-x-1 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <time dateTime={created}>{formatDate(created)}</time>
              </div>
            </div>
          </div>
          {image && <img src={image} alt={title} className="w-full h-auto m-0 drop-shadow-md" />}
        </header>
        <section>{children}</section>
        <div className="flex flex w-full flex-wrap items-center space-x-4 py-6 border-b border-theme-yellow text-sm capitalize">{tags &&
          <>
            tags:&nbsp;&nbsp;
            {tags.map((tag, i) => (
              <a key={i} className="no-underline hover:underline italic">#{tag}</a>
            ))}
          </>}
        </div>
      </article>
    </>
  );
}
