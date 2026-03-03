import type Category from "./Category";

export default interface Product {
    id: number,
    nome: string,
    descricao: string,
    preco: number, 
    esta_ativo: boolean,
    categoria: Category | null
}