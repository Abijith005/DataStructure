class MinHeap {
    constructor(array) {
      this.heap = array;
    }
  
    buildHeap(array) {
      this.heap = array;
      for (let i = this.parent(this.heap.length - 1); i >=0; i--) {
        this.shiftDown(i);
      }
    }
  
    parent(i) {
      return Math.floor((i - 1) / 2);
    }
  
    leftChild(i) {
      return i * 2 + 1;
    }
  
    rightChild(i) {
      return i * 2 + 2;
    }
  
    shiftDown(currentIndx) {
      const endIndx = this.heap.length - 1;
      let leftIndx = this.leftChild(currentIndx);
      let shiftToIndx;
      while (leftIndx <= endIndx) {
        const rightIndx = this.rightChild(currentIndx);
        if (
          rightIndx <= endIndx &&
          this.heap[rightIndx] < this.heap[leftIndx]
        ) {
          shiftToIndx = rightIndx;
        } else {
          shiftToIndx = leftIndx;
        }
  
        if (this.heap[currentIndx] > this.heap[shiftToIndx]) {
          [this.heap[currentIndx], this.heap[shiftToIndx]] = [
            this.heap[shiftToIndx],
            this.heap[currentIndx],
          ];
          currentIndx = shiftToIndx;
          leftIndx = this.leftChild(currentIndx);
        } else {
          return;
        }
      }
    }
  
    display() {
      console.log(this.heap);
    }
  }
  
  const array = [5, 7, 9, 7, 3, 6, 10,22,46,0,2];
  const list = new MinHeap(array);
  list.buildHeap(array)
  list.display();
