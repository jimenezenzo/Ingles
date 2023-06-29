import { Strapi4ResponseMany } from "@nuxtjs/strapi/dist/runtime/types"

export interface Post {
    titulo: string,
    resumen: string,
    body: string,
    url: string,
    imgdestacada: Strapi4ResponseMany<{url: string}>,
    referencias: Strapi4ResponseMany<Referencia>,
    padlet: string,
    createdAt: string
}

export interface Presentacion {
    descripcion: string
}

export interface Referencia {
    body: string,
    titulo: string,
    url: string
}