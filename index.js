let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
// let answer = Number(window.prompt(weeklyExpenseQuestions[0]))
// console.log(answer)

for (let i = 0; i < weeklyExpenseQuestions.length; i++) {
    let answer = Number(window.prompt(weeklyExpenseQuestions[i]))
    console.log(answer)
    weeklyExpenses = weeklyExpenses + answer
} 
for (let i = 0; i < monthlyExpenseQuestions.length; i++) {
    let answer = Number(window.prompt(monthlyExpenseQuestions[i]))
    console.log(answer)
    monthlyExpenses = monthlyExpenses + answer
} 
for (let i = 0; i < annualExpenseQuestions.length; i++) {
    let answer = Number(window.prompt(annualExpenseQuestions[i]))
    console.log(answer)
    annualExpenses = annualExpenses + answer
} 