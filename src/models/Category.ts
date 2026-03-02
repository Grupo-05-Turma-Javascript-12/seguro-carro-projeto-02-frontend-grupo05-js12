import type Product from "./Product";

export default interface Category {
    id: number, 
    nome: string,
    descricao: string,
    produto: Product[] | null
}