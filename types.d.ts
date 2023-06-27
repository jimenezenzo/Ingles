import { Strapi4ResponseMany } from "@nuxtjs/strapi/dist/runtime/types"

export interface Post {
    titulo: string,
    resumen: string,
    body: string,
    url: string,
    imgdestacada: Strapi4ResponseMany<{url: string}>
}
export interface Presentacion {
    descripcion: string
}