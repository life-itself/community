/* eslint import/no-default-export: off */
import Link from "next/link";
import allPersons from "../.contentlayer/generated/Person/_index.json";
import { formatDate } from "@/lib/formatDate.js";

export default function InitiativeLayout({ children, frontMatter }) {
  const { title, image, description, homepage, status, team, alumni, start, end } = frontMatter;
  
  const homepageUrl = homepage?.startsWith("http") ? homepage : `https://lifeitself.org/initiatives${homepage}`
  const contributors = allPersons.filter(person => team.concat(alumni).includes(person.id))
  
  return (
    <div className="relative mx-auto max-w-2xl lg:max-w-5xl px-4 sm:px-16 lg:px-20 mt-16 sm:mt-20">
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-20">
        <div className="lg:col-span-2 lg:max-w-xl">
          <h1 className="text-4xl font-bold font-headings tracking-tight text-primary sm:text-5xl">{title}</h1>
          <div className="mt-6 text-base text-primary">
            {description}
          </div>
        </div>
        <div className="lg:row-start-2 lg:col-start-2 sm:max-w-sm">
          <img alt={title} src={image} width="800" height="800" className="aspect-square shadow-sm rounded-2xl bg-zinc-100 object-cover border" loading="lazy" />
        </div>
        <div className="lg:row-start-2 lg:col-start-1">
          <div className="max-w-xs sm:max-w-none">
            <h2 className="text-2xl font-bold font-headings text-primary">Information</h2>
            <dl className="mt-2 px-1 divide-y divide-gray-200 border-b border-t border-gray-200">
              {homepage && homepageUrl && <div className="flex justify-between gap-x-2 py-3 text-sm font-medium">
                <dt className="text-gray-500">Homepage</dt>
                <dd className="sm:whitespace-nowrap flex text-primary w-min overflow-x-auto">
                  <a href={homepageUrl} className="underline hover:text-indigo-600">{homepageUrl}</a>
                </dd>
              </div>}
              {start && <div className="flex justify-between py-3 text-sm font-medium">
                <dt className="text-gray-500">Start date</dt>
                <dd className="whitespace-nowrap text-primary">{formatDate(start)}</dd>
              </div>}
              {end && <div className="flex justify-between py-3 text-sm font-medium">
                <dt className="text-gray-500">End Date</dt>
                <dd className="whitespace-nowrap text-primary">{formatDate(end)}</dd>
              </div>}
              {status && <div className="flex items-center justify-between py-3 text-sm font-medium">
                <dt className="text-gray-500">Status</dt>
                <dd className="whitespace-nowrap text-primary text-xs capitalize px-2.5 py-1 ring-1 ring-inset ring-gray-300 rounded-full">{status}</dd>
              </div>}
            </dl>
          </div>
          <div className="max-w-xs lg:max-w-none mt-10">
            <h3 className="font-bold font-headings text-2xl text-primary">Contributors</h3>
            <ul role="list" className="mt-2 divide-y divide-gray-200 border-b border-t border-gray-200">
              {contributors?.map((person) => (
                <li key={person._id} className="group relative flex items-center py-3">
                  <div className="absolute w-full h-full z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100" />
                  <Link href={person.url_path} className="flex items-center px-1">
                    <span className="absolute w-full h-full z-20" />
                    <img src={person.avatar} alt="" className="z-10 h-8 w-8 rounded-full" />
                    <p className="z-10 ml-4 text-sm font-medium text-primary">{person.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="docs prose prose-headings:font-headings prose-headings:w-fit prose-a:break-words lg:col-span-2">
          {children}
        </div>
      </div>
    </div>
  );
}
