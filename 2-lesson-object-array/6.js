// sort random
const randomArr = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'do', 'this', '', 'web', 'soft'];

const randomSort = randomArr.sort(function () {
	return 0.5 - Math.random();
}); 
console.log(randomSort);