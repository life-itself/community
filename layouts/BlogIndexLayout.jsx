import { BaseSection } from '../components/custom/BaseSection.jsx';
import { BaseCard } from "../components/custom/BaseCard.jsx"
import { BlogsList } from "../components/custom/BlogsList.jsx"
import { BlogsFeatured } from '../components/custom/BlogsFeatured.jsx';
import { PillTabs } from "../components/custom/PillTabs.jsx"


export function BlogIndexLayout({ posts, latest, top, categories, selectedCategory, onSelectCategory, pagination }) {

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
            {top.map((post) => (
              <BaseCard
                key={post._id}
                date={post.created}
                author={post.authors?.[0]}
                title={post.title}
                description={post.description}
                image={post.image}
              />
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
          {/* TODO rm prose */}
          <div className="prose">
            <BlogsList posts={posts} />
          </div>
        </div>

      </BaseSection>
    </>
  )
}
