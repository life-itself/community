/* eslint import/no-default-export: off */
export default function ResearchLayout({ children, frontMatter }) {
  const { title } = frontMatter;
  return (
    <article className="prose text-primary dark:text-primary-dark dark:prose-invert prose-headings:font-headings prose-a:break-words mx-auto p-6">
      <header>
        <div className="mb-6">
          {title && <h1 className="text-6xl font-bold font-headings tracking-tight text-gray-800">{title}</h1>}
        </div>
      </header>
      <section className="asdf">{children}</section>
      <style jsx>{`
        section > :global(p:first-child) {
          font-family: "EB Garamond", serif;
          font-size: 1.6rem;
          line-height: 1.5;
        }
        section > :global(p:first-child a)  {
          text-decoration-thickness: 1px;
          text-underline-offset: 2px;
          text-decoration-style: dashed;
        }
        section > :global(p:first-child a:hover)  {
          text-decoration-style: solid;
        }
        section :global(:is(h1, h2, h3, h4, h5, h6) > a) {
          display: none;
        }
      `}</style>
    </article>
    
  );
}
