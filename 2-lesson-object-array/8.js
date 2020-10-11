// human object
const human = Object.create({
	  fullName: {
	  		get: function () {
	  			return firstName + '' + lastName;
	  		},
	  		set: function (value) {
	  			[this.firstName, this.lastName] = value.split(' ');
	  		},
	  	},
	  	dateOfBirth: {
	  		set: function (value) {
	  			this.age = 0;
	  		},
	  	}
});

console.log(human);