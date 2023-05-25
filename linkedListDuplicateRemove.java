public class linkedListDuplicateRemove {
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
                System.out.println(temp.data);
                temp=temp.next;
            }
        }
    }

    public void remove() {
        Node current=head;
        while (current!=null&&current.next!=null) {
            Node nextNode=current.next;
            if (current.data==nextNode.data)
             {
                if (nextNode.next==null) {
                    tail=current;
                    tail.next=null;
                    return;
                }
                current.next=nextNode.next;
            }
            else{
current=current.next;
            }
            
        }
    
        
    }
    public static void main(String[] args) {
        linkedListDuplicateRemove list=new linkedListDuplicateRemove();
        list.addNode(10);
        list.addNode(10);
        list.addNode(15);
        list.addNode(18);
        list.addNode(18);
        list.addNode(18);
        list.addNode(18);
        list.addNode(20);
        list.addNode(23);
        list.addNode(25);
        list.addNode(25);
        // list.remove();
        System.out.println();
        list.display();

    }
}
