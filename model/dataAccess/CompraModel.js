import mongoose from "mongoose";

import productoSchema from "./ProductoModel.js";

const compraSchema = new mongoose.Schema({
  comprador: {
    type: String,
  },
  items: [productoSchema],
  precio: {
    type: Number,
    required: true,
  },
  fecha: {
      type: Date,
      required: true
  }
});

const CompraModel = new mongoose.model("Compra", compraSchema);

export default CompraModel;
