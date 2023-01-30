/* eslint import/no-default-export: off */
export default function PeopleLayout({ children, frontMatter }) {
  const { name, avatar } = frontMatter;

  return (
    <article className="prose text-primary dark:text-primary-dark dark:prose-invert prose-headings:font-headings prose-a:break-words w-full mx-auto p-6">
      <header>
        <div className="flex items-center space-x-6">
          {avatar && <div className="w-48">
            <img className="rounded-full object-cover shadow-lg" src={avatar} alt={name} />
          </div>}
          <div className="flex flex-col">
            {name && name.split(" ").map(n => (
              <h1 key={n} className="even:text-primary odd:text-secondary even:text-5xl odd:text-6xl m-0">{n}</h1>
            ))}
          </div>
        </div>
      </header>
      <section>{children}</section>
    </article>
  );
}
