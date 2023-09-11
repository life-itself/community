import { useSearchParams, useRouter } from 'next/navigation'
import { allBlogs, allPeople } from 'contentlayer/generated';
import sortArray from 'sort-array';

import { BaseSection } from '../../components/custom/BaseSection.jsx';
import { BaseCard } from "../../components/custom/BaseCard.jsx"
import { BlogsList } from "../../components/custom/BlogsList.jsx"
import { BlogsFeatured } from '../../components/custom/BlogsFeatured.jsx';
import { PillTabs } from "../../components/custom/PillTabs.jsx"
import { siteConfig } from '../../config/siteConfig.js';


export default function Blog({ blogs, latest, teamSelection, categories }) {
    const router = useRouter();

    const searchParams = useSearchParams();
    const selectedCategory = searchParams.get('category');

    const filteredBlogPosts = blogs.filter((post) => {
        if (!selectedCategory || selectedCategory === "all") {
            return true;
        } else {
            return post.categories.includes(selectedCategory);
        }
    });

    const onSelectCategory = (category) => {
        if (category === selectedCategory || category === "all") {
            router.push(`/blog`, undefined, { shallow: true });
        } else {
            router.push(`/blog?category=${category}`, undefined, { shallow: true });
        }
    }

    // "blog/2022/02/01/cultivating-an-emerging-paradigm",
    // "blog/2021/10/05/deliberately-developmental-spaces-a-key-to-addressing-the-metacrisis",
    // "blog/2020/12/21/pragmatic-utopianism",

    return (
        <>
            {/* TEAM SELECTION */}
            <BaseSection>
                <BaseSection.Title>
                    Team Top Selection
                </BaseSection.Title>
                <BaseSection.Description>
                    Some of our most essential pieces.
                </BaseSection.Description>

                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-20 content-stretch lg:grid-cols-3">
                        {teamSelection.map((post) => (
                            <BaseCard key={post._id} {...post} date={post.date ?? post.created} author={post.authors[0]} />
                        ))}
                    </div>
                </div>
            </BaseSection>

            {/* LATEST */}
            <BaseSection>
                <BaseSection.Title>
                    Latest
                </BaseSection.Title>
                <BaseSection.Description>
                    Some of our latest pieces.
                </BaseSection.Description>

                <BlogsFeatured posts={latest} />

            </BaseSection>

            {/* ALL BLOG POSTS */}
            <BaseSection>
                <BaseSection.Title>
                    All Blog Posts
                </BaseSection.Title>
                <BaseSection.Description>
                    Some of our most essential pieces.
                </BaseSection.Description>

                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <PillTabs tabs={categories} current={selectedCategory} onSelect={onSelectCategory} />
                    <BlogsList posts={filteredBlogPosts} />
                </div>

            </BaseSection>
        </>
    )
}



export async function getStaticProps() {
    const allCategories = allBlogs
        .map(blog => blog.categories ?? [])
        .flat();
    const categories = [...new Set(allCategories)].sort();

    const blogs = allBlogs
        .filter(post => !post.isDraft)
        .map(post => ({
            _id: post._id,
            title: post.title,
            description: post.description ?? null,
            image: post.image ?? null,
            url_path: post.url_path,
            categories: post.categories ?? [],
            created: post.created || post.date || null,
            authors: allPeople.filter(author => post.authors?.includes(author['id'])) ?? [siteConfig.author]
        }))

    const sortedBlogs = sortArray(blogs, {
        by: "created",
        order: "desc"
    })

    const teamSelection = sortedBlogs
        .filter((blog) => blog.categories && blog.categories.includes("team-selection"))
        .slice(0, 3);

    return {
        props: {
            categories,
            blogs: sortedBlogs,
            latest: sortedBlogs.slice(0, 3),
            teamSelection
        }
    }
}
