function insert(val)  {  
    // console.log(val);
    document.form1.textview.value = document.form1.textview.value + val
}  

function equal(){
    let exp = document.form1.textview.value;
    let res = eval(exp)
    
    // console.log('yyyy', exp, res);
    document.form1.textview.value =  res;   

}

function backspace(){
    let exp = document.form1.textview.value;

    document.form1.textview.value = exp.substring(0, exp.length-1 )
}
