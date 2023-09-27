// let arr = [10,55,99,100,2,6,9]
// let max = 0;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }
// console.log(max);

// let ans = arr.Max(...arr)
// console.log(ans);
// 2

// let arr1 = [10,2,9,7,-2,-9]
// let m1 = 0;


// for(i=0; i<arr1.length; i++){
//     if(arr1[i ]< m1){
//         m1 = arr1[i]
//     }
// }
// console.log(m1);

// 3
// let arr = [10,-9,50,-30,60,2,1]

// let res = arr.sort((a,b) => (a-b));
// console.log(res);

// let temp;
// for(let i=0; i<arr.length; i++){

//     for(let j=i+1; j<arr.length; i++){
//         if(arr[i] > arr[j]){
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j]=temp;
//         }
//     }
// }

// for(let i=0; i<arr.length; i++){
//     console.log(i);
// }


// 4
// let arr = [10,-9,50,-30,60,2,1]

// let res = arr.sort((a,b) => (b-a));
// console.log(res);

// let temp;
// for(let i=0; i<arr.length; i++){

//     for(let j=i+1; j<arr.length; i++){
//         if(arr[i] < arr[j]){
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j]=temp;
//         }
//     }
// }

// for(let i=0; i<arr.length; i++){
//     console.log(i);
// }


// let arr = [10,55,99,100,2,6,9,9,55,10]

// 5.    Reversing an array.

// const reves = (arr) => {
//     let res = arr.reverse();
//     console.log(res);
// }
// // reves(arr)

// // 6.    Finding the sum of all elements in an array.

// const arrsum = (arr) => {
//     let res = arr.reduce((acc,v) => acc + v,0)
//     console.log(res);
// }
// // arrsum(arr);

// // 7.   Finding the average of all elements in an array.

// const average = (arr) => {
//     let res = arr.reduce((acc,v) => acc + v,0)
//     console.log(res/arr.length);
// }
// // average(arr)

// // 8.    Checking if an array contains a specific element.

// const checkarr = (arr) => {
//     let res = arr.some((v) => v>100)
//     console.log(res);
// }
// // checkarr(arr);

// // 9.    Removing duplicates from an array.
// let Unarr = [];
// arr.map((v) => {
//     if(!Unarr.includes(v)){
//         Unarr.push(v)
//     }
// })
// // console.log(Unarr);

// //11.    Splitting an array into two arrays based on a condition.
// let arr = [1,2,3,'yatin',4,5,'rahul',6];

// // let arr1 = arr.filter((v) => typeof v === 'number');
// // let starr = arr.filter((v) => typeof v === 'string');
// // console.log(arr1,starr); 


// 10.    Merging two arrays into a new array.
// let arr1 = [1,2,3,];
// let arr2 = ['yatin','rohit']


// let newarr=[];
// for(let i=0; i<arr1.length; i++){
//     newarr[i] = arr1[i];

// }

// for(let i=0; i<arr2.length; i++){
//     newarr[i.length+i] = arr2[i];
// }
// console.log(newarr);
// let res = [...arr1, ...arr2]
// console.log(res);

// 13.    Rotating an array by a given number of positions.

// let arr = [10,20,5,6,9,2];

// const rotatarr = (arr,n) => {
//     for(let i=0; i<n; i++){
//         let res = arr.pop(n);
//         arr.unshift(res)
//     }
//     console.log(arr);
// }

// rotatarr(arr,1)

// 14.    Finding the second largest element in an array.

// let arr = [10,65,99,100,200,300];

// const secondlag = (arr) => {
//     let elem = arr.sort((a,b) => b-a);
//     console.log(elem[1]);
// }

// secondlag(arr)

// 15.    Finding the k-th smallest element in an array.
// let arr = [10,20,85,99,100,95]

// const smallest = (arr) => {
//     let res = arr.sort((a,b) => b-a);
//     console.log(res[1]);
// }
// smallest(arr,2)

// 17.    Finding the median of an array.

let arr = [20,30,50,80]


const medianarr = (arr) => {
    let res = arr.sort((a,b) => b-a)
    // console.log(res);

    if(arr.length%2 === 0){
        let index1 = (arr.length/2) -1;
        let index2 = arr.length/2;
        console.log([index1] + [index2]);
        
    }else{
        let index = arr.length/2;
        // console.log(index);
    }
}
medianarr(arr);