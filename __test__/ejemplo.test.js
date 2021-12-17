const suma = (a,b) => a+b;
const multiplicacion = (a,b) => a*b;
const division = (a,b) => {
    if(b === 0){
        throw new Error("No se puede devidir por 0");
    }

    return a/b;
}

const esBisiesto = (anio) => ((anio % 4 ===0) && !(anio % 100 == 0)) || (anio % 400 == 0);


const cobrar = (persona,monto) => {
    persona.saldo -= monto;
}

describe("Test suit",() => {

    test("anio bisiesto",() => {
        expect(esBisiesto(2024)).toBeTruthy();
    })

    test("otro anio bisiesto",() => {
        expect(esBisiesto(2000)).toBeTruthy();
    })

    test("anio no bisiesto",() => {
        expect(esBisiesto(1900)).not.toBeTruthy();
    })

    test("Cuando una persona paga, su saldo disminuye",() => {
        let brian = {
            nombre: "Brian",
            saldo: 1200
        }

        cobrar(brian,500);

        expect(brian.saldo).toStrictEqual(700);
    })

    test("Suma de dos numeros",() => {
        expect(suma(3,2)).toStrictEqual(5);
    })

    test("Multiplicacion de dos numeros",() => {
        expect(multiplicacion(6,6)).toStrictEqual(36);
    })

    test("Division de dos numeros",() => {
        expect(division(6,3)).toStrictEqual(2);
    })

    test("Division por 0",() => {
        expect(() => division(2,0)).toThrow("No se puede devidir por 0");
    })
})

