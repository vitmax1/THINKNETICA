const numbers = [-20, -10, 0, 10, 20, 30];

const sortCallback = function (a, b) {
	return b - a;
};

const sortDesc = numbers.sort(sortCallback);

console.log(sortDesc);
