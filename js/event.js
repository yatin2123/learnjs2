
function handleClick() {
    console.log("click");
}
function handleMouseover() {
    console.log("Mouse Over!");
}
function handleMouseout() {
    console.log("Mouse Out!");
}
function handleMousedown() {
    console.log("Mouse Down!");
}
function handleMouseUp() {
    console.log("Mouse Up!");
}
function handleMousemove() {
    console.log("Mouse Move!");
}




function handlekeyup() {
    let a = document.getElementById("name").value;
    console.log(a);
}
function handlekeydown() {
    let a = document.getElementById("name_doen").value;
    console.log(a);
}



function handleFocus() {
    let a = document.getElementById("focus").style.backgroundColor = 'red'
   console.log(a);
}

// function handlesubmit() {
//     let a = document.getElementById("submit").value;
//     console.log("a");
// }
function handleblur() {
    let a = document.getElementById("focus").style.backgroundColor = 'white'
    console.log(a);
}


// function handlechange() {
//     let a = document.getElementById("country").value;
//     console.log(a);
// }

window.onload = function() {
    console.log('window');
}

window.onresize = function(){
    console.log('window resize');
}