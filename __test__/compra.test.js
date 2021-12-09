import Producto from "../model/domain/Producto";
import Compra from "../model/domain/Compra";

describe("Compras test", () => {
  const producto1 = new Producto("Mouse", 2200);
  const producto2 = new Producto("Teclado", 5000);
  const producto3 = new Producto("Auriculares", 6000);
  const compra = new Compra("Brian Monroy", [producto1, producto2, producto3]);
  const compraDescuento = new Compra("Brian Monroy", [
    producto1,
    producto1,
    producto2,
    producto2,
    producto2,
    producto3,
    producto3,
  ]);
  describe("Test de estructura", () => {
    test("Compra debe tener comprador", () => {
      expect(compra.comprador).toStrictEqual("Brian Monroy");
    });

    test("Compra debe tener items", () => {
      expect(compra.items.length).toStrictEqual(3);
    });

    test("Compra debe tener items", () => {
      expect(compra.items).toStrictEqual([producto1, producto2, producto3]);
    });

    test("Propiedades de una compra", () => {
      expect(compra.getProps()).toStrictEqual({
        comprador: "Brian Monroy",
        items: [
          producto1.getProps(),
          producto2.getProps(),
          producto3.getProps(),
        ],
        precio: 15972,
        fecha: new Date().toLocaleDateString(),
      });
    });

    test("Compra producto sin propiedades obligatorias deberia tirar una excepcion",() => {
        expect(() => new Compra("Brian Monroy")).toThrow(Error);
    })
  });

  describe("Test de comportamiento", () => {

    test("Subtotal de una compra", () => {
        expect(compraDescuento.subtotal()).toStrictEqual(37994)
    });

    test("Compra deberia tener descuento", () => {
      expect(compraDescuento.precio()).toStrictEqual(34194.6);
    });

    test("Compra sin descuento",() => {
        expect(compra.precio()).toStrictEqual(compra.subtotal())
    })
  });
});
