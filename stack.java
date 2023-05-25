
public class stack {
    class Node{
        int data;
        Node next;

        Node(int data){
            this.data=data;
        }
    }
public Node top=null;
    public void push(int data) {
        Node newNode=new Node(data);
        if (top==null) {
            top=newNode;
        }
        else{
            newNode.next=top;
            top=newNode;
        }
    }

    public void pop() {
        top=top.next;
    }

    public void display() {
        Node current=top;
        if (top==null) {
            System.out.println("stack is empty");
        }
        while(current!=null){
            System.out.println(current.data);
            current=current.next;
        }
    }
    
    public static void main(String[] args) {
        stack list=new stack();
        list.push(10);
        list.push(25);
        list.push(45);
        list.push(89);
        list.display();
        list.pop();
        System.out.println("pop");
        list.display();
    }
}
