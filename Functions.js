// Declaration (Hoisted: can call before it's defined)
function walk() { console.log("walking"); }

// Expression (Not hoisted)
const run = function() { console.log("running"); };

// Arrow Function
const fly = () => console.log("flying");


// Rest & Destructuring parameters
function sum(name, ...numbers) {
    return numbers.reduce((a, b) => a + b);
}

// Function returning function
function outer() {
    return () => console.log("Inner called");
}



// Method	Description	Code Example
// map	Transforms every item	arr.map(x => x * 2)
// filter	Selects specific items	arr.filter(x => x > 10)
// reduce	Boils array to 1 value	arr.reduce((acc, curr) => acc + curr, 0)
// find	Returns first match	arr.find(x => x.id === 1)
// splice	Mutates (deletes/adds)	arr.splice(startIndex, deleteCount, newItem)