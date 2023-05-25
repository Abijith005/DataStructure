public class stringEncription {
    
    public static String encode(String str,int keyValue){
        keyValue=keyValue%26;
        char [] newString=new char[str.length()];
        for (int i = 0; i < str.length(); i++) {
            int letterPosition=str.charAt(i)+keyValue;
            if (letterPosition>=123) {
                letterPosition=letterPosition%96;
                newString[i]=(char)(letterPosition+96);
            }
            else{
                newString[i]=(char)letterPosition;
            }
            
        }
    
        return new String(newString);
    }

    public static void display(String newString){
        System.out.println(newString);
    }

    public static void main(String[] args) {
        String str="hai";
        String newString=encode(str, 2);
        display(newString);
    }
}
