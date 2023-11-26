const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
    const conteo = {}
    for (let i = 0; i < param.length; i++) {
        const palabra = param[i];
        if(conteo[palabra]){
            conteo[palabra]++;
        }else{
            conteo[palabra] = 1;
        }
    }        
    return conteo;
  }

  const resultado = repeatCounter (counterWords)
  console.log(resultado);