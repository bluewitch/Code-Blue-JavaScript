// Master.js
// ~dwulf
// ~ In honour of dlab, the hacker god who played chess with code...
//--------------------------------------------------------------------------------
//    Holds all my personal "first principle" notes and scripts from Douglas Crockford's 
//     JavaScript lectures.
//    July 10th 2015
//    ECMA5 (2009)
//    ECMA6 (2016)
//--------------------------------------------------------------------------------
// JavaScript is Protypal inheritance not Classed based 
// like C++, but shares simular syntax.   This is about first principles
//  and knowing the precise measure of the primitives of JavaScript
//  but know the main ideas are the interplay of mechinisims of the functions 
//  and the data-stores of the objects of JSON the function manipulates.

// lambda first-class objects
// Lambda (programming), a function (or a subroutine) 
// defined, and possibly called, without being bound 
// to an identifier




// JavaScript Values:
// [Numbers, NaN, Strings, Booleans, undefined ]

// Numbers - 64-bit floating point, IEEE-754 aka Double
// Number(value) converts value into a number
// parseInt(value, 10) converts value into a Number

// Math Object
// Math.abs    - returns absolute value
// Math.floor  - returns integer
// Math.log    - logarithm
// Math.max    - maximum
// Math.pow    - raise to a power
// Math.random - random number
// Math.round  - round to nearest integer
// Math.sin    - sine
// Math.sqrt   - square root

//  NaN - Not a number, is toxic
//        Result of undefined or erronious output
//        NaN === NaN always false
//        NaN !== NaN always true
//        WTF?!?



// Strings - 0 or more 16-bit characters, UCS-2
// STRINGS ARE IMMUTABLE
// String literals can use single or double quotes
// with \ escapment

// String(value) - turns Number into a String
// String.length

// String Methods:
// String.charAt
// String.charCodeAt
// String.compareLocale
// String.concat
// String.indexOf
// String.lastIndexOf
// String.localeCompare
// String.match
// String.replace
// String.search
// String.slice
// String.split
// String.substring
// String.toLocaleLowerCase
// String.toLocaleUpperCase
// String.toLowerCase
// String.toString
// String.toUpperCase
// String.trim, removes extra white-space
// String.valueOf

// trim, new to ES5
/*
if (typeof String.prototype.trim !== 'function') {
	String.prototype.trim = function () {
		return this.replace(
			/^\s*(\S*(\s+\S)*)\s*$/,
			"$1");
	};
}
*/



// New in ES5
// Multiline string literals
/*
var long_line_1 = "this is a \
long line"; // ok

var long_line_2 = "this is a \[SPACE]
long line"; // syntax error
*/

// Booleans
// Boolean(value)

// falsey
// false
// null
// undefined
// " " (empty string)
// NaN

// truthy
// true
// " 0 " (sting zero)
// " false " (string false)

// Everything in JavaScript is an Object
// Objects
// Dynamic Object
// Unification of Object and Hashtable

// new Object() produces an empty container of
//              name : value pairs

// A name can be any string, a value can be any
//  value except undefined

// members of an object can be accessed with dot notation
// or subscript notation
// No hash nature is visable (no hash codes of rehash methods)
// Loose any value can be 




// JavaScript Syntax Notes:
// JavaScript is syntactically a C family language, 
// with curly braces { ... }
// It only differs from C in its Type system, 
// which allows fucntions to be values

// Identifiers:
// Starts with a letter or _ or $
// Followed by zero or more letters, digits, _ or $

// By convention, all variables, parameters,
// members, and function names start with
// lower-case
// Except for constructors which start with
// upper-case
// Initial _ should be reserved for implimentations
// $ should be reserved for machines

// Reserved Words in JavaScript
//  JavaScript is a loose language, but there are certain words
//  aka reserved words, that should not be used to name anything
//  with

// A: abstract
// B: boolean, break, byte
// C: case, catch, char, calss, const, continue
// D: debugger, default, delete, do, double
// E: else, enum, export, extends
// F: false, final, finally, float, for, fucntion
// G: goto
// I: if, implements, import, in, instanceof, int, interface
// L: long
// N: native, new, null
// P: package, private, protected, public
// R: return
// S: short, static, super, switch, sychronized
// T: this, throw, throws, transient, true, try, typeof
// V: var, volatile, void
// W: while, with

// Comments:
// This is a notation that lives in the .js file
//  not read or interpreted by the JavaScript 
//  compiler.  My convention is:
// //      (for commentary)     
// /* */   (for source-code)
// the source code commentary is useful for parsing out
// actual source code from the Master.js file


// +:
// Addition and concatenation
// Only if both operands are numbers are thay added mathmatically
// other wise they are converted to strings and concatenated.
/*
'$' + 4 + 2 = '$42'
*/

// The + is also a Unary operator, it can convert strings to numbers
//  The unary plus operator preceding an expression in parentheses 
//  forces the grouping of the enclosed operations.
/*
+"42" = 42 
Number("42") = 42 
parseInt("42", 10) = 42
+"3" + (+"4") = 7
*/


//  The division /:
// division of two integers can produce a non-integer result

// 10 / 3 =3.3333333333333335


// == Equal and != not-Equal operators
// These operators can do type coercion

// It is better to use === and !==,
//  which do not do type coercion

// Type Coercion is the conversion of 
// one type of object to a new object 
// of a different type with similar 
//  content.


// && The guard operator, aka logical and

// If the first operand is truthy
//   then result is second operand
//   else result is first operand

// It can be used to avoid null refrences

/*
if (a) {
	return a.member;
} else {
	return a;
}
*/

// Can be writen as
/*
return a && a.member;
*/


// || The default operator, aka logical or

// If the first operand is truthy
//  then result is first operand
//  else result is second operand

// It can be used to fill in default values
/*
var last = input || nr_items;  
// could be written as a if statement

*/
// If input is truthy, then lasr is input,
// otherwise set last to nr_items


// ! aka bang, the prefixed logical not operator
//   If the operand is truthy, the result
//   is false.  Otherwise, the result is 
//   true.

//  !! produces booleans

// Bitwise Operators
// (If you don't intend to use bitwise operators)
// (do not, it offers no speed advantage)
//  &  |  ^  >>  >>>  <<
//The bitwise operators convert the operand to
// a 32-bit signed integer, and turn the result
//  back into a 64-bit floating point.


// JavaScript Statements

// expression
// if
// switch
// while
// do 
// for
// break
// continue
// return
// try/throw


