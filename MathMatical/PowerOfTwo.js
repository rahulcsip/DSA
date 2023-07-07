// n === 2 Power x 


function isPowerOfTwo(n){
if(n<1){
    return false
}

while(n>1){

if(n%2 !== 0){
    return false
}
n = n/2


}

return true
}

console.log(isPowerOfTwo(513))


// Big-O(log(n))


function isPowerWithBitwise(n){

if(n<1){
    return false
}

return (( n & (n-1)) === 0 )


}

console.log(isPowerWithBitwise(6))