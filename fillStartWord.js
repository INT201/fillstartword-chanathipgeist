 const { template } = require('@babel/core')

function fillStartWord(startWord,word) {
  let full= startWord + word 
  for(let i=0 ; i<=(startWord.length-1) ; i++){
    if(word===null){
      full = undefined
      break
    }if(word===undefined) {
      full = undefined
      break
    }   
    if(startWord[i]===word[i]){
     full=word
    }else{
      full=full
    }
  }
   return  full
}
console.log(fillStartWord('Geist','GeistPloy' ))
 module.exports = fillStartWord


