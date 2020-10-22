let cache = () => {
	return function (a, b) {
		let cacheValue;
		let value = a ** b;
		if (value === cacheValue) {
			return {
				value,
				fromCache: true
			};
		}
		return {
			value: value,
			fromCache: false
		};
	};
};

let calculate = cache();
console.log(calculate(2, 10));
console.log(calculate(3, 3));

