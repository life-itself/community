/* eslint import/no-default-export: off */
import { formatDate } from "@/lib/formatDate.js";
import { Avatar } from "@/components/Avatar.jsx";
import { ShareMenu } from "@/components/custom/ShareMenu.jsx";

import { TwitterIcon, FacebookIcon, LinkedInIcon } from "@/components/custom/icons";

export default function BlogLayout({ children, frontMatter }) {
  const { title, created, image, authorsDetails, categories, tags, readingTime } = frontMatter;

  const shareOptions = [
    { name: "Share on Twitter", href: "test", icon: TwitterIcon },
    { name: "Share on Facebook", href: "test", icon: FacebookIcon },
    { name: "Share on LinkedIn", href: "test", icon: LinkedInIcon }
  ]

  return (
    <article className="mx-auto max-w-3xl px-6 pt-12">
      <header className="flex flex-col gap-y-5 mb-8">
        {/* TITLE */}
        <h1 className="mb-0 text-3xl md:text-4xl font-headings font-bold leading-tight">
          {title}
        </h1>
        {/* CATEGORIES */}
        <div className="flex justify-start gap-2 py-2 border-b border-t border-primary/10">
          {categories.map((category, index) => (
            <a
              key={`${category}-${index}`}
              href={`/categories/${category}`}
              className="text-xs text-primary hover:text-gray-500 underline underline-offset-2 decoration-secondary decoration-2"
            >
              {category}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-x-3 text-sm text-primary/75">
          {/* AUTHOR */}
          {authorsDetails.map(({ name, avatar, isDraft, url_path }) => (
            <Avatar
              key={url_path}
              name={name}
              img={avatar}
              href={url_path && !isDraft ? `/${url_path}` : undefined}
            />
          ))}
          <span className="text-md">·</span>
          {/* DATE */}
          <div className="flex items-center gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            <time dateTime={created}>{formatDate(created)}</time>
          </div>
          <span className="text-md">·</span>
          {/* READING TIME */}
          <span>{readingTime}</span>
          {/* SHARE */}
          <div className="flex justify-end flex-grow">
            <ShareMenu copyLink={"test"} shareOptions={shareOptions} />
          </div>
        </div>
        {/* IMAGE */}
        {image && <img src={image} alt={title} className="w-full h-auto !m-0" />}
      </header>

      <section className="docs prose lg:prose-xl prose-headings:font-headings dark:prose-invert prose-a:break-words max-w-none">{children}</section>

      <div className="flex flex w-full flex-wrap items-center space-x-4 py-6 border-b border-theme-yellow text-sm capitalize">{tags &&
        <>
          tags:&nbsp;&nbsp;
          {tags.map((tag, i) => (
            <a key={i} className="no-underline hover:underline italic">#{tag}</a>
          ))}
        </>}
      </div>
    </article>
  );
}
