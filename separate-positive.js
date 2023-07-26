// add whatever parameters you deem necessary
function separatePositive(arr) {
    let newArr=[];
    for (i=0;i<arr.length;i++){
        if(arr[i]>=0){
            newArr.unshift(arr[i])
        }else{
            newArr.push(arr[i])
        }
    }
    return newArr
}
// function separatePositive(nums) {
//   let start = 0;
//   let end = nums.length - 1;

//   while (start < end) {
//     if (nums[start] < 0 && nums[end] > 0) {
//       // ES2015
//       // [nums[start], nums[end]] = [nums[end], nums[start]];

//       // ES5
//       var temp = nums[start];
//       nums[start] = nums[end];
//       nums[end] = temp;

//       start += 1;
//       end -= 1;
//     } else {
//       if (nums[start] > 0) start += 1;
//       else end -= 1;
//     }
//   }
//   return nums;
// }