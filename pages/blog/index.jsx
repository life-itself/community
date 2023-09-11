import { useSearchParams, useRouter } from 'next/navigation'
import { allBlogs, allPeople } from 'contentlayer/generated';
import sortArray from 'sort-array';

import { BlogsList } from "../../components/custom/BlogsList.jsx"
import { PillTabs } from "../../components/custom/PillTabs.jsx"
import { siteConfig } from '../../config/siteConfig.js';


export default function Blog() {
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
        <div className="text-primary dark:text-primary-dark dark:prose-invert prose-headings:font-headings prose-a:break-words mx-auto p-6">
            <section>
                <div className="py-20">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-headings font-bold tracking-tight text-primary sm:text-4xl">
                                Teams Top Selection
                            </h2>
                            <p className="mt-2 text-lg leading-8 text-primary">
                                Read some of our most essential pieces.
                            </p>
                        </div>
                        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="py-20">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-headings font-bold tracking-tight text-primary sm:text-4xl">
                                All Blog Posts
                            </h2>
                            <p className="mt-2 text-lg leading-8 text-primary">
                                Read some of our most essential pieces.
                            </p>
                        </div>
                        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
                            <PillTabs tabs={uniqueCategories} current={selectedCategory} onSelect={onSelectCategory} />
                            <BlogsList posts={sortedBlogs} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


