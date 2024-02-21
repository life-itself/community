/* eslint import/no-default-export: off */
import { formatDate } from "@/lib/formatDate.js";

export default function DocsLayout({ children, frontMatter }) {
  const { title, created } = frontMatter;
  return (
    <article className="docs prose text-primary dark:text-primary-dark dark:prose-invert prose-headings:font-headings prose-a:break-words mx-auto p-6">
      <header>
        <div className="mb-6">
          {title && <h1>{title}</h1>}
        </div>
      </header>
      <section>{children}</section>
    </article>
  );
}
