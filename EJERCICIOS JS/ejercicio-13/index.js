    const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  
  function finderName(array, param) {
    let position = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] === param) {
        position = i;
        break;
      }
    }
  

    if (position !== 0) {
      return { found: true, position: position };
    } else {
    }
  }
  
  const result = finderName(nameFinder, 'Bruce');
  console.log(result);
  