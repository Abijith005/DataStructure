

public class singlyLinkedList {

    class Node{
int data;
Node next;
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
         }
         else{
tail.next=newNode;
         }
tail=newNode;

    }

    public void display(){
        Node temp=head;
        if (head==null) {
            System.out.println("empty linked list");
        }
        else{
            while(temp!=null){
                System.out.print(temp.data+"  ");
                temp=temp.next;
            }
        }
    }

    public void deleteOne(int data){
        Node temp=head,prev=null;
        if (temp!=null&&temp.data==data) {
            head=temp.next;
            return;
        }
while(temp!=null&&temp.data!=data){
    prev=temp;
    temp=temp.next;
}
if (temp==tail) {
    tail=prev;
    tail.next=null;
    return;
}
prev.next=temp.next;  

    }
    public void insertOne(int insertInto,int data){
Node temp=head;
Node newNode=new Node(data);
while(temp!=null&&temp.data!=insertInto){
temp=temp.next;
}
 if(temp==tail) {
    tail.next=newNode;
    tail=newNode;
}
else{
newNode.next=temp.next;
temp.next=newNode;
}


    }

    public void insertBefore(int insertInto,int data) {
        Node temp=head,prev=null,newNode=new Node(data);
        while (temp!=null&&temp.data!=insertInto) {
            prev=temp;
            temp=temp.next;
        }
        if (temp==head) {
            newNode.next=head;
            head=newNode;
        }
        else{
            prev.next=newNode;
            newNode.next=temp;


        }

    }

    public static void main(String[] args) {
        singlyLinkedList list=new singlyLinkedList();
        list.display();
        list.addNode(10);
        list.addNode(20);
        list.addNode(50);
        list.addNode(72);
        list.addNode(46);
        list.display();
        // list.deleteOne(46);
        System.out.println("Deleted One");
        list.display();
        list.insertOne(72, 77);
        System.out.println("dfghjk");
        list.insertBefore(46, 5);
        list.display();
    }


    
}