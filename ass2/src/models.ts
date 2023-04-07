export interface IProduct {
    id: string,
    name: string,
    price: number,
    original_price: number,
    description: string,
    images: {
        base_url: string,
        large_url:string,
        medium_url:string,
        small_url:string,
        thumbnail_url:string
    }[],
    brand: {
        id: number,
        name: string,
        slug: string
    },
    specifications: ISpecification[]
}

export interface ISpecification {
    name: string,
    attributes: {
        code: string,
        name: string,
        value: string
    }
}