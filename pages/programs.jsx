import Link from "next/link";
import getResidencies from "../content/getters/residencies";
import { formatDate } from "@/lib/formatDate.js";

export default function Residencies({ upcomingResidencies }) {
  return (
    <div className="relative mx-auto lg:max-w-4xl px-4 sm:px-16 lg:px-20 mt-16 sm:mt-20 space-y-8">
      <h1 className="text-4xl font-bold font-headings tracking-tight text-primary sm:text-5xl">Residencies and Courses</h1>
      <div className="docs prose prose-headings:font-headings prose-a:break-words">
        <p>We are running and hosting a series of residencies and retreats that are a spiritual cooking together of various 
          ingredients: people, practices, workshops, art, community life and actual cooking. The residences open a space, a 
          vacuum filled by people and practices too spiritual for politics, too “political” for the monasteries, where we sit 
          with our trouble without giving into the narrowing impulse to “save the world”.
        </p>
        <p className="mt-8">
          <Link
            href="/hubs/bergerac"
            className="rounded-md bg-secondary px-4 py-2 text-sm font-medium text-primary shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary no-underline"
          >
            Learn More About The Hub&nbsp;<span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </div>
      <div className="py-1">
        <h3 className="mt-8 text-2xl font-bold font-headings tracking-tight text-primary">Upcoming Residencies & Courses</h3>
        <div className="my-8 space-y-20 lg:my-8 lg:space-y-16 text-primary max-w-3xl mx-auto">
          {upcomingResidencies?.map((residency) => (
            <article key={residency._id} className="relative isolate flex flex-col gap-8 lg:flex-row lg:items-center">
              <div className="relative sm:aspect-square lg:w-64 lg:shrink-0">
                <img
                  src={residency.image}
                  alt={residency.title}
                  className="lg:w-64 lg:shrink-0 m-0 rounded-2xl border absolute inset-0 h-full w-full rounded-2xl border bg-gray-50 object-cover"
                />
              </div>
              <div>
                {residency.start && <div className="text-xs">
                  <time dateTime={residency.start}>{formatDate(residency.start)}</time>
                </div>}
                <div className="group relative max-w-xl">
                  <h3 className="mt-3 text-xl font-semibold font-headings group-hover:text-primary/80 min-h-full">
                    <Link href={residency.url_path}>
                      <span className="absolute inset-0" />
                      {residency.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm line-clamp-3">{residency.description}</p>
                </div>
                {residency.facilitators && <div className="text-sm flex flex-col gap-y-4 mt-3">
                  <div className="relative flex items-center gap-x-2">
                    <h3 className="font-medium underline underline-offset-2 decoration-2 decoration-secondary">Facilitators:</h3>
                    <div className="flex items-center">
                      {residency.facilitators.map((facilitator,i) => (
                        <p key={i} className="group leading-4">
                          {facilitator}<span className="group-last:hidden">,&nbsp;</span>
                        </p>
                      ))}
                    </div>
                  </div>
                  <Link href={residency.url_path} className="underline underline-offset-2 decoration-2 decoration-secondary">
                    Learn more and apply&nbsp;<span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>}
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="py-1">
        <h3 className="text-2xl font-bold font-headings tracking-tight text-primary">Previous Residencies</h3>
        <div className="mt-8 docs prose prose-headings:font-headings prose-a:break-words">

          <div>
            <h3 id="-setting-the-world-to-rights-residency-april-2023">&quot;Setting the World to Rights Residency&quot;, April 2023</h3>
            <ul>
              <li><strong>When:</strong> April 5th - May 2nd 2023</li>
              <li><strong>What:</strong> A one month residency to focus on having exceptional big picture discussions. (The kind of discussions that draw the comment “You’re setting the world to rights!” Questions like: How do we address polarisation? How can we address global warming? How do we address the massive economic equality, racism and historical injustices that are rife across the globe? We won’t answer these questions, but we will do our utmost to have discussions that are really about <em>getting somewhere together</em> rather than scoring points. We will joyfully take up the neglected responsibility of citizens in a democracy, rather than a parlour game or indulgence</li>
              <li><strong>How much:</strong> Dependent on rooming (around €1100 for accommodation, food, facilitation and practices)</li>
              <li><strong>Facilitator:</strong> <a href="https://www.liamkavanagh.me/">Liam Kavanagh</a>, <a href="https://www.victoriawilding.com/">Victoria Wilding</a></li>
            </ul>
          </div>
          
          <div>
            <h3 id="relational-embodiment-residency-march-april-2023">Relational Embodiment Residency, March-April 2023</h3>
            <ul>
              <li><strong>When:</strong> March 19th - April 2nd</li>
              <li><strong>What</strong>: A two-week residency consisting of intensive small-group and whole-group workshops, discussions and experiential sessions. We will create as safe a container as possible to enable the emergence of relational insights and attachment resiliency. The immersion format allows for insights from structured experiential sessions to be integrated in relationships during the residency itself. There will be plenty of Open Spaces for residents to learn, practice and share skills with one another. The residency includes time and space for you to continue your daily personal work and projects (35-40h/week).</li>
              <li><strong>How much ?</strong> around 1400 for accommodation, food, training and practices.</li>
            </ul>
            <p><a href="programs/2023/2-week-relational-embodiment-residency">Learn more and apply</a></p>
          </div>

          <div>
            <h3 id="intelligence-collective-gouvernance-partag-e-in-french-4-5-march-2023">Intelligence collective: Gouvernance partagée (in French), 4-5 March 2023</h3>
            <ul>
              <li><strong>When:</strong> March 4th - March 5th</li>
              <li><strong>What</strong>: 2 journées pour découvrir et expérimenter des pratiques, processus et dispositifs pour une autogouvernance inclusive.</li>
              <li><strong>How much ?</strong> 120 euros for accommodation, food, training and practices.</li>
            </ul>
            <p><a href="https://coomic.coop/site/actions/gec3.html">Learn more and apply</a></p>
          </div>

          <div>
            <h3 id="intelligence-collective-conseil-de-tous-les-tres-in-french-11-12-march-2023">Intelligence collective: Conseil de tous les êtres (in French), 11-12 March 2023</h3>
            <ul>
              <li><strong>When:</strong> March 11th - March 12th</li>
              <li><strong>What</strong>: 2 journées pour vivre la pratique fondatrice du TQR (Travail Qui Relie – Joanna Macy) et mieux se reconnecter avec nos émotions et notre pouvoir d’agir</li>
              <li><strong>How much ?</strong> 120 euros for accommodation, food, training and practices.</li>
            </ul>
            <p><a href="https://coomic.coop/site/actions/cte.html">Learn more and apply</a></p>
          </div>

          <div>
            <h3 id="embodying-collective-transformation-a-3-months-residency-organised-by-the-catalyst-network-team">Embodying collective transformation : a 3 months residency organised by the catalyst network team</h3>
            <ul>
              <li><strong>Question:</strong> How to Share personal and collective practices to address the challenges of our time and help create a world that works for all life</li>
              <li><strong>Facilitators:</strong> <a href="http://www.karlsteyaert.com">Karl Steyaert</a> , <a href="http://www. embracing-life.com">Nadine Helm</a>, <a href="http://www.becomingtogether.net">Jocelyn Ames</a>, <a href="/people/catherine-tran">Catherine Tran</a></li>
            </ul>
          </div>

          <div>
            <h3 id="sympoiesis-8-light-and-shadow-integration-august-2022">Sympoiesis #8:  Light and shadow integration, August 2022</h3>
            <ul>
              <li><strong>Question:</strong> how can we playfully and lovingly dwell in &quot;spiritual&quot; shadows?</li>
              <li><strong>Facilitator:</strong><a href="/people/liamaet"> Liam Kavanagh</a></li>
            </ul>  
          </div>

          <div>
            <h3 id="open-house-residency-june-july-2022">Open House Residency, June - July 2022</h3>
            <ul>
              <li><strong>What:</strong> Experience a taste of life and belonging in a co-created community of practice, and enjoy summer by the river in southwest France.</li>
              <li><strong>Hosts:</strong> <a href="https://en.lacuisinedelabienveillance.org/les-messagers">Valérie Duvauchelle</a> &amp; <a href="/people/marc-santolini">Marc Santolini</a></li>
            </ul>
          </div>

          <div>
            <h3 id="sympoiesis-7-nourriture-back-to-basics-juin-juillet-2022">Sympoiesis #7 : Nourriture - back to basics, juin - juillet 2022</h3>
            <ul>
              <li><strong>Question:</strong> How to reconnect to the basic human activities as cooking , eating simple cuisine for community</li>
              <li><strong>Facilitators:</strong> <a href="https://en.lacuisinedelabienveillance.org/les-messagers">Valérie Duvauchelle</a> , <a href="http://www.super-naturelle.com">Ona Maiocco</a></li>
            </ul>
          </div>

          <div>
            <a href="https://lifeitself.org/2022/05/26/reflections-on-sympoiesis-6-insight-interbeing-and-science/">
              <h3 id="-sympoiesis-6-insight-interbeing-and-science-may-2022-https-lifeitself-org-2022-05-26-reflections-on-sympoiesis-6-insight-interbeing-and-science-">
                Sympoiesis #6: Insight, Interbeing and Science, May 2022
              </h3>
            </a>
            <ul>
              <li><strong>Facilitator:</strong><a href="/people/liamaet"> Liam Kavanagh</a></li>
            </ul>
          </div>

          <div>
            <h3 id="conscious-food-workshop-integration-apr-may-2022">Conscious Food Workshop / Integration, Apr - May 2022</h3>
            <ul>
              <li><strong>Question:</strong> How to nourish community today for tomorrow?</li>
              <li><strong>Facilitator:</strong> <a href="https://en.lacuisinedelabienveillance.org/les-messagers">Valérie Duvauchelle</a></li>
            </ul>
          </div>

          <div>
            <h3 id="sympoiesis-5-making-eco-spirituality-accessible-mar-apr-2022">Sympoiesis #5: Making Eco-Spirituality Accessible, Mar - Apr 2022</h3>
            <ul>
              <li><strong>Question:</strong> How can we foster an eco-spirituality that is inclusionary to all?</li>
              <li><strong>Facilitator:</strong> <a href="https://en.wikipedia.org/wiki/Rupert_Read">Rupert Read</a></li>
            </ul>
          </div>

          <div>
            <h3 id="sympoiesis-4-l-intelligence-collective-feb-mar-2022">Sympoiesis #4: L&#39;intelligence collective, Feb - Mar 2022</h3>
            <ul>
              <li><strong>Question:</strong> Quelles pratiques offre l&#39;intelligence collective au service de la transition ? </li>
              <li><strong>Hosts:</strong> Coomics (membres de la coopérative <a href="https://coomic.coop/site/">MIC</a>) </li>
            </ul>
          </div>

          <div>
            <h3 id="conscious-food-retreat-culture-broth-1-feb-2022">Conscious Food Retreat: Culture Broth #1, Feb 2022</h3>
            <ul>
              <li><strong>Question:</strong> How do we seed new narratives through fermentation? </li>
              <li><strong>Facilitator:</strong> <a href="https://en.lacuisinedelabienveillance.org/les-messagers">Valerie Duvauchelle</a></li>
            </ul>
          </div>

          <div>
            <h3 id="sympoiesis-3-patterning-conscious-community-4-jan-4-feb-2022">Sympoiesis #3: Patterning Conscious Community, 4 Jan - 4 Feb 2022</h3>
            <ul>
              <li><strong>Question:</strong> What are the patterns and practices to cultivate conscious community?</li>
              <li><strong>Facilitator:</strong> <a href="http://www.karlsteyaert.com/">Karl Steyaert</a></li>
            </ul>
          </div>

          <div>
            <h3 id="sympoiesis-2-contemplative-activism-writing-residency-nov-dec-2021">Sympoiesis #2: Contemplative Activism Writing Residency, Nov - Dec 2021</h3>
            <ul>
              <li><strong>Question:</strong> what contemplation could bring to the current complexity of our time? </li>
              <li><strong>Facilitators:</strong> <a href="/people/liamaet"> Liam Kavanagh</a> and Naresh Grandjiande </li>
            </ul>
          </div>

          <div>
            <h3 id="sympoiesis-1-daily-collective-practices-oct-nov-2021">Sympoiesis #1: Daily Collective Practices, Oct - Nov 2021</h3>
            <ul>
              <li><strong>Question</strong><em>:</em> How can collective practices in everyday life nourish another way of being in the world? </li>
              <li><strong>Facilitator</strong>: <a href="https://en.lacuisinedelabienveillance.org/les-messagers">Valérie Duvauchelle</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const residences = await getResidencies()

  const upcomingResidencies = residences
    .filter(r => new Date(r.start) > new Date())

  return {
    props: { upcomingResidencies }
  }
}
