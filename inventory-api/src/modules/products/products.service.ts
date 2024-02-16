import {products} from "../../db/schema";
import {db} from "../../db";
import {eq} from "drizzle-orm";

export async function createProductService(data: any) {
    return db.insert(products).values(data);
}
export async function getProductService() {
    return db.select().from(products);
}
export async function updateProductService(id: number, updateData: any) {
    return db.update(products).set(updateData).where(eq(products.id, id));
}
export async function deleteProductService(id: number) {
    return db.delete(products).where(eq(products.id, id));
}