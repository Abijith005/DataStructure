// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }
  
//   class Ll1 {
//     constructor() {
//       this.head = null;
//       this.tail = null;
//     }
  
//     addNode(data) {
//       let newNode = new Node(data);
//       if (this.head === null) {
//         this.head = newNode;
//       } else {
//         this.tail.next = newNode;
//       }
//       this.tail = newNode;
//     }
  
//     display() {
//       let current = this.head;
//       if (this.head === null) {
//         console.log("Linked list is empty");
//         return;
//       }
//       while (current !== null) {
//         console.log(current.data);
//         current = current.next;
//       }
//     }
  
//     deleteOne(data) {
//       let current = this.head;
//       let prev = null;
  
//       if (current.data === data) {
//         this.head = current.next;
//         return;
//       }
//       while (current !== null && current.data !== data) {
//         prev = current;
//         current = current.next;
//       }
  
//       if (current.data === data) {
//         if (current === this.tail) {
//           this.tail = prev;
//           this.tail.next = null;
//         } else {
//           prev.next = current.next;
//         }
//       }
//     }
//   }
  
//   let list = new Ll1();
//   list.addNode(5);
//   list.addNode(10);
//   list.addNode(56);
//   list.addNode(4);
//   list.display();
//   list.deleteOne(4);
//   console.log("after deletion");
//   list.display();
  
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }

}
    class Ll1{
        constructor(){
            this. head=null;
            this.tail=null
        }

         addNode(data) {
let newNode=new Node(data)
if (this.head==null) {
    this.head=newNode;
    
}
else{
this.tail.next=newNode
this.tail=newNode
}
this.tail=newNode

        }

        display(){
            let current=this.head
            if (this.head==null) {
                console.log("empty linked list");
                return;
            }
            while (current!=null) {
             console.log(current.data);   
             current=current.next;
            }
            return;
        
        }


        deleteNode(data){
          let  current=this.head;
           let previous=null;
            if (current.data==data) {
                this.head=this.head.next;
                return;
            }

            while (current!=null&& current.data!=data) {
                previous=current
                current=current.next
                
            }
            if (current!=null&& current.data==data) {
                if (current==this.tail) {
                    this.tail=previous;
                    this.tail.next=null;
                }
                else{
                    previous.next=current.next
                }
            }
        }

    }
    let list=new Ll1();
    list.addNode(15);
    list.addNode(25);
    list.addNode(75);
    list.addNode(45);
    list.addNode(17);
    list.addNode(89);
    list.addNode(36);
    list.addNode(23);
    list.display()
    list.deleteNode(24)
    console.log("deleted");
    list.display()
    
    
