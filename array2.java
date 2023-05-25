
public class array2 {
    // method 1
// time complexity O(n^2) and
// space complexity O(1) 
    public static int[] getOrederedArray(int[] array,int target){
        int count=array.length-1;
        for (int i = 0; i <count; i++) {
                while (count>i && array[i]==target) {
                    if (array[count]==target) {
                        count--;       
                    }
                    else
                    {
                    int temp=array[i];
                    array[i]=array[count];
                    array[count]=temp;
                    break;
                    }
                }            
        }
        return array;
    }

// method 2
   public static int[] altMethod(int[] array,int target) {
        int length=array.length;
        int j=1;
        int k=0;
        int[] resultArray=new int[length];
for(int i=0;i<length;i++){
    if (array[i]==target) {
        resultArray[length-j]=array[i];
        j++;
    }
    else{
        resultArray[k]=array[i];
        k++;
    }
}        
return resultArray;
    }

    public static void main(String[] args) {

        int[] array={4,6,8,7,9,4,6,6,6,8,6,6,6};
        int target=8;
        int[] result=getOrederedArray(array, target);
        int[]result1=altMethod(array, target);
        System.out.println("result1");
        for (int i = 0; i < result1.length; i++) {
            System.out.println(result1[i]);
        }
        System.out.println("result2");
        for (int i = 0; i < result.length; i++) {
            System.out.println(result[i]);
        }
    }
}
