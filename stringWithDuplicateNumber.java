public class stringWithDuplicateNumber {
        
//     public static String change(String str) {
//         String newString="";
// int count=1;
//         for (int i = 0; i < str.length()-1; i++) {
//             if (str.charAt(i)==str.charAt(i+1)) {
//                 count++;
//             }
//             else{
//                 newString=newString+Integer.toString(count)+str.charAt(i);
//                 count=1;
//             }
            
//         }
//         newString=newString+Integer.toString(count)+str.charAt(str.length()-1);
//         return newString;
//     }

public static String change(String str){
    char[] newArray=new char[str.length()];
    int count=1;
    int l=0;
    for (int i = 0; i < str.length()-1; i++) {
        if (str.charAt(i)==str.charAt(i+1)) {
            count++;
        }
        else{
newArray[l]=Integer.toString(count).charAt(0);
l++;
newArray[l]=str.charAt(i);
l++;
            count=1;
        }
    }
    newArray[l]=Integer.toString(count).charAt(0);
    newArray[l+1]=str.charAt(str.length()-1);

    String newString=new String(newArray);
    return newString;
}

    
	public static void main(String[] args) {
	    String s = "AAAABBCCCD";
		System.out.println(change(s));
        // change(s);

	}
}

