function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function calculadora() {
    let operacion = prompt("Seleccione una operación: suma, resta, multiplicacion o division").toLowerCase();

    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));

    let resultado;

    switch (operacion) {
        case "suma":
            resultado = sumar(num1, num2);
            break;
        case "resta":
            resultado = restar(num1, num2);
            break;
        case "multiplicacion":
            resultado = multiplicar(num1, num2);
            break;
        case "division":
            resultado = dividir(num1, num2);
            break;
        default:
            resultado = "Operación no válida";
    }

    alert("Resultado: " + resultado);
}

calculadora();