// Break statement

// Statements can have labels.
// Break statements can refer to those labels

/*
loop: for (;;) {
	...
	if (...) {
	  break loop;
	}
  ...
}
*/

// For statement

// Iterate through all of the elements
// of an array:
/*
for (var i = 0; i < array.length; i += 1) {
	// within the loop,
	// i is the index of the current member
	// array[i] is the current element
}
*/ 

// Iterate through all of the members
// of an object:
/*
for (var name in object) {
	if (object.hasOwnProperty(name)) {
	// within the loop,
	// name is the key of current member
	// object[name] is the current value
	}
}
*/


// Switch statement

// Multiway branch

// The switch value does not need to
// be a number.  It can be a string

// The case values can be
// expressions.
/*
switch (expression) {
	case ';':
	case ',':
	case '.':
		punctuation();
		break;
	default:
		noneOfTheAbove();
}
*/


// Throw statement
// To throw an exception from your code

/*
throw new Error(reason);

throw {
	name: exceptionName,
	message: reason
};
*/

// Try statement (try/catch)
/*
try {
	//...
} catch (e) {
	switch (e.name) {
	case 'Error':
		//...
		break;
	default:
		throw e;
	}
}
*/

// The JavaScript implementation
// can produce these exception
// names:

//	'Error'
//	'EvalError'
//	'RangeError'
//	'SyntaxError'
//	'TypeError'
//	'URIError'


// With statement ( do not use )
// Intended as a short-hand for 
//  dealing with objects
/*
with (o) {
	foo = null;
}
*/
// Ambiguous
/*
o.foo = null;
*/
// Error-prone
/*
foo = null;
*/
// Don't use it



//--------------------------------------------
// Functions in JavaScript

// Function expression
//  has the word function
//  optional name to call itself

//  parameters
//   wrapped in parens: ( )
//   zero or more names
//   seperated by commas: ,

// body
//  wrapped in curly braces { }
//  zero or more statements

// Produces an instance of a function object
// Function objects are first class
//   May be passed as an argument to a function
//   May be returned from a function
//   May be assigned to a variable
//   May be stored in an object or array
// Function objects inherit from:
/*
Function.prototype
*/





// Function statement (older)
//  has the word function
//  mandatory name to call itself

//  parameters
//   wrapped in parens: ( )
//   zero or more names
//   seperated by commas: ,

// body
//  wrapped in curly braces { }
//  zero or more statements

// The function statement is just a short-hand
//  for the var statement with a function value.
/*
function foo() {}
*/
// expands to
/*
var foo = undefined;
foo = function foo() {};
*/

// function expression
//        vs.
// function statement
// If the first token of a statement function 
//  it is a function statement, other wise a 
//  function expression
//
// You cannot put a function statement inside of 
//  an if statement because of hoisting.
// hoisting doesn't look at branching and it happens
//  before we know the result of the if statement.









// Functions have a name, a set of parameters
//  and a set of statements that are activated
// when the function is invoked
/*
function name(parameters) {
	statements;
}
*/


//------------------------------------------------
// Var statement
// Declares, initilizes and Defines variables within 
//  a function 
// Types are not specificed (int, )
// Initial values are optional
//  if initial values are not defined
//  they are automatically set to undefined
// A variable declared anywhere within a function
//  is visable everywhere within that fucntion

/*
var name;
var nrErrors = 0;
var a, b, c;
*/

// var gets split into two parts:
//  The declaration part gets hoisted to the top of
//  the fucntion, initializing with undefined.
//  The initialization part turns into an ordinary
//  assignment.
/*
var myVar = 0, myOtherVar;
*/ 
// Expands into
/*
var myVar = undefined,
	myOtherVar= undefined;

	//...
	myVar = 0;
*/


// JavaScript Scope
// In JavaScript, {blocks} do not have scope
// Only functions with {blocks} have scope
// Vars defined in a function are not
//  visable outside of the function they were
//  defined in...This is closure

// JavaScript has implied globals (not good)

/*
// Bad code in JavaScript, no scope on
// {blocks} the i variable is clobbered
//  The inner loop is constantly reseting 
//   the i value so the outer loop will never
//   finish
function assure_positive(matrix, n) {
	for (var i = 0; i < n; I += 1) {
		var row = matrix[i];
		for (var i = 0; i < row.length; i += 1) {
			if (row[i] < 0) {
				throw new Error('No');
			}
		}
	}
}
*/

// Declare all variables at the top of the function
// Declare all functions before you call them


// The let
// The let keyword allows you to declare variables that are 
//  limited in scope to the block, statement, or expression on which it is used. 
// This is unlike the var keyword, which defines a variable globally, or locally 
//  to an entire function regardless of block scope.
/*

*/


// Return statement
// Every function will return a result
// There is no void return like C/C++
/*
return expression;  // cannot put a line break
                    // because of semi colon insertion ;

return;
*/
// If there is no expression, then the
// return value is undefined.
// Except for constructors, whose
// default return value is this.


// Objects
// Everything else is objects
// Objects can contain data and methods
// Objects can inherit from other objects

// Collections
// Objects in JavaScript are Collections
// An object is an unordered collection of 
// name/value pairs
// Names are strings
// Values are any type, including other objects
// Good for representing records and trees
// Every object is a little database

// Object Literals
// Object literals are wrapped in curly braces { }
// Names can be names or strings
// Values can be expressions
// The syntax : seperate names and values
// The syntax , seperate pairs
// Object literals can be used anywhere a value can appear

/*
var myObject = {name: "Jack B. Nimble",
'goto' : 'Jail', grade: 'A', level:3};
*/
// "name"	"Jack B. Nimble"
// "goto"	"Jail"
// "grade"	"A"
// "level"	3

// To access
/*
var theName = myObject.name;
var destination = myObject['goto'];
*/



// Maker Function  (another way to make an object)

/*
funtion maker(name, where, grade, level) {
	var it = {};  // { } object called it
	it.name = name;
	it['goto'] = where;
	it.grade = grade;
	it.level = level;

	return it;
}

myObject = maker("Jack B. Nimble", 'Jail', 'A', 3);
*/


// Example of nested objects
// Objects within objects
/*
var myObject = {name: "Jack B. Nimble",
'goto': 'Jail', grade: 'A', format:
{type: 'rect', width: 1920, height:1080,
interlace: false, framerate: 24}};
*/

