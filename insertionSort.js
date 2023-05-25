class insertionSort{
    sort(array){
        for (let i = 1; i < array.length; i++) {
            let j=i;
            let temp=array[i];
            while (j>0&&temp<array[j-1]) {
                array[j]=array[j-1];
                j--;
            }

            array[j]=temp;
            
        }
        return array;
    }
}

const list=new insertionSort();
let array=[7,4,6,1,7,9,8,5,2,4,3,1]
console.log(list.sort(array));