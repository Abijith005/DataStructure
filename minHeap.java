import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class minHeap {
    
minHeap(){

}
List<Integer>heap=new ArrayList<>();
minHeap(List<Integer>array){
    buildHeap(array);
}

public void buildHeap(List<Integer>array) {
    heap=array;
for (int i = parent(heap.size()-1); i>=0; i--) {
    shiftDown(i);
    
}
    
}

public int parent(int i) {
    return (i-1)/2;
}

public int leftChild(int i) {
    return (i*2)+1;
}

public int rightChild(int i) {
    return (i*2)+2;
}
public void shiftDown(int currentIndx) {
    int endIndx=heap.size()-1;
    int leftIndx=leftChild(currentIndx);
    int shiftToIndx;
    while (leftIndx<=endIndx) {
        int rightIndx=rightChild(currentIndx);
        if (rightIndx<=endIndx&&heap.get(rightIndx)<heap.get(leftIndx)) {
            shiftToIndx=rightIndx;
        }
        else{
            shiftToIndx=leftIndx;
        }

        if (heap.get(currentIndx)>heap.get(shiftToIndx)) {
            Collections.swap(heap, shiftToIndx, currentIndx);
            currentIndx=shiftToIndx;
            leftIndx=leftChild(currentIndx);
        }
        else{
return;
        }
    }
    

}

public void display() {
    for (int i = 0; i < heap.size(); i++) {
        System.out.println(heap.get(i));
    }
    
}


public static void main(String[] args) {
    List<Integer>array=new ArrayList<>(Arrays.asList(5,7,9,7,3,6,10));
    minHeap list=new minHeap(array);
    list.buildHeap(array);
    list.display();
}


}