// Take advantage of "pretty printing"
/*
var myObject = {
	name: "Jack B. Nimble",
	'goto': 'Jail', 
	grade: 'A', 
	format: {
		type: 'rect', 
		width: 1920, 
		height:1080,
		interlace: false, 
		framerate: 24
	}
};
*/


// Passing Object Literals to a Function
/*
myFunction({
	type: 'rect',
	width: 1920,
	height: 1080
});

throw {
	name: 'error',
	message: 'out of bounds'
};
*/


// Example of a bad API in JavaScript

/*
function SuperDiv(width, height, 
                  left, top, zIndex, 
                  position, color, 
                  visibility, html, 
                  cssClass)

// Solution pass a object as parameter
// instead of each parameter by itself
function SuperDiv(spec)
*/
// Lesson pass a object as a parameter

// Object Augmentation

// New members can be added to any 
// object by simple assignment
// There is no need to define a 
// whole new class
/*
myObject.format.colorModel = 'YCgCb';

myObject[name] = value;
*/



// Linkage

// Objects can be created with a secret 
//  link to another object
// If an attempt to access a name fails,
//  the secret link object will be used.
// The secret link is not used when
//  storing.  New members are only added
//  to the primary object
// The object(o) function makes a new
//  empty object with a link to object o.

// New object contains the secret pointer to 
// old object
/*
var myNewObject = object(myOldObject);
*/

// Inheritance
// Linkage provides simple inheritance
// An object can inherit from an older object


// Prototypal Inheritance
// Some languages have classes,
//  methods, constructors, and modules.
//  JavaScript's functions do the work of
//  all of those.

// Instead of Classical Inheritance,
//  JavaScript has Prototypal Inheritance.

// It accompliches the same things, 
//  but differently

// It offers greater expressive power.
// But it's diffrent.

// Prototypal Inheritance
// Instead of organizing objects into rigid
//  classes, new objects can be made that are
//  similar to existing objects, and then
//  customized

// Object customization is a lot less work than
//  making a class, and less overhead, too.

// One of the keys is the object(o) function.
// The other is the key functions.


// JavaScript has Garbage Collection
// Mark and sweep, cycles are reclaimed

// Object Methods
// All objects are linked directly or indirectly
// to:
/*
Object.prototype
*/
// All objects inherit some basic methods
//  none of them are very useful.
/*
hasOwnProperty(name)
*/
// Is the name a true mamber of this object?
// No copy method
// No equals method

// Object Construction
// 3 ways to make an empty object
// All three of these expressions have 
//  exactly the same result:
/*
new Object()  // use the new object constuctor

{}  // use empty object literal

object(Object.prototype)  // call the object fucntion
                          // passing Object.prototype
*/
// { } is the prefered form


// Reference
// Objects can be passed as arguments to functions,
//  and can be returned by functions.
//  	Objects are passed by reference.
//		Objects are not passed by value.

// The === operator compares object
//  references, not values
//		true only if both operands are the
//		same object

// Delete statement
// Members can be removed from an
//  object with the delete operator
/*
delete myObject[name];
*/


// Arrays
// Array inherits from Object
// Indexes are converted to strings and
//  used as names for retrieving values.

// Very efficient for sparse arrays.
// Not very efficient in most other cases.

// One advantage: No need to provide a
//  lengthor type when creating an array.

// length 
// Array.length
// Arrays, unlike objects, have a special
//  length member

// It is always 1 larger than the highest
//  integer subscript

// It allows use of the traditional for
//  statement
/*
for (i = 0; i < a.length; i += 1) {
	//...
}
*/

// Do not use foor...in with arrays


// Array Literals
// An array literal uses [ ]
// It can contain any number of
//  expressions, seperated by , (commas)
/*
myList = ['cats', 'peas', 'beans'];
*/

// New items can be appended:
/*
myList[myList.length] = 'barley';
*/

// The . dot notation should not be used
//  with arrays.

// [ ] is prefered to new Array().


// Array methods
// concat
// every
// filter
// forEach
// indexOf
// join
// lastIndexOf
// map
// pop
// push
// reduce
// reduceRight
// reverse
// shift
// slice
// some
// splice
// sort
// toLocaleString
// toString
// unshift


// sort
/*
var n = [4, 8, 15, 16, 23, 42];
n.sort();
// n is [15, 16, 23, 4, 42, 8]
// this evaluated as strings not 
//  its numeric value
*/


// Deleting Elements
/*
delete array[number]
*/
// Removes the element, 
//  but leaves a hole in the numbering

/*
array.splice(number, 1)
*/
// Removes the element 
//  and renumbers all the 
//  following elements

/*
my Array = ['a', 'b', 'c', 'd']; // we wish to delete b, 
                                 //  second place in array

delete myArray[1]; // deletes b in area 1 of array
// ['a', undefined, 'c', 'd']
// the newly deleted area is now undefined

myArray.splice(1, 1);
// ['a', 'c', 'd']
// the splice method removes b 
// and the undefined empty space
*/


// When to use Arrays v Objects
// Use objects when the names are
//  arbitrary strings

// Use arrays when the names are 
//  sequential integers

// Don't get confused by the term
//  Associative Array

// Arrays are secretly linked to Array.prototype


// Distinguishing Arrays
/*
value.constructor === Array

value instanceof Array
*/
// Neither of these work when the
//  value comes from a diffrent frame


// Arrays and Inheritance

// Do not use arrays as prototypes
//  The object produced this way does not
//	have array nature.   It will inherit the
//	array's values and methods, but not its length

// You can augment an individual array.
//	Assign a method to it.
//	This works because arrays are objects.

// You can augment all arrays
//	Assign methods to Array.prototype


// Functions
//	Functions are first-class objects

//	1. Functions can be passed,
//		returned, and stored just like any
//		other value.

//	2. Functions inherit from Object
//		and can store name/value pairs.

//  Subroutine
//  Call and Return
//  (aka. sub, proceedure, proc, func, function, lambda)
//  Whay are there subroutines
//   Code reuse
//   Decomposition
//   Modularity
//   Expressiveness
//   High Order

// Recursion
// When a function calls itself 
//  or defined in terms of itself

// Quicksort
// Divide the array into two groups, low and high
//  Call Quicksort on each group containing more 
//  than one element.


