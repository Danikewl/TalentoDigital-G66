import { Router } from "express";
import { getAllUsers } from "../controllers/users.controllers.js";
const router = Router();

/* RUTAS USUARIOS*/
router.get("/", async (req, res) => {
  try {
    const allUsers = await getAllUsers();

    res.json({ data: allUsers });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
