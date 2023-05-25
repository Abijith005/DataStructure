
class mergeSort{
    constructor(){

    }
sort(array){
    if (array.length<=1) {
        return array;
    }
    let middle=array.length/2;
    let firstHalf=array.slice(0,middle);
    let secondHalf=array.slice(middle,array.length)
   return this.merge(this.sort(firstHalf),this.sort(secondHalf))
}

merge(firstHalf,secondHalf){
let newArray=[];
let i=0,j=0;
while (i<firstHalf.length&&j<secondHalf.length) {
    
    if (firstHalf[i]<=secondHalf[j]) {
        newArray[newArray.length]=firstHalf[i++];   
    }
    else{
        newArray[newArray.length]=secondHalf[j++]
    }
}
while (i<firstHalf.length) {
 newArray[newArray.length]=firstHalf[i++]   
}
while (j<secondHalf.length) {
    newArray[newArray.length]=secondHalf[j++]
}

return newArray;
}




}

const list=new mergeSort();
let array=[4,6,7,2,3,1,8,5,6,7,888,547,2365,66]
console.log(list.sort(array));
