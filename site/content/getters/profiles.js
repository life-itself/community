import { allProfiles } from 'contentlayer/generated';

export default function getProfiles() {
  return allProfiles.filter(
    (profile) => !(profile.curation_status.includes('N') || profile.curation_status.includes('?'))
  );
}
