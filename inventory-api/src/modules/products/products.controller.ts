import {Request, Response} from "express";
import {productCreateBody} from "./products.schema";
import {createProductService, deleteProductService, getProductService, updateProductService} from "./products.service";

export async function createProductHandler(req: Request<{}, {}, productCreateBody>, res: Response) {
    try {
        await createProductService({...req.body});
        return res.status(201).send("Success!");
    } catch (error: any) {
        return res
            .status(500)
            .json({error: error.message});
    }
}

export async function getProductHandler(_req: Request, res: Response) {
    try {
        const data = await getProductService();
        return res.json(data);
    } catch (error) {
        return res
            .status(500)
            .json(error);
    }
}

export async function updateProductHandler(req: Request, res: Response) {
    try {
        const {productId} = req.params;
        await updateProductService(Number(productId), {...req.body});
        return res.json({message: "Successfully updated!"});
    } catch (error: any) {
        return res
            .status(500)
            .json({error: error.message});
    }
}

export async function deleteProductHandler(req: Request, res: Response) {
    try {
        const {productId} = req.params;
        await deleteProductService(Number(productId));
        return res.status(204).json({message: 'Successfully deleted!'});
    } catch (error: any) {
        return res
            .status(500)
            .json({error: error.message});
    }
}