//  Recursive Descent
//  Value and Array
/*

// The Value
value = function () {
	white();
	switch (ch) {
	case '{':
		return object();
	case '[':
		return array();
	case '"':
		return string();
	case 't':
		return trueWord();
	case 'f':
		return falseWord();
	case 'n':
		return nullWord();
	default:
		return number();
	}
};


// The Array
array = function () {
	var array = []; 
	next('[');
	white();
	if (ch !== ']') {
		while (true) {
			array.push(value())
			white();
			if (ch === ']') {
				break;
			}
			next(',');
			white();
		}
	}
	next(']');
	return array;
};

*/

// Stack
//  --
//  ++





// Function operator
// The function operator takes an
//	optional name, a parameter list,
//	and a block of statements, and
//	returns a function object.
/*
function name(parameters) {
	statements
}
*/
// A function can appear anywhere
//	that an expression can appear.

// lambda
// What JavaScript calls function,
//  other languages call lambda

// It is a source of enormous expressive power
// Unlike most power-constructs, it is secure


// Function statement
// The function statement is just a
//  short-hand for a var statement
//  with a fucntion value

/*
function foo() {}

// Expands to

var foo = function foo() {};
*/

//  Inner Functions
// Functions do not all have to be
//  defined at the top level (or left edge).
// Functions can be defined inside of other
//  functions.

// Scope
// An inner functions has access to
//  the variables and parameters of
//  functions that it is contained 
//  within.

// This is known as Static Scoping or
//  Lexical Scoping

// Closure
// Lexical Scoping
// Static Scoping
// The context of an inner function includes
//  the scope of the outer function.
// An inner function enjoys that context even
//  after the parent functions have returned.

// Gobal problem
// names is a global variable
/*
// Bade code
var names = ['zero', 'one', 'two',
			'three', 'four', 'five', 'six',
			'seven', 'eight', 'nine'];

var digit_name = function (n) {
	return names[n];
};

alert(digit_name(3));  // 'three'
*/

// Better but Slow
// now the names variable is scoped
//  inside the {function block}
/*
// Better code
var digit_name = function (n) {
	var names = ['zero', 'one', 'two',
			'three', 'four', 'five', 'six',
			'seven', 'eight', 'nine'];
	return names[n];
};

alert(digit_name(3));  // 'three'
*/

// Code with Closure the best tactic
/*
// Best code, use Closure
// Wrapped in parens ( )

var digit_name = (function () {
	var names = ['zero', 'one', 'two',
				'three', 'four', 'five', 'six',
				'seven', 'eight', 'nine'];

	return function(n) {
		return names[n];
	};
}());
*/

// Lazy (Don't do this)
/*
var digit_name = function (n) {
		var names = ['zero', 'one', 'two',
				'three', 'four', 'five', 'six',
				'seven', 'eight', 'nine'];
		digit_name = function (n) {
			return names[n];
		};
		return digit_name(n);
};

alert(digit_name(3));  // 'three'
*/
// Lazy (Don't do this)


// Closure Conditional
/*


var digit_name = (function () {

	var names;
	return function (n) {
		if(!names) { 
			names = ['zero', 'one', 'two',
				'three', 'four', 'five', 'six',
				'seven', 'eight', 'nine'];
		}
		return names[n];
	};
}());

alert(digit_name(3));  // 'three'
*/



// The scope that an inner function
//  enjoys continues even after the
//  parent functions have returned.

// This is called closure.

// Example
/*
function fade(id) {
	var dom = document.getElementById(id),
		level = 1;

	function step () {
		var h = level.toString(16);
		dom.style.backgroundColor =
			'#FFFF' + h + h;
		if (level < 15) {
			level += 1;
			setTimeout(step, 100);
		}
	}
	setTimeout(step, 100);

}
*/


// later method
// The later method causes a method
//  on the object to be invoked in the
//  future
/*
my_object.later(1000, "erase", true);

arguments.slice(2)

Array.prototype.slice.apply(arguments, [2]);
*/


/*
if (typeof Object.prototype.later !== 'function'){
	Object.prototype.later = function (msec, method) {
		var that = this;
			args = Array.prototype.slice.apply(arguments, [2]);
		if (typeof method === 'string') {
			method = that[method];
		}
		setTimeout(function () {
			method.apply(that, args);
		}, msec);
		return that; // Cascade
	};
}
*/


//  Partial Application
/*
function curry(func) {
	var args = arguments.slice(1);
	return function () {
		return func.apply(null, 
				args.concat(arguments.slice()));
	};
}

var inc = curry(function add(a, b) {
	return a + b;
}, 1);

alert(inc(6));
*/

// Promises, promises
// An object that allows to call 
//  methods on the thing if we 
//  know what the thing is the thing
//  will be executed.
//  But if we don't know what the thing 
//  is (yet) it will get cued up. and 
//  will be executed when we know what 
//  the thing is.

/*
// Promise maker
function make_promise() {
	var status = 'unresolved', ...;
	function vouch(deed, func) { ... }
	function resolve(deed, value) { ... }
	return {
		when: function (func) {
			vouch('fulfilled', func);
		},
		fail: function (func) {
			vouch('smashed', func);
		},
		fulfill: function (value) {
			resolve('fulfilled', value);
		},
		smash: function (string) {
			resolve('smashed', string);
		},
		status: function () {
			return status;
		}
	};
}
*/

/*
function make_promise() {
	var outcome,
	    status = 'unresolved',
		waiting = [],
		dreading = [];
    
    function vouch(deed, func) {
		switch (status) {
		case 'unresolved':
			(deed === 'fulfilled' ? waiting : dreading).push(func);
			break;
		case deed:
			func(outcome);
			break;
		}
    }
}
*/



/*
function make_promise() {
	var outcome,
		status = 'unresolved',
		waiting = [],
		dreading = [];
    
    function resolve(deed, value) {
		if (status !== 'unresolved') {
			throw new Error('This promise has already been resolved: ' + status);
    	}
		status = deed;
		outcome = value;
		(deed === 'fulfilled' ? waiting : dreading).forEach(function (func)

		try {
			func(outcome);
		} catch (ignore) {}
		});
		waiting = null;
		dreading = null;
    }
}
*/


// Sealer/Unsealer
/*
function make_sealer () {
	var boxes = [], values = [];

	return {
		sealer: function (value) { 
			var i = boxes.length,
				box = {};
			boxes[i] = box;
			values[i] = value;
			return box;
		},
		unsealer: function (box) {
			return values[boxes.indexOf(box)];
		};
	};
}
*/


