// validateemail.js
// ~dwulf

// This is a simple email validation

function validateEmail()
{
// Create the Variable Objects
var x=document.forms["myForm"]["email"].value;
var atpos=x.indexOf("@");
var dotpos=x.lastIndexOf(".");

// the if() function compares the variables "x", "atpos", "dotpos"
//  using < less than, > greater than, || or operators
// Evaluates is atpos is less than 1 place holder before is there any text before @
// Evaluates if dotpos is less than atpos + 2 is there any text between @ and .
// Evaluates if dotpos has at least 2 chartacters after the .

if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
  {
  alert("Not a valid e-mail address");
  return false;
  }
}
