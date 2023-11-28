import { BaseSection } from '../components/custom/BaseSection.jsx';
import { BaseCard } from "../components/custom/BaseCard.jsx"
import { BlogsList } from "../components/custom/BlogsList.jsx"
import { BlogsFeatured } from '../components/custom/BlogsFeatured.jsx';
import { CategorySelect } from "../components/custom/CategorySelect.jsx"


export function BlogIndexLayout({ categoryPosts, latestPosts, topPosts, allCategories, currentCategory }) {

  return (
    <>
      {/* TEAM SELECTION */}
      <BaseSection>
        <BaseSection.Title id="team-top-selection" linked>
          Team Top Selection
        </BaseSection.Title>
        <BaseSection.Description>
          Some of our most essential pieces.
        </BaseSection.Description>

        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-20 content-stretch lg:grid-cols-3">
            {topPosts.map((post) => (
              <BaseCard
                key={post._id}
                title={post.title}
                description={post.description}
                url_path={post.url_path}
                created={post.created}
                authors={post.authors}
                image={post.image}
              />
            ))}
          </div>
        </div>

      </BaseSection>

      {/* LATEST */}
      <BaseSection>
        <BaseSection.Title id="latest" linked>
          Latest
        </BaseSection.Title>
        <BaseSection.Description>
          Some of our latest pieces.
        </BaseSection.Description>

        <BlogsFeatured posts={latestPosts} />

      </BaseSection>

      {/* ALL BLOG POSTS */}
      <BaseSection>
        <BaseSection.Title id="all-blog-posts" linked>
          All Blog Posts
        </BaseSection.Title>
        <BaseSection.Description>
          Some of our most essential pieces.
        </BaseSection.Description>

        <div className="mx-auto max-w-2xl lg:max-w-3xl space-y-4">
          <CategorySelect categories={allCategories} current={currentCategory} />
          <BlogsList posts={categoryPosts} />
        </div>

      </BaseSection>
    </>
  )
}
