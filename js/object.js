
const person = {
    name: "amit",
    Age : "20"
}

// console.log(person.name,person["name"]);

//add
person.id = 101;
console.log(person);


// const person = [
//     {
//         name: "Amit",
//         age: 25,
//     },
//     {
//         name: "Piyush",
//         age: 40,
//     }
// ];
// person.map((v,i) => {
//     console.log(v.name, v.age);
// })



// const person = [
//     {
//         name: "Amit",
//         age: 25,
//         course: [
//             "c",
//             "html"
//         ]
//     }

// ]
// person.map((v, i) => {
//     console.log(v.name,v.age, v.course);
//     v.course.map((v) => console.log(v))
// })


// const myObj = {
//     name:"jd",
//     age:20,
//     cars:{
//         car1:"ford",
//         car2:"breza",
//         car3:"BMW"
//     }
// }
// // console.log(myObj.name);

// for(let k in myObj){
//     if(k === 'cars'){
//         for(let j in myObj[k]){
//             console.log(myObj[k][j]);
//         }
//     }
//     console.log(myObj[k]);
// }


// const person =[
//     {
//         name:"amit",
//         age:19,
//         course:{
//             c1: "c",
//             c2: "html"
//         }
//     },
//     {
//         name:"mayur",
//         age:20,
//         course:{
//             c1: "c",
//             c2: "html"
//         }
//     }
// ];

// person.map((v,i) => {
//     console.log(v.name, v.age, v.course.c1, v.course.c2);
//     // v.course
// })



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
// console.log(data. personal_info.name, data. personal_info.age, data. personal_info.city);
// // console.log(data.courses);
// data.courses.map((v) => console.log(v))

// for(let k in data){
//     if(k === 'branches'){
//         for(let j in data[k]){
            
//         }
//     }
//     console.log(data[k]);
// }
