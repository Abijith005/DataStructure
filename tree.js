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
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (data > current.data) {
        if (current.right === null) {
          current.right = newNode;
          break;
        } else {
          current = current.right;
        }
      } else {
        if (current.left === null) {
          current.left = newNode;
          break;
        } else {
          current = current.left;
        }
      }
    }
  }

  remove(data) {
    this.root = this.removeHelper(data, this.root);
  }

  removeHelper(data, currentNode) {
    if (currentNode === null) {
      return null;
    }

    if (data > currentNode.data) {
      currentNode.right = this.removeHelper(data, currentNode.right);
    } else if (data < currentNode.data) {
      currentNode.left = this.removeHelper(data, currentNode.left);
    } else {
      if (currentNode.right !== null && currentNode.left !== null) {
        currentNode.data = this.getMinimum(currentNode.right);
        currentNode.right = this.removeHelper(currentNode.data, currentNode.right);
      } else {
        if (currentNode.left === null) {
          currentNode = currentNode.right;
        } else {
          currentNode = currentNode.left;
        }
      }
    }

    return currentNode;
  }

  getMinimum(currentNode) {
    if (currentNode.left === null) {
      return currentNode.data;
    } else {
      return this.getMinimum(currentNode.left);
    }
  }

  contains(data) {
    let current = this.root;
    while (current !== null) {
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
    if (node !== null) {
      this.inOrderHelper(node.left);
      console.log(node.data);
      this.inOrderHelper(node.right);
    }
  }

  preOrderHelper(node) {
    if (node !== null) {
      console.log(node.data);
      this.preOrderHelper(node.left);
      this.preOrderHelper(node.right);
    }
  }

  postOrderHelper(node) {
    if (node !== null) {
      this.postOrderHelper(node.left);
      this.postOrderHelper(node.right);
      console.log(node.data);
    }
  }
}

const tree = new Tree();
tree.buildTree(20);
tree.buildTree(5);
tree.buildTree(27);
tree.buildTree(3);
tree.buildTree(15);
tree.buildTree(25);
tree.buildTree(29);
tree.buildTree(7);
tree.buildTree(17);


tree.remove(5);
console.log("In-order Display:");
tree.postOrderDisplay();
