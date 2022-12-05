/* eslint import/no-default-export: off */
import { formatDate } from "@/lib/formatDate.js";

export default function DocsLayout({ children, frontMatter }) {
  const { title, created, image } = frontMatter;
  return (
    <article className="docs prose font-poppins dark:prose-invert prose-a:break-words mx-auto p-6">
      <header>
        <div className="mb-6">
          {created && (
            <p className="text-sm text-zinc-400 dark:text-zinc-500 m-0">
              <time dateTime={created}>{formatDate(created)}</time>
            </p>
          )}
          {title && <h1 className="mb-2">{title}</h1>}
          {image && <img src={`/${image}`} className="w-full h-auto m-0 contrast-50 drop-shadow-md" />}
        </div>
      </header>
      <section>{children}</section>
    </article>
  );
}
