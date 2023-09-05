export interface Card {
    category: String,
    subcategory: String,
    price: String,
    bgImage: String
}

export interface CardStyles {
    block: String,
    image: String,
}

export interface Categories {
    category: String,
    subcategories: Array<string>
}