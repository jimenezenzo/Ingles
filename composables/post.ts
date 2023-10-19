import { ParsedContent } from "@nuxt/content/dist/runtime/types"

export const usePosts = () => useState<Pick<ParsedContent, string>[]>('posts', () => [])