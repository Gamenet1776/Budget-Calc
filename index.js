let taxArray = [0.12, 0.07, 0.062, 0.0145, 0.01, 0.05];
function careerClick(e) {
    let salary = e.target.nextElementSibling;
    // console.log(salary);
    let taxTable = document.getElementsByClassName("taxtable");
    if (salary && salary.innerText[0] == "$" && taxTable[0]) {
        salary = salary.innerText;
        taxTable[0].firstElementChild.children[0].children[0].innerText = salary;

        for (let i = 0; i < taxArray.length; i++) {

        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    //select for table rows
    let careers = document.getElementsByTagName("tr");
    for (const career of careers) {
        career.addEventListener("click", careerClick);

    }



    let total = document.getElementsByTagName("td");
    let tempMoney = null;
    for (const balance of total) {
        tempMoney = salary * taxArray[0];
        balance = tempMoney;
    }


});

const divide = 12
const multipliers = [.12, .07, .062, .0145, .01, .05]
const subtract = 180

const outputs = {
    mg: document.getElementById('mg'),
    st: document.getElementById('st'),
    ft: document.getElementById('ft'),
    ss: document.getElementById('ss'),
    m: document.getElementById('m'),
    sd: document.getElementById('sd'),
    ri: document.getElementById('ri'),
    mi: document.getElementById('mi'),
    total: document.getElementById('total'),
}

let a = document.querySelector('#mg > td:first-of-type');

function gn(str) {
    return parseInt(str.substring(1).replace(/\,/g,'')) 
}

function rnd(x) {
    return Math.round(x * 10) / 10; 
}

function gie(elem) {
    return document.querySelector(`#`+elem.id+` > td:nth-of-type(1)`)
}

function goe(elem) {
    return document.querySelector(`#`+elem.id+` > td:nth-of-type(3)`)
}

observer = new MutationObserver(function(mutationsList, observer) {
    const monthly = '$'+rnd(gn(gie(outputs.mg).innerHTML)/12)
    const rawM = gn(gie(outputs.mg).innerHTML)/12
    goe(outputs.mg).innerHTML = monthly;
    
    gie(outputs.st).innerHTML = monthly
    gie(outputs.ft).innerHTML = monthly
    gie(outputs.ss).innerHTML = monthly
    gie(outputs.m).innerHTML = monthly
    gie(outputs.sd).innerHTML = monthly
    gie(outputs.ri).innerHTML = monthly
    gie(outputs.mi).innerHTML = monthly

    goe(outputs.st).innerHTML = rnd(rawM-(rawM*multipliers[0]))
    goe(outputs.ft).innerHTML = rnd(rawM-(rawM*multipliers[1]))
    goe(outputs.ss).innerHTML = rnd(rawM-(rawM*multipliers[2]))
    goe(outputs.m).innerHTML = rnd(rawM-(rawM*multipliers[3]))
    goe(outputs.sd).innerHTML = rnd(rawM-(rawM*multipliers[4]))
    goe(outputs.ri).innerHTML = rnd(rawM-(rawM*multipliers[5]))
    goe(outputs.mi).innerHTML = rnd(rawM-subtract)

});

observer.observe(a,{characterData: false, childList: true, attributes: false});