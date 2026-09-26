let num1 = 8
let num2 = 2
const sum = document.getElementById("sum-el")

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


function add(){
    let soma
    sum.textContent = "Sum: "
    soma = num1 + num2
    sum.textContent +=  soma

}

function subtract(){
    let soma
    sum.textContent = "Sum: "
    soma = num1 - num2
    sum.textContent +=  soma

}

function divide(){
    let soma
    sum.textContent = "Sum: "
    soma = num1/num2
    sum.textContent +=  soma

}

function mutiple(){
    let soma
    sum.textContent = "Sum: "
    soma = num1 * num2
    sum.textContent +=  soma

}


