
// let res = document.querySelector("h1").innerHTML = "chudasama";


const handleAdd = () => {
    let hElem = document.createElement("h1");
    hElem.setAttribute("class", "demo")
    // console.log(hElem);

    let texNode = document.createTextNode("html");
    hElem.appendChild(texNode)
    console.log(hElem);

    let dispElem = document.getElementById("disp");
    dispElem.appendChild(hElem)
}
handleAdd();


let box = document.querySelector("#box")
let btn = document.querySelector("button")
let flag = 0;
btn.addEventListener("click", function() {
    if(flag === 0){
        console.log('clickd');
        flag = 1;
    } else{
        console.log('yyyyyy');
        flag = 0;
    }
})

// let data = {
//     personal_info: {
//         name: 'amit',
//         age: 25,
//         city: 'surat'
//     },
//     courses: ["C", "JavaScript", "React"],
//     branches: {
//         b1: {
//             admission: 50,
//             vacant_seat: 10
//         },
//         b2: {
//             admission: 30,
//             vacant_seat: 20
//         },
//         b3: {
//             admission: 25,
//             vacant_seat: 25
//         },
//         b4: {
//             admission: 40,
//             vacant_seat : 10
//         }
//     }
// }

// for(let k in data){
//    if(k === 'courses'){
//     data[k].map((v) => {
//         console.log(v);
//     })
//    }else if(k === 'personal_info:'){
//         for(let y in data[k]){
//             console.log(data[k][y]);
//         }
//    } else{
//     for(let i in data[k]){
//         for(let a in data[k][i]){
//             console.log(k,i,a,data[k][i][a]);
//         }
//     }
//    }
    
//     // console.log(data[k]);
// }