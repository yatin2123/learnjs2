function calculate() {
    let height = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    let m;
    let bmicalcu;
    m = height / 100;
    bmicalcu = weight / (m * m);
    let answer=bmicalcu;

    let heightE = true, weightE= true;

    if(height > 50 && height< 190){
        document.getElementById("heightErr").innerHTML = ''
        heightE = false;
        if(answer > 17 && answer < 18.5){
            document.getElementById("answer").innerHTML = "Thin ness"
            
        }else if (answer > 18.5 && answer < 25) {
          document.getElementById("answer").innerHTML = "Normal";
    
        }else if (answer > 25 && answer < 30) {
            document.getElementById("answer").innerHTML = "Overweight";
    
        }else{
            document.getElementById("answer").innerHTML = "Severe Thinness";
    
        }
        document.getElementById("bmianswer").innerHTML = answer;
        
    } else{
        document.getElementById("heightErr").innerHTML = 'please enter your height'
    }

    
    if(weight > 50 && weight < 100){
        document.getElementById("weigthErr").innerHTML = ''
        weightE = false
        if(answer > 17 && answer < 18.5){
            document.getElementById("answer").innerHTML = "Thin ness"
            
        }else if (answer > 18.5 && answer < 25) {
          document.getElementById("answer").innerHTML = "Normal";
    
        }else if (answer > 25 && answer < 30) {
            document.getElementById("answer").innerHTML = "Overweight";
    
        }else{
            document.getElementById("answer").innerHTML = "Severe Thinness";
    
        }
        document.getElementById("bmianswer").innerHTML = answer;
      
    } else{
        document.getElementById("weigthErr").innerHTML = 'please enter your height'
    }




  

    return false;
}
