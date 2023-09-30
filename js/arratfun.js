

// 19.    Checking if two arrays are equal or not.
// let arr =[45,20,41];
// let arr1 = [100,200,300]

// if(arr.length !== arr1.length){
//     console.log('not same');
// } else {
//     flag = 0;
//     arr.map((v,i) => {
//         if(arr[i] !== arr1[i]){
//             flag = 1;
//         }
//     })
// }

// if(flag === 0){
//     console.log('same');
// }else{
//     console.log('not same');
// }

// 23.    Finding the index of the first occurrence of an element in an array.

// let arr = [46,10,50,89,99,100]
// const firstoccindex = (arr, n) => {
//     let ans = arr.indexOf(n);
//     console.log(ans);
// }
// firstoccindex(arr, 99)

// 24.    Finding the index of the last occurrence of an element in an array.
// let arr = [46,10,50,89,99,100]

// const lastindex = (arr, n) => {
//     let ans= arr.lastIndexof(n)
//     console.log(ans);
// }
// lastindex(arr, 100)

// 25.    Removing all occurrences of an element from an array.

// let arr = [46,10,50,89,10,99,50,50,100]

// const removeelem = (arr) => {
//     let res = arr.filter((v) => v!==10 && v!==50)
//     console.log(res);
// }
// removeelem(arr)

// 26.    Replacing all occurrences of an element in an array with a new element.
let arr = [46,10,50,89,99,100]

const replac = (arr,oldelem,newelem) => {
    let res = arr.map((v) => v === oldelem ? newelem:v)
    console.log(res);
}
replac(arr,46,200)