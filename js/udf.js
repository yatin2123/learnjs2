//normal function

//function declaration
function greeting() {
    console.log('Good Morning');
}

//function call
greeting();


// User Defind Function (UDF)
function calage(bod_year) {  //2
    let res;
    res = 2023 - bod_year;

    return res
}

let ans = calage(2001)  //1 //3
console.log(ans);


//Array function

const greeting1 = () => {
    console.log('Good Morning1');
}

greeting1();


const calAge = (bodyear) => {
    let res = 2023 - bodyear
    console.log(res);
}
calAge(2002)


//Nested Function
const costing = (place) => {
    if (place === 'Goa') {
        return 35000;
    } else if (place === 'Manali') {
        return 85000;
    }
}

const packges = (p1, p2) => {
    let const1 = costing(p1)
    let const2 = costing(p2)

    let msg;
    msg = p1 + 'costing you' + const1 + ' ' + 'and' + ' '  + p2 + 'costing you' + const2;

    return msg;
}

let res = packges('Goa', 'Manali');
console.log(res);