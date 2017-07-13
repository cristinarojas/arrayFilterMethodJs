// Filtering the array instead of manually looping through the arrays
// Returns the elements (in one array) of an array that meet the condition specified in a callback function.

var fruits = [
	{ name: "apple", color: "red"},
	{ name: "mango", color: "yellow"},
	{ name: "watermelon", color: "green"}
];

var myFruit = fruits.filter(function(item) {
	return (item.name === 'mango');
});

console.log(myFruit);

// Output: [
//    { color: "yellow", name: "mango" }
// ]