class selectionSort{
    sort(array){
        for (let i = 0; i < array.length-1; i++) {
            let largest=0;
             for (let j = 1; j < array.length-i; j++) {
                if (array[j]>array[largest]) {
                    largest=j;
                }
             }
             [array[array.length-i-1],array[largest]]=[array[largest],array[array.length-i-1]]
        }
    
        return array;
    }
}

const list=new selectionSort()
let array=[4,6,7,2,1,9,7,8,3,6,5]
console.log(list.sort(array));