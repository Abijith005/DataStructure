public class doublyLinkedList {
     
    class Node{
        int data;
        Node next;
        Node prev;
        

        Node(int data){
            this.data=data;
        }
    }

    public Node head=null;
    public Node tail=null;

    public void addNode(int data){
        Node newNode=new Node(data);
        
if (head==null) {
    head=newNode;
} else {
    tail.next=newNode;
    newNode.prev=tail;
}
tail=newNode;

    }
    public void display(){
        Node temp=head;
        while (temp!=null) {
            System.out.println(temp.data);
            temp=temp.next;
        }
        
    }

    public void deleteOne(int data) {
        Node temp=head;
        while (temp!=null& temp.data!=data) {
            temp=temp.next;
        }
        if (temp==head) {
            head=temp.next;
        }
        else if(temp==tail){
tail=tail.prev;
tail.next=null;
        }
        else{
          Node previous=temp.prev;
          previous.prev.next=temp.next;
        }
    }

    public void insertAfter(int insertInto,int data) {
        Node temp=head;
        Node newNode=new Node(data);
        while (temp!=null&&temp.data!=insertInto) {
            temp=temp.next;
        }
        if (temp==tail) {
        tail.next=newNode;
        newNode.prev=tail;
        tail=newNode;
        return;
        }
        newNode.next=temp.next;
        newNode.prev=temp;
temp.next=newNode;
    }

    public void insertBefore(int InsertInto,int data) {
        Node temp=head,newNode=new Node(data);
        while (temp!=null&&temp.data!=InsertInto) {
            temp=temp.next;
        }
        if (temp==head) {
            newNode.next=head;
            head.prev=newNode;
            head=newNode;
            return;
        }
        newNode.next=temp;
        newNode.prev=temp.prev;
        temp.prev.next=newNode;
    }
    public static void main(String[] args) {
        doublyLinkedList list=new doublyLinkedList();
        list.addNode(20);
        list.addNode(30);
        list.addNode(80);
        list.addNode(77);
        list.display();
        System.out.println("brearlklks");
        list.insertBefore(77, 46);
        list.display();
    }

}
