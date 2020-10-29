const box = function () {
	let amount = 0;

	function addCoin() {
		return amount++;
	}
	function getAmount() {
		return amount;
	}
	return {
		addCoin: addCoin,
		getAmount: getAmount
	};

};
// Создаем копилку
const myMoney = box(); 

console.log(myMoney.addCoin()); 
console.log(myMoney.addCoin()); 
console.log(myMoney.addCoin()); 
console.log(myMoney.getAmount()); 
console.log(myMoney.getAmount());
console.log(myMoney.addCoin());
console.log(myMoney.addCoin());
console.log(myMoney.getAmount());
console.log(myMoney.addCoin());
console.log(myMoney.addCoin());
console.log(myMoney.getAmount());
console.log(myMoney.getAmount());
console.log(myMoney.addCoin());
console.log(myMoney.addCoin());
console.log(myMoney.getAmount());
console.log(myMoney.getAmount());
console.log(myMoney.addCoin());
console.log(myMoney.addCoin());







