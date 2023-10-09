// let arr = []

const handlesubmit = () => {
    event.preventDefault();
    // console.log('yyy');
    let id = Math.floor(Math.random()*1000)
    let localdata = JSON.parse(localStorage.getItem("hoteldata"));
    let date = document.getElementById("date").value;

    let table = document.getElementById("table").value;
    let select = document.getElementById("select").value;
    let person = document.getElementById("person").value;
    // arr.push(date)
    let ans = select * person;
    console.log(ans);

    let finsl_bill;




    // console.log(date,table,select,person);


    if (date === '') {
        document.getElementById("dateError").innerHTML = 'pease enter date'
    } else (
        document.getElementById("dateError").innerHTML = ''
    )

    if (table === '') {
        document.getElementById("t_error").innerHTML = 'pease enter table'
    } else {
        document.getElementById("t_error").innerHTML = ''
    }

    if (select === '') {
        document.getElementById("sel_error").innerHTML = 'pease enter select'
    } else {
        document.getElementById("sel_error").innerHTML = ''
    }

    if (person === '') {
        document.getElementById("per_error").innerHTML = 'pease enter person'
    } else {
        document.getElementById("per_error").innerHTML = ''
    }
    let obj = {
        id,
        date,
        table,
        select,
        person,
        ans,
    }
    console.log(obj);



    if (localdata) {
        localdata.push([obj]);
        localStorage.setItem("hoteldata", JSON.stringify(localdata));
    } else {
        
        localStorage.setItem("hoteldata", JSON.stringify([obj]));
    }

  
}

const handleRemove = (id) => {
    console.log(id);
    // let localdata = JSON.parse(localStorage.getItem("hoteldata"));
    // let fData = localdata.filter((v) => v.id != id)
    // localStorage.setItem("hoteldata", JSON.stringify(fData));

    // window.location.reload();
}

const display = () => {
    let localdata = JSON.parse(localStorage.getItem("hoteldata"));

    let telem = document.getElementById("dis");

    // finsl_bill = localdata.reduce((acc, v) => acc + v, 0)
    // console.log(finsl_bill);
    // telem.innerHTML = ''

    localdata.map((v, i) => {
        let row = document.createElement("tr")
        let coll1 = document.createElement("td")
        let text1 = document.createTextNode(v.date)
        coll1.appendChild(text1)
        let coll2 = document.createElement("td")
        let text2 = document.createTextNode(v.table)
        coll2.appendChild(text2)
        let coll3 = document.createElement("td")
        let text3 = document.createTextNode(v.select)
        coll3.appendChild(text3)
        let coll4 = document.createElement("td")
        let text4 = document.createTextNode(v.person)
        coll4.appendChild(text4)
        let coll5 = document.createElement("td")
        let text5 = document.createTextNode(v.ans)
        coll5.appendChild(text5)

        // let coll6 = document.createElement("td")
        // let text6 = document.createTextNode(v.finsl_bill)

       

        coll1.appendChild(text1)
        row.appendChild(coll1)
        telem.appendChild(row)

        coll2.appendChild(text2)
        row.appendChild(coll2)
        telem.appendChild(row)

        coll3.appendChild(text3)
        row.appendChild(coll3)
        telem.appendChild(row)

        coll4.appendChild(text4)
        row.appendChild(coll4)
        telem.appendChild(row)

        coll5.appendChild(text5)
        row.appendChild(coll5)
        telem.appendChild(row)

        let actiontd = document.createElement("td")

        let btn = document.createElement("button")
        btn.setAttribute("onclick", "handleRemove(" + v.id + ")")

        let actiontdtext = document.createTextNode("X")
        btn.appendChild(actiontdtext)
        actiontd.appendChild(btn)

        // let editaction = document.createElement("td")
        let editbtn = document.createElement("button")
        btn.setAttribute("onclick", "handleEdit(" + v.id + ")")

        let edittext = document.createTextNode("E")
        editbtn.appendChild(edittext)
        editaction.appendChild(editbtn)
        row.appendChild(editaction)
        row.appendChild(actiontd)

        // coll6.appendChild(text6)
        // row.appendChild(coll6)
        // telem.appendChild(row)


        // row.appendChild(coll1)
        // row.appendChild(coll2)
        // row.appendChild(coll3)
        // row.appendChild(coll4)
        // row.appendChild(coll5)
        // telem.appendChild(row)

    })
}
display();