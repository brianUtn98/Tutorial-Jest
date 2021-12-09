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
    console.log(this.service);
  }

  create(request, response) {
    const items = request.body.items.map(
      (producto) => new Producto(producto.detalle, producto.precioBruto)
    );

    const compra = new Compra(request.body.comprador, items);
    console.log(compra.getProps())

    CompraModel.create(compra.getProps()).then(result => {
        response.status(200).json(result);
    }).catch(error => response.status(406).json(error))
  }

  retrieve(request,response){
    CompraModel.find({}).then(result => {
      response.status(200).json(result);
    })
  }
}

export default CompraController;
