function bubbleSort(arr, order){

    let swapped 

    if(order === "assending"){
        do{
            swapped = false
            for(let i=0;i<arr.length;i++){
                if(arr[i]>arr[i+1]){
                    let temp = arr[i]
                    arr[i] = arr[i+1]
                    arr[i+1] = temp
                    swapped = true
                }
            }
            
        }while(swapped)
        
    }else{
        do{
            swapped = false
            for(let i=0;i<arr.length;i++){
                if(arr[i]<arr[i+1]){
                    let temp = arr[i]
                    arr[i] = arr[i+1]
                    arr[i+1] = temp
                    swapped = true
                }
            }
            
        }while(swapped)
        
    }

return arr

}


console.log(bubbleSort([-3,2,1,6,-5,30],"assending"))
console.log(bubbleSort([-3,2,1,6,-5,30], "dessending"))


// Big- O(n^2)