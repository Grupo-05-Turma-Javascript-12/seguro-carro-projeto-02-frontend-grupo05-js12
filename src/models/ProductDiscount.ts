import type Category from "./Category";

export default interface ProductDiscount {
    id: number,
    nome: string,
    categoria: Category | null
    precoOriginal: string, 
    precoComDesconto: number
}