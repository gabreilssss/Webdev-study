let inputBtn = document.getElementById("input-btn")
const myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
inputBtn.addEventListener("click",saveLead)


function saveLead(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
}

function renderLeads(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++){
        listItems += "<li>" + myLeads[i] + "</li>"
    }
    ulEl.innerHTML = listItems
}