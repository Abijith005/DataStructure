
public class arrayToLl {
    class Node{
        int data;
        Node next;

        Node(int data){
            this.data=data;
        }
    }
public Node head=null;
    public void convert(int[] array) {
        Node current=null;
        if (array==null) {
            return;
        }
         for (int i = 0; i < array.length; i++) {
            if (i==0) {
                head=new Node(array[i]);
               current=head;
            }
            else{
                current.next=new Node(array[i]);
                current=current.next;
            }
         }
         return;
    }

    public void display() {
        Node current=head;
        while (current!=null) {
            System.out.println(current.data);
            current=current.next;
        }
    }

public static void main(String[] args) {
    arrayToLl list=new arrayToLl();
    int[] array={2,5,8,66,45,3};
    list.convert(array);
    list.display();
}
    
}
