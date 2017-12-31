/*Arrow functions*/

var square1 = (x) => {
	var result = x * x; 
	return result;
};

var square2 = (x) => x * x;

console.log(square1(4));
console.log(square2(4));

var user = {
	name: 'Anthony',
	sayHi: () => {
		console.log(`Hi ` + user.name);
	}
};

user.sayHi();