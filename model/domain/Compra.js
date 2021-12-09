class Compra{
    comprador;
    items;
    fecha;

    constructor(comprador,items){
        this.comprador = comprador;
        this.items = items;
        this.fecha = new Date();
    }

    subtotal(){
        return this.items.map(p => p.precio()).reduce((a,b) => a + b,0);
    }

    precio(){
        return this.items.length > 5 ? this.subtotal() * 0.9 : this.subtotal();
    }

    getProps(){
        return {
            comprador: this.comprador,
            items: this.items.map(i => i.getProps()),
            precio: this.precio(),
            fecha: this.fecha
        }
    }
}

export default Compra;