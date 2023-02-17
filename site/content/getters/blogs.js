import { allBlogs, allDocuments } from 'contentlayer/generated';
import { siteConfig } from '../../config/siteConfig';

export default function getPodcasts() {
  const authors = allDocuments.filter(doc => doc.type === "Person")
  const blogs = allBlogs.filter(post => !post.isDraft)
    .map(post => ({
      ...post,
      authors: authors.filter(author => post.authors.includes(author['id'])) ?? [siteConfig.author]
    })).sort((a, b) => new Date(b.created) - new Date(a.created))

  return blogs
}
