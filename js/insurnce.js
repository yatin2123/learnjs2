let premium;
let occ_pre;
let total_in;
const handleinsurnce = () => {
    event.preventDefault();
    // console.log('yyyy');
    let name = document.getElementById("name").value;
    // console.log(name);
    let bod = document.getElementById("bod").value;
    //    console.log(bod);
    let number = parseInt(document.getElementById("number").value);
    // console.log(number);

    let age = new Date(bod)
    let d = age.getDate()
    let d1 = 2023 - age.getFullYear();
    console.log(d1);
    

    if(d1 >=18 && d1 <=25){
        premium = 1000
    } else if(d1 >=26 && d1 <=35){
        premium = 1500;
    } else if(d1 >=36 && d1 <=45){
        premium = 2000;
    } else if(d1 > 45){
        premium = 2500;
    }
    console.log(premium);

    
    let occupation = document.getElementById("occ_select").value;
    console.log(occupation);
    
  
   
    if(occupation === "sal"){
        occ_pre =premium+ premium * 0;
    } else if(occupation === "self"){
        occ_pre = premium + 100;
    }
    console.log(occ_pre);

    let select = document.getElementById("select").value;
    // console.log(select);
    let anuul_amount;

    if(select === 'a'){
        anuul_amount = 5000000
    } else if(select === 'b'){
        anuul_amount = '1cr'
    } else if(select === 'c'){
        anuul_amount = '1.5cr'
    } else if(select === d){
        anuul_amount = '2cr'
    }
    

    let amouont = parseInt(document.getElementById("amount").value);
    console.log(amouont);

    let error = true
    

    if(select == 'a'){
        if(amouont <= 5000000){
            document.getElementById("error").innerHTML = ''
            document.getElementById("disp").style.display = 'block'
        } else {
            document.getElementById("error").innerHTML = 'invalide amount'
            document.getElementById("disp").style.display = 'none'
        }
    } else if(select == 'b'){
        if(amouont <= 10000000){
            document.getElementById("error").innerHTML = ''
            document.getElementById("disp").style.display = 'block'
        } else {
            document.getElementById("error").innerHTML = 'invalide amount'
            document.getElementById("disp").style.display = 'none'
        }
    } else if(select == 'c'){
        if(amouont <= 15000000){
            document.getElementById("error").innerHTML = ''
            document.getElementById("disp").style.display = 'block'
        } else {
            document.getElementById("error").innerHTML = 'invalide amount'
            document.getElementById("disp").style.display = 'none'
        }
    }
        
     
    // } else{
    //     document.getElementById("error").innerHTML = 'invalide amount'
    // }

    // if(select === 'b' && amouont <=10000000){
    //     document.getElementById("error").innerHTML = ''
    // } else{
    //     document.getElementById("error").innerHTML = 'invalide amount'
    // }

    // if(select === 'c' && amouont <=15000000){
    //     document.getElementById("error").innerHTML = ''
    // } else{
    //     document.getElementById("error").innerHTML = 'invalide amount'
    // }

    // if(select === 'd' && amouont <=20000000){
    //     document.getElementById("error").innerHTML = ''
    // } else{
    //     document.getElementById("error").innerHTML = 'invalide amount'
    // }


    let smoke = document.getElementById("smoke").value;
    console.log(smoke);
    let smoke_pre;

    if(smoke === "yes") {
        smoke_pre = occ_pre + 200;
    } else if(smoke === "no"){
        smoke_pre = occ_pre  ;
    } else{
        smoke_pre = 0
    }
    // console.log(smoke_pre);


    total_in = premium + occ_pre + smoke_pre;
    console.log(total_in);

    let print = '';

   print += '<table border = "1">'
   print += '<tr> <th>name</th><th>Age</th><th>Mobile no.</th><th>Insurnce</th><th>premium</th><tr>' 
   print += '<tr>'
   print += '<td>'+ name + '</td>'
   print += '<td>'+ d1 + '</td>'
   print += '<td>'+ number + '</td>'
   print += '<td>'+ amouont + '</td>'
   print += '<td>'+ smoke_pre + '</td>'

    document.getElementById("disp").innerHTML = print



    

    return false;
}