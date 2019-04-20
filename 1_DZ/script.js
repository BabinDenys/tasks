
var money = +prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i<2; i++) {
    var a1 =  prompt("Введите обязательную статью расходов в этом месяце");
    var a2 =  prompt("Во сколько обойдется?");
    if ((typeof(a1)) === "string" && a1 != "" && a1.length < 50 &&
        a2 != "" && typeof(a1) != null && typeof(a2) != null  ) {

            appData.expenses[a1] = a2;
    } else{
        i--;
    }
}

appData.moneyPerDay = appData.budget/30;
if(appData.moneyPerDay <= 100) {
    console.log("Прожиточный минимум");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");   
}

alert( "Ежедневный бюджет: " + appData.moneyPerDay);


// while (i<2) {
//     i++;
//     var a1 =  prompt("Введите обязательную статью расходов в этом месяце");
//     var a2 =  prompt("Во сколько обойдется?");
//     if ((typeof(a1)) === "string" && a1 != "" && a1.length < 50 &&
//         a2 != "" && typeof(a1) != null && typeof(a2) != null  ) {

//             appData.expenses[a1] = a2;
//     } else{
//         i--;
//     }
// }


//  let i = 0;
// do {
//     i++;
//     var a1 =  prompt("Введите обязательную статью расходов в этом месяце");
//     var a2 =  prompt("Во сколько обойдется?");
//     if ((typeof(a1)) === "string" && a1 != "" && a1.length < 50 &&
//         a2 != "" && typeof(a1) != null && typeof(a2) != null  ) {

//             appData.expenses[a1] = a2;
//     } else{
//         i--;
//     }

// } while(i<2);