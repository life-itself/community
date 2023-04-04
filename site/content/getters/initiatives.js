import { allInitiatives } from 'contentlayer/generated';

export default function getInitiatives() {
  const initiatives = allInitiatives.filter(initiative => initiative.url_path !== "initiatives")
    .sort((a, b) => new Date(b.created) - new Date(a.created))

  return initiatives
}
