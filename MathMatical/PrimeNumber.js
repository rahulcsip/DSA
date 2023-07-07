// Prime Number is the num which is dvisible by one 1 and itself 



function isPrime(n){

//     if(n<2){
//         return false
//     }

//     for(let i=2;i<n;i++){
// if(n%i==0){
//     return false
// }else{
//     return true
// }

//     }



for(let i = 2 ;i<= Math.sqrt(n);i++){

    if(n%i === 0){
        return false
    }else{
        return true
    }
}

// Big - O(squrt(n))
}

console.log(isPrime(27))