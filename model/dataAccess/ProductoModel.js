import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    detalle: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
})

export default productoSchema;