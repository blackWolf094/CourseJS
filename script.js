"use strict";
let money, time;
let appData = {
  budget:money, 
  timeData:time, 
  expenses: {}, 
  optionalExpenses:null, 
  income:[], 
  savings:true,
  chooseExpenses: function(){
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
  },
  detectLevel: function(){
    if (appData.moneyPerDay < 100){
      console.log('Мінімальний рівень достатку');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log('Середній рівень достатку');
    } else if (appData.moneyPerDay > 2000){
      console.log('Високий рівень достатку');
    } else {
      console.log('Дані вказані некоректно!');
    }
  },
  detectDayBudget: function(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Бюджет на день - ' + appData.moneyPerDay);
  },
  checkSavings: function(){
    if (appData.savings == true){
      let save = +prompt("Яка сума напокичень?", ''),
      percent = +prompt("Під який процент?", '');
  
      appData.monthIncome = save/100/12 * percent;
      alert('Дохід по вашому депоизиту - ' + appData.monthIncome);
    }
  },
  chooseOptExpenses: function(){
    for (let i = 1; i < 4; i++){
      let moneyMounth = prompt("Статья необязательных расходов?", '');
      appData.optionalExpenses[i] = moneyMounth;
    }
  },
  chooseIncome: function(){
    for (let i = 0; i < 1; i++){
      let items = prompt('Що принесе додатковий дохід? (через кому)','');
      appData.income = items.split(', ');
      let mas = [];
      mas = items;
      if ( (typeof(items)) === 'string' && typeof(items) != null && items != ''){
        console.log('done');
        appData.chooseIncome[items] = items;
        appData.income.push(prompt('Може ще щось?'));
        appData.income.sort();
        console.log("Наша програма включає наступні дані: ");
        
        for (let item in appData){
          console.log(item);
        }
        // mas.forEach(function (item, i, mas){
        //   alert(i + ': ' + item);
        //   console.log(i + ': ' + item);
        // });
      }
      else{
        i--;
      }
    }
  }
};

function showAppData(){
  for (item in appData){
    alert("Item: " + item);
  }
}

function start(){
  money = +prompt("Ваш бюджет на місяць?", '');
  time = prompt("Введите дату в формате YYYY-MM-DD", '');

  while(isNaN(money) || money == '' || money == null) {
    money = +prompt("Ваш бюджет на місяць?", '');
  }
}

// showAppData();
start();

// let a = [1,2,3,4,5];
// a.forEach(function (item, i, mass){
//   console.log(i + ': ' + item + " (масив: " + mass + ')');
// });
// // for (let i = 0; i <a.length; i++){
// //   console.log(a[i]);
// // }

// a.pop();
// a.push(2);

// console.log(a);