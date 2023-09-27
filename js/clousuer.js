

let age= 22;

//outer function
const personalinfo = (name) => {
        let edu = 'bsc'//outer variable

        //inner function
        return function personalinfo(salary) {

            console.log(name); //outer parameter
            console.log(edu); //outer variable
            console.log(salary); //inner parameter
        }
}

let res = personalinfo('yatin');
console.log(res);
res(40000);



const increment = () => {
    let count = 0;

    return () => {
        count = count + 1;
        console.log(count);
    }
}

let ans = increment();
ans();
ans();