class Node{

    constructor(data){

        this.data=data;
        this.next=null
    }

}

class queue{
    constructor(){
this.front=null;
this.rear=null
    }

    queue(data){
        let newNode=new Node(data)
        if (this.front==null) {
this.front=newNode;
        }
        else{
            this.rear.next=newNode
        }
        this.rear=newNode;
    }

    dequeue(){
        let current=this.front;
        this.front=this.front.next;
        current.next=null
    }

    display(){
        let current=this.front;
        while (current!=null) {
        console.log(current.data);
        current=current.next
        }
    }
}

const list=new queue()
list.queue(7)
list.queue(6)
list.queue(9)
list.queue(56)
list.display()
list.dequeue()
console.log();
list.display()