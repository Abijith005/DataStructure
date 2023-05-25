public class binarySearch {
    
    public int binarySearchIter(int[] array,int target) {

        int startIndex=0;
        int endIndex=array.length-1;
        while (startIndex<=endIndex) {
            int middleIndex=(startIndex+endIndex)/2;
            if (array[middleIndex]==target) {
                return middleIndex;
            }
            else if (target>array[middleIndex]) {
                startIndex=middleIndex+1;
            }
            else {
                endIndex=middleIndex-1;
            }
        }
        return -1;
        
    }


    public int binarySearchRecursion(int[] array,int target){
       int startIndex=0;
       int endIndex=array.length-1;
       return recursionHelper(array, target, startIndex, endIndex);

        
    }

    public int recursionHelper(int[]array,int target,int startIndex, int endIndex){
        int middle=(startIndex+endIndex)/2;
        if (startIndex>endIndex) {
            return -1;
        }
        else if (array[middle]==target) {
            return middle;
        }
        else if (target>array[middle]) {
            startIndex=middle+1;
            return recursionHelper(array, target, startIndex, endIndex);
        }
        else{
            endIndex=middle-1;
            return recursionHelper(array, target, startIndex, endIndex);
        }

    }

    public static void main(String[] args) {
      int[]  array={1,2,3,5,9,10};
        binarySearch list=new binarySearch();
       System.out.println(list.binarySearchIter(array, 10));
       System.out.println("recursion");
       System.out.println(list.binarySearchRecursion(array, 10));
    }


}
