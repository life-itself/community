import { useState, useRef, useEffect } from "react";

const COLORS = {
  topic: {
    ontoMain: "#E9B85AA0",
    ontoSecondary: "#E9B85A4D",
  
    futureMain: "#405A9DA0",
    futureSecondary: "#405A9D4D",
  
    movementMain: "#337A4FA0",
    movementSecondary: "#337A4F4D",
  },
  projectType: {
    guide: "#f9dccf",
    whitepaper: "white",
    investigation: "#5eccf055",
  }
}


const TOPICS = [
  {
    name: "Future Systems Design",
    x: 259.4, y: 232.4, r: 129.4,
    fill: COLORS.topic.futureMain, p: 2, fs: '4xl',
    text: '',
    readmore: '',
  },
  { name: "AI",
    x: 299, y: 71, r: 70,
    fill: COLORS.topic.futureSecondary, fs: 'xl',
    text: '',
    readmore: '',
  },
  { name: "Web3",
    x: 162.9, y: 95.9, r: 63.9,
    fill: COLORS.topic.futureSecondary,
    text: '',
    readmore: '',
  },
  { name: "Diginomics & Digital Policy",
    p: 6, fs: 'lg', x: 78, y: 215, r: 77, fill: COLORS.topic.futureSecondary,
    text: '',
    readmore: '',
  },
  { name: "Institutional Design",
    x: 115, y: 358, r: 84, fill: COLORS.topic.futureSecondary,
    text: '',
    readmore: '',
  },

  { name: "Movement Building",
    x: 526.3, y: 246.3, r: 120.3,
    fill: COLORS.topic.movementMain, fs: '4xl',
    text: '',
    readmore: '',
  },
  { name: "Ecosystem Mapping",
    x: 699.4, y: 219.4, r: 88.4,
    fill: COLORS.topic.movementSecondary, fs: 'xl',
    text: '',
    readmore: '',
  },
  { name: "Polycrisis",
    x: 626.7, y: 376.5, r: 84.5,
    fill: COLORS.topic.movementSecondary,
    text: '',
    readmore: '',
  },
  { name: "Metamodern",
    x: 461.4, y: 90.5, r: 75,
    fill: COLORS.topic.movementSecondary, fs: 'lg',
    text: '',
    readmore: '',
  },
  { name: "Deliberately Developmental Spaces",
    x: 607.5, y: 96.5, r: 84.5,
    fill: COLORS.topic.movementSecondary,
    text: '',
    readmore: '',
  },

  { name: "Ontological Politics",
    x: 211.6, y: 655.6, r: 87.6,
    fill: COLORS.topic.ontoSecondary, fs: 'xl',
    text: 'Ontological Politics starts from the question: who are we as humans beings. And from that asks what politics comes from that i.e. what social and collective would we seek. It incorporates ideas from philosophy, wisdom traditions, technology and cognitive science connecting these to a new value based political movement and programme for wiser society.',
    readmore: '/ontological-politics',
  },
  { name: "Contemplative Science",
    x: 640.8, y: 525.8, r: 83.8,
    fill: COLORS.topic.ontoSecondary,
    text: '',
    readmore: '',
  },
  { name: "Collective Intelligence",
    x: 548.5, y: 654.5, r: 87.5,
    fill: COLORS.topic.ontoSecondary,
    text: '',
    readmore: '',
  },
  { name: "Conscious Collectives",
    x: 135.6, y: 504.6, r: 90.6,
    fill: COLORS.topic.ontoSecondary, fs: 'lg',
    text: '',
    readmore: '',
  },
  { name: "Cultural Evolution",
    x: 393.3, y: 726.3, r: 113.3,
    fill: COLORS.topic.ontoSecondary, fs: '2xl',
    text: '',
    readmore: '',
  },
  { name: "Ontology & Culturology",
    x: 389, y: 474, r: 190,
    fill: COLORS.topic.ontoMain, fs: '4xl',
    text: '',
    readmore: '',
  },
]

const ProjectType = ({type}) => 
  <span
    className="test-year-styling px-1 py-0.5 rounded-sm bg-slate-100 border-slate-200 border text-xs"
    style={{ background: COLORS.projectType[type] || 'rgb(241 245 249 0.5)'}}
  >
    {type}
  </span>

const ProjectYear = ({year}) =>
  <span className="test-year-styling px-1 py-0.5 rounded-sm bg-slate-50 border-slate-200 border text-xs">
    {year}
  </span>

