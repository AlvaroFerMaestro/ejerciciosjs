const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  /* console.log(duplicates); */
  function removeDuplicates(param) {
    const uniqueArray = [];
    for (let i = 0; i < param.length; i++) {
      if (!uniqueArray.includes(param[i])){
        uniqueArray.push(param[i]);
      }
      
    }
    return uniqueArray;
  }

  const result = removeDuplicates(duplicates);
  console.log(result);