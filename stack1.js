class Node{
constructor(data){
    this.data=data;
    this.next=null;
    this.top=null;
}
push(data){
    let newNode=new Node(data)
if (this.top==null) {
    this.top=newNode
}
else{
    let current=this.top
    this.top=newNode;
    newNode.next=current;
}

}

display(){
    let current=this.top
    while (current!=null) {
        console.log(current.data);
        current=current.next
    }
}

pop(){
    let current=this.top
this.top=this.top.next;
current.next=null

}
}

const list= new Node()

list.push(6)
list.push(2)
list.push(4)
list.push(9)
list.push(5)
list.display();
list.pop()
console.log("pop");
list.display()
