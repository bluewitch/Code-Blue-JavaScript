/** recursive.js
~dwulf

A simple recursive function 
Most computer programming languages support 
recursion by allowing a function to call itself 
within the program text. 

Some functional programming 
languages do not define any looping constructs but 
rely solely on recursion to repeatedly call code.
**/



function factorial(n) 
{
    if (n === 0) 
	{
        return 1;
    }
    return n * factorial(n - 1);
}
