import express from "express";

import CompraController from "../controllers/CompraController.js";

const compraController = new CompraController();
const router = express.Router();

router.post("/compras",compraController.create);

router.get("/compras",compraController.retrieve)

export default router;