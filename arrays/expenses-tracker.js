const account = {
    name: 'Ahmed Mamdouh',
    expenses: [],
    income: [],
}

const addExpense = function ( description, amount) {
    account.expenses.push({
        description: description,
        amount: amount,
    })
}

const addIncome = function ( description, amount) {
    account.income.push({
        description: description,
        amount: amount,
    })
}

const getAccountSummary = function (account){
    let totalExpanse = 0
    let totalIncome = 0

    account.expenses.forEach(function(expenses){
        totalExpanse = totalExpanse + expenses.amount
    })
    account.income.forEach(function(income){
        totalIncome = totalIncome + income.amount
    })
    let totalBalance = totalIncome - totalExpanse
    return `${account.name} has ${totalBalance} in total. Income of ${totalIncome} and Expenses of ${totalExpanse}.`
}


addIncome('Salary',300)
addIncome('Extra Work',100)
addExpense('Coffee', 100)
addExpense('wish the car', 200)
console.log(account)

console.log(getAccountSummary(account))

