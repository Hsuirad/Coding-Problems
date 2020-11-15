/**
 * (4 kyu)
 * Date: 3/8/20
 * Objective: Decode morse code, but dits and dashes are not of any specified length 0101110001 and 00001111000011111111000000001111 are the same word
 */

var decodeBits = function(bits){
      bits = bits.split('');
        while(1){
          if(bits[0]==1) break 
          else if(bits.length > 0) bits.shift()
        }
        while(1){
          if(bits[bits.length-1]==1) break 
          else if(bits.length > 0) bits.pop()
        }
        
        let shortSize = 0;
        let longSize = 0;
        let newWord = 0;
        let newLetter = 0;
        let largestSpace = 0;
        let largestSize = 0;
        let size = 0;
        let i = 0;
        while(i < bits.length){
          size = 0;
          if(bits[i] == 1){
            while(bits[i+size] == 1){
              size++;
            }
            console.log(size, i);
            if(shortSize == 0){
              shortSize = size;
            }
            else if(longSize == 0 && size != shortSize){
              longSize = size;
            }
          }
          
          if(longSize != 0 && shortSize != 0){
            break;
          }
          if(largestSize == 0)largestSize = size;
          else if(largestSize < size) largestSize = size;
          i+=(size==0?1:size);
        }
        i=0
        while(i < bits.length){
          size = 0;
          if(bits[i] == 0){
            while(bits[i+size] == 0){
              size++;
            }
            if(newWord == 0 && size != shortSize){
              newWord = size;
            }
            else if(newLetter == 0 && newWord != 0 && newWord != size){
              newLetter = size;
            }
          }
          
          if(newLetter != 0 && newWord != 0){
            break;
          }
          if(largestSpace == 0)largestSpace = size;
          else if(largestSpace < size) largestSpace = size;
          i+=(size==0?1:size);
        }
        
        if(newWord == 0){
          newWord = 100000;
        }
        
        if(longSize == 0){
          longSize = 100000;
        }
        
        if(longSize < shortSize){
          let temp = shortSize;
          shortSize = longSize;
          longSize = temp;
        }
        if(newWord < newLetter){
          let temp = newLetter;
          newLetter = newWord;
          newWord = temp;
        }
        if(largestSize > largestSpace && largestSize != 1 && largestSpace != 0){
          longSize = largestSize;
          newLetter = largestSpace;
          shortSize = 100000;
          newWord = 1000000;
        }
        
        console.log(longSize, shortSize, newWord, newLetter, largestSpace, largestSize);
        let dash = (new Array(longSize).fill('1')).join("");
        let dit = new Array(shortSize).fill('1').join("");
        let word = (new Array(newWord).fill('0')).join("");
        let letter = new Array(newLetter).fill('0').join("");
        
        let newBits = bits.join('').split(dash).join('-').split(dit).join('.').split(word).join(' ').split(letter).join('[').split('0').join('');
        
        return newBits;
    }
    
var decodeMorse = function(morseCode){
    let letters = [];
    let pusher = "";
    let mod = 0;
    let word = "";
    
    let i = 0;
    while(i < morseCode.length){
        pusher  ="";
        mod = 0;
        while(morseCode[i+mod] == "." || morseCode[i+mod] == "-" || morseCode[i+mod] == "["){
            pusher+=(morseCode[i+mod]=='['?'':morseCode[i+mod]);
            mod++;
        }
        if(mod == 0){
            i++;
        }
        else{
            i+=mod;
        }
        if(morseCode[i] == " " && morseCode[i+mod] == " "){
            pusher+=' ';
        }
        
        if(pusher.length>1&&pusher[pusher.length-1]==" ") pusher = pusher.split('').splice(0, pusher.length-1).join('');
        
        letters.push(pusher)
    }
    
    letters.forEach(elem => {
        word+=(elem==" "||elem==""?(elem==" "?" ":""):MORSE_CODE[elem]);
    });
    return word;
}