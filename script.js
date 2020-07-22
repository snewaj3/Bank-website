const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    const depositAmount = document.getElementById("depositAmount").value;
const depositNumber = parseFloat(depositAmount);

// const currentDeposit = document.getElementById("currentDeposit").innerText;
// const currentDepositNumber = parseFloat(currentDeposit);
// const totalDeposit = depositNumber + currentDepositNumber;

// document.getElementById("currentDeposit").innerText = totalDeposit;

updateSpanText("currentDeposit", depositNumber);
updateSpanText("currentBalance", depositNumber);
document.getElementById("depositAmount").value = "";


})

const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawNumber = parseFloat(withdrawAmount);
})





function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount; 
}








