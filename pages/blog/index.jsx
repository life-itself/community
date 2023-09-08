import { allBlogs, allDocuments } from 'contentlayer/generated';
import sortArray from 'sort-array';

import { BlogsList } from "../../components/custom/BlogsList.jsx"
import DocsLayout from "../../layouts/docs.jsx"
import { siteConfig } from '../../config/siteConfig.js';

export default function Blogs() {

    const authors = allDocuments.filter(doc => doc.type === "Person")
    const blogPosts = Array.from(allBlogs)
    const blogs = blogPosts.filter(post => !post.isDraft)
        .map(post => ({
            ...post,
            authors: authors.filter(author => post.authors?.includes(author['id'])) ?? [siteConfig.author]
        }))
        .slice()
    // .sort((a, b) => new Date(b.created) - new Date(a.created))
    const sortedBlogs = sortArray(blogs, {
        by: "created",
        order: "desc"
    })

    return (
        <DocsLayout frontMatter={{ title: "Blog" }}>
            <BlogsList posts={sortedBlogs} />
        </DocsLayout>
    )
}
