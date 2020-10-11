const employees = [{
		firstName: 'Alex',
		lastName: 'Smith',
		age: 54,
		salary: 10000,
		position: 'Architect'
	},
	{
		firstName: 'Gustav',
		lastName: 'Andersen',
		age: 31,
		salary: 5000,
		position: 'Software engineer'
	},
	{
		firstName: 'Liz',
		lastName: 'Taylor',
		age: 20,
		salary: 7000,
		position: 'Manager'
	}
];

// средняя зарплата
const reduceOverall = function (acc, item) {
	return acc + Number(item.salary) / employees.length;
};
const overallSalary = employees.reduce(reduceOverall, 0);
console.log('Средняя зарплата: ',overallSalary);

// сортировка по зарплате
const sortBySalary = function (a, b) {
	return b.salary - a.salary;
};
const showSort = employees.sort(sortBySalary);
console.log(showSort);

// фильтр по зарплате  и возрасту
const filterByAgeSalary = function (item) {
	return item.salary > 5500 && item.age > 25;
};
const showAgeSort = employees.filter(filterByAgeSalary);
console.log(showAgeSort);


// foreach
const eachName = function (item) {
	console.log('Employee name:', item.firstName, item.salary);
};
employees.forEach(eachName);

// map
const mapCallback = function (item) {
	return item.salary > 4500;
};
const salaryList = employees.map(mapCallback);
console.log(salaryList);