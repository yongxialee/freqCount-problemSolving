// add whatever parameters you deem necessary
function averagePair(arr,num) {
    //if empty arr return false
    if(arr.length===0) return false
    let startIdx =0;
    let endIdx= arr.length-1;
    while(startIdx<endIdx){
        let avg = (arr[startIdx]+arr[endIdx])/2
        if(avg===num){
            return true
        }else if(avg<num){
            startIdx++
        }else{ 
            endIdx--;
        }
    }
    return true
    
}
