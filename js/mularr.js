

let arr = [
    [1, 'yatin', 22],
    [2, 'rohit', 19],
    [3, 'vishal', 24]
]


let print = '';

print += '<table border="1"><tr><th>id no</th><th>name</th><th>age</th></tr>'

for (let i = 0; i < arr.legnth; i++) {
    print += '<tr>'
    for (let j = 0; j < arr[i].legnth; j++) {
        console.log(arr[i][j]);
        // print += '<td>'
        // print += arr[i][j]
        // print += '</td>'
    }
    print += '</tr>'
}



print += '</table>'

document.getElementById("dis").innerHTML = print;
