class merge{
    sort(array){
        if (array.length<=1) {
            return array;
        }
        let middle=array.length/2;
let leftHalf=array.slice(0,middle)
let rightHalf=array.slice(middle,array.length)
        return this.merge(this.sort(leftHalf),this.sort(rightHalf))
    }


    merge(leftHalf,rightHalf){
        let i=0;
        let j=0;
        let newArray=[];
        while (i<leftHalf.length &&j<rightHalf.length) {
            if (leftHalf[i]<=rightHalf[j]) {
                newArray[newArray.length]=leftHalf[i++]
            }
            else{
                newArray[newArray.length]=rightHalf[j++]
            }
        }
        while (i<leftHalf.length) {
            
            newArray[newArray.length]=leftHalf[i++]
        }
        while (j<rightHalf.length) {
            newArray[newArray.length]=rightHalf[j++]
        }

        return newArray;
        

    }
}

const list=new merge();
let array=[2,6,4,8,7,3,2,5,9,6,4,8]
console.log(list.sor(array));