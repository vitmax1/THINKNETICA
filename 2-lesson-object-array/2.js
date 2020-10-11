// Реализовать функцию для сравнения двух массивов, сравнение должно попарно сравнивать каждый элемент
let list1 = [1, 2, 3, 4];
let list2 = [1, 2, 3, 4];
let list3 = ['a', 'b', 'c'];
let list4 = ['a', 'b', 'c'];
let list5 = ['a', 'b', 'c', 'o'];
let list6 = ['a', 'b', 'c', 'd'];

compare = function (a1, a2) {
	return a1.length == a2.length && a1.every((v, i) => v === a2[i]);
};

console.log(compare(list1, list2));


