/*
Javascript function to check if a String
has upper and lower case; string enters
the str parameter and returns true or false
*/
function stringCheck(str) {
    return str.match(/[a-z]/) && str.match(/[A-Z]/);
}
