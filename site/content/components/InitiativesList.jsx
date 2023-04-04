import InitiativeCard from "./InitiativeCard"

export default function InitiativesList({ heading, initiatives, status = [] }) {
  return (
    <div>
      {heading && <h3 className="text-2xl font-bold font-headings tracking-tight text-zinc-800 dark:text-zinc-100">{heading}</h3>}
      <ul role="list" className="mx-auto mt-6 !pl-0 grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {initiatives?.filter(initiative => {
          const initiativeStatus = initiative.status || initiative.resolution
          return status.includes(initiativeStatus)
        }).map(initiative => (
          <InitiativeCard key={initiative._id} initiative={initiative} image={initiative.image} />
        ))}
      </ul>
    </div>
  )
}