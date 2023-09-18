

const handlesubmit = () => {
  event.preventDefault();
    // console.log('ttt');
   let income = parseInt(document.getElementById("income").value);
    console.log(income);
  
    let tex = 0;
    let tex1 = 0;
    let tex2 = 0;
    let tex3 = 0;
    let tex4 = 0;
    let tex5 = 0;
    let total_tex = 0;
  
    if(!income ){
      document.getElementById("salaryErr").innerHTML = 'please enter your valide salary'
    } else if(income <=0){
      document.getElementById("salaryErr").innerHTML = 'please enter your valide salary'
    } else{
      document.getElementById("salaryErr").innerHTML = ''
    }


    if (income <= 300000) {
      tex = 0;
      document.getElementById("tex").innerHTML = tex;
    } else if (income > 300000 && income <= 600000) {
      tex1 = 300000 * 0 + (income - 300000) * 0.05;
      // console.log(tex1);
      document.getElementById("tex").innerHTML = 0;
      document.getElementById("tex1").innerHTML = 15000;
  
    } else if (income > 60000 && income <= 900000) {
      tex2 = 15000 +  (income - 600000) * 0.10;
      // console.log(tex2);
      document.getElementById("tex").innerHTML = 0;
      document.getElementById("tex1").innerHTML = 15000;
      document.getElementById("tex2").innerHTML = tex2
    
    } else if (income > 90000 && income <= 1200000) {
      tex3 = 15000 + 30000 + (income - 900000) * 0.15;
      // console.log(tex3);
      document.getElementById("tex").innerHTML = 0;
      document.getElementById("tex1").innerHTML = 15000;
      document.getElementById("tex2").innerHTML = 20000;
      document.getElementById("tex3").innerHTML = tex3;
    } else if (income > 1200000 && income <= 1500000) {
      tex4 =
        300000 * 0 +
        300000 * 0.05 +
        300000 * 0.10 +
        300000 * 0.15 +
  
        (income - 1200000) * 0.20;
      // console.log(tex4);
      document.getElementById("tex").innerHTML = 0;
      document.getElementById("tex1").innerHTML = 15000;
      document.getElementById("tex2").innerHTML = 20000;
      document.getElementById("tex3").innerHTML = 15000;
      document.getElementById("tex4").innerHTML = tex4;
    } else if (income > 1500000) {
      tex5 =
        300000 * 0 +
        300000 * 0.05 +
        300000 * 0.10 +
        300000 * 0.15 +
        300000 * 0.20+
        (income - 1500000) * 0.30;
      // console.log(tex5);
      document.getElementById("tex").innerHTML = 0;
      document.getElementById("tex1").innerHTML = 15000;
      document.getElementById("tex2").innerHTML = 20000;
      document.getElementById("tex3").innerHTML = 15000;
      document.getElementById("tex4").innerHTML = 40000;
      document.getElementById("tex5").innerHTML = 60000;
     
    }
  
    // let type = typedata(tex,tex1, tex2, tex3,tex4, tex5);
    total_tex = tex + tex1 + tex2 + tex3 + tex4 + tex5;
    console.log(tex , tex1 , tex2 , tex3 , tex4 , tex5);
    document.getElementById("total").innerHTML = total_tex;  
  
    // 
    // document.getElementById("res1").innerHTML = tex1;
    // document.getElementById("res2").innerHTML = tex2;
    // document.getElementById("res3").innerHTML = tex3;
    // document.getElementById("res4").innerHTML = tex4;
    // document.getElementById("res5").innerHTML = tex5;
    // document.getElementById("total").innerHTML = total_tex;
  
    return false;
  };