// Pseudoclassical Inheritance
/*
// Bad code
function Gizmo(id)  {
	this.id = id;
}
Gizmo.prototype.toString = function () {
	return "gizmo " + this.id;
};

function Hoozit(id) {
	this.id = id;
}

Hoozit.prototype = new Gizmo();
Hoozit.prototype.test = function (id) {
	return this.id === id;
};

*/

// Functional Inheritance
/*
function gizmo(id) {
	return {
		id: id;
		toString: function () {
			return "gizmo " + this.id;
		}
	};
}


function hoozit(id) {
	var that = gizmo(id);
	that.test = function (testid) {
		return testid === this.id;
	};
	return that;
}
*/

// Privacy
/*
function gizmo(id) {
	return {
		toString: function () {
			return "gizmo " + id;
		}
	};
}


function hoozit(id) {
	var that = gizmo(id);
	that.test = function (testid) {
		return testid === id;
	};
	return that;
}
*/

// Shared Secrets
/*
function gizmo(id, secret) {
	secret = secret || {};
	secret.id = id;
	return {
		toString: function () {
			return "gizmo " + secret.id
		};
	};
}

function hoozit(id) {
	var secret = {}; // final
	var that = gizmo(id, secret);
	that.test = function (testid) {
		return testid === secret.id;
	};
	return that;
}
*/

// Super Methods
/*
function hoozit(id) {
	var secret = {};
	var that = gizmo(id, secret);
	var super_toString = that. toString;
	that.test = functions (testid) {
		return testid === secret.id;
	};
	that.toString = function () {
		return super_toString.apply(that);
	};
	return that;
}
*/


/*
function memoizer(memo, formula) {
	var recur = function (n) {
		var result = memo[n];
		if (typeof result !== 'number') {
			result = formula(recur, n);
			memo[n] = result;
		}
		return result;
	};
	return recur;
};

var fractorial = memoizer([1, 1], function (recur, n) {

	return n *recur(n - 1);
});

var fibonacci = memoizer([0, 1], function (recur, n) {
		return recur(n - 1) + recur(n - 2);
});
*/

// Don't make functions in a loop
// It can be wasteful because a new function
//  object is created on every iteration
// It can be confusing because the new function 
//  closes over the loop's variables,
//  not over their current values.

// Creating event handlers in a loop
/*
// Bad code
for (i ...) {
	div_id = divs[i].id;
	divs[i].onclick = function () {
		alert(div_id);
	};
}

// Good code
function make_handler(div_id) {
	return function () {
		alert(div_id);
	}
}
for (i ...) {
	div_id = divs[i].id;
	divs[i].onclick = make_handler(div_id);
}
*/

// Tennent's Principle of Correspondence
/*
function fractorial(n) {
	var result = 1;  // result: variable
	while (n > 1) {
		result *= n;
		n -= 1;
	} return result;
}

//------------------------------------------
function fractorial (n) {
	return (function (result) { // result: parameter
		while (n > 1) {
			result *= n;
			n -= 1;
		} return result;
	}(1));
}
*/

// The Y Combinator
/*
function y(le) {
	return (function (f) {
		return f(f);
	} (function (f) {
		return le(function (x) {
			return f(f) (x);
		});
	}));
}

var fractorial = y(function (fac) {
	return function(n) {
		return n <= 2 ? n : n * fac(n - 1);
	};
});

var number120 = fractorial(5);
*/

//  Read the Little Lisper (Schemer)


/*
//Good code
var gizmo = new_constructor(Object, function (id) {
	this.id = id;
}, {
	toString: function () {
		return "gizmo " + this.id;
	}
});

var hoozit = new_constructor(gizmo, function (id) {
	this.id = id;
}, {
	test: function (id) {
		return this.id === id;
	}
});
*/

/*
function new_constructor(extend, initializer, mehtods) {
	var func, prototype = Object.create(extend && extend.prototype);

	if (methods) {
		methods.keys().forEach(function (key) {
			prototyoe[key] = mehtods[key];
		});
	}
	func = function () {
		var that = Object.create(prototype);
		if (typeof initializer === 'function') {
			initializer.apply(that, arguments);
		}
		return that;
	};
	// clean up
	func.prototype = prototype;
	prototype.constructor = func;
	return func;
}
*/


// A Module Pattern
/*
var singleton = (function () {
	var privateVariable;
	function privateFunction(x) {
		...privateVariable...
	}
	return {
		firstMethod: function (a, b)  {
			...privateVariable...
		},
		secondMethod: function (c) {
			...privateFunction()...
		}
	};
}());
*/


/*
GLOBAL.methodical = (function () {
	var privateVariable;
	function privateFunction(x) {
		...privateVariable...
	}
	return {
		firstMethod: function (a, b) { 
			...privateVariable...
		},
		secondMethod: function (c) {
			...privateFunction()...
		}
	};
}());

*/

/*
(function () {
	var privateVariable;
	function privateFunction(x) {
		...privateVariable...
	}
	GLOBAL.firstMethod = function(a, b) {
		...privateVariable...
	};
	GLOBAL.secondMethod: function (c) {
		...privateFunction()...
	};
}());
*/

// Power Constructors
// 1. Make an object
//		Object literal { }
//		new
//		Object.create
//		call another power constructor

// 2. Define some variables and functions
//		These become private members

// 3. Augment the object with privileged methods

// 4. Return the object

// Step 1
/*
function myPowerConstructor(x) {
	var that = otherMaker(x);
}
*/

// Step 2
/*
function myPowerConstructor(x) {
	var that = otherMaker(x);
	var secret = f(x);
}
*/

// Step 3
/*
function myPowerConstructor(x) {
	var that = otherMaker(x);
	var secret = f(x);
	that.priv = function () {
		... secret x that ...
	};
}
*/


// Step 4
/*
function myPowerConstructor(x) {
	var that = otherMaker(x);
	var secret = f(x);
	that.priv = function () {
		... secret x that ...
	};
	return that;
}
*/




// Function Objects
// Functions are objects, 
//  so they can contain 
//  name/value pairs.

// This can serve the same purpose
//  as static members in other
//  languages.

// Method
// Since functions are values,
//  functions can be stored in
//  objects.

// A function stored in an object is called
//  a method.

// Invocation
// If a function is called with too
//  many arguments, the extra
//  arguments are ignored

// If a function is called with too few
//  arguments, the missing values
//  will be undefined.

// There is no implicit type checking
//  on the arguments.

// There are 4 ways to call a function:
/*

// Function form
functionObject(arguments)

// Method form
thisObject.methodName(arguments)
thisObject["methodName"] (arguments)

// Constructor form
new functionObject(arguments)

// Apply form
functionObject.apply(thisObject, [arguments])
*/


