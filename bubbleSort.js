class bblsrt{
    sort(array){
        for (let i = 0; i < array.length-1; i++) {
            let j=0;
            while (j<array.length-1-i) {
                if (array[j]>array[j+1]) {
                    [array[j],array[j+1]]=[array[j+1],array[j]]
                }
                j++
            }
        }
        console.log(array);
    }

 
}

const array=[5,8,7,6,4,3,9,0]
const list=new bblsrt()
list.sort(array)