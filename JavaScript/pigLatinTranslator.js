/*
(5 kyu)
Date: 5/9/20
Objective: translate english to pig latin, i.e. Hello World ! into elloHay orldWay !
*/

function pigIt(str){
    let origWord = str.match(/\w{1,}/g);  
    let newWord = "";
    
    for(let i = 0; i < origWord.length; i++){
      origWord[i] += `${origWord[i][0]}ay`;
      origWord[i] = origWord[i].slice(1, origWord[i].length);
    }
    
    str = str.split(/\w{1,}/);
    
    for(let i = 0; i < origWord.length; i++){
      newWord+=str[i]+origWord[i];
    }
    
    newWord+=str[str.length-1];
    
    return newWord;
  }