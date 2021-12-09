import CompraModel from  "../model/dataAccess/CompraModel.js"

class CompraService{
    model;
    
    constructor(){
        console.log("Creando compra serivce");
        this.model = CompraModel;
    }

    create(compra){
        return this.model.create(compra.getProps());
    }

    retrieve(){
        return this.model.find({});
    }
}

export default CompraService;