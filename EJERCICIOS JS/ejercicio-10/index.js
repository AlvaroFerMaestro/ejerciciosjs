const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  let suma = 0;
  for (let i = 0; i < numbers.length; i++) {
    suma += param[i];
  }
  return suma
}
const resultado = average(numbers)
    console.log(resultado);
    
    const media = resultado / 2 
    console.log(media);