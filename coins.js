var coinPurseDOM = document.getElementById("coinPurse");


function coinCounter(money) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  
  money = money*100;

  money = money.toFixed();
  console.log("money", money);

  var remainderQuarters = money % 25;
  coinPurse.quarters = (money - remainderQuarters) / 25;
  var minusQuarters = money - (coinPurse.quarters *25);
  var remainderDimes = minusQuarters % 10;
  coinPurse.dimes = (minusQuarters - remainderDimes) / 10;
  var minusDimes = minusQuarters - (coinPurse.dimes * 10);
  var remainderNickels = minusDimes % 5;
  coinPurse.nickels = (minusDimes - remainderNickels) / 5;
  var minusNickels = minusDimes - (coinPurse.nickels * 5);
  coinPurse.pennies = minusNickels / 1;

  coinPurseDOM.innerHTML += "<li>" + "Quarters: " + coinPurse.quarters + "</li>";
  coinPurseDOM.innerHTML += "<li>" + "Dimes: " + coinPurse.dimes + "</li>";
  coinPurseDOM.innerHTML += "<li>" + "Nickels: " + coinPurse.nickels + "</li>";
  coinPurseDOM.innerHTML += "<li>" + "Pennies: " + coinPurse.pennies + "</li>";

  return coinPurse;
}

var userInput = prompt("List an amount you want divided into coins. (eg: 1.67) ");
var userInputParsed = (parseFloat(userInput));
coinCounter(userInputParsed);

