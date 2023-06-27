import { Strapi4ResponseData } from "@nuxtjs/strapi/dist/runtime/types"
import { Post, Presentacion } from "~/types"

export const usePosts = () => useState<Strapi4ResponseData<Post>[]>('posts', () => [])

export const useFindPostByUrl = (url: string) :(Strapi4ResponseData<Post> | undefined) => {
    const posts = usePosts()
    return posts.value.find(p => p.attributes.url === url)
}

export const usePresentacion = () => useState<Strapi4ResponseData<Presentacion>>('presentacion')