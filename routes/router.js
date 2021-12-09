import express from "express";

import CompraController from "../controllers/CompraController.js";

const compraController = new CompraController();
const router = express.Router();

router.post("/compras",(request,response) => {
    compraController.create(request,response);
});

router.get("/compras",(request,response) => {
    compraController.retrieve(request,response);
});

router.get("/compras/:id",(request,response) =>{
    compraController.findById(request,response);
});

router.delete("/compras/:id",(request,response) =>{
    compraController.deleteById(request,response);
})

router.delete("/compras",(request,response) =>{
    compraController.delete(request,response);
})

export default router;