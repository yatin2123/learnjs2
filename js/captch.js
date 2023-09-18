

let a = Math.floor(Math.random() * 10);
console.log(a);

let b = Math.floor(Math.random() * 10);
console.log(b);
let ans;
ans = a + b;

console.log(a, b, ans);

document.getElementById("num1").innerHTML = a;
document.getElementById("num2").innerHTML = b;

function handlecaptch() {
    let captcha = parseInt(document.getElementById("captcha").value);
    if(captcha === ans){
        if (document.getElementById("captcha").value == ans) {
            alert("coreat ans")
        } else {
            alert("in coreat ans is" + ans)
        }
        console.log('tttt');
       document.getElementById("captchErr").innerHTML = ''
    
    } else{
        console.log('yyy');
        document.getElementById("captchErr").innerHTML = 'please enter ans'
    }

    
    return false;
}