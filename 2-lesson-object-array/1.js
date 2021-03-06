// Реализовать функцию, которая принимает текст, и возвращает массив объектов со структурой
function isCapitalized(letter) {
	for (let i = 0; i < letter.length; i++) {
		if (letter[i] === letter[i].toUpperCase() && letter[i] !== letter[i].toLowerCase()) {
			return true;
		} else {
			return false;
		}
	}
}

function returnArrObj(text) {
	return text.split(' ').map((word) => ({
		word: word,
		length: word.length,
		isCapitalized: isCapitalized(word)
	}));
}

console.log(returnArrObj('Реализовать функцию Для фильтрации маcсива по длине слов'));

