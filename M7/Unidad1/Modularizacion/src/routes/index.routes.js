import { Router } from "express";
import userRoutes from "./users.routes.js";
import productRoutes from "./products.routes.js";
import { testDB } from "../controllers/index.controllers.js";

const router = Router();

/* RUTA DE BIENVENIDA */
router.get("/", async (req, res) => {
  try {
    const testResult = await testDB();
    console.log(testResult);
    res.json({ results: testResult, code: 200, state: "DB is connected" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.use("/usuarios", userRoutes);
router.use("/productos", productRoutes);

export { router };