export function ResearchTopicMap({projects}) {
  const parentRef = useRef();
  const childRef = useRef();
  const projectRefs = useRef(new Map());

  const HEIGHT = 870;
  const WIDTH = 850;

  useEffect(() => {
    function handleResize() {
      const parent = parentRef.current;
      const child = childRef.current;
      if (!parent || !child) return;
      
      let scale = parent.clientWidth / WIDTH;
      console.log(parent.offsetWidth, parent.clientWidth, WIDTH, scale)
      child.style.transform = `scale(${scale})`;
      parent.style.height = `${HEIGHT * scale}px`;
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
    
  });

  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div className="mt-5 origin-top-left -m-4" onClick={() => setSelectedTopic(null)} ref={parentRef}>
      <style jsx="true">{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500');
      `}</style>
      <div className="relative origin-top-left overflow-hidden font-medium text-gray-700" style={{height: HEIGHT, width: WIDTH }} ref={childRef}>
        <div class="mt-5 mx-7 relative" style={{width: 790, height: 845}}>
          {TOPICS.map(topic => (
            <div
              key={topic.name}
              className={`flex absolute group transition-all pointer-events-none ${selectedTopic === topic ? `z-10` : ``}`}
              style={ selectedTopic === topic ? { left: "50%", top: "33%" } : { left: topic.x, top: topic.y } }
              aria-selected={selectedTopic === topic}
            >
              <div
                className={`
                pointer-events-auto absolute flex border border-white transition-all leading-normal items-center justify-center -translate-x-1/2 -translate-y-1/2
                  ${topic.text ? 'cursor-pointer hover:brightness-110' : ''}
                  ${selectedTopic === topic ? `bg-white` : `text-center  p-${topic.p || 0}`} `}
                style={
                  selectedTopic === topic
                  ? { borderRadius: 15, width: '100%', height: "100%", border: `4px solid ${topic.fill}`}
                  : { borderRadius: topic.r*2, width: topic.r*2, height: topic.r*2, background: topic.fill }
                }
                onClick={(e) => { if (topic.text) { setSelectedTopic(topic); e.stopPropagation(); }}}
              >
                <h3
                  className={`m-0 transition uppercase text-${topic.fs || 'base'} group-aria-selected:hidden`}
                  style={{fontFamily: "'Open Sans', sans-serif", fontWeight: 500, lineHeight: 1.4}}
                >
                  {topic.name}
                </h3>

              </div>
              <div className="pointer-events-auto flex-shrink-0 text-left px-8 z-10 -translate-x-1/2 -translate-y-1/2 invisible w-0 h-0 opacity-0 transition-opacity delay-200 overflow-hidden pb-2 group-aria-selected:w-[48rem] group-aria-selected:h-auto group-aria-selected:visible group-aria-selected:opacity-100"
              onClick={(e) => { e.stopPropagation(); }}
              >
                <h3 className="uppercase text-2xl" style={{fontFamily: "'Open Sans', sans-serif", fontWeight: 500, lineHeight: 1.4}}>{topic.name}</h3>
                <p className="font-research text-2xl leading-relaxed">{topic.text}</p>
                {topic.readmore && (
                <p className="font-research text-2xl leading-relaxed">
                    <a href={topic.readmore} className="hover:underline">Read more</a>
                  </p>
                  )}
              </div>
            </div>
          ))}
        </div>
        <div>
          {projects?.filter(p => p.map).map((project, index) => (
            <div href={project.link} target="_blank"
              key={project.name}
              onMouseEnter={evt => {
                const el = projectRefs.current.get(project);
                const left = project.map.left - el.scrollWidth / 2;
                const right = WIDTH - (project.map.left + el.scrollWidth / 2);
                if (left < 0) el.style.transform = `translate(-50%, -50%) translateX(${-left}px)`
                else if (right < 0) el.style.transform = `translate(-50%, -50%) translateX(${right}px)`
              }}
              onMouseLeave={evt => projectRefs.current.get(project).style.transform = null }
              className="group no-underline absolute w-16 h-16 cursor-pointer -translate-x-1/2 -translate-y-1/2 hover:z-10"
              style={{left: project.map.left, top: project.map.top }}
            >
              <a className="absolute w-full h-full invisible group-hover:visible delay-75 transition-all" href={project.link} target="_blank"></a>
              <div ref={el => projectRefs.current.set(project, el)}
                className="absolute pointer-events-none transition-all left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center group-hover:-translate-x-1/2">
                <div className="absolute w-3 h-3 group-hover:w-full group-hover:h-full transition-all rounded-2xl border-2 border-gray-600 bg-slate-500 group-hover:rounded-md group-hover:border-gray-400 group-hover:bg-slate-50"></div>
                <div className="mx-2 my-1 opacity-0 group-hover:opacity-100 group-hover:delay-100 group-hover:transition-opacity relative z-10 w-max">
                  <span>{project.name}</span>
                  <div className="">
                    <ProjectType type={project.type} />
                    {' '}
                    <ProjectYear year={project.year} />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>  
  )
}

export const ProjectsList = ({projects}) => {
  return (
    <ul className="list-disc not-prose flex flex-col gap-3 text-lg">
      {projects.map((project) => (
        <li key={project.name}>
          <a href={project.link} target="_blank" className="group block items-baseline ml-1 no-underline cursor-pointer">
            <span className="group-hover:underline">
              {project.name}
            </span>
            {' '}
            <ProjectType type={project.type} />
            {' '}
            <ProjectYear year={project.year} />
          </a>
        </li>
      ))}
    </ul>
  );
}