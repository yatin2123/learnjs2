

function handlebmi() {
    console.log('yy');

    let h = parseInt(document.getElementById("height").value)
    // console.log(h);
    let w = parseInt(document.getElementById("weight").value);

    let m;
    m = h/100;
    bmical = w / (m*m);
    let ans = bmical
    console.log(ans);

    if(height > 50 && height< 190){
        document.getElementById("heightErr").innerHTML = ''
    } else{
        document.getElementById("heightErr").innerHTML = 'please enter your height'
    }


    if(height > 50 && height < 100){
        document.getElementById("weigthErr").innerHTML = ''
    } else{
        document.getElementById("weigthErr").innerHTML = 'please enter your height'
    }


    if(ans > 17 && ans < 18.5){
        document.getElementById("answer").innerHTML = "Thin ness";
        
    }else if (ans > 18.5 && ans < 25) {
      document.getElementById("answer").innerHTML = "Normal";

    }else if (ans > 25 && ans < 30) {
        document.getElementById("answer").innerHTML = "Overweight";

    }else{
        document.getElementById("answer").innerHTML = "Severe Thinness";

    }
    document.getElementById("disp").innerHTML = ans;


    return false;
}