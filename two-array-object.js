// add whatever parameters you deem necessary
// function twoArrayObject(arr1,arr2) {
//     let obj={};
  
//         for(let i=0;i<arr1.length;i++){
//             if(arr1.length>= arr2.length){
//                 obj[arr1[i]]=arr2[i];
//                 if(arr1[i]==undefined) arr1[i]=null
                
//             }
         
            
            
//     }
//     return obj;
    

// }

function twoArrayObject(keys, values) {
    return keys.reduce((obj, cur, idx) => {
      obj[cur] = idx < values.length ? values[idx] : null;
      return obj;
    }, {});
  }