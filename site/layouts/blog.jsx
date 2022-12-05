import Link from "next/link";
import { formatDate } from "@/lib/formatDate.js";

/* eslint import/no-default-export: off */
export default function BlogLayout({ children, frontMatter }) {
  const { created, title, authors, tags, categories } = frontMatter;
  return (
    <>
      <Link href="/blog" className="flex flex-col items-center w-fit mx-auto space-x-2 pt-6 text-gray-500 hover:text-gray-900 hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>
        <p>return to the blog list</p>
      </Link>
      <article className="docs prose prose-a:break-words dark:prose-invert font-poppins max-w-2xl px-6 pt-6 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
        <header className="w-full mx-auto space-y-4 text-center">
          <div className="flex space-x-4 justify-center border-b border-t border-theme-yellow">
            {categories ? categories.map((category,i) => (
              <a key={i} className="py-4 text-xs font-semibold tracking-wider uppercase no-underline hover:underline">#{category}</a>
            )): <a className="py-4 text-xs font-semibold tracking-wider uppercase no-underline hover:underline">#uncategorized</a>}
          </div>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
          <div className="flex items-center justify-center text-sm dark:text-gray-400 space-x-6">
            <div className="flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="flex items-center my-0">
                by {" "}
                <a rel="noopener noreferrer" href="#" className="flex underline ml-1">
                  <span itemProp="name">{authors.join(", ")}</span>
                </a>
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <time datetime="2021-02-12 15:34:18-0200">on {formatDate(created)}</time>
            </div>
          </div>
        </header>
        <section>
          {children}
        </section>
        <div className="flex items-center space-x-4 py-6 border-b border-theme-yellow text-sm capitalize">{tags &&
          <>
            tags:&nbsp;&nbsp;
            {tags.map((tag,i) => (
              <a key={i} className="no-underline hover:underline italic">#{tag}</a>
            ))}
          </>}
        </div>
      </article>
    </>
  );
}
