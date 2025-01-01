export type MangaItem = {
    id: number,
    image: string,
    name: string,
    price: number
}

export type OrderItem = MangaItem & {
    quantity: number
}