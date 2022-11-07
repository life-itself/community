export default function Collaborators() {
  return (
    <section className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Collaborators</h2>
      <div className="grid gap-8 grid-cols-2 md:grid-cols-6 lg:grid-cols-none lg:grid-flow-col lg:auto-cols-auto grayscale">
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img className="h-12" src="assets/site/collaborators/Plum-village-logo.png" alt="Plum Village" />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img className="h-12" src="assets/site/collaborators/LSE_Logo.png" alt="LSE" />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            className="h-12"
            src="assets/site/collaborators/Open-Knowledge-International-Logo.png"
            alt="Open Knowledge International"
          />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
          <img
            className="h-12"
            src="assets/site/collaborators/Rockefeller-Foundation.png"
            alt="Rockefeller Foundation"
          />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
          <img
            className="h-12"
            src="assets/site/collaborators/IPPR-Logo_pink.png"
            alt="IPPR"
          />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
          <img
            className="h-12"
            src="assets/site/collaborators/untitled_logo.png"
            alt="Untitled"
          />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
          <img
            className="h-12"
            src="assets/site/collaborators/CRI-logo.png"
            alt="CRI"
          />
        </div>
      </div>
    </section>
  )
}