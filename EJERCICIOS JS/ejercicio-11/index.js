const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {

    let suma = 0
    let contador = 0

  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] === "number"){
      suma += param[i];
    }else if (typeof param[i] === "string") {
    contador += param[i].length;   
   }
  } 

  if (contador === 0){
    return 0;
  }

  const promedio = suma + contador;
  return promedio;
}

const resultadoPromedio = averageWord(mixedElements);
console.log(resultadoPromedio);