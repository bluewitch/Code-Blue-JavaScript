# JavaScript_QA.md

1- What is JavaScript?
JavaScript is a scripting language created by Netscape in 1995. It was initially used on a popular web browser Netscape Navigator. But, these days, we can use it for client-side as well as server-side application development.

Well… I don’t think someone will ask this, but we shouldn’t forget where JavaScript comes from.

2- List some advantages of JavaScript?
JavaScript can work offline inside the web browser.
It supports multiple programming paradigms. For example, we can make use of Object-Oriented, Functional, and Imperative programming concepts.
It has the biggest collection of open source libraries and frameworks.
JavaScript is capable of creating online/offline games, desktop software, websites, and mobile apps.
No need to learn separate programming languages to create frontend and backend of a website. JavaScript is supported on all major web browsers and it can run on the server using Node.js.
It is an interpreted language. Meaning that we don’t have to build or compile its code before use. JavaScript instructions execute directly.
3- Should we use internal or external JavaScript?
Internal JavaScript is more suitable when we just need to use it on a single web page. Whereas, always prefer an external JavaScript file for websites that has multiple web pages.

4- Why WordPress plugins like Autoptimize aggregate JavaScript Code in one file?
Aggregation of JavaScript source code in a single file reduces the number of requests made to the server while generating a web page. In turn, it makes a website load faster.

For example, let’s say we’ve included 10 JavaScript files on a web page. Now, when we open this web page then our web browser sends 10 HTTP requests to the server in order to retrieve these files. On the other hand, if we aggregate the code of all these files into one then we just need to make 1 request to the server.

5- What is JavaScript Hoisting?
Hoisting is a concept in JavaScript which allows us to use variables and functions even before they are declared.

Basically, when we execute a JavaScript code then at first it automatically extracts all variable and function declarations from the code and moves them to the top of their scope. After that, it starts executing the code.

The major benefit of Hoisting is that our code works correctly and doesn’t display any errors like “undefined variable” or “undefined function”.

Learn more about hoisting with my article Understanding Variables, Scope, and Hoisting in JavaScript


7- What is JavaScript “Strict Mode”?
The default behavior of JavaScript is very forgiving in case we make a minor mistake. It means that it will not display any error messages. But, sometimes in development, we need to see all kinds of errors and warnings to debug the code.

Here comes the use of “Strict Mode” in JavaScript. Basically, it’s a restricted variant where JavaScript displays all errors and warnings, even if they are silent ones.

We can enable “Strict Mode” by using the "use strict"; directive at the beginning of our script.

8- What are some alternatives to Svelte?
Svelte is a front-end development framework for the JavaScript programming language. Some of its popular alternatives include:-

React
Vue.js
Angular
9- What are Self Invoking Functions?
Self Invoking Functions are a little different from normal functions because they are executed immediately where they were declared.

Normally, we first declare a function and later just call it. But, JavaScript automatically executes the code of Self Invoking Functions at run-time.

A point to be noted is that these functions do not have any name. In turn, we are unable to recall these types of functions. They are also known as “Anonymous Functions”.


---
===============


10- What is the difference between “var”, “let”, and “const”?
var	let	const
It is available right from the beginning when the JavaScript was introduced.	It is a new way to declare variables in JavaScript, starting from ES6.	const is used to store a value that will not be changed throughout the execution of the script. It is also introduced recently in ES6.
It has a global/function scope.	It has block scope.	It also has block scope.
Can be updated or re-declared in its scope.	We can’t re-declare them.	const represents a constant value, so it can’t be updated or re-declared.
Learn more about them with my article Understanding Variables, Scope, and Hoisting in JavaScript

11- What is the difference between “==” and “===”?
Both of them are used in JavaScript to perform a comparison between two values.

== operator	=== operator
It is a Type Converting Operator.	It is a Strict Equality Operator.
It is only used to compare two values.	It compares two values as well as their types.
12- Is there any difference between “null” and “undefined” keywords?
Both of these keywords represent an empty value. But, there are two basic differences between null and undefined.

null	undefined
We declare a variable and assign it a value of null.	We declare a variable without assigning any value.
type of (null) “object”	type of (undefined) “undefined”
13- Differentiate between “function declaration” and “function expression”?
Basically, Function Declaration is nothing but the normal process of defining a function using the keyword function, its unique name, parameters, and the function body. Whereas, when we assign a function declaration to a variable then it become Function Expression.

It is interesting to note that function expressions are not hoisted. Meaning that they will display an error if you try to call them before defining.

Function Declaration:-
`
function full_name(first_name, last_name)
{
	return first_name + " " + last_name;
}
`
Function Expression:-
`
var addition = function add(value_1, value_2)
{
	return value_1 + value_2;
}
`

