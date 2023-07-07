function linearSearch(arr, target){
if(arr.length === 0 ){
    return -1
}

for(let i = 0;i<=arr.length-1;i++){
    if(target == arr[i]){
        return i
    }
}
return -1
    
}


console.log(linearSearch([2,3,6,7,0,8,1,18,10],2)) //return index -0
console.log(linearSearch([2,3,6,7,0,8,1,18,10],18)) //return index - 7
console.log(linearSearch([2,3,6,7,0,8,1,18,10],50)) //return index - -1
console.log(linearSearch([2,3,6,7,0,8,1,18,10],6)) //return index - 2


// Big- O(n)