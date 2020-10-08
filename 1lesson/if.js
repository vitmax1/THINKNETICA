let age = 18,
paid = true,
blocked = false,
badUsername = false,
isAdmin = false;

if (age >= 18 && age <= 35) {

} else if (paid) {
	
} else if (blocked) {
	
} else if (badUsername) {
	
} else if (isAdmin) {
	console.log('Welcome');
} else {
	console.log('Проверьте данные');
}

let checkout = (age >= 18 && age <= 35 && isAdmin) ? 'Welcome' : 
					(paid) ? 'Welcome' :
					(blocked) ? 'Welcome' :
					(badUsername) ? 'Welcome' :
					(isAdmin) ? 'Welcome' : 'Проверьте данные';
