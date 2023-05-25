class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class Tree {
    constructor() {
      this.root = null;
    }
  
    buildTree(data) {
      let current = this.root;
      let newNode = new Node(data);
      if (!this.root) {
        this.root = newNode;
        return;
      }
      while (true) {
        if (data >current.data) {
          if (!current.right) {
            current.right = newNode;
            break;
          } else {
            current = current.right;
          }
        } else {
          if (!current.left) {
            current.left = newNode;
            break;
          } else {
            current = current.left;
          }
        }
      }
    }
  
    remove(data) {
      let currentNode = this.root;
      let parentNode = null;
      this.removeHelper(data, currentNode, parentNode);
    }
  
    removeHelper(data, currentNode, parentNode) {
      while (currentNode) {
        if (data > currentNode.data) {
          parentNode = currentNode;
          currentNode = currentNode.right;
        } else if (data < currentNode.data) {
          parentNode = currentNode;
          currentNode = currentNode.left;
        } else {
          if (currentNode.right && currentNode.left) {
            currentNode.data = this.getMinimum(currentNode.right);
            this.removeHelper(currentNode.data, currentNode.right, currentNode);
          } else {
            if (!parentNode) {
              if (currentNode.left) {
                this.root = currentNode.left;
              } else {
                this.root = currentNode.right;
              }
            } else {
              if (parentNode.left!=currentNode) {
                if (currentNode.left) {
                  parentNode.right = currentNode.left;
                } else {
                  parentNode.right = currentNode.right;
                }
              } else {
                if (currentNode.left) {
                  parentNode.left = currentNode.right;
                } else {
                  parentNode.left = currentNode.left;
                }
              }
            }
          }
          return;
        }
      }
    }
Bfsearch(){
let node=this.root

if (!node) {
  return
}
let queue=[node]

while (queue.length>0) {
  node=queue.shift()
  console.log(node.data);

  if (node.left) {
    queue.push(node.left)
  }
  if (node.right) {
    queue.push(node.right)
  }
}



}
    
  
    getMinimum(currentNode) {
      if (!currentNode.left) {
        return currentNode.data;
      } else {
        return this.getMinimum(currentNode.left);
      }
    }
    
  
    contains(data) {
      let current = this.root;
      if (!this.root) {
        return false;
      }
      while (current) {
        if (data > current.data) {
          current = current.right;
        } else if (data < current.data) {
          current = current.left;
        } else {
          return true;
        }
      }
      return false;
    }
  
    inOrderDisplay() {
      this.inOrderHelper(this.root);
    }
  
    postOrderDisplay() {
      this.postOrderHelper(this.root);
    }
  
    preOrderDisplay() {
      this.preOrderHelper(this.root);
    }
  
    inOrderHelper(node) {
      if (node) {
        this.inOrderHelper(node.left);
        console.log(node.data);
        this.inOrderHelper(node.right);
      }
    }
  
    preOrderHelper(node) {
      if (node) {
        console.log(node.data);
        this.preOrderHelper(node.left);
        this.preOrderHelper(node.right);
      }
    }
  
    postOrderHelper(node) {
      if (node) {
        this.postOrderHelper(node.left);
        this.postOrderHelper(node.right);
        console.log(node.data);
      }
    }


    isBST() {
    return this.isBSTHelper(this.root, -Infinity, Infinity);
  }

  isBSTHelper(node, minVal, maxVal) {
    if (!node) {
      return true;
    }

    if (node.data <= minVal || node.data >= maxVal) {
      return false;
    }

    return (
      this.isBSTHelper(node.left, minVal, node.data) &&
      this.isBSTHelper(node.right, node.data, maxVal)
    );
  }

 


    

  

    
  }


  function isIdentical(root1,root2){
    return isIdenticalHelper(root1,root2)
      }
    
    function isIdenticalHelper(node1,node2){
    if (!node1&&!node2) {
      return true
    }
    
    if (!node1||!node2) {
      return false
    }
    
    if (node1.data!=node2.data) {
      return false
    }
    else{
      return(
      isIdenticalHelper(node1.left,node2.left)&&
      isIdenticalHelper(node1.right,node2.right))
    }
      }
  
  const list = new Tree();
  // const lis=new Tree()
  list.buildTree(10)
  list.buildTree(20);
  list.buildTree(8);
  list.buildTree(6);
  list.buildTree(7);
  list.buildTree(5);
  list.buildTree(9);
  list.buildTree(15);
  list.buildTree(25);
  list.buildTree(30);
  list.buildTree(35);
  list.buildTree(40);
  list.buildTree(45);
  list.buildTree(50);
  list.inOrderDisplay();


  // lis.buildTree(10)
  // lis.buildTree(20);
  // lis.buildTree(8);
  // lis.buildTree(6);
  // lis.buildTree(7);
  // lis.buildTree(5);
  // lis.buildTree(9);
  // lis.buildTree(15);
  // lis.buildTree(25);
  // lis.buildTree(30);
  // lis.buildTree(40);
  // lis.buildTree(45);
  // lis.buildTree(50);
  console.log("in order dispaly");
  // list.inOrderDisplay()
  // console.log(isIdentical(list.root,lis.root));
  list.Bfsearch()
  // console.log(lis.isBST());
  // list.remove(8);
  // list.postOrderDisplay();
