import fs from "fs";

import clientPromise from "@/lib/mddb.mjs";
import computeFields from "@/lib/computeFields";

import Hero from "@/components/custom/ecosystem/Hero.jsx";
import TernaryPlot from "@/components/custom/ecosystem/TernaryPlot.jsx";
import CircularVis from "@/components/custom/ecosystem/CircularVis.jsx";
import ProfileSearch from "@/components/custom/ecosystem/ProfileSearch.jsx";


export default function Ecosystem({ profiles, topics }) {
    return (
        <>
            <Hero />
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <h1 className="mt-16 mb-8 text-4xl text-center">Mapping the Space</h1>
                <TernaryPlot profiles={profiles} />
            </div>
            <div className="docs prose text-primary dark:text-primary-dark dark:prose-invert prose-headings:font-headings prose-a:break-words mx-auto p-6">

                <p>This visualization maps organizations based on their approach to social change. There are three broad categories of approach: inner,
                    cultural and systems oriented. <a href="/ecosystem/vis">Read more about the visualization.</a></p>

                <h1>Overview of the Ecosystem</h1>

                <p>We sense that a new ecosystem, or ecosystem of ecosystems, is emerging. A growing number of people, organizations and initiatives are
                    taking alternative approaches to social change, which diverge from and go beyond the more established spaces in civil society and the
                    social economy.</p>

                <p>The ecosystem we explore is still emerging and ill-defined. Reflecting this, there has been no clear name for it and we have settled
                    for now on the label "Metamodernist".</p>

                <p>As mapped it is quite broad – even disparate. Nevertheless, there are commonalities.</p>

                <p>Most importantly, this ecosystem has a <strong><i>novel</i></strong> <strong>approach to social change</strong>. Specifically, an
                    approach that is simultaneously <strong>paradigmatic</strong>, <strong>integrated</strong>, and <strong>engaged</strong>.</p>

                <p>Secondly, there are a variety of commonalities in outlook and approach. The most noteworthy identified so far we have termed:
                    post-individualism, (w)holism and culture-making (in the form of new norms and narratives).</p>

                <p>There is also a focus on complexity, systems and emergence, on developmental models, spirituality and practice, and on sensemaking,
                    different forms of knowledge and global-local activism. Other commonalities include an interest in decentralized governance, new narratives,
                    alternative social imaginaries and regenerative culture.</p>

                <p>Nonetheless, the boundaries, relationships and patterns of influences in the ecosystem remain blurry, with our present awareness
                    feeling like it only touches the tip of the iceberg. Questions that remain unclear include who exactly comprises the ecosystem, how
                    activities and visions relate to one another, where the coherences and tensions lie and how it might evolve.</p>

                <h2>What is Novel in the Approach to Social Change?</h2>

                <p>The defining feature of this ecosystem is its <strong><i>novel</i></strong> <strong>approach to social change</strong>. Specifically,
                    the combination of being paradigmatic, integrated, and engaged. We emphasize that it is the combination of all three that is important
                    and distinctive.</p>

                <h3>Paradigmatic</h3>

                <p>There is the belief that the change required is <strong>paradigmatic</strong>. That is to say, it seeks a transition of the entire social
                    paradigm at both a systems and "ontological" (worldview and narratives) level. This contrasts with approaches that either simply seek reform
                    e.g. making market liberalism better, or transformation that is deep but only in a given area e.g. transforming our structures of economic
                    production and ownership but leaving base assumptions about who we are and how we relate to the natural world untouched.</p>

                <h3>Integrated</h3>

                <p>It identifies the need to incorporate methods and routes to change spanning a variety of fields and "locations" (e.g. personal, cultural,
                    institutional etc). One central and basic example common to most (though not all) actors is the belief that inner and outer transformation
                    have to go hand in hand. In Integral terms it is "all-quadrant" and in particular, prioritises the neglected "inner" quadrants.</p>

                <h3>Engaged</h3>

                <p>Participants are actively engaging with wider society for the purposes of social transformation. This sets it apart from groups which may
                    be doing large amount of inner work but without connecting this directly and explicitly to broader social change, for example certain parts
                    of the spiritual, developmental and psychedelic communities.</p>

                <h2>What are Some of its Core Characteristics?</h2>

                <p>Beyond the three pillars listed above, we also identify three high-level commonalities in outlook and approach: post-individualism, (w)holism
                    and counterculturalism.</p>

                <h3>Post-individualism</h3>

                <p>Post-individualism takes two forms. First, a focus on groups rather than just individuals as a primary unit of analysis, and the idea that we
                    must shift our engagement outwards from ourselves and towards a more widely beneficial orientation. Note that, unlike traditional "collectivism"
                    (a term we previously used but abandoned due to its connotations), this does not entail abandonment of individualism, but the inclusion of its
                    positive aspects back into group-centric concepts. The second form of post-individualism shows up as a broad commitment across the ecosystem to
                    actually operating in networked and communal ways.</p>

                <h3>Wholism</h3>

                <p>What we have termed (w)holism (we use the 'w' to signify consideration of wholes, as well as operating holistically) refers to the views taken
                    of social phenomena, social change and simply the world at large. There is a widely shared understanding of the world as a gestalt object, be this
                    under the banner of interbeing used by Buddhist and more spiritual actors, the complex systems terminology used by groups such as the International
                    Bateson Institute or the 'holon' and integral' labels taken up by Ken Wilber and the integral movement.</p>

                <p>As can be seen by the paradigmatic focus and integrated approaches which we have identified as delineating the ecosystem itself, this (w)holism gives
                    rise to a problem diagnosis which targets a deeper whole giving rise to negative social outcomes. These fundamental ways of approaching social change
                    stem from a (w)holistic perspective more broadly, a fact which is further seen in the use of terms such as the metacrisis or polycrisis.</p>

                <h3>Culture-making</h3>

                <p>Counterculturalism for us is a desire to go beyond the dominant norms and narratives. This includes the norms of the progressive movement more
                    broadly -- perhaps its most surprising and interesting aspect. We also emphasize the culture in counterculturalism: for us, it is concerned with shifting
                    the very foundations, worldviews and assumptions of our current order. In this sense it is a form of "culture-making".</p>

                <p>To use the Wilberian terminology, there is a desire to move beyond the 'green' developmental stage which is currently taken to characterise Western liberal
                    societies, and much of the progressive movement as a whole. This leads actors in the ecosystem to be more open to questioning or dispute social and political
                    positions that may be understood as norms not just in wider society, but also those (for example understandings of inclusivity) within progressive circles themselves.</p>

                <h2>Language and Buzzwords</h2>

                <p>The language of the ecosystem draws heavily on concepts such as complexity, systems and emergence, developmental models, spirituality and practice, and on
                    sensemaking, different forms of knowledge and ‘cosmo-local’ activism. Other commonalities include an interest in decentralised governance, new narratives,
                    alternative social imaginaries and regenerative culture.</p>

                <h2>Activities</h2>

                <p>Emerging organizations and individuals are opting towards 'teal' style collaboration and community building in order to maximize resources as a generalist,
                    lateral way of operating comes into view as a more effective way of tackling systemic problems.</p>

                <p>We have identified four major areas of activity: physical spaces, research, media/publishing and events. Nonetheless, it has been notable that many organizations
                    have shifted to multi-channel working across a number of these e.g. producing media content as well as running retreats and events.</p>

                <h1 className="mt-16 mb-8 text-4xl text-center">
                    Visualizing the Ecosystem
                </h1>

                <p>This visualization maps organizations based on their primary topic. Click to zoom in or out. Hover over a circle to see its name.
                    <a href="/ecosystem/vis#visualizing-the-ecosystem-by-topic">Read more about the visualization and the topics here</a></p>

                <CircularVis profiles={profiles} topics={topics} />

            </div>

            <section id="profiles" className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="bg-white">
                    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:mb-8 text-center">
                            Profiles
                        </h1>
                        <ProfileSearch profiles={profiles} />
                    </div>
                </div>
            </section>
        </>
    )
}

