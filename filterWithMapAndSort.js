// Filtering the array instead of manually looping through the arrays
// Returns the elements (in one array) of an array that meet the condition specified in a callback function.

var fruits = [
	{ name: "apple", color: "red"},
	{ name: "mango", color: "yellow"},
	{ name: "mango", color: "green"}
];

var myFruit = fruits.filter(function(item) {
	return (item.name === 'mango');
}).map(function(item) {
	return item.color;
}).sort();

console.log(myFruit);

// Output: [ "green", "yellow"
// ]