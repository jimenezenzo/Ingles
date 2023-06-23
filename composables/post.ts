import { Post } from "~/types"

export const usePosts = () => useState<Post[]>('posts', () => [])

export const useFindPostByUrl = (url: string) :(Post | undefined) => {
    const posts = usePosts()
    return posts.value.find(p => p.url === url)
}