// Method form
/*
thisObject.methodName(arguments)
thisObject[methodName] (arguments)
*/
// When a function is called in the 
//  method form, in addition to its 
//  regular parameters it recieves an
//  additional special parameter called 
//  this, this is set to (bound to)
//  thisObject, the object containing
//  the function.

// This allows methods to have a
//  reference to the object of interest.


// Funtion form
/*
functionObject(arguments)
*/
// When a function is called in the
//  function form, this is set to (bound to)
//  the global object (not very useful, fixed ES5/Strict).
// It makes it harder to write helper
//  functions within the method because
//  the helper function does not get
//  access to the outer this.  
//  The inner
//   functions does not get access to the 
//   outer this
/*
// A work around
//  assigning this to that
var that = this;
*/ 


// Constructor form
//  convention requires capitlization 
//   of a Function and Value names
/*
new FunctionValue(arguments)
*/
// When a fucntion is called with the
//  new operator, a new object is
//  created and assigned to this.

// If there is not an explicit return
//  value, then this will be returned.

// Used in the Pseudclassical style



// Apply form
/*
functionObject.apply(thisObject, [arguments])
functionObject.call [thisObject, arguments]
*/
// A function's apply or call method allows for
//  calling the functions
// .apply takes an array of arguments
// .call takes zero or more individual 
//         parameters which become the 
//         arguments.

//

// --------------------------------------------------


// Two pseudo special parameters
// arguments
// this


// this (special parameter)

// The this parameter contains a reference
//  to the object of invocation.

// this allows a method to know what object
//  it is concerned with.

// this allows a single function object to 
//  service many functions

// this is key to prototypal inheritance 

// this is an extra parameter.  Its value
//  depends on the calling form.

// this gives methods access to their ojects

// this is bound at invocation time.


// Invocation
// The parens ( ) suffix operator surrounding 
//  zero or more comma seperated arguments
// The arguments will be bound to parameters 

// If a fucntion is called with too many 
//  arguments, the extra arguments are
//  ignored

// If a function is called with too few 
//  arguments, the missing values will 
//  auto magically be assigned undefined

// There are no implicit type checking on the
//  arguments

// Invocation form    |  this
//----------------------------------------
// function           |  the global object 
//                    | (now undefined ES5 strict)
// method             |  the object
// constructor        |  the new object
// apply              |  explicit argument


// arguments (special parameter)
// When a function is invoked, in addition to 
//  its parameters, it also gets a special
//  parameter called arguments.

// It contains all of the arguments from
//  the invocation.

// It is an array-like object

// arguments.length is the number 
//  of arguments passed.

// Weird interaction with parameters
// leave arguments alone and as read-only
// Example
/*
// ES3 edition code
function sum() {
	var i,
		n = arguments.length,
		total = 0;
	for (i = 0; i < n; i += 1) {
		total += arguments[i];
	}
	return total;
}

var ten = sum(1, 2, 3, 4);
*/

/*
// ES5 edition code
// Inherits from Array.prototype
//  with all of the array's bells and whistles
function sum() {
	return arguments.reduce(function (a, b) {
		return a + b;
	}, 0);
}

var ten = sum(1, 2, 3, 4);
*/


// Augmenting Built-in Types
// Object.prototype
// Array.prototype
// Function.prototype
// Number.prototype
// String.prototype
// Boolean.prototype

// trim method
// Will get rid of whitespace on strings
/*
String.prototype.trim = function () {
	return this.replace(
		/^\s*(\S*(\s+\S+)*)\s*$/, "$1");
};
*/


// supplant
/*
var template = '<table border="{border}">' +
	'<tr><th>Last</th><td>{last}</td></tr>' +
	'<tr><th>First</th><td>{first}</td></tr>' +
	'</table>'

var data = {
	first: "Carl",
	last: "Hollywood",
	border: 2
};
*/

// need to write a supplant method
/*
String.prototype.supplant = function (o) {
	return this.replace(/{([^{}]*)}/g,
		function (a, b) {
			var r = o[b];
			return thypeof r === 'string' ?
				r : a;
		}
	);
};
*/

// typeof operator
// The typeof prefix operator returns
//  a string identifying the type of a
//  value.

// type     |  typeof
//---------------------
// object   | 'object'
// function | 'function'
// array    | 'object' (?)
// number   | 'number'
// string   | 'string'
// boolean  | 'boolean'
// null     | 'object' (?)
// undefined| 'undefined'


// eval function (very dangerous, avoid)
/*
eval(string)
*/
// The eval function compiles and
//  executes a string and returns the
//  result.
// It is what the browser uses to convert
//  strings into actions.
// It is the most misused feature of the
//  JavaScript language.
// Only took a decade for the a ha moment

// parseJSON method instead of eval



// Function function (very dangerous, avoid)
/*
new Function(parameters, body)
*/
// The Function constructor takes zero or
//  more parameter name strings, and a 
//  body string, and uses the JavaScript
//  compiler to produce a function object

// It should only be used to compile fresh
//  source from a server.

// It is closely related to eval as it 
//  also has access to the compiler.


// Built-in Type Wrappers
// Java has int and Integer, two
//  incompatible types which can both
//  carry the same value with differing
//  levels of efficiency and
//  convenience.

// JavaScript copied this pattern to no
//  advantage.  Avoid it.
// Avoid new Boolean()
// Avoid new String()
// Avoid new Number()


// Confession
/*
function object(o) {
	function F() {}
	F.prototype = o;
	return new F();
}
*/


// Augmentation
// We can directly modify individual
//  objects to give them just the
//  characteristics we want.
// We can do this without having to
//  create classes.
// We can then use our new object as the
//  prototype for lots of new objects, each
//  of which can also be augmented.


// Working with the Grain
// Clasical patterns are less
//  effective than prototypal patterns
//  or parasitic patterns.

// Formal classes are not needed for
//  reuse or extension.

// (global) Object
// The object that dares not speak its
//  name.
// It is the container for all global 
//  variables and all built-in objects.
// Sometimes this points to it.
/*
var global = this;
*/
// On web browsers, window is the global
//  object.

// window.document vs document
/*
document
*/


// Global variables are evil
// Functions within an application
//  can clobber each other.
// Cooperating applications can
//  clobber each other.
// Use of the global namespace must
//  be minimized.

