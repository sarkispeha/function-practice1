var tripleFive = function() {
	for(var i = 0; i < 3; i++){
		console.log('Five!');
	};
}

var lastLetter = function (str) {
	console.log(str[str.length-1]);
}

var square = function (num) {
	console.log(num * num);
}

var negate = function (num) {
	if(num <0){
		console.log(Math.abs(num));
	}else{
		console.log(0 - num);
	};
}

var toArray = function (a,b,c) {
	var Arr = [];
	Arr.push(a,b,c);
	console.log(Arr);
}

var startsWithA = function (str) {
	return str[0].toUpperCase() === 'A';	
}

var excite = function (str) {
	consol.log(str +'!!!');
}