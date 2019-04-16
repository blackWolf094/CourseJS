"use strict";

let money = +prompt("Ваш бюджет на місяць?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let moneyMounth = prompt("Введите обязательную статью расходов в этом месяце");
let howMuch = prompt("Во сколько обойдется?");

let appData = {budget:money, timeData:time, expenses: {moneyMounth:howMuch}, 
                optionalExpenses:null, income:null, savings:false};

let oneDayMoney = alert(money/30);

console.log(money);