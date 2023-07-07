// Traverse 

let data = [34,21,45,6,4,23,5];

for(let i = 0 ; i< data.length ; i++){
console.log(` ${data[i]} at index ${i}` );

}

for(let i = data.length-1;i>=0;i--){
console.log(` ${data[i]} at index ${i}`)

}


// Element Insertion 


let data1 = [1,2,3,4,5,6];
let newElement  = 100;
let position = 0;
let length = data1.length -1
console.log(data1.length)
for(let i= length ;i >=0;i--){
if(i>=position){

    data1[i+1]= data1[i]
if(i===position){
    data1[i]= newElement
}

}

}
console.log(data1)
console.log(data1.length)