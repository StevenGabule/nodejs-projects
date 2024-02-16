import {object, string, TypeOf, number} from 'zod'

export const productCreateSchema = {
    body: object({
        name: string({ required_error: "Name is required."}),
        sku_number: string({ required_error: "Sku number is required."}),
        qty:  number({ required_error: "Quantity is required."}),
        rate: string({ required_error: "Rate is required."}),
        price: string({ required_error: "Price is required."}),
        total_item: string({ required_error: "Total item is required."}),
    })
}

export type productCreateBody = TypeOf<typeof productCreateSchema.body>
