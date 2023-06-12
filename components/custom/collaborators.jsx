const collabs = [
  {
    title: "Plum Village",
    url: "",
    logo: "assets/site/collaborators/Plum-village-logo.png"
  },
  {
    title: "LSE",
    url: "",
    logo: "assets/site/collaborators/LSE_Logo.png"
  },
  {
    title: "Open Knowledge International",
    url: "",
    logo: "assets/site/collaborators/Open-Knowledge-International-Logo.png"
  },
  {
    title: "Rockefeller Foundation",
    url: "",
    logo: "assets/site/collaborators/Rockefeller-Foundation.png"
  },
  {
    title: "IPPR",
    url: "",
    logo: "assets/site/collaborators/IPPR-Logo_pink.png"
  },
  {
    title: "Untitled",
    url: "",
    logo: "assets/site/collaborators/untitled_logo.png"
  },
  {
    title: "CRI",
    url: "",
    logo: "assets/site/collaborators/CRI-logo.png"
  },
]

export default function Collaborators() {
  return (
    <section className="mx-auto max-w-7xl pt-20 lg:py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-headings font-bold tracking-tight sm:text-4xl text-center lg:text-left mb-6">Collaborators</h2>
      <div className="grid gap-8 grid-cols-2 md:grid-cols-6 lg:grid-cols-none lg:grid-flow-col lg:auto-cols-auto grayscale">
        {collabs.map(collaborator => (
          <a key={collaborator.title} href={collaborator.url} className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-12" src={collaborator.logo} alt={collaborator.title} />
          </a>
        ))}
      </div>
    </section>
  )
}