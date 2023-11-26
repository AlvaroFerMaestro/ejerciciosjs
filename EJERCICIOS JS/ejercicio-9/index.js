const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    let suma = 0
    for (let i = 0; i < numbers.length; i++) {
        suma += param[i];
    }
    return  suma;
}
const resultado = sumAll(numbers)

console.log(resultado);