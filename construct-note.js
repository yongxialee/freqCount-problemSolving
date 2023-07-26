// add whatever parameters you deem necessary
// function constructNote(message,letters) {
//     let letterFreq ={};
//     let messageFreq={};

//     //biuld frequecy counter of letters
//     for(let char of letters){
//         letterFreq[char] =++letterFreq[char ] || 1;
//     }

//     //build frequency counter of message
//     for(let char of message){
//         messageFreq[char] =++messageFreq[char+1]||1;
//     }
//     //compare message frequency with letters frequency
//     for(let char in messageFreq){
//         if(!letterFreq[char]) return false;
//         if(messageFreq[char]>letterFreq[char]) return false
//     }
//     return true;

// }
function constructNote(message, letters) {
    const lettersFreq = {};
    const messageFreq = {};
  
    // build frequency counter of letters
    for (let char of letters) {
      lettersFreq[char] = lettersFreq[char] +1|| 1;
        
    }

    // build frequency counter of message
    for (let char of message) {
      messageFreq[char] = messageFreq[char] +1|| 1;
    }
  
    // final comparison of message frequency with letters frequency
    for (let char in messageFreq) {
      if (!lettersFreq[char]) {
        return false;
      }
      if (messageFreq[char] > lettersFreq[char]) {
        return false;
      }
    }
  
    return true;
  }
  