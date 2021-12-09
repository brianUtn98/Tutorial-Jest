import CompraModel from "../model/dataAccess/CompraModel.js";

class CompraService {
  model;

  constructor() {
    this.model = CompraModel;
  }

  create(compra) {
    return this.model.create(compra.getProps());
  }

  retrieve() {
    return this.model.find({});
  }

  findById(id) {
    return this.model.find({ _id: id });
  }

  deleteById(id){
    return this.model.deleteOne({_id: id});
  }

  deleteMany(){
    return this.model.deleteMany({});
  }
}

export default CompraService;
