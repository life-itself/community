const people = [
  {
    name: "Sylvie Barbier",
    role: "Artist and Co-founder",
    bio: "Sylvie Barbier is a French-Taiwanese performance artist, entrepreneur and educator. She co-founded Life Itself to build a wiser future through culture, space and community.",
    imageUrl: "assets/site/team/Sylvie-Barbier.jpeg"
  },
  {
    name: "Rufus Pollock",
    role: "Technologist and Co-founder",
    bio: "Rufus Pollock is a Founder of Open Knowledge, an award-winning international digital non-profit. Formerly a Shuttleworth Fellow, the Mead Fellow in Economics at Cambridge University.",
    imageUrl: "assets/site/team/Rufus-Pollock.png"
  },
  {
    name: "Liam Kavanagh",
    role: "Researcher and Co-founder",
    bio: "Liam Kavanagh is a cognitive scientist who studies how our body and feelings interact with our thoughts, both within the individual and within social groups. Liam studied Economics at Cambridge University, and holds a PhD in Psychology and Cognitive Science from UCSD.",
    imageUrl: "assets/site/team/liam-Cropped.jpeg"
  },
  {
    name: "Theo Cox",
    role: "Head of Labs",
    bio: "Theo read Politics, Philosophy and Economics at the University of Oxford, and holds an MSc in Development Studies from the London School of Economics. His single greatest drive is to do the most good he can in the world, resulting in his spending probably a bit too much time ruminating on what it means to live a good life. When he’s not philosophising Theo is an avid martial artist, having competed in both western boxing and muay Thai and also regularly training in Brazilian jiujitsu. Despite his love of fighting he remains a committed pacifist in his day to day life, and is just as confused by this seeming contradiction as everyone else.",
    imageUrl: "assets/site/team/Theo-bio.jpeg"
  },
  {
    name: "Nathen Fitchen",
    role: "Communications",
    bio: "Nathen Fitchen is a digital marketing expert who works specifically with social enterprises and non-profits creating a better future. He is the co-founder of Wildfeet Productions, a digital media group and is a full-time digital nomad. On his travels he has lived in many communities, co-living spaces and other alternative living situations. He is a trained permaculture designer and has a degree in Earth Sciences from University College London. He loves outdoor adventure sports, cooking, and caring for animals.",
    imageUrl: "assets/site/team/Nathen-bio.png"
  },
  {
    name: "Catherine Tran",
    role: "Generalist",
    bio: "Catherine studied English at the University of Cambridge (UK) before completing a joint M.A. in Cultural Narratives at the University of Guelph (Canada), University of Santiago de Compostela (Spain), and University of Perpignan (France) as an Erasmus Mundus scholar. During her master’s she explored the role that art and literature might play in cultivating ecological responsibility, and she’s interested in what it means to be a responsible human being in a web of interspecies interdependence.",
    imageUrl: "assets/site/team/Catherine-bio.png"
  },
  {
    name: "Zaibul Nisa",
    role: "Generalist",
    bio: "Zaibul Nisa is a marketing professional with 5+ years working in the sustainable finance space. She is working at the intersection of climate change and Web3 where she builds communities and drives discussions around emerging technology and climate change. Currently, she is pursuing her MBA with a specialization in Marketing, Zaib wants to be a defining voice of digital marketers in the Web3 space.",
    imageUrl: "/assets/site/team/profile-image-zaib.jpg"
  },
  {
    name: "Ilja Maiber",
    role: "Berlin Hub Manager",
    bio: "As Hub manager Ilja makes sure the residents of the Berlin Hub have everything they need to be a living example of a wiser, weller world (and enjoy themselves while they’re at it). He combines knowledge in areas such as sustainability and facilitation with a generous curiosity for life.",
    imageUrl: "assets/site/team/Ilja-profile.jpeg"
  },
]

