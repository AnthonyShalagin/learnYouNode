//Callbacks
//a callback function is a function that gets passed as an argument 
//to another function and is executed after some of that happens

// Good video: https://www.youtube.com/watch?v=xHneyv38Jro

var getUser = (id, callback) => {
	var user = {
		id: id, 
		name: 'Anthony'
	};

	setTimeout(() =>  {
		callback(user);	
	}, 3000);
};

getUser(31, (userObject) => {
	console.log(userObject);
});
