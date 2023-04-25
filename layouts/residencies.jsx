import { formatDate } from "@/lib/formatDate.js";
import allPersons from "../.contentlayer/generated/Person/_index.json";

export default function ResidencyLayout({ children, frontMatter }) {
  const { title, image, description, facilitators, start, end, location, cost, "apply-button": applyButton } = frontMatter;

  const idToNameMap = {}

  for (const obj of allPersons) {
    idToNameMap[obj.id] = obj.name;
  }
  
  // facilitators is an array of hardcoded names and/or ids (from content/people)
  // Replace ids with names in the facilitators array
  const facilitatorsArray = facilitators?.map(item => {
    const name = idToNameMap[item];
    return name ? name : item;
  });

  const isUpcomingResidency = new Date(start) > new Date()
  
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
          <img alt={title} src={image} width="800" height="800" className="shadow-md rounded-2xl border" loading="lazy" />
        </div>
        <div className="lg:row-start-2 lg:col-start-1">
          <div className="max-w-xs sm:max-w-none">
            <h2 className="text-2xl font-bold font-headings text-primary">Information</h2>
            <dl className="mt-2 px-1 divide-y divide-gray-200 border-b border-t border-gray-200">
              {start && <div className="flex justify-between py-3 text-sm font-medium">
                <dt className="text-gray-500">Start date</dt>
                <dd className="whitespace-nowrap text-primary">{formatDate(start)}</dd>
              </div>}
              {end && <div className="flex justify-between py-3 text-sm font-medium">
                <dt className="text-gray-500">End date</dt>
                <dd className="whitespace-nowrap text-primary">{formatDate(end)}</dd>
              </div>}
              {location && <div className="flex justify-between gap-x-2 py-3 text-sm font-medium">
                <dt className="text-gray-500">Location</dt>
                <dd className="sm:whitespace-nowrap flex text-primary w-min overflow-x-auto">
                  {location}
                </dd>
              </div>}
              {cost && <div className="flex justify-between gap-x-2 py-3 text-sm font-medium">
                <dt className="text-gray-500">Cost</dt>
                <dd className="sm:whitespace-nowrap flex text-primary w-min overflow-x-auto">
                  {cost}
                </dd>
              </div>}
            </dl>
          </div>
          <div className="max-w-xs lg:max-w-none mt-10">
            <h3 className="font-bold font-headings text-2xl text-primary">Facilitators</h3>
            <ul className="mt-2 divide-y divide-gray-200 border-b border-t border-gray-200 list-[square] list-inside">
              {facilitatorsArray?.map((person) => (
                <li key={person._id} className="py-3 ml-1 text-sm font-medium text-primary">
                  {person}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {applyButton && isUpcomingResidency && <a href={applyButton} className="text-sm font-medium bg-secondary w-fit px-4 py-2 rounded">Apply now</a>}
        <div className="docs prose prose-headings:font-headings prose-headings:w-fit prose-a:break-words lg:col-span-2">
          {children}
        </div>
      </div>
    </div>
  );
}
