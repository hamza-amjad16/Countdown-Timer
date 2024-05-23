var endDate = "17 June 2024 12:00 AM"
document.getElementById("end-date").innerText= endDate
const inputs = document.querySelectorAll("input")
function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const remain = (end - now) / 1000

    if(remain < 0) return
    // convert into days
    inputs[0].value = Math.floor(remain / 3600 / 24)
    // convert into hours
    inputs[1].value = Math.floor((remain / 3600) % 24)
    inputs[2].value = Math.floor((remain / 60) % 60)
    inputs[3].value =  Math.floor(remain % 60)

}
clock()
setInterval(
    () => 
    {clock()
    }
    ,1000
)