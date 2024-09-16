import type { ParsedContent } from "@nuxt/content";

export const usePosts = () => useState<Pick<ParsedContent, string>[]>('posts', () => [])