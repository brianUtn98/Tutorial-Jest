import CompraService from "../services/CompraService.js";
import Producto from "../model/domain/Producto.js";
import Compra from "../model/domain/Compra.js";

import CompraModel from "../model/dataAccess/CompraModel.js";

class CompraController {
  service;
  model;
  constructor() {
    this.service = new CompraService();
    this.model = CompraModel;

    this.create.bind(this);
  }

  create(request, response) {
    try{
      const items = request.body.items.map(
        (producto) => new Producto(producto.detalle, producto.precioBruto)
      );
  
      const compra = new Compra(request.body.comprador, items);
      this.service.create(compra).then(result => {
          response.status(200).json(result);
      })
    }
    catch(error){
      response.status(406).json(error)
    }
    
  }

  retrieve(request,response){
    this.service.retrieve().then(result => {
      response.status(200).json(result);
    })
  }

  findById(request,response){
    const id = request.params.id;

    this.service.findById(id).then(result => {
      if(result.length > 0){
        response.status(200).json(result);
      } else {
        response.status(404).json({message: "Error - No existe compra con ese id"});
      }
    })
  }

  deleteById(request,response){
    const id = request.params.id;

    this.service.deleteById(id).then(result => {
      if(result.deletedCount > 0){
        response.status(200).json({message: "Compra borrada exitosamente"});
      } else {
        response.status(404).json({message: "La compra que desea borrar no existe"});
      }
    })
  }

  delete(request,response){
    this.service.deleteMany().then(result => {
      response.status(200).json(result);
    })
  }
}

export default CompraController;
