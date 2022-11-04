import {
  GlobeAltIcon,
  LocationMarkerIcon,
  UserCircleIcon,
  BriefcaseIcon,
  HashtagIcon
} from '@heroicons/react/solid';

export default function Profile({ children, frontMatter }) {
  const { title, url, locations, people, topic, activity, image } = frontMatter;
  return (
    <div className="max-w-2xl mx-auto pb-16 pt-10 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="mt-4">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h1>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* details */}
        <div className="lg:max-w-lg lg:self-end text-gray-500">
          <div className="flex flex-col mt-6 gap-y-3">
            {url && (
              <div className="flex flex-row">
                <GlobeAltIcon className="h-5 w-5" />
                <ul className=" ml-2 text-sm">
                  <a href={url} className="underline">
                    {url}
                  </a>
                </ul>
              </div>
            )}
            {locations?.length > 0 && (
              <div className="flex flex-row">
                <LocationMarkerIcon className="h-5 w-5" title="Locations" />
                <ul className=" ml-2 text-sm text-gray-500">
                  {locations.map((value, index) => {
                    return (
                      <li key={index} className="inline-block mr-2">
                        {value}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {people?.length > 0 && (
              <div className="flex flex-row">
                <UserCircleIcon className="h-5 w-5" />
                <ul className="ml-2 text-sm text-gray-500 capitalize">
                  {people.map((value, index) => {
                    return (
                      <li key={index} className="inline-block mr-2">
                        {value + (index === people.length - 1 ? '' : ',')}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {activity?.length > 0 && (
              <div className="flex flex-row">
                <BriefcaseIcon className="h-5 w-5" />
                <ul className="ml-2 text-sm text-gray-500 capitalize">
                  {activity.map((value, index) => {
                    return (
                      <li key={index} className="inline-block mr-2">
                        {value + (index === activity.length - 1 ? '' : ',')}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {topic?.length > 0 && (
              <div className="flex flex-row">
                <HashtagIcon className="h-5 w-5" />
                <ul className="ml-2 text-sm text-gray-500 capitalize">
                  {topic.map((value, index) => {
                    return (
                      <li key={index} className="inline-block mr-2">
                        {value + (index === topic.length - 1 ? '' : ',')}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Organization information
            </h2>
            <div className="mt-6 space-y-6 text-base text-gray-500">{children}</div>
          </section>
        </div>
        {/* image */}
        <div className="mt-10 lg:mt-0 row-span-2">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img
              src={image.cached_new ? image.cached_new : image.url}
              alt={title}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
