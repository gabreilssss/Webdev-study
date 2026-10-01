const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const tabBtn = document.getElementById("tab-btn");
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"));



tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true} ,function(tabs) {
        console.log(tabs)
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads" ,JSON.stringify(myLeads));
        renderLeads(myLeads);
    })
    

})

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    renderLeads(myLeads);
}

function renderLeads(leads){
    let listItems = ""
    for (let i = 0; i < leads.length; i++){
        listItems += `<li>
                            <a href ="${leads[i]}" target="_blank'" >
                            ${leads[i]} 
                            </a>
                        </li>`
    }
    ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click",saveLead);
deleteBtn.addEventListener("dblclick", deleteAll);


function saveLead(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads" ,JSON.stringify(myLeads));
    renderLeads(myLeads);
}

function deleteAll(){
    myLeads = [];
    localStorage.clear();
    renderLeads(myLeads);
    
}
