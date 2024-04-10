import { Router } from "express";
import { getAllProducts } from "../controllers/products.controllers.js";
const router = Router();

/* RUTAS DE PRODUCTOS */
router.get("/", getAllProducts);

export default router;
