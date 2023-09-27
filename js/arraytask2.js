//13.    Rotating an array by a given number of positions.

let arr = [1, 2, 3, 4, 5];

const rotetarray = (arr,n) => {
  for(i=0;i<n;i++){
    let ans = arr.pop();
    arr.unshift(ans);
  }
  console.log(arr);
}
rotetarray(arr, 2);

//14.    Finding the second largest element in an array.

// let arr = [10,33,25,20,45,60];

// let ans = arr.sort((a,b) => a-b);

// console.log(ans[arr.length-2]);


// let arr = [7,10,4,3,20,15];
// let k = 2;

// for(let i=0; i<arr.length; i++){
//     if(arr[i]===k){
//         arr = arr[k-1];
//     }

// }

// // let arr1 = arr.sort((a,b) => a-b);

// console.log(arr);

//11.    Splitting an array into two arrays based on a condition.
// let arr = [1,2,3,'yatin',4,5,'rahul',6];

// let arr1 = arr.filter((v) => typeof v === 'number');
// let starr = arr.filter((v) => typeof v === 'string');
// console.log(arr1,starr);                


//15 Finding the k-th smallest element in an array

// var array = [9, 5, 7, 3, 2, 11, 8];
// var k = 3;

// var left = 0;
// var right = array.length - 1;

// while (left <= right) {
//   var pivotIndex = partition(array, left, right);

//   if (pivotIndex === k - 1) {
//     break;
//   } else if (pivotIndex < k - 1) {
//     left = pivotIndex + 1;
//   } else {
//     right = pivotIndex - 1;
//   }
// }

// var kthSmallest = array[k - 1];
// console.log(kthSmallest);  



