"use strict";
let money, time;
let appData = {budget:money, timeData:time, expenses: {}, 
                optionalExpenses:null, income:null, savings:true};

function start(){
  money = +prompt("Ваш бюджет на місяць?", '');
  time = prompt("Введите дату в формате YYYY-MM-DD", '');

  while(isNaN(money) || money == '' || money == null) {
    money = +prompt("Ваш бюджет на місяць?", '');
  }
}

// let i = 0
// while (i < 1){
//   //..
//   i++;
// }
// do{
//   //..
//   i++
// }
// while (i < 3)

function chooseExpenses(){
  for (let i = 0; i < 2; i++){
    
    let moneyMounth = prompt("Введите обязательную статью расходов в этом месяце", ''),
    howMuch = prompt("Во сколько обойдется?", '');
  
    if ( (typeof(moneyMounth)) === 'string' && typeof(moneyMounth) != null
    && moneyMounth != '' && howMuch != '' && moneyMounth.length < 50){
    console.log('done');
    appData.expenses[moneyMounth] = howMuch;
    } else {
      i--;
    }
  }
}
function detectLevel(){
  if (appData.moneyPerDay < 100){
    console.log('Мінімальний рівень достатку');
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Середній рівень достатку');
  } else if (appData.moneyPerDay > 2000){
    console.log('Високий рівень достатку');
  } else {
    console.log('Дані вказані некоректно!');
  }
}

function checkSavings(){
  if (appData.savings == true){
    let save = +prompt("Яка сума напокичень?", ''),
    percent = +prompt("Під який процент?", '');

    appData.monthIncome = save/100/12 * percent;
    alert('Дохід по вашому депоизиту - ' + appData.monthIncome);
  }
}

function detectDayBudget(){
  appData.moneyPerDay = (appData.budget / 30).toFixed();

  alert('Бюджет на день - ' + appData.moneyPerDay);
}

function chooseOptExpenses(){
  for (let i = 1; i < 4; i++){
    let moneyMounth = prompt("Статья необязательных расходов?", '');
    appData.optionalExpenses[i] = moneyMounth;
  }
}

start();
chooseExpenses();
detectLevel();
// detectDayBudget();
// checkSavings();
// chooseOptExpenses();

// switch (appData.moneyPerDay){
//   case appData.moneyPerDay < 100 : console.log('Мінімальний рівень достатку'); 
//   break;
//   case appData.moneyPerDay > 100 && appData.moneyPerDay < 2000: 
//   console.log('Середній рівень достатку'); 
//   break;
//   case appData.moneyPerDay > 2000 : console.log('Високий рівень достатку'); 
//   break;
//   default: 
//   console.log('Помилка даних!');
//   break;
// }
