class quickSort{

//     constructor(){

//     }

//     recursionHealper(lb,ub,array){
//         let pivot=array[lb]
//         let start=lb;
//         let end=ub;
//         while (start<end) {
//             while (array[start]<=pivot) {
// start++;
                
//             }
//             while (array[end]>pivot) {
//                 end--;
//             }

//             if (start<end) {
//                 [array[start],array[end]]=[array[end],array[start]]
//             }
            
//         }
//         [array[lb],array[end]]=[array[end],array[lb]]

//         return end;

//     }


//     sort(array,lb,ub){
//         if (lb<ub) {
//            let end=this.recursionHealper(lb,ub,array)
//            this.sort(array,lb,end-1);
//            this.sort(array,end+1,ub)
//         }
//     }


    //  another method
    sortHelper(array,startIndx,endIndx){
        if (startIndx>=endIndx) {
            return;
        }
        let leftIndx=startIndx+1;
        let rightIndx=endIndx;
        let pivot=startIndx
        while (leftIndx<=rightIndx) {
                if (array[pivot]>array[rightIndx]&&array[pivot]<array[leftIndx]) {
                    [array[leftIndx],array[rightIndx]]=[array[rightIndx],array[leftIndx]];   
                    rightIndx--;
                    leftIndx++;
                }
            if (array[pivot]>=array[leftIndx]) {
                leftIndx++;
            }
            if (array[pivot]<=array[rightIndx]) {
                rightIndx--;
            }
            
        }
    [array[startIndx],array[rightIndx]]=[array[rightIndx],array[startIndx]]
    this.sortHelper(array,startIndx,rightIndx-1)
    this.sortHelper(array,rightIndx+1,endIndx)

}
    quickSort(array){
        let startIndx=0;
        let endIndx=array.length-1;
        this.sortHelper(array,startIndx,endIndx)
    }
    
    
    
    
}
const quick=new quickSort();
let array=[5,7,89,1,2,4,3,6,4,2,9,2,2]
let lb=0;
let ub=array.length-1;
// quick.sort(array,lb,ub)
quick.quickSort(array)
console.log(array);
