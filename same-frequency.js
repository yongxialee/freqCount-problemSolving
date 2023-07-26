// add whatever parameters you deem necessary
function sameFrequency(num1,num2){
    const str1Freq = makeFreq(num1.toString());
    const str2Freq = makeFreq(num2.toString());
    for (let key in str1Freq) {
        if (str1Freq[key] !== str2Freq[key]) return false;
      }
    
      return true;
}

function makeFreq(str){
    const freqCounter={};
    for (let n in str){
        freqCounter[n]=(freqCounter[n]||0)+1;

    }
    return freqCounter;
}