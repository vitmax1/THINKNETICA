function cache() {
	let cache = {};
	return function (a, b) {
		let key = a ** b;
		if (cache[key]) {
			return {
				value: cache[key],
				fromCache: true
			};
		}		
		cache[key] = a ** b;
		return {
			value: cache[key],
			fromCache: false
		};
	};
}

let calculate = cache();

console.log(calculate(3, 5));
console.log(calculate(2, 4));
console.log(calculate(5, 3));
console.log(calculate(5, 3));
console.log(calculate(3, 4));
console.log(calculate(3, 4));
console.log(calculate(3, 4));
console.log(calculate(3, 4));
console.log(calculate(3, 4));
console.log(calculate(3, 4));