//Only applicable for sorted array element


function recursiveBinarySearch(arr, target){

    return search(arr, target , 0 , arr.length-1)
    }
    
    function search(arr , target , leftIndex,rightIndex ){
if(leftIndex > rightIndex){
    
  return  -1
}

        let middleIndex = Math.floor((leftIndex + rightIndex)/2)
    
if(target === arr[middleIndex]){
    return middleIndex
}


    if(target <  arr[middleIndex]){
    
        return search(arr, target , leftIndex, middleIndex-1)
    }else{
        return search(arr, target, middleIndex+1,rightIndex)
    }
    
    
    }    
    
    console.log(recursiveBinarySearch([1,2,3,6,7,8,10,18],1)) //return index -0
    console.log(recursiveBinarySearch([1,2,3,6,7,8,10,18],18)) //return index - 7
    console.log(recursiveBinarySearch([1,2,3,6,7,8,10,18],50)) //return index - -1
    console.log(recursiveBinarySearch([1,2,3,6,7,8,10,18],7)) //return index - 4
    console.log(recursiveBinarySearch([],7)) //return index - 1
    
    
    // Big- O(log(n))