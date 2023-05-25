import java.util.HashSet;
import java.util.Set;


public class array1 {
// method 2
// time complexity O(n^2) and
// space complexity O(1) 
    public static int[] twoNumberSum(int[] array,int target){
        for (int i=0;i<array.length-1;i++){
            for(int j=i+1;i<array.length;j++){
                if(array[i]+array[j]==target){
                    return new int[]{array[i],array[j]};
                }
            }
        }
        
                return new int[0];
    }
 // method 2
// time complexity O(n) and
// space complexity O(n) 
    public static int[] alternativeMethod(int[] array,int target){
    Set<Integer> nums=new HashSet<>();
        for(int i=0;i<array.length-1;i++){
            int value=target-array[i];
            if (nums.contains(value)) {
                return new int[]{value,array[i]};
            }
            else{
                nums.add(array[i]);
            }
        }
        return new int[0];

    }

public static void main(String[] args){
    int[] array={6,5,4,9,0,2};
    int target=10;
    int[] result=twoNumberSum(array,target);
    for(int i=0;i<result.length;i++){
        System.out.println(result[i]);
    }
    int[] altResult=alternativeMethod(array, target);
        for (int i = 0; i < altResult.length; i++) {
            System.out.println(altResult[i]);
    }

}
}