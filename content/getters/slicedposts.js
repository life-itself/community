import getBlogs from "./blogs";

export default async function getSlicedPosts() {
    const posts = await getBlogs()
    return posts.slice(0,9)
}