// Implied Global
// Any var which is not properly declared
//  is assumed to be global by default.
// This makes it easy for people who do
//  not know or care about encapsulation
//  to be productive, but it makes
//  applications less reliable.
// JSLint, is a tool which helps identify
//  implied globals and other weaknesses.
/*
http://www.JSLint.com
*/

// Namespace
// Every object is a separate namespace.
// Use an object to organize your
//  variables and functions.

// The YAHOO Object
/*
<head>
<script>
YAHOO={};
</script>
*/

// Encapsulate
// Function scope can create an encapsulation.
// Use an anonymous function to
//  wrap your application.

// Example
/*
YAHOO.Trivia = function () {
	// define your common vars here
	// define your common functions here
	return {
		getNextPoser: function (cat, diff) {
			//...
		},
		showPoser: function () {
			//...
		}
	};
} ();
*/


// Thinking about type
// Trading type-safety for dynamism.
// JavaScript has no cast operator.
// Reflection is really easy, and
//  usually unnecessary.
// Why inheritance?
//  Automatic casting
//  Code reuse
// Trading brittleness for flexability.

// Date
// The Date fucntion is based on
//  Java's Date class
// It was not Y2K ready.


// RegExp
// Regular expressions pattern matcher
//  copies from the Perl conventions
// Patterns are enclosed in slashes
// Example: a pattern that matches
//  regular expressions
/*
/\/(\\[^\x00-\xlf]|\[(\\[^\x00-\xlf]|[^\x00-\xlf\\\/])*\]|[^\x00-\xlf\\\/\[])+\/[gim]
*/
// Bizarre notation, difficult to read.

// Threads
// The language definition is neutral on
// threads
// Some language processors (like SpiderMonkey)
//  provide thread support.
// Most application environmnets (like browsers)
//  do not provide it.
// Threads are evil

// Platforms for JavaScript
// Browsers
// WSH (Windows Script Host) and Dashboard
// Yahoo!Widgets
// Dreamweaver and Photoshop
// Embedded


// ActionScript (avoid)
// Not ECMA compatable
// A JavaScript like language found in Flash
// Empty strings are truthy
// keywords are case sensitive
// No Unicode support
// No RegExp (Regular Expressions)
// No statement labels
// || and && return booleans
// seperate operators for strings and numbers


// E4X (avoid)
// Extensions to ECMAScript for XML
// Proposed by BEA
// Allows <XML> literals
// Not compatible with ECMAScript
//  third edition
// Not widely accepted yet
// Not in IE7


// Style
// Programming style isn't about 
//  personal taste.
// It is about rigor in expression.
// It is about clearness in
//  presentation.
// It is about product adaptability
//  and longevity.
// Good ruleshelp us to keep the 
//  quality of our programs high.


// Style and JavaScript
// Style is critically important for
//  JavaScript
// The dynamic nature of the 
//  language is considered by some
//  to be "too soft".  Dicipline is
//  necessary for balance.
// Most of the world's body of
//  JavaScript programs is crap.


// Code Conventions for the
// JavaScript Programming
// Language
/*
http://javascript.crockford.com/code.html
*/

// Semicolon insertion
// When the compiler sees an error, it
//  attempts to replace a nearby linefeed
//  with a semicolon and try again.
// This should alarm you.
// It can mask errors.
// Always use the full, correct forms,
//  including semicolons.

// Line Ending
// Break a line after punctuator:
// , . ; : { } ( [ = < > ? ! + - * / %
// ~ ^ | & == != <= >= += -= *= /= %=
// ^= |= &= << >> || && === !== <<= >>=
// >>> >>>=
// Do not break after a name, string, 
//  number or ) ] ++ --
// Defense against copy/paste errors.

// Comma
// Avoid tricky expressions using the
//  comma operators.
// Do not use extra commas in array 
//  literals.
// Good: [1, 2, 3]
// Bad:  [1, 2, 3,]


// Required Blocks
// Good
/*
if (a) {
	b();
}
*/
// Bad
/*
if (a) b();
*/


// Forbidden Blocks
// Blocks do not have scope in JavaScript.
// Blocks should only be used with structured
//  statements
// function
// if
// switch
// while
// for
// do
// try

// Variables
// Define all variables at the
//  beginning of the function.
// JavaScript does not have block
//  scope, so their is no advantage in
//  declaring variables at the place of
//  their first use.


// Expression Statements
// Any expression can be used as a 
//  statement.  That can mask errors.
// Only assignment expressions and
//  invocation expressions should be used
//  as statements.

// Good
/*
foo();
*/
// Bad
/*
foo && foo();
*/


// switch Statement
// Avoid using fallthough in switch statements
// Each clause should explicitly
//  break or return or throw

// Assignment Expressions
// Do not use assignment
//  expressions in the condition parts
//  of if, while, or for.
// It is more likely that
/*
if (a = b) { ... }
*/
// Was intended to be
/*
if (a == b) { ... }
*/
// Avoid tricky (complex) expressions.

// == and !=
// Be aware that == and != do type
//  coercion.
// Bad
/*
if (a == null) { ... }
*/
// Good
/*
if (a === null) { ... }
if (!a) { ... }
*/

// Labels
// Use lables only on these statements:
// do
// for
// switch
// while

// Never use javascript: as a label.

// JSLint
// JSLint can help improve the
//  robustness and portability of your
//  programs.
// It enforces style rules
// It can spot some errors that are very
//  difficult to find in debugging
// It can help eliminate implied globals.
// Currently available on the web and as
//  a Konfabulator widget.
// Soon, in text editors and Eclipse.
/*
http://www.JSLint.com/
*/

// Key Ideas with JavaScript
// Load and go delivery
// Loose typing
// Objects as general containers
// Prototypal inheritance
// Lamdba
// Linkage through global variables

// Special Values
// null
// undefined


// JavaScript the Definitive Guide

// ECMAScript6 current


// *********************** 
//  Notes from Douglas Crockford's
//   And then there was JavaScript

// Get, Set, and Delete
// Get
/*
object.name;
object[expression];
*/

// Set
/*
object.name = value;
object[expression] = value;
*/

// Delete
/*
delete object.name;
delete object[expression];
*/


// New in ES5
/*
// Setter
Object.defineProperty(object, key, descriptor);
Object.defineProperties(object, object_of_descriptors);

// Getter
Object.getOwnPropertyDescriptor(object,key);
Object.getOwnProperties(object);

Object.keys(object);
*/

