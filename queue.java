
public class queue {
   class Node{
    int data;
    Node next;
     
    Node(int data){
    this.data=data;
    }
   }

   public Node front=null;
   public Node rear=null;
   public void enqueue(int data) {
    Node newNode=new Node(data);
    if (front==null) {
        front=rear=newNode;
    }
    else{
        rear.next=newNode;
        rear=newNode;
    }
   }
 public void dequeue() {
    front=front.next;
 }
   public void display(){
    Node current=front;
    while(current!=null){
        System.out.println(current.data);
        current=current.next;
    }
   }

   public static void main(String[] args) {
    queue list=new queue();
    list.enqueue(10);
    list.enqueue(25);
    list.enqueue(30);
    list.enqueue(45);
    list.enqueue(50);
    list.display();
    list.dequeue();
    System.out.println("dequeue");
    list.display();
   }
}
