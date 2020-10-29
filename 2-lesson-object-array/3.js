// Реализовать функцию для фильтрации массива по длине слов
const FilterArr = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'do', 'this', ''];

function filterByLength(arr, x, y) {
	return arr.filter(word => word.length >= x).filter(word => word.length <= y);
}

console.log(filterByLength(FilterArr, 2, 4));