// Object Literals
// An expressive notation for creating objects.
/*
// Create the Object named my_object
var my_object = {foo: bar};

// assign (set) the Object named my_object
var my_object = Object.defineProperties(
		Object.create(Object.prototype), {
	foo: {
		value: bar,
		writable: true,
		enumerable: true,
		configurable: true
		})
	});

*/


// Accessor Property
// uses get: and/or set:
/*
Object.defineProperty(my_object, 
		'inch', {
	get: function () {
		return this.mm / 25.4;
		},
		set: function (value) {
			this.mm = value * 25.4;
		},
		enumerable: true
	});
*/


// Classes vs Prototypes
// JavaScript is a Prototype language
// Classes: 1967 in Simula
// Prototypal: 1987 Xerox Parc in Smalltalk

// Prototypal is an upgrade from Classes
// Make an object that you like
// Create new instances that inherit from that object
// Customize the new objects

// Archaric Taxonomy and classification are not necessary
// No more refactoring "cruft"

// Delegation
// Differential Inheritance

// Objects have a prototype attribute
// This is not a prototype property,
//  this is an attribute of the 
//  object itself

// prototype: object or null
// Object.create(object, properties...)
// Object.getPrototypeOf(object)

// new prefix operator, vestage do not use
// can potentially clobber global variables
// with no compile time/ runtime errors
// bug prone

// There is really no reason to use new
// the same can be done with Object.create
/*
function new(func, arguments) {
	var that = Object.create (func.prototype),
		result = func.apply(that, arguments);

	return (typeof result === 'object' &&
		result)  || that;
}
*/



// JavaScript didn't get it quite right

// Accidental collisions: Fails when word
//  === 'constructor
/*
// bad code
function bump_count(word) {
	if (word_count[word] += 1;)
	} else {
	word_count[word] =1;
	}
}
*/

/*
// good code
function bump_count(word) {
	if (typeof word_count[word] === 'number') {
		word_count[word] += 1;
	} else {
		word_count[word] = 1;
	}
}
*/

// The for in problem
// Functions inherited from a prototype are
//  included in the for in enumeration
/*
// bad code
for (name in object) {
	if (object.hasOwnProperty(name) {
	//...
	}
}
*/
// This fails if an object has a hasOwnProperty.

/*
// good code
for (name in object) {
	if (Object.prototype
		.hasOwnProperty
		.call(object, name) {
			//..
	}
}
*/


// Solutions in ES5
// Object.create(null) creates an
//  object that does not inherit anything
//  it's a pristine virgin object

// Set the enumerable attribute to false
//  when adding methods to prototypes.   That
//  keeps them out for in enumerations.

// Object.keys(object) produces an array
// of strings, the keys of the own (not inherited)
// properties.

// Key must be strings
/*
function make_sealer() {
	var boxes = [], values = [];
	return {
		sealer: function (value) {
			var box, 1 = boxes.length;
			box = {};
			boxes[i] = box;
			values[i] = value;
			return box;
		},
		unsealer: function (box) {
			return values[boxes.indexOf(box)];
		}
	};
}
*/


// Objects have an extensible attribute
// extensible: boolean

/*
// by calling this
// Find out if an object is extensible
Object.isExtensible(object)

// Turns bit off and can never 
//  be turned on again, when you turn
//  this bit off it means the object 
//  is full, you cannot add any new 
//  properties.  If you try you will 
//  get an excepteion
Object.preventExtensions(object)


// goes through all object and 
//  turns off configurable bits
//  so they cannot be deleted 
//  or changed from data to accesor 
//  or back
Object.seal(object)

// Does same thing as seal, but also sets
//  everything to read only, turns off 
//  everybodies writable bits.  
//  Immutable objects
Object.freeze(object)
*/

// Object and ...
// Number (64-bit floating point, IEEE-754 aka "Double")
// Boolean 
// String
// Array
// Date
// RegExp
// Function

// Numbers:
// Number literals
// (all equivalent to 1024)
//  .01024e4
// 1.024e+3
// 10.24E2
// 102.4E+1
// 1024.e0
// 1024.00
// 1024
// 10240e-1


// Associative Law does not hold
// Because computational numbers are
// necessarily finite, but real numbers 
// are infinite
/*
(a + b) + c === a + (b + c)
*/
// Produces false for some values of a, b, c.

// Integers under
//  9007199254740992 (9 quaddrillion are ok)
/*
// Is the same? number
9007199254740992 === 9007199254740992 + 1
*/

// Decimal fractions are approximate
// Most reported bug in the Mozilla database
// This affects money directly
/*
a = 0.1;
b = 0.2;
c = 0.3;

(a + b) + c === a + (b + c)
// false
*/

// Money conversions need decimal 
// In the case of money you need to 
//  treat the data like Integers is
//  dealing with money.
// Multiply by 100, turn into cents
//  then do the calculation work.
// Just make sure you are calculating 
//  is less than 4 quadrillion cents
//  at any given time.

// Number methods
// toExponential
// to Fixed
// toLocaleString
// toPrecision
// toString
// valueOf

/*
if (!Number.prototype.trunc)  {
	Number.prototype.trunc = 
		function trunc(number) {
			return Math[ number >= 0 ? 
			'floor' : 'ceil' ](number);
		};
}
*/


// Numbers are first class objects
// A number can be stored in a variable
// A number can be passed as a parameter
// A number can be returned from a function
// A number can be stored as an object
// (a Java int cannot be put into a hash table)
// (but you can in JavaScript, because they are)
// (an object)

// Convert a number to a string
// Use a number method (toString)
// Use string function
/*
str = num.toString();
str = String(num);
*/

// Convert a string to a number
// Use the Number function
// Use the + prefix operator
// Use the parseInt function
/*
num = Number(str);
num = +str;
*/

// parseInt function
/*
parseInt(str, 10)
*/
// Converts the value into a number
// It stops at the first non-digit character
/*
parseInt("12em") === 12
*/
// The radix(10) should always be used
//  when using parseInt()
/*
parseInt("08") === 0
parseInt("08", 10) === 8
*/


// Math object
// abs
// acos
// asin
// atan
// atan2
// ceil
// cos
// exp
// floor, used to turn a real number into an integer
// log
// max
// min
// pow
// random
// round
// sin
// aqrt
// tan

// Math object constants
// E
// LN10
// LN2
// LOG10E
// LOG2E
// PI
// SQRT1_2
// SQRT2
/*
function log2(x) {
	return Math.LOG2E *
		Math.log(x);
}
*/




// END OF LINE
