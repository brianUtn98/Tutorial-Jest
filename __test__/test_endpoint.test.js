import supertest from "supertest";
import {app,server} from "../index.js";

import mongoose from "mongoose";

const api = supertest(server);

const fixture = () => {
    const compraValida = {
        comprador: "Fernando Díaz",
        items: [
            {
                "detalle": "Pizarra",
                "precioBruto": "1000"
            },
            {
                "detalle": "Marcador x 10",
                "precioBruto": "600"
            }
        ]
    }

    const compraConDescuento = {
        comprador: "Valeria Manes",
        items: [
            {
                "detalle": "Pizarra",
                "precioBruto": "1000"
            },
            {
                "detalle": "Marcador x 10",
                "precioBruto": "600"
            },
            {
                "detalle": "Cartuchera",
                "precioBruto": "400"
            },
            {
                "detalle": "Mochila",
                "precioBruto": "2000"
            },
            {
                "detalle": "Funda para notebook",
                "precioBruto": "850"
            },
            {
                "detalle": "Aromatizador aloe vera",
                "precioBruto": "120"
            }
        ]
    }

    const compraValidaIncompleta = {
        items: [
            {
                "detalle": "Pizarra",
                "precioBruto": "1000"
            },
            {
                "detalle": "Marcador x 10",
                "precioBruto": "600"
            }
        ] 
    }

    const compraInvalida = {
        comprador: "Pablito",
        panchito: "Cuidado cabeza"
    }

    const compraIncompleta = {
        comprador: "Brian Monroy"
    }

    const compraItemsIncompletos = {
        comprador: "Carlitos",
        items: [
            {
                "detalle": "Pizarra"
            },
            {
                "precioBruto": "600"
            }
        ]
    }
    return{
        compraValida,
        compraConDescuento,
        compraValidaIncompleta,
        compraInvalida,
        compraIncompleta,
        compraItemsIncompletos
    }
}

beforeAll(async () => {
    const {compraValida} = fixture();
    await api.post("/compras").send(compraValida);
    await api.post("/compras").send(compraValida);
    await api.post("/compras").send(compraValida);

})

afterAll(async () => {
    await api.delete("/compras").then(() => {
        mongoose.connection.close();
        server.close();
    })
})
describe("",() => {
    const {
        compraValida,
        compraConDescuento,
        compraValidaIncompleta,
        compraInvalida,
        compraIncompleta,
        compraItemsIncompletos
    } = fixture();

    describe("Tests creacion de compras",() => {
        test("Compra valida deberia devolver 200",async ()=>{
            await api.post("/compras").send(compraValida).expect(200);
        })
    
        test("Compra valida sin opcionales deberia devolver 200",async () => {
            await api.post("/compras").send(compraValidaIncompleta).expect(200);
        })
    
        test("Compra incompleta deberia devolver 406",async () => {
            await api.post("/compras").send(compraIncompleta).expect(406);
        })
    
        test("Compra con items incompletos debería devolver 406",async () => {
            await api.post("/compras").send(compraItemsIncompletos).expect(406);
        })
    
        test("Compra invalida deberia devolver 406",async () => {
            await api.post("/compras").send(compraInvalida).expect(406);
        })
    })

    describe("Tests recuperar compras", () => {
        test("GET de compras debería devolver un json", async () => {
            await api.get("/compras").expect(200).expect("Content-Type",/application\/json/)
        })

        test("GET de compras deberia tener almenos 3 compras", async () => {
            await api.get("/compras").expect(200).then((response) => {
                expect(response.body.length).toBeGreaterThan(3)
            })
        })
    })
    
})