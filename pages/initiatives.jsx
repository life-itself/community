import Link from "next/link";
import { allInitiatives } from "contentlayer/generated";
import { BaseCard } from "@/components/custom/BaseCard";

export default function Initiatives({ activeProjects, inactiveProjects }) {
  return (
    <div className="relative mx-auto lg:max-w-4xl px-4 sm:px-16 lg:px-20 mt-16 sm:mt-20 space-y-8">
      <h1 className="text-4xl font-bold font-headings tracking-tight text-primary sm:text-5xl">Our Initiatives</h1>
      <div className="docs prose prose-headings:font-headings prose-a:break-words">
        <p>How do we bring about the shifts in being, culture and systems necessary to
          transform our social paradigm, and steer humanity and the planet into a flourishing future?</p>

        <p>Here at Life Itself, we engage in many different initiatives. Some are experiments, others stand
          alone works, and others are ongoing explorations. All are designed to create a wiser, weller world.
          Our projects fall under two broad themes:</p>

        <h3>Pioneering Community Living</h3>

        <p>At the core of what we do is the thesis that community living is key to embodying true transformation
          of ourselves and society.</p>

        <p>Why is community living so important? Because we need to combine inner transformation and outer development.
          This is difficult, but living in a conscious community makes it easier. You have mutual support, accountability,
          responsibility, connection.</p>

        <p>This is why we dedicate ourselves to creating pathways and providing tools for people to live in intentional communities.</p>

        <p>Examples: <Link href="/hubs">Co-living Hubs</Link>, <Link href="/initiatives/embodying-collective-transformation">Transformational Community Residencies</Link></p>

        <h3>Transforming the Narrative</h3>

        <p>We are undergoing one of the greatest paradigm shifts in history. At it’s foundations this shift requires a new way of being and new ways of doing.</p>

        <p>Our work brings inner transformation out of the domain of the purely spiritual, and seeks to cement it as a pillar of social change that works for all. We use rigorous enquiry and sensemaking to better understand how we can make this paradigm shift a positive transformation for society.</p>
      </div>
      <div className="py-1">
        <h3 className="text-2xl font-bold font-headings tracking-tight text-primary">Active Initiatives</h3>
        <ul role="list" className="mx-auto my-6 !pl-0 grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {activeProjects?.map(initiative => (
            <BaseCard key={initiative._id} {...initiative} />
          ))}
        </ul>
      </div>
      <div className="py-1">
        <h3 className="text-2xl font-bold font-headings tracking-tight text-primary">Currently Inactive Initiatives</h3>
        <ul role="list" className="mx-auto my-6 !pl-0 grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {inactiveProjects?.map(initiative => (
            <BaseCard key={initiative._id} {...initiative} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const initiatives = await allInitiatives
    .filter(initiative => initiative.url_path !== "initiatives")
    .sort((a, b) => new Date(b.created) - new Date(a.created))

  const active = ["active", "incubating"]

  const activeProjects = initiatives
    .filter(initiative => active.includes(initiative.status))

  const inactive = ["inactive", "completed"]

  const inactiveProjects = initiatives
    .filter(initiative => inactive.includes(initiative.status))

  return {
    props: {
      activeProjects,
      inactiveProjects,
      title: "Initiatives",
      description: "Here at Life Itself, we engage in many different initiatives.",
      url_path: "/initiatives",
    }
  }
}
