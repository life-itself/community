import { allBlogs, allDocuments } from 'contentlayer/generated';
import { siteConfig } from '../../config/siteConfig';
import sortArray from 'sort-array';

export default function getBlogs(slicedPosts = 30) {
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

  return sortedBlogs
}
