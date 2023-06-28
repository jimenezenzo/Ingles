import { Strapi4ResponseData } from "@nuxtjs/strapi/dist/runtime/types"
import { Post, Presentacion, Referencia } from "~/types"

export const usePosts = () => useState<Strapi4ResponseData<Post>[]>('posts', () => [])

export const useFindPostByUrl = (url: string) :(Strapi4ResponseData<Post> | undefined) => {
    const posts = usePosts()
    return posts.value.find(p => p.attributes.url === url)
}

export const useFindRerenciaByUrl = (url: string) :(Strapi4ResponseData<Referencia> | undefined) => {
    const posts = usePosts()
    const post = posts.value.find(p => p.attributes.referencias.data.some(r => r.attributes.url === url))
    return post?.attributes.referencias.data.find(r => r.attributes.url === url)
}

export const usePresentacion = () => useState<Strapi4ResponseData<Presentacion>>('presentacion')