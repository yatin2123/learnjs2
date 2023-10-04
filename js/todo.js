

let arr = [];
let upindex = null;

const handletodo = () => {
    // console.log('yyyy');

    let input = document.getElementById("input").value;
    // console.log(input);
    if (upindex !== null) {
        arr[upindex] = input;
    } else {
        arr.push(input)
    }
    upindex = null
    dispdata();

    return false
}


const handldelet = (i) => {

    arr.splice(i, 1)
    dispdata();
    return false;
}

const handledite = (i) => {
    // console.log(arr[i]);
    document.getElementById("input").value = arr[i];
    upindex = [i
    ];

    return false
}

const dispdata = () => {
    print = '';

    arr.map((v, i) => {
        print += `<li>${v}`
        print += `<button onclick = handldelet(${i})>X</button>`
        print += `<button onclick = handledite(${i})>E  </button>`
        print += `</li>`
    })

    document.getElementById("input").value = '';

    document.getElementById("dis").innerHTML = print;
    // console.log(print);
    return false
}