import { Router } from "express";
import Product from "../handlers/Product";
import { checkoutParam, checkoutInput, checkoutParamPut } from "../middleware";

const router = Router();

router.get("/", Product.getProducts);

router.post("/", checkoutInput, Product.createProduct);

router.get("/:id", checkoutParam, Product.getProductById);
router.put("/:id", checkoutParamPut, Product.updateProduct);
router.patch("/:id", checkoutParam, Product.updateAvailable);
router.delete("/:id", checkoutParam, Product.deleteProduct);

export default router;
