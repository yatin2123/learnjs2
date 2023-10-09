

// let divelem = document.getElementById("box");

// let h1elem = document.createElement("h1");
// let aelem = document.createElement("a");
// let atxt = document.createTextNode("Home")
// aelem.setAttribute("href", "#")
// let h1txt = document.createTextNode("Hello");

// h1elem.appendChild(h1txt);
// divelem.appendChild(h1elem)

// aelem.appendChild(atxt);
// divelem.appendChild(aelem)

const handlesubmit = () => {
    event.preventDefault();
    // console.log('yyy');

    let name = document.getElementById("name").value;
    // console.log(name);

    let divelem = document.createElement("div");
    let divtxt = document.createTextNode(name);

    divelem.appendChild(divtxt)
}