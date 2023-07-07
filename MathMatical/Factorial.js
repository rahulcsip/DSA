// factorial(5) --> 5*4*3*2*1


function factorialOfANumber(n){
let factorial = 1
// for(let i =n;i>0;i--){
// factorial = i*factorial

// }
for(let i = 2;i<=n;i++){
factorial = factorial*i

}



return factorial

}

console.log(factorialOfANumber(3))


// Big - O ( n)