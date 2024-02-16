import express from "express";
import {
    createProductHandler,
    deleteProductHandler,
    getProductHandler,
    updateProductHandler
} from "./products.controller";
const router = express.Router();

router.post('/', createProductHandler);
router.get('/', getProductHandler);
router.patch('/:productId', updateProductHandler);
router.delete('/:productId', deleteProductHandler);
export default router;