const pioneers = [
  {
    name: "Valerie Duvauchelle",
    role: "Tenzo",
    bio: "Alongside being a culinary adventurer, a food activist and a tenzo (a zen cook in the Soto Zen tradition), Valerie is the Guardian of Life Itself's daily practices. She enjoys sitting in the uncertainty and is passionate about helping communities to awaken their enthusiastic collective heart through shared practice. She lives life according to her mantra: together, together, all together!",
    imageUrl: "assets/site/team/Valerie-profile.jpeg"
  },
  {
    name: "Esther Montmany",
    role: "Child Development Expert",
    bio: "Esther is an inspiration to all who have ever felt that perhaps society could work differently. She has lived in a wide range of intentional communities, from Scotland to India to Ecuador. Her deep interest in education as a process of inner growth, in harmony with others and with nature, means she has devoted her life to understanding human wellbeing and development. Having used her knowledge to educate her own children, she now creates gatherings to help families give to their own children the chance to grow with confidence and develop their potential. Over the past five years she has worked closely with the Plum Village Community, participating actively in the children’s program at the summer retreat for families.",
    imageUrl: "assets/site/team/Esther-profile.jpeg"
  },
]

const residents = [
  {
    name: "Lauren Uba",
    role: "Project Manager and Sustainability Educator",
    bio: "Lauren is the hub’s resident Bioeconomy Geek. She is urbanist, futurist, and optimist with interests in climate justice, grassroots organizing, and social infrastructure development. She is a graduate of The Bartlett School of Planning at UCL, where she received her MSc in Sustainable Urbanism. Her thesis examined opportunities to implement a city-scale circular bioeconomy from food waste and she aims to make urban symbiosis ‘a thing.’ In 2020, Lauren founded Climate Action Community, an organization that advocates for and supports community-led climate action initiatives. You can get in on the action at @climateaction.berlin.",
    imageUrl: "assets/site/team/Lauren.png"
  },
  {
    name: "Sen Zhan",
    role: "Podcast Host and Producer",
    bio: "Sen is the Hub Spaceship’s Science Officer, unintentional Clown, and occasional General Senghis Zhan. She is committed to lifelong learning, making stuff, and amplifying under-represented voices through podcasting. Sen’s background is in Occupational Therapy, and she brings her transcultural perspective from having lived in China, Canada, and Germany. Sen is the host and producer of the Beyond Asian Podcast (www.beyondasian.com), a series of biographical stories of Third Culture Asian lifelines. Her vision of the future is pillared by conscious co-living, self-examination, and openness to being changed by the currents of Life.",
    imageUrl: "assets/site/team/Sen-scaled.jpeg"
  },
  {
    name: "Inna Chilik",
    role: "Systems Innovator",
    bio: "In real life, Inna is a systems innovator and just transformation facilitator with over a decade of experience in strategic management consulting and a dual Master’s in Finance and Strategic Leadership towards Sustainability. At the Hub, she is a maverick weaver, blending the polarities into a magic carpet of care, co-creation and self-development, catalysing innovation and transformation on both individual and collective levels.",
    imageUrl: "assets/site/team/Inna.jpeg"
  },
]

