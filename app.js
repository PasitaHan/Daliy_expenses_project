var list = []
function addList(){
    let note = document.getElementById("input_note").value
    let expense = document.getElementById("input_expense").value
    list.push(parseInt(expense))
    document.getElementById("daily_list").innerHTML += note + " " + expense + " บาท<br>"
}

function calculateExpense(){
    let expense = document.getElementById("input_value").value
    let balance = 0
    let sum = 0
    for(let i = 0; i < list.length; i++) {
        sum = sum + list[i]
    }
    balance = expense - sum
    document.getElementById("summary").innerHTML = "รายจ่ายทั้งหมด " + sum + " บาท<br> ยอดคงเหลือ " + balance + " บาท"
}