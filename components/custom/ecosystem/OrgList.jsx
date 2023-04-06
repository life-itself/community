// import Link from 'next/link';

export default function OrgList({ orgs }) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {orgs.map((org) => {
        if (org) return (<div key={org.id} className="group relative">
          <div className="w-full min-h-80 bg-beige aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img
              src={(org.logo.cached_new || org.logo.url) ?? (org.image.cached_new || org.image.url)}
              alt={org.title}
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
          </div>
          <div className="mt-2 flex justify-between">
            <div>
            <a className="extra-small exception font-medium tracking-wide text-accent uppercase">{org.category}</a>
            <h3 className="text-base font-medium hover:underline text-semiblack">
              {/* <Link href={org._raw.flattenedPath}> */}
                <a href={org._raw.flattenedPath} className="!visible">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {org.title}
                </a>
              {/* </Link> */}
            </h3>
            <p className="mt-1 text-sm text-darkgray pb-1">{org.url}</p>
            <p className="text-sm text-gray-700">{org.body.raw.slice(0, 100) + '…'}</p>
            </div>
          </div>
        </div>)
      })}
    </div>
  )
}