export async function getStaticProps() {
    const mddb = await clientPromise;

    const profilesFiles = await mddb.getFiles({ folder: "ecosystem/profiles" });
    const profilesMetadataPromises = profilesFiles.map(async (b) => {
        const source = fs.readFileSync(b.file_path, { encoding: "utf-8" });

        // TODO temporary replacement for contentlayer's computedFields
        const frontMatterWithComputedFields = await computeFields({
            frontMatter: b.metadata,
            urlPath: b.url_path,
            filePath: b.file_path,
            source,
        });

        return frontMatterWithComputedFields;
    });

    const profilesList = await Promise.all(profilesMetadataPromises);
    const profiles = profilesList.filter(
        (profile) => !(profile.curation_status.includes('N') || profile.curation_status.includes('?'))
    );

    const topicsFiles = await mddb.getFiles({ folder: "ecosystem/topics" });
    const topicsMetadataPromises = topicsFiles.map(async (b) => {
        const source = fs.readFileSync(b.file_path, { encoding: "utf-8" });

        // TODO temporary replacement for contentlayer's computedFields
        const frontMatterWithComputedFields = await computeFields({
            frontMatter: b.metadata,
            urlPath: b.url_path,
            filePath: b.file_path,
            source,
        });

        return frontMatterWithComputedFields;
    });

    const topics = await Promise.all(topicsMetadataPromises);

    return {
        props: {
            profiles,
            topics,
            title: "Ecosystem",
            description: "Mapping the space",
            url_path: "/ecosystem",
        }
    }
}
