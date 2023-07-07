// const fib=  [0,1,1,2,3,5,8,13,21]
// fib[0] = 0
// fib[1] = 1
// fib[2]= fib[0]+ fib[1] 



function fibonacciSequence(n){
const fib= [0,1]
for(let i = 2;i<n;i++){

    fib[i]= fib[i-1]+fib[i-2]

}


return fib
}

console.log(fibonacciSequence(9))

// Big - O (n) ---> because of single loop 

