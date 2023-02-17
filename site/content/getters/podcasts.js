import { allPodcasts } from 'contentlayer/generated';

export default function getPodcasts() {
  // everything from podcast folder except index
  return allPodcasts.filter(episode => episode.url_path !== "podcast")
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}
