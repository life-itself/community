import { allBlogs, allDocuments } from 'contentlayer/generated';
import { siteConfig } from '../../config/siteConfig';
import { parseMarkdown } from '@/lib/parseMarkdown';

export default function getBlogs() {
  const authors = allDocuments.filter(doc => doc.type === "Person")
  const blogs = allBlogs.filter(post => !post.isDraft)
    .map(post => ({
      ...post,
      description: post.description ?? parseMarkdown(post.body.raw),
      authors: authors.filter(author => post.authors.includes(author['id'])) ?? [siteConfig.author]
    })).sort((a, b) => new Date(b.created) - new Date(a.created))

  return blogs
}
