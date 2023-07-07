//Only applicable for sorted array element


function binarySearch(arr, target){

if(arr.length === 0){
    return -1
}

let leftIndex = 0
let rightIndex = arr.length-1




while(leftIndex <= rightIndex){
    let middleIndex = Math.floor((leftIndex+rightIndex)/2) 
    if(target === arr[middleIndex]){
        return middleIndex
    }

    if(target < arr[middleIndex]){
rightIndex = middleIndex-1

    }else{
leftIndex = middleIndex+1

    }

    








}


return -1



}



console.log(binarySearch([1,2,3,6,7,8,10,18],1)) //return index -0
console.log(binarySearch([1,2,3,6,7,8,10,18],18)) //return index - 7
console.log(binarySearch([1,2,3,6,7,8,10,18],50)) //return index - -1
console.log(binarySearch([1,2,3,6,7,8,10,18],7)) //return index - 4


// Big- O(log(n))