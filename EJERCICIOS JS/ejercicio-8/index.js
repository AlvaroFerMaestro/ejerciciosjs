


const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  if(param && param.length > 0){
    let LongestWord = param[0]; 
    for (let i = 0; i < param.length; i++) {
        if(param[i].length > LongestWord.length)
        LongestWord = param[i];
    }
    console.log("El string mas largo del array es " + LongestWord);
  }else{
    console.log("No estas mostrando lo que te pido.");
  }
}
findLongestWord(avengers)