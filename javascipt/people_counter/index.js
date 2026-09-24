let count = 0


let countEl = document.getElementById("count-el")
let prevEntries = document.getElementById("prev-entries")



function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    console.log(count)
    prevEntries.innerText = prevEntries.innerText + " " +  count + " - " 
    count = 0
    countEl.innerText = count

}