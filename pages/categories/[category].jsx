import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

import { allBlogs, allPeople } from 'contentlayer/generated';
import sortArray from 'sort-array';

import { siteConfig } from '../../config/siteConfig.js';
import { BlogIndexLayout } from '../../layouts/BlogIndexLayout.jsx';

export default function CategoryIndexPage({ posts, top, latest, categories, selectedCategory }) {
    const router = useRouter();
    const [scrollY, setScrollY] = useState(0);

    const onSelectCategory = (category) => {
        // Store the current scroll position
        setScrollY(window.scrollY);

        if (category === selectedCategory || category === "all") {
            router.push("/blog");
        } else {
            router.push(`/categories/${category}`);
        }
    }

    useEffect(() => {
        window.scrollTo(0, scrollY);
    }, [selectedCategory]);

    return (
        <BlogIndexLayout
            posts={posts}
            top={top}
            latest={latest}
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={onSelectCategory}
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
    const teamSelectionPosts = sortedPosts.filter(post => post.categories.includes("top-pick")).slice(0, 3);

    const allCategories = allPosts
        .map(blog => blog.categories ?? [])
        .flat();

    const uniqueSortedCategories = [...new Set(allCategories)].sort();

    const sortedCategoryPosts = category === 'all' ? sortedPosts : sortedPosts.filter(post => post.categories?.includes(category));

    return {
        props: {
            posts: sortedCategoryPosts,
            top: teamSelectionPosts,
            latest: latestPosts,
            selectedCategory: category,
            categories: uniqueSortedCategories,
        }
    }
}
