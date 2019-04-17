"use strict";

let money = +prompt("Ваш бюджет на місяць?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');


let appData = {budget:money, timeData:time, expenses: {}, 
                optionalExpenses:null, income:null, savings:false};

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
};
appData.moneyPerDay = appData.budget / 30;

alert('Бюджет на день - ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100){
  console.log('Мінімальний рівень достатку');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log('Середній рівень достатку');
} else if (appData.moneyPerDay > 2000){
  console.log('Високий рівень достатку');
} else {
  console.log('Дані вказані некоректно!');
}

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
