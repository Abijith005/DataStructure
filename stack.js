class Node{
    constructor(data){
        this.data=data;
        this.next=null

    }
}

class stack{
    constructor(){
        this.top=null;
    }

    push(data){
        let newNode=new Node(data)
    if (this.top==null) {
        this.top=newNode;
    }
    else{
        newNode.next=this.top
        this.top=newNode;
    }
    }

    pop(){
let current=this.top
this.top=this.top.next
current.next=null        
    }

    display(){
        let current=this.top
        while (current!=null) {
            console.log(current.data);
            current=current.next;
        }
    }
}

const list=new stack()
list.push(2)
list.push(5)
list.push(7)
list.push(4)
list.display()
list.pop()
console.log(" ");
list.display()