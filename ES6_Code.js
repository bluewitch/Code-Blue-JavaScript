Code_ES6.js


/*
Higher Order Functions
Functions are values
Composition

For this example we will have an array named people with a data/value pair of name and species.  The old way is with the for...if statement functions, the new way is with the .filter() method.

It is good to know both

New Way
*/

var people =[
	{ name: 'Jessica', species: 'Human' },
	{ name: 'Sabrina', species:'Witch' },
	{ name: 'Ursula', species:'Witch' },
	{ name: 'Star', species:'Faerie' },
	{ name: 'Mary', species:'Human'},
	{ name: 'Eve', species:'Human' }
]


var humans = people.filter(function(person) {
	return person.species === 'Human'
})

var isHuman = function(people) {
	return people.species === 'Human'
}

var humans = people.filter(isHuman)
var otherSpecies = peopel.reject(isHuman)

/*
//Old Way
//Using for...if loops

var humans = []
for (var i=0; i < humans.length; i++) {
	if (people[i].species === 'human')
	humans.push(people[i])
}
*/



/////////////////////////////////////////////////////////
// Map
Takes a Array data and transforms them

var people =[
	{ name: 'Jessica', species: 'Human' },
	{ name: 'Sabrina', species:'Witch' },
	{ name: 'Ursula', species:'Witch' },
	{ name: 'Star', species:'Faerie' },
	{ name: 'Mary', species:'Human'},
	{ name: 'Eve', species:'Human' }
]

 
// New Way with Map
var names = people.map(function(person) {
	return person.name + ' is a ' + person.species
})



/*
// Old Way for(...) loop

var names = []
for (var i = 0; i < people.length; i++) {
	names.push(people[i].name)
}

console.log(names)
*/

/////////////////////////////////////////////////////////////////
// Reduce

map
filter
find
reject


reduce
multi-tool


var orders = [
	{ amount: 9 },
	{ amount: 99 },
	{ amount: 999 },
	{ amount: 9999 },
	{ amount: 99999 },
	{ amount: 999999 }
	]

// Using reduce
var totalAmount = orders.reduce( function(sum, order) {
		console.log("Hello", sum, order)
		return sum + order.amount
}, 0)


// Using for loop
var totalAmount = 0
for ( var i = 0; i < orders.length; i++ ) {
	totalAmount += orders[i].amount
}

console.log(totalAmount)



///////////////////////////////////////////////////
// Advanced reduce

// Old way
// var fs = require('fs')


// New way
import fs from 'fs'

var output = fs.readFileSync('data.txt', 'utf8')
	.trim()
	.split('\n')
	.map(line => line.split('\t'))

	.reduce( (customers, line)=> {
		
		//console.log('hello ', line)

		customers[line[0]] = customers[line[0]] || []
		customers[line[0]].push{
			name: line[1],
			price: line[2],
			quantity: line[3]
		})
		return customers
	}, {})

console.log('output', JSON.stringify(output, null, 2))

/*
const output = fs.readFileSync('data.txt', 'utf8')
  .trim()
  .split('\n')
  .map((line) => line.split('\t'))
  .reduce((customers, [name, order, price, quantity]) => {
    customers[name] = customers[name] || [];
    customers[name].push({ order, price, quantity });
    return customers;
  }, {});﻿
 */


/*
data.txt

Douglas	Kuhn	laptop	1000	2
Eve McAlease	smartphone	800	2
etc....
*/






Recursion when a function calls itself until it doesn't

let countDownFrom = (num) => {
	if (num === 0) return;
	console.log(num)
	countDownFrom(num -1)
}

countDownFrom(10)

///////////////////////////////////////////

// ES6 Promise Operations

// Creating a new Promise
new Promise( (resolveFn, rejectFn) => )

// Async access to value/reason
promise.then((val) =>, (err) => )

// Wait for several promises
Promise.all([promise, ...])


// Wait for first promises
Promise.race([promise, ...])


// .catch(cb) == .then(null, cb)
promise.catch((err) => )












///////////////////////////////////////////////
// FileStream

const output = fs.readFileSync('data.txt', 'UTF8')
  .trim()
  .split('\n')
  .map((line) => line.split('\t'))
  .reduce((customers, [name, order, price, quantity]) => {
    customers[name] = customers[name] || [];
    customers[name].push({ order, price, quantity });
    return customers;
  }, {});﻿


  

  // Object Creation

