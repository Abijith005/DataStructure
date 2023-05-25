class Node{
constructor(data){
    this.data=this.data
    this.left=null
    this.right=null
}


}

 class Tree{
    constructor(){
        this.root=null
    }

     buitTree(data){
        let newNode=new Node(data)
         if(!this.root){
this.root=newNode
return;
         }
          let current=this.root
         while (true) {
        
            if (data>current.data) {
                if (!current.right) {
                    current.right=newNode
                    return;
                }
                current=current.right
            }
            else{
                if (!current.) {
                    
                }
            }
         }

     }
 }