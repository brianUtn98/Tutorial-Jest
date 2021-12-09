class Producto{
    detalle;
    precioBruto;

    constructor(detalle, precioBruto){
        if(!detalle || !precioBruto){
           throw new Error("Parametros obligatorios")
        }
        this.detalle = detalle;
        this.precioBruto = precioBruto;
        
    }

    precio(){
        return this.precioBruto * 1.21;
    }

    getProps(){
        return {
            detalle: this.detalle,
            precio: this.precio()
        }
    }
}

export default Producto;