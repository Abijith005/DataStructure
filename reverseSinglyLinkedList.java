public class reverseSinglyLinkedList {

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
        Node temp=head;
        if (head==null) {
            System.out.println("emptyLinked List");
            return;
        }
        while (temp!=null) {
            System.out.println(temp.data);
            temp=temp.next;
        }
    }

    public void reverse() {
        Node current=head;
        Node prev=null,nextNode=null;

        while (current!=null) {
            nextNode=current.next;
            current.next=prev;
            prev=current;
            current=nextNode;
        }

        head=prev;

    }

    public static void main(String[] args) {
        reverseSinglyLinkedList list=new reverseSinglyLinkedList();
        list.addNode(10);
        list.addNode(20);
        list.addNode(50);
        list.addNode(30);
        list.display();
        list.reverse();
        System.out.println();
        list.display();
    }
}
