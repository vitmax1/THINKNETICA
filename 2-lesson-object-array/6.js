// sort random
const randomArr = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'do', 'this', '', 'web', 'soft'];

const randomSort = randomArr.sort(function () {
	return 0.5 - Math.random();
}); 
console.log(randomSort);


// function shuffle(arr) {
	// 	var j, temp;
	// 	for (var i = arr.length - 1; i > 0; i--) {
		// 		j = Math.floor(Math.random() * (i + 1));
		// 		temp = arr[j];
		// 		arr[j] = arr[i];
		// 		arr[i] = temp;
		// 	}
		// 	return arr;
		// }
		
// console.log(shuffle(randomArr));