const praxis = [
  {
    name: "Valerie Duvauchelle",
    role: "Tenzo",
    bio: "Valerie is a passionate advocate for activating new ways of being in the world. She believes that to live fully we need to allow for a radically different relationship to the world and to ourselves. Her specific interest is in the application of new ways of being in community and seeks to understand the invisible evolutionary impulses that occur when we do things together. She is a Tenzo cook in the Zen tradition and through her books, programs and retreats brings the universal teachings of this tradition into community living. She is most well known for the design and development of the Onboarding Process which bridges 20 years of learning in Zen temples with conscious community experience. Her dedicated practice is to cultivate a posture of 'being witness' in her life.  She embodies the balance between deep commitment and spontaneous playfulness.",
    imageUrl: "assets/site/team/Valerie-profile.jpeg"
  },
  {
    name: "Liu Bauer",
    role: "Scientist",
    bio: "Liu is a mathematician, a theoretical physicist and data scientist of urban systems, with a PhD in theoretical physics. She worked before in universities of Germany, Netherlands, Spain (IFISC), Uruguay, Italy, France. She has been involved in European and international interdisciplinary projects working on implementing new frameworks for working with data. In research she is working with complex networks, studying processes on networks and applying the network theory in various urban issues. For this she has worked with Strelka Institute, Urban AI think tank, Correlaid NGO. She also developed the international scientists-schools network exploring the potential of scientific networks (NGO which she co-founded in 2017) and co-lead the data-volunteering initiative to help NGOs to preprocess their data. Recently she has been involved in several citizen science projects, which aim to bring together the ideas of democratizing decision making processes and participatory modeling. She works on the interface of physics, mathematics, urbanism and humanitarian action. Liu took part in the Starts.eu project together with Sony labs (Italy) and museums in Italy and Germany, which brought specific attention to the phenomenon of citizens' emotions in cities. Her projects are now mostly focused on finding new approaches and methodologies (participatory simulations, collective intelligence, geolocalized crowdsourcing, sharing circles) to work with citizens and cities.",
    imageUrl: "/assets/images/liu-bauer.svg"
  },
  {
    name: "Marc Santolini",
    role: "Scientist",
    bio: "Marc Santolini is a network scientist who studies how individuals and groups innovate, collaborate and learn, with a particular focus on open and citizen science communities and the open-source movement. He holds a PhD in Statistical Physics from Ecole Normale Supérieure Paris, where he studied Complex Systems Physics and Philosophy of Science. Fascinated by the emergence of higher-order simplicity out of complex interactions, he specialized in network science applied to biological, medical and social contexts at the Barabasi Lab in Boston, before becoming a research fellow at the Learning Planet Institute (formerly Center for Research and Interdisciplinarity, CRI) of Université Paris Cité. He is also a co-founder of the Just One Giant Lab NGO that supports the development of emergent, large-scale open research communities through social and digital technologies. Passionate about music and spontaneous jamming, he explores how group rituals and facilitation mechanisms help achieve collective flow states, with a focus on multi-modal, dialogical embodied practices to experience philosophical and contemplative concepts such as emergence, inter-being, or at-onement.",
    imageUrl: "/assets/images/marcsantolini.png"
  },
]

const contributors = [
  {
    name: "Esteban Ruseler",
    role: "Consultant",
    bio: "Esteban is inspired by the possibilities that a more conscious and wholesome relationship with tech can bring to society; he writes, consults and creates in this space. He’s also passionate about fostering real community and exploring how we can create a wiser world together.",
    imageUrl: "assets/site/team/Esteban-profile.jpeg"
  },
  {
    name: "Mark McGlynn",
    role: "Architect",
    bio: "Mark trained as an architect at the Architectural Association in Bedford Square. Together with Poppy they work to create worlds using experiences as a medium. They are the designers behind the Life Itself Hubs.",
    imageUrl: "assets/site/team/mark-cropped.jpeg"
  },
  {
    name: "Poppy Rose",
    role: "Designer",
    bio: "Poppy trained as a fashion designer at London College of Fashion. Together with Mark they work to create worlds using experiences as a medium. They are the designers behind Life Itself Hubs.",
    imageUrl: "assets/site/team/poppy-cropped.jpeg"
  },
]

const alumni = [
  {
    name: "Jonathan Ekstrom",
    role: "Scientist",
    bio: "Jonathan Ekstrom co-organised the first Life Itself Gathering. He has formed The Biodiversity Consultancy to bring real-world solutions to industry’s biodiversity challenges. Jon holds a Double First in Natural Sciences from Cambridge University and a PhD in ecology.",
    imageUrl: "assets/site/team/jonathan-ekstrom.jpeg"
  },
  {
    name: "Eilidh Ross",
    role: "Generalist",
    bio: "Eilidh studied Law at the University of Oxford before moving back home to Scotland to gain an MSc in Media, Communications and International Journalism from the University of Glasgow. Prior to joining Life Itself, Eilidh has worked as a researcher with the University of Dundee, an assistant editor with Radio Clyde and a Digital Media Officer for the COP26 Coalition. Outside of work, Eilidh enjoys music – from folk, to musical theatre, to country – and can often be found exploring the Scottish countryside with her Great Dane, Selkie",
    imageUrl: "assets/site/team/Eilidh-bio.jpeg"
  },
  {
    name: "Ninon Godefroy",
    role: "Co-founder of Life Itself",
    bio: "Ninon Godefroy grew up at La Cheraille, worked in renewable energy and education in Asia and Africa and studied public policy at the University of Oxford. She is a co-founder of Life Itself and is now working in education in Taiwan.",
    imageUrl: "assets/site/team/ninon-cropped.jpeg"
  },
  {
    name: "Joseph McArthur",
    role: "Co-founder of the Open Access Button",
    bio: "Joseph is based in Brighton. He is the Assistant Director of the Right to Research Coalition, SPARC’s student initiative and is the co-founders of the Open Access Button. He also supports preparations for Open Access Week and OpenCon in addition to leading OpenCon’s community.",
    imageUrl: "assets/site/team/joseph-cropped.jpeg"
  },
  {
    name: "Patrick Nadler",
    role: "Artist",
    bio: "Pat is an artist and passionate actor. This picture was taken while lamenting the gods for his lousy movie career; it is his daily practice. He used to run the Hub and is proud of his role in building a loving Community family that people want to be part of.",
    imageUrl: "assets/site/team/patrick-cropped.jpeg"
  },
  {
    name: "Laurie Parma",
    role: "Founder of LifeCloud",
    bio: "Laurie Parma is the founder of LifeCloud, a wellbeing consulting and education company. As a Cambridge scholar of psychology, behavioural science and neuroscience, interdisciplinarity is the core of her approach to human flourishing.",
    imageUrl: "assets/site/team/laurie-cropped.jpeg"
  },
  {
    name: "Cecile Embleton",
    role: "Photographer",
    bio: "Cecile is a freelance photographer and award-winning documentary filmmaker based in London. She is a previous member of the London Hub.",
    imageUrl: "assets/site/team/cecile-cropped.png"
  },
  {
    name: "Tom Manwell",
    role: "Architect",
    bio: "Tom is a fully qualified architect with an interest in co-living and previous member of London Hub. He is co-founder of WooWoo, a website helping Londoners discover well-being practices. Tom is also a mindfulness practitioner, composer and Ecstatic Dance DJ.",
    imageUrl: "assets/site/team/tom-cropped.jpeg"
  },
  {
    name: "Richard Millington",
    role: "Film Maker",
    bio: "Richard is a film maker and producer. He is a friend of Life Itself and has helped document some of our past Gatherings.",
    imageUrl: "assets/site/team/richard-cropped.jpeg"
  },
  {
    name: "Omri Baumer",
    role: "Technologist",
    bio: "Omri Baumer is a technologist with vast experience in software design and development. He was selected as a Technology Expert by Harvard Business School and is experienced in building developer communities. While growing up in northern Israel, Omri became fascinated with the future of real-estate.",
    imageUrl: "assets/site/team/omri-cropped.jpeg"
  },
]

const allTeams = [ 
  { heading: "Our Team", data: people },
  { heading: "Pioneers", data: pioneers },
  { heading: "Berlin Hub Residents", data: residents },
  { heading: "Bergerac Praxis Hub Residents", data: praxis },
  { heading: "Contributors", data: contributors },
  { heading: "Alumni", data: alumni },
]

function List({ data }) {
  return (
    <ul
      role="list"
      className="font-archivo space-y-12 lg:grid lg:grid-cols-3 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
    >
      {data.map((person) => (
        <li key={person.name}>
          <div className="space-y-4">
            <div className="aspect-w-3 aspect-h-2">
              <img className="rounded-lg object-cover shadow-lg" src={person.imageUrl} alt={person.name} />
            </div>
            <div className="space-y-1 text-lg font-medium leading-6">
              <h3>{person.name}</h3>
              <p className="text-base flex items-center gap-1 w-fit">
                <span className="bg-[#F0CA5E] w-3 h-3 shadow" />
                {person.role}
              </p>
            </div>
            <div className="text-sm">
              <p className="text-gray-500">{person.bio}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function Team() {
  return (
    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-12">
        {allTeams.map((team,i) => (
          <section key={i}>
            <h1 className="text-4xl font-headings font-bold tracking-tight sm:text-5xl">{team.heading}</h1>
            <List data={team.data} />
          </section>
        ))}
      </div>
    </div>
  )
}