14- What is a Closure?
A closure in JavaScript is a function inside another function. The inner function has access to its own variables, the variables defined in the outer function as well as the global variables.

Closure Example:-

`var a = 2;

function outer()
{
	var b = 4;
	
	function inner()
	{
		var c = 6;
		
		console.log(a + b + c);
	}
	
	inner();
}

outer();
`

15- Predict the output of these two functions? Will they return same the output or not?
`
function user1()
{
	return {
		name: "Juan"
	};
}

function user2()
{
	return
	{
		name: "Juan"
	};
}

console.log(user1());
console.log(user2());
Output of Function user1()

{name: "Juan"}
Output of Function user2()

undefined
`
16- What is NaN?
In JavaScript, NaN stands for “Not a Number”. It is a special value that occurs when we are unable to perform an operation.

For example, what if we try to divide a string using a number (e.g. “Hello World” / 5).

17- Explain the for-in loop?
The for-in loop is specifically designed to loop through all the object’s properties in a step by step manner. It selects one property from the object in each iteration and performs the required operations on it.

Let’s try to understand it with the help of an example.
`
var user = {
	"name": "dwulf",
	"country": "Germany",
	"website": "dazeofthewolf.crypto"
};

for(var key in user)
{
	if(user.hasOwnProperty(key))
	{
		console.log(key + " -> " + user[key]);
	}
}
`
Output:-
`
name -> dwulf
country -> Germany
website -> dazeofthewolf.crypto
`

18- What is Event Bubbling and Capturing?
In JavaScript DOM, HTML elements are nested inside one another to form a hierarchy.

Now, if both parent and child elements have registered a handle for a specific event then what will be the order of event propagation?

It can be determined in two ways which are known as event bubbling and capturing.

In event bubbling, the child element will capture the event first and then propagate it to parent elements. Whereas, in event capturing, the parent element will capture the event first and then propagate it to the child elements.

19- What is the difference between JavaScript and ECMA Script?
JavaScript is a scripting language whereas ECMA Script is a collection of guidelines and rules to standardize JavaScript across different web browsers.

20- How to create a cookie using JavaScript?
In JavaScript, a cookie can be created using a document.cookie object. Simply assign it a string value that is just a series of key-value pairs separated with semi-colons.

JavaScript Create Cookie Example:-
`
document.cookie = "username=Juan; expires=Wed, 03 Oct 2030 12:00:00 UTC; path=/";
`





# Diffrence Between JavaScript and Node.js


How is Node.js different from Javascript?


JavaScript is a programming language that runs in any browser that has a compatable browser engine.   Node.js is an interpreter and a runtime environment designed for JavaScript.  Node.js comes with some in-built modules that enhance the features of JavaScript programming.

JavaScript is used, typically, on the client-side of a web application, especially for developing dynamic features.   Node.js can be used on any operating system to develop applications that interact with system hardware, particularly for web backends.

JavaScript can run on diffrent browser engines like V8 (Google Chrome), Spider Monkey (Firefox), and JavaScript Core (Safari).  Node.js is exclusive to the V8 engine used by Chrome.




When should you use Node.js?
Node.js is asynchronous, event-driven, non-blocking, and single-threaded. It makes Node a perfect candidate for developing the following types of applications:

Realtime applications like chat and services delivering live updates.
Streaming applications that deliver video or other multimedia content to a large audience.
I/O intensive applications, like collaborative platforms.
Web backends that follow microservices architecture.
However, Node.js’ unique qualities make it less than ideal for some other types of applications: those that carry out CPU-intensive tasks like complex mathematical computations will be restricted by Node’s single-threaded execution.

If you want to learn more about this, check out our article on Node.js architecture and when to use Node.js in projects.



What does EventEmitter do?
Every object in Node.js capable of emitting events is a member of the EventEmitter class. The http module is one such example.

All EventEmitter classes can use the eventEmitter.on() function to attach event listeners to the event. Then, as soon as such an event is caught, its listeners are called one by one synchronously.




What is Node’s event loop?
Since Node.js is single-threaded, it has to be non-blocking to prevent the thread from spending too long on a task that takes a while to complete. The event loop is responsible for enabling this non-blocking behavior. Its job is to schedule pending tasks using the application thread.

We know that Node uses callbacks to handle the response returned by an asynchronous function when its task is complete. Similar to the event that created the task, the completion of the task also emits an event. Node.js adds these events that require handling to an event queue.

The event loop iterates over events in the event queue and schedules when to execute their associated callback functions.

What are Node Streams?
Streams are pipelines that read or write data from a source and transfer it to a continuous flow destination. There are four types of streams:

Readable
Writable
Duplex (both readable and writable)
Transform (A type of duplex stream. Its output is calculated using the input)
Each stream is also an EventEmitter. It means a stream object can emit events when there is no data on the stream, when data is available on the stream, or when data in the stream is flushed from the program.


What is the difference between readFile and createReadStream functions?
The readFile function reads the entire content of the file asynchronously and stores it in the memory before passing it to the user.

createReadStream uses a readable stream that would read the file chunk by chunk without storing the entirety of it into the memory.

createReadStream optimizes the file reading operation compared to readFile by using less memory and making it faster. If the file is of considerable size, the user doesn’t have to wait a long time until its entire content is available, because small chunks are sent to the user as they are read.


How do you handle uncaught exceptions in Node.js?
We can catch uncaught exceptions thrown in the application at its process level. We attach a listener to the process global object to catch such events.


Can Node take full advantage of a multi-processor system?
Node applications are always single-threaded. So, naturally, the application uses only a single processor even when running on multi-processor systems.

But one of Node’s core modules, Cluster, provides support for Node applications to take advantage of multiple cores. It allows us to create multiple worker processes that can run on several cores in parallel, and share a single port to listen to events.

Here, each process uses IPC to communicate with the main thread and pass the server handle to others as needed. The main process can either listen to the port itself and pass every new connection to child processes in a round robin order, or assign the port to child processes so the child processes listen to requests.

What is the reactor design pattern used in Node.js?
The reactor pattern is used for maintaining non-blocking I/O operations in Node.js. It attaches a callback function (a handler) to each I/O operation. The handler is then submitted to a demultiplexer at the time of request creation.

Demultiplexer collects every I/O request made in the application and queues them as events in a queue. This is what we call the event queue. After queuing the event, the demultiplexer returns the control of the application thread.

Meanwhile, the event loop iterates over each event in the event queue, and invokes the attached callback to handle the event response.

This is the reactor pattern used by Node.js.

What are the benefits of a single-threaded web backend to a multi-threaded one?
Put another way: though Node is single-threaded, most of the programming languages used for backend development provides multiple threads to handle application operations. In what way is having only a single thread is beneficial to backend development?

It’s easier for developers to implement applications. Our applications have no risk of running into unexpected race conditions suddenly while in production.
Single-threaded applications are easily scalable.
They can serve a large number of user requests received at a moment without much delay. In comparison, a multi-threaded backend has to wait for a thread from the thread pool to be free to serve the user request when traffic is high. With Node’s non-blocking nature, there’s no risk of a user request hanging on to the single thread for too long (this is true only when the operations are not CPU-intensive).
What is REPL in Node?
REPL stands for Read-Eval-Print-Loop. It is a virtual environment where you can run a programming language easily. Node comes with a built-in REPL to run JavaScript code. It is similar to the consoles we use in browsers to run JavaScript code.

To start the Node REPL, you just have to run the command, node, on the command-line. Then, once you write a line of JavaScript code, you can subsequently see its output.

What is the difference between process.nextTick and setImmediate functions?
The callback passed to the setImmediate function is executed in the next iteration of the event loop over the event queue.

On the other hand, the callback passed to the process.nextTick is executed before the next iteration of the event loop, and after the operation currently running in the program is finished. At the application start, its callback is called before the event loop starts iterating over the event queue.

Therefore, the process.nextTick callback is always called before the setImmediate callback.


What are stubs?
Stubs are used when testing applications. They simulate the behavior of a given component or a module so that you can focus on just the part of the code you want to test. By using stubs in place of components irrelevant to the test, you won’t have to worry about external components impacting the results.

For example, if the component you are testing has a file reading operation before the part you expect to test, you can use a stub to simulate that behavior and return mock content without actually reading the file.

In Node, we use libraries like Sinon for this purpose.

Why is it a good practice to separate ‘app’ and ‘server’ in Express?
By separating app and server in Express, we can separate the API implementation from the network-related configuration. This allows us to carry out API tests without performing network calls. This also guarantees faster test execution and better code coverage metrics.

To achieve this separation, you should declare API and server in separate files. Here we use two files: app.js and server.js.


What are yarn and npm? Why would you want to use yarn over npm?
npm is the default package manager distributed with Node.js. It has a large library of public and private packages stored in a database called ’emp registry’ that users can access via npm’s command-line client. With the help of npm, users can easily manage dependencies used in a project.

yarn is also a package manager that was released as an answer to some of npm’s shortcomings. However, yarn relies on the npm registry to provide users access to packages. Since yarn’s underlying structure is based on npm itself, your project structure and workflow doesn’t have to go through major changes if you are migrating to yarn from npm.

Like I mentioned before, yarn provides better functionality over npm in some cases. Unlike npm, it caches every package you download, so you don’t have to redownload it whenever needed.

It also provides better security by verifying the integrity of packages using checksums. It guarantees a package that worked on a certain system will work exactly the same way in any other system.

