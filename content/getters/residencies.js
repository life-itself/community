import { allResidencies, allDocuments } from 'contentlayer/generated';

export default function getResidencies() {
  const authors = allDocuments.filter(doc => doc.type === "Person")

  const idToNameMap = {}

  for (const obj of authors) {
    idToNameMap[obj.id] = obj.name;
  }

  const residencies = allResidencies
    .filter(residency => !residency.isDraft)
    .map(residency => ({
      ...residency,
      facilitators: residency.facilitators?.map(item => {
        const name = idToNameMap[item];
        return name ? name : item;
      }) ?? []
    }))
    .sort((a,b) => new Date(a.start) - new Date(b.start))

  return residencies
}
