let calculatebtn = document.getElementById("calculate-btn");

let result = document.getElementById("result");

let calculate = () => {
  let pri = parseInt(document.getElementById("pri").value);
  let rate = parseInt(document.getElementById("rate").value);
  let time = parseInt(document.getElementById("time").value);

  let select = document.getElementById("select").value;

  let priE = true, rateE = true, timeE = true, selectE = true;

  if(pri  > '0' && pri < 500000){
    document.getElementById("PrincipalErr").innerHTML = '';
    priE = false
    let simpleinterest = select === "year" ? (pri * rate * time) / 100 : (pri * rate * time) / 1200;
  document.getElementById("si_value").innerHTML = simpleinterest;
  } else{
    document.getElementById("PrincipalErr").innerHTML = 'please enter principal amount';
  }

  if(rate  > 0 && rate < 1000){
    document.getElementById("rateErr").innerHTML = '';
    rateE = false;
    let simpleinterest = select === "year" ? (pri * rate * time) / 100 : (pri * rate * time) / 1200;
  document.getElementById("si_value").innerHTML = simpleinterest;
  } else{
    document.getElementById("rateErr").innerHTML = 'please enter rate';
  }

  if(time  > 0 && time < 20){
    document.getElementById("timeErr").innerHTML = '';
    timeE = false
    let simpleinterest = select === "year" ? (pri * rate * time) / 100 : (pri * rate * time) / 1200;
  document.getElementById("si_value").innerHTML = simpleinterest;
  } else{
    document.getElementById("timeErr").innerHTML = 'please enter time';
  }

  if(select === '0'){
    document.getElementById("selectErr").innerHTML = 'please select month or year';
  } else{
    document.getElementById("selectErr").innerHTML = '';
    selectE = false;
    let simpleinterest = select === "year" ? (pri * rate * time) / 100 : (pri * rate * time) / 1200;
    document.getElementById("si_value").innerHTML = simpleinterest;
  }

  console.log(pri, rate, time, select);

  
  console.log(simpleinterest);

  // let amount = pri + simpleinterest;
  // console.log(amount);

  
};
calculatebtn.addEventListener("click", calculate);
// window.addEventListener("load", calculate);
