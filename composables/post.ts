import { Strapi4ResponseData } from "@nuxtjs/strapi/dist/runtime/types"
import { Post} from "~/types"

export const usePosts = () => useState<Strapi4ResponseData<Post>[]>('posts', () => [])
