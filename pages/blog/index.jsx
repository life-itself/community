import { useSearchParams, useRouter } from 'next/navigation'
import { allBlogs, allPeople } from 'contentlayer/generated';
import sortArray from 'sort-array';

import { BlogsList } from "../../components/custom/BlogsList.jsx"
import { PillTabs } from "../../components/custom/PillTabs.jsx"
import DocsLayout from "../../layouts/docs.jsx"
import { siteConfig } from '../../config/siteConfig.js';


export default function Blogs() {
    const router = useRouter();

    const searchParams = useSearchParams();
    const selectedCategory = searchParams.get('category');

    const onSelectCategory = (category) => {
        if (category === selectedCategory || category === "all") {
            router.push(`/blog`, undefined, { shallow: true });
        } else {
            router.push(`/blog?category=${category}`, undefined, { shallow: true });
        }
    }

    const allCategories = allBlogs
        .map(blog => blog.categories ?? [])
        .flat();
    const uniqueCategories = [...new Set(allCategories)].sort();

    const blogs = allBlogs
        .filter(post => !post.isDraft && (selectedCategory ? post.categories?.includes(selectedCategory) : true))
        .map(post => ({
            _id: post._id,
            title: post.title,
            description: post.description,
            url_path: post.url_path,
            categories: post.categories,
            created: post.created,
            authors: allPeople.filter(author => post.authors?.includes(author['id'])) ?? [siteConfig.author]
        }))

    const sortedBlogs = sortArray(blogs, {
        by: "created",
        order: "desc"
    })


    return (
        <DocsLayout frontMatter={{ title: "Blog" }}>
            <PillTabs tabs={uniqueCategories} current={selectedCategory} onSelect={onSelectCategory} />
            <BlogsList posts={sortedBlogs} />
        </DocsLayout>
    )
}
