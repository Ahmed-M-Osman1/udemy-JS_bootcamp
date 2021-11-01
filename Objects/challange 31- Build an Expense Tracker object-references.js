let myAccount = {
    name: 'Ahmed Osman',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount){
    account.expenses = account.expenses + amount
}

let addIncome = function(account, amount){
    account.income = account.income + amount
}

let resetAccount = function(account){
    account.income = 0,
    account.expenses = 0
}

let getAccountSummary = function(account){
    remain = account.income - account.expenses ,
    console.log(`Account of ${account.name} is ${remain}. ${account.income} in income. ${account.expenses} in expenses`)
}



addExpense (myAccount, 2.5)
addIncome(myAccount, 100)
getAccountSummary (myAccount)

resetAccount(myAccount)
getAccountSummary (myAccount)
