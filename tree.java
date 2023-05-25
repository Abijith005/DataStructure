public class tree {
    class Node{
        int data;
        Node right;
        Node left;

        Node(int data){
            this.data=data;
        }
    }

    public Node root=null;;

    public void buildTree(int data) {
        Node current=root;
        Node newNode=new Node(data);
        if(root==null){
root=newNode;
return;
        }
        while (true) {
            if (data>current.data) {
            if (current.right==null) {
                current.right=newNode;
                break;
            }
            else{
                current=current.right;
            }    
            }
            else{
                if (current.left==null) {
                    current.left=newNode;
                    break;
                }
                else{
                    current=current.left;
                }
            }
            
        }
        
    }

    public void remove(int data) {
        Node currentNode=root;
        Node parentNode=null;
        removeHelper(data,currentNode,parentNode);
    }

    public void removeHelper(int data,Node currentNode,Node parentNode) {
        while (currentNode!=null) {
            if (data>currentNode.data) {
                parentNode=currentNode;
                currentNode=currentNode.right;
            } else if (data<currentNode.data) {
                parentNode=currentNode;
                currentNode=currentNode.left;
            }
            else{
                if (currentNode.right!=null&&currentNode.left!=null) {
                    currentNode.data=getMinimum(currentNode.right);
                    removeHelper(currentNode.data, currentNode.right, currentNode);
                } 
                else {
                    if (parentNode==null) {
                        if (currentNode.left!=null) {
                            root=currentNode.left;
                        }
                        else{
                            root=currentNode.right;
                        }
                    }
                    else{
                        if (parentNode.left==null) {
                            if (currentNode.left==null) {
                                parentNode.right=currentNode.right;
                            }
                            else{
                                parentNode.right=currentNode.left;
                            }
                        }
                        else{
                            if (currentNode.left==null) {
                                System.out.println(parentNode.data);
                                parentNode.left=currentNode.right;
                            } else {
                                parentNode.left=currentNode.left;
                            }
                        }
                    }
                }

                return;
            }
        }
        
    }

    public int getMinimum(Node currentNode) {
        if (currentNode.left==null) {
            return currentNode.data;
        }
        else{
           return getMinimum(currentNode.left);
        }
    }

    public boolean contains(int data) {
        Node current=root;
        if (root==null) {
            return false;
        }
        while (current!=null) {
            if (data>current.data) {
                current=current.right;    
                }
                else if (data<current.data) {
                    current=current.left;
                } 
                else{
    return true;
                }
            }
        return false;
    }


    public void inOrderDisplay() {
        inOrderHelper(root);
    }

    public void postOrderDisplay() {
        postOrderHelper(root);
    }

    public void preOrderDisplay() {
        preOrderHelper(root);
    }


    public void inOrderHelper(Node node) {
        if (node!=null) {
            inOrderHelper(node.left);
            System.out.print(node.data+" ");
            inOrderHelper(node.right);
        }
    }

    public void preOrderHelper(Node node) {
        if (node!=null) {
            System.out.print(node.data+" ");
            preOrderHelper(node.left);
            preOrderHelper(node.right);
        }
        
    }
        public void postOrderHelper(Node node) {
            if (node!=null) {
                postOrderHelper(node.left);
                postOrderHelper(node.right);
                System.out.print(node.data+" ");
            }
            
        }
    public static void main(String[] args) {
        tree list=new tree();
        list.buildTree(10);
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

        list.remove(25);
        System.out.println();
        list.inOrderDisplay();
        
    }
}
