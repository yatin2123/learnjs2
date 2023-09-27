
let tc = 1;
tc_costing = 500;
let fi = 2;
fi_costing = 1500;
let rct = 4;
rct_costing = 2500;

let rc = 6;
rc_costing = 12000;

let bi = 12;
bi_costing = 35000;

let tr_name, tr_s = 0, tr_c = 0;



const handlechange = (t, s, c) => {
    // console.log('yyy');

    let val = document.getElementById("treatment").value;
    console.log(val);




    if (val === 'tc') {
        tr_name = 'Teeth Cleaning';
        tr_s = tc;
        tr_c = tc_costing;
    } else if (val === 'fi') {
        tr_name = 'Filling';
        tr_s = fi;
        tr_c = fi_costing;
    } else if (val === 'rct') {
        tr_name = 'Root canal Treatment';
        tr_s = rct;
        tr_c = rct_costing;
    } else if (val === 'rc') {
        tr_name = 'RCT + Cover';
        tr_s = rc;
        tr_c = rc_costing;
    } else if (val === 'bi') {
        tr_name = 'Braces';
        tr_s = bi;
        tr_c = bi_costing;
    }

    document.getElementById("ter").innerHTML = tr_name;
    document.getElementById("sea").innerHTML = tr_s;
    document.getElementById("cos").innerHTML = tr_c;


    document.getElementById("dis").style.display = 'block'

}

const handlebtn = () => {
    let date = document.getElementById("date").value
    console.log(date);

    costing = (tr_c / tr_s);

    let d = new Date(date);

    let print = '';

    print += '<table border="1"> <tr> <th>Treatment</th><th>Date</th>  <th>Costing</th></tr>';
    for (let i = 0; i < tr_s; i++) {
        if (i === 0) {
            print += '<tr>'
            print += '<td rowspan="'+ (tr_s)+'">'
            print += tr_name
            print += '</td>'
        }



        print += '<td>'
        print += d.toLocaleDateString(d.getDate() + 7)
        print += '</td>'

        print += '<td>'
        print += costing
        print += '</td>'

        print += '</tr>'

        // d.SetDate(d.getDate() +7)
    }

    print += '</table>'
    console.log(tr_name, tr_s, tr_c);


    document.getElementById("displa").innerHTML = print
}



// let btnRef = document.getElementById("book");
// btnRef.addEventListener("click", appDAte)