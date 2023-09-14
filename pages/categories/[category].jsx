import { allBlogs, allPeople } from 'contentlayer/generated';
import sortArray from 'sort-array';

import { BlogIndexLayout } from '@/layouts/BlogIndexLayout.jsx';
import { siteConfig } from '@/config/siteConfig';


export default function CategoryIndexPage({ categoryPosts, topPosts, latestPosts, allCategories, currentCategory }) {
    return (
        <BlogIndexLayout
            categoryPosts={categoryPosts}
            topPosts={topPosts}
            latestPosts={latestPosts}
            allCategories={allCategories}
            currentCategory={currentCategory}
        />
    )
}

export async function getStaticPaths() {
    const allPosts = allBlogs
        .filter((page) => !page?.isDraft)

    const allCategories = allPosts
        .map(blog => blog.categories ?? [])
        .flat();

    const uniqueCategories = [...new Set(allCategories), 'all'];

    const paths = uniqueCategories
        .map((category) => {
            return { params: { category } };
        });

    return {
        paths,
        fallback: false,
    };
}



export async function getStaticProps({ params: { category } }) {
    const allPosts = allBlogs
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
    const sortedPosts = sortArray(allPosts, {
        by: "created",
        order: "desc"
    })
    const latestPosts = sortedPosts.slice(0, 3);
    const topPosts = sortedPosts.filter(post => post.categories.includes("top-pick")).slice(0, 3);

    const allCategories = allPosts
        .map(blog => blog.categories ?? [])
        .flat();

    const uniqueSortedCategories = [...new Set(allCategories)].sort();

    const categoryPosts = category === 'all' ? sortedPosts : sortedPosts.filter(post => post.categories?.includes(category));

    return {
        props: {
            categoryPosts,
            topPosts,
            latestPosts,
            allCategories: uniqueSortedCategories,
            currentCategory: category,
        }
    }
}
