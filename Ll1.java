public class Ll1 {

    class Node{
        int data;
        Node next;

        Node(int data){
            this.data=data;
        }

    }
public Node head=null;
public Node tail=null;

    public void addNode(int data) {
Node newNode=new Node(data);
if (head==null) {
        head=newNode;
    
}
else{
    tail.next=newNode;
}
tail=newNode;

        
    }


    public void display() {
        Node current=head;
        if(head==null){
            System.out.println("Linked list is empty");
            return;
        }
while (current!=null) {

    System.out.println(current.data);
    current=current.next;
    
}
        
    }

    public void deleteOne(int data) {
        Node current=head;
        Node prev=null;

        if (current.data==data) {
            head=current.next;
            return;
        }
        while (current!=null&&current.data!=data) {
            prev=current;
            current=current.next;
        }

        if (current.data==data) {
            if(current==tail){
                tail=prev;
                tail.next=null;
            }
            else{
                prev.next=current.next;
            }
        }

        
    }


    public static void main(String[] args) {
        Ll1 list=new Ll1();

        list.addNode(5);
        list.addNode(10);
        list.addNode(56);
        list.addNode(4);
        list.display();
        list.deleteOne(4);
        System.out.println("after deletion");
        list.display();

    }
    
}
