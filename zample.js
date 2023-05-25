// class maxHeap{

// buildHeap(array){
//     console.log(array);
//     for (let i =this.parent(array.length-1); i >=0; i--) {
//     this.shiftDown(i,array);    
//     }

// }

// parent(i){
//     return Math.floor((i-1)/2);
// }

// leftChild(i){
//     return (i*2)+1
// }

// rightChld(i){
//     return (i*2)+2
// }

// shiftDown(currentIndx,array){
//     let endIndx=array.length-1;
//     let leftIndx=this.leftChild(currentIndx);
//     let shiftToIndx
//     while (leftIndx<=endIndx) {
//         let rightIndx=this.rightChld(currentIndx)
        
//         if (rightIndx<=endIndx&&array[rightIndx]>array[leftIndx]) {
//             shiftToIndx=rightIndx
//         }
//         else{
//             shiftToIndx=leftIndx
//         }

//         if (array[shiftToIndx]>array[currentIndx]) {
//             [array[shiftToIndx],array[currentIndx]]=[array[currentIndx],array[shiftToIndx]]        }
//             currentIndx=shiftToIndx;
//             leftIndx=this.leftChild(currentIndx)
//     }
// }


// }
// let array=[1,8,4,6,4,7,5,6,6,2]
// let list=new maxHeap()
// list.buildHeap(array)
// console.log(array);
// console.log("********");


// function heapSort(arr) {
//     // Build max heap
//     for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
//       heapify(arr, i, arr.length);
//     }
  
//     // Heap sort
//     for (let i = arr.length - 1; i > 0; i--) {
//       // Move current root to end
//       let temp = arr[0];
//       arr[0] = arr[i];
//       arr[i] = temp;
  
//       // Heapify reduced heap
//       heapify(arr, 0, i);
//     }
//     return arr;
//   }
  
//   function heapify(arr, i, n) {
//     let largest = i; // Initialize largest as root
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;
  
//     // If left child is larger than root
//     if (left < n && arr[left] > arr[largest]) {
//       largest = left;
//     }
  
//     // If right child is larger than largest so far
//     if (right < n && arr[right] > arr[largest]) {
//       largest = right;
//     }
  
//     // If largest is not root
//     if (largest != i) {
//       // Swap
//       let temp = arr[i];
//       arr[i] = arr[largest];
//       arr[largest] = temp;
  
//       // Recursively heapify the affected sub-tree
//       heapify(arr, largest, n);
//     }
//   }

//   let arr = [64, 25, 12, 22, 11];
// let sortedArr = heapSort(arr);
// console.log(sortedArr); 


function f(n){
  if (n<=1) {
    return
  }

  f(n-1)
  console.log(n);
f(n-1)

}

f(5)
  



  