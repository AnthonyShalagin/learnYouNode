//Callbacks
//a callback function is a function that gets passed as an argument 
//to another function and is executed after some of that happens

var getUser = (id, callback) => {
	var user = {
		id: id, 
		name: 'Anthony'
	};
	callback(user);	
};

getUser(31, (userObject) => {
	console.log(userObject);
});
