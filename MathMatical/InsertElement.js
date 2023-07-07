function insertElementAtBegning(k,arr){

    for(let i = arr.length-1; i>=0;i--){

 let temp =    arr[i]
arr[i] = k
arr[i+1] = temp
console.log(temp)
    }



return arr
}
const arr = [1,2,3,4,5]
console.log(insertElementAtBegning(6,arr)) 

// function insertElementAtBeginning(k, arr) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//       let temp = arr[i];
//       arr[i] = k;
//       arr[i + 1] = temp;
//     }
  
//     return arr;
//   }
  
//   const arr = [1, 2, 3, 4, 5];
//   console.log(insertElementAtBeginning(6, arr));
console.log("Hello")


function insterAtLast(k,arr){
arr[arr.length] = k

    return arr
}

console.log(insterAtLast(6,[1,2,3,4,5]))