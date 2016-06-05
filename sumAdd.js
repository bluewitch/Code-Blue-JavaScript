/*JavaScript sum and average*/

var i;
var elmt = new Array();

elmt[0] = "0";
elmt[1] = "1";
elmt[2] = "2";
elmt[3] = "3";
elmt[4] = "4";
elmt[5] = "7";
elmt[6] = "8";
elmt[7] = "9";
elmt[8] = "10";
elmt[9] = "11";

// problem here
for (i = 9; i < 10; i++)
{
    document.write("The sum of all the elements is: " + /* problem here */ + " The average of all the elements is: " + /* problem here */ + "<br/>");
}  


// How to find the sum of an array of numbers
// ECMAScript 2015 (aka ECMAScript 6)
var sum = [1, 2, 3].reduce((a, b) => a + b, 0);
console.log(sum); // 6
