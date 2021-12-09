import Producto from "../model/domain/Producto"

describe("Producto test suit",() => {
    describe("Test de estructura",() => {
        test("Deberia poderse crear un nuevo producto",() => {
            expect(new Producto("Lavarropas",25000)).toBeInstanceOf(Producto)
        })

        test("Un producto deberia tener detalle",() => {
            expect(new Producto("Lavarropas",25000).detalle).toStrictEqual("Lavarropas");
        })

        test("Un producto deberia tener precioBruto",() => {
            expect(new Producto("Lavarropas",25000).precioBruto).toStrictEqual(25000);
        })

        test("Propiedades de un producto",() => {
            expect(new Producto("Lavarropas",25000).getProps()).toStrictEqual({
                detalle: "Lavarropas",
                precio: 30250
            })
        })

        test("Producto sin propiedades deberia tirar una excepcion", () => {
            expect(() => new Producto()).toThrow("Parametros obligatorios");       
        })
    })

    describe("Test de comportamiento",() => {
        test("Precio de un producto",() => {
            const producto = new Producto("Heladera",45000);

            expect(producto.precio()).toStrictEqual(54450)
        })
    })
})