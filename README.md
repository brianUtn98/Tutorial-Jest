# Tutorial-Jest
Enunciado y codigo para el tutorial de JEST

Dominio: Tenemos una aplicación de Tienda virtual, en la que usuaries de todo el mundo pueden ingresar a comprar productos. Se nos encargó el modulo de compras, en el que debemos exponer un endpoint que permita crear una nueva compra en nuestra aplicacion.

De cada compra, la informacion requerida es:
* Nombre del comprador - opcional (a futuro podría ser el usuarie, una entidad más compleja).
* Items, siendo cada item un producto.
* Se debe poder conocer el subtotal de una compra, que equivale a la suma de totales de productos.
* Ademas se sabe que la tienda tiene un descuento del 10% en el precio final si la cantidad de items es mayor a 5 (precio mayorista.
* Fecha de la compra (es la fecha actual, se toma la fecha del momento en que se está procesando).

De los productos, la información que se conoce es: 
* Detalle
* Precio sin iva
* Se calcula el precio como su precio sin iva + 21%

### Se pide realizar los casos de prueba
