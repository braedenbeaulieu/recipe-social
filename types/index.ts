export { }

declare global {
    interface Recipe {
        id?: number,
        title?: string,
        content ?: string,
        slug?: string,
        description?: string,
        featured_image?: string,
        difficulty?: string,
        servings?: string,
        prep_time?: string,
        cook_time?: string,
        total_time?: number,
        cooks_note?: string,
        oven_temp_unit?: string,
        oven_temp?: string,
        ingredients?: string[],
        directions?: string[],
    }
}
