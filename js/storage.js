
// let arr = [];
const handleSubmit = () => {
    // event.preventDefault();
    // console.log('yyy');
    let localData = JSON.parse(localStorage.getItem("name"));
    let name = document.getElementById("name").value;
    // arr.push(name)
    
    if(localData){
        localData.push(name);
        localStorage.setItem("name", JSON.stringify(localData))
    }else{
        localStorage.setItem("name", JSON.stringify([name]))
    }


   
    display();
}

const display = () =>  {
    let localData = JSON.parse(localStorage.getItem("name"));

    let lDiv = document.getElementById("disp");
    lDiv.innerHTML = '';

    localData.map((l) => {
        let lielem = document.createElement("li");
        let litxt = document.createTextNode(l)
        lielem.appendChild(litxt);
        lDiv.appendChild(lielem)
    })

}
display();
