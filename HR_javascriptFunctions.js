# Bare bones no frill JavaScript factorial
function factorial(n){
    if(n === 0){
        return 1;
    } else{
        return n * factorial(n-1);
    }
}
