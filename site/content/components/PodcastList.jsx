import { AudioProvider, useAudioPlayer } from "./player/AudioProvider";
import { useMDXComponent } from "next-contentlayer/hooks";

const dateFormatter = date => new Date(date).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

function PlayPauseIcon({ playing, ...props }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 10" fill="none" {...props}>
      {playing ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.496 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H2.68a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H1.496Zm5.82 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H8.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7.316Z"
        />
      ) : (
        <path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z" />
      )}
    </svg>
  )
}

function EpisodeEntry({ episode }) {
  let audioPlayerData = {
    title: episode.title,
    audio: {
      src: episode.src,
      type: episode.audioType,
    },
    link: episode.url_path,
  }

  let player = useAudioPlayer(audioPlayerData)

  const Body = useMDXComponent(episode.body.code)
  
  return (
    <li
      aria-labelledby={`episode-${episode._id}-title`}
      className="py-6"
    >
      <div className="lg:px-8">
        <div className="lg:max-w-4xl">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <div className="flex flex-col items-start">
              <h2
                id={`episode-${episode._id}-title`}
                className="mt-2 lg:mb-0 text-xl font-headings font-bold text-slate-900"
              >
                <a href={episode.url_path}>{episode.title}</a>
              </h2>
              <time className="order-first font-mono text-sm leading-7 text-slate-500">{dateFormatter(episode.date)}</time>
              <div className="mt-1 text-base leading-7 text-slate-700 lg:max-w-xl line-clamp-3">
                <Body />
              </div>
              <div className="mt-4 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => player.toggle()}
                  className="flex items-center text-sm font-bold leading-6 active:text-pink-900"
                  aria-label={`${player.playing ? 'Pause' : 'Play'} episode ${
                    episode.title
                  }`}
                >
                  <PlayPauseIcon
                    playing={player.playing}
                    className="h-2.5 w-2.5 fill-current"
                  />
                  <span className="ml-3" aria-hidden="true">
                    Listen
                  </span>
                </button>
                <span
                  aria-hidden="true"
                  className="text-sm font-bold text-slate-400"
                >
                  |
                </span>
                <a
                  href={episode.url_path}
                  className="flex items-center text-sm font-bold leading-6 active:text-pink-900"
                  aria-label={`Show notes for episode ${episode.title}`}
                >
                  Show notes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default function PodcastList({ data }) {
  return (
    <AudioProvider>
      <ul className="divide-y divide-secondary list-none p-0 overflow-hidden">
        {data.length > 0 && data.map(ep => (
          <EpisodeEntry key={ep._id} episode={ep} />
        ))}
      </ul>
    </AudioProvider>
  )
}