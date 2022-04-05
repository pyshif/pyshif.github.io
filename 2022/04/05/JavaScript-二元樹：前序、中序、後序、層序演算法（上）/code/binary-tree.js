
class TreeNode {
    constructor(data = "") {
        this.parent = null;
        this.leftChild = null;
        this.rightChild = null;
        this.data = data;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    // recursion
    preOrder(node) {
        if (node) {
            // V
            console.log(` ${node.data} `);
            // L
            this.preOrder(node.leftChild);
            // R
            this.preOrder(node.rightChild);
        }
    }

    inOrder(node) {
        if (node) {
            // L
            this.inOrder(node.leftChild);
            // V
            console.log(` ${node.data} `);
            // R
            this.inOrder(node.rightChild);
        }
    }

    postOrder(node) {
        if (node) {
            // L
            this.postOrder(node.leftChild);
            // R
            this.postOrder(node.rightChild);
            // V
            console.log(` ${node.data} `);
        }
    }

    // preOrder
    preOrderSuccessor(current) {
        if (current.leftChild) {
            return current.leftChild;
        }

        if (current.rightChild) {
            return current.rightChild;
        }

        let successor = current.parent;

        while (successor != null && (successor.leftChild !== current || successor.rightChild === null)) {
            current = successor;
            successor = current.parent;
        }

        if (successor != null)
            return successor.rightChild;

        return null;
    }
    preOrderPreDecessor(current) {

    }
    // inOrder
    inOrderSuccessor(current) {
        if (current.rightChild) {
            return this.mostLeft(current.rightChild);
        }

        let successor = current.parent;
        while (successor != null && successor.rightChild === current) {
            current = successor;
            successor = current.parent;
        }

        return successor;
    }
    inOrderPreDecessor(current) {

    }
    // postOrder
    postOrderSuccessor(current) {
        let successor = current.parent;

        if (!successor) {
            return successor;
        }

        if (successor.rightChild === current || successor.rightChild === null) {
            return successor;
        }

        successor = successor.rightChild;

        while (successor) {
            current = successor;
            successor = current.leftChild;

            while (successor) {
                current = successor;
                successor = current.leftChild;
            }

            successor = current.rightChild;
        }

        successor = current;

        return successor;
    }
    postOrderPreDecessor(current) {

    }
    // mostLeft
    mostLeft(current) {
        while (current.leftChild) {
            current = current.leftChild;
        }

        return current;
    }
    // mostRight
    mostRight(current) {
        while (current.rightChild) {
            current = current.rightChild;
        }

        return current;
    }

    // inorder by parent
    inOrderByParent(root) {
        let current = this.mostLeft(root);

        while (current) {
            console.log(` ${current.data} `);
            current = this.inOrderSuccessor(current);
        }
    }
}

const nodeA = new TreeNode('A');
const nodeB = new TreeNode('B');
const nodeC = new TreeNode('C');
const nodeD = new TreeNode('D');
const nodeE = new TreeNode('E');
const nodeF = new TreeNode('F');
const nodeG = new TreeNode('G');
const nodeH = new TreeNode('H');
const nodeI = new TreeNode('I');

// construct the binary tree
nodeA.leftChild = nodeB;
nodeA.rightChild = nodeC;

nodeB.leftChild = nodeD;
nodeB.rightChild = nodeE;

nodeE.leftChild = nodeG;
nodeE.rightChild = nodeH;

nodeC.leftChild = nodeF;

nodeF.rightChild = nodeI;

// link parent pointer
nodeI.parent = nodeF;

nodeF.parent = nodeC;

nodeC.parent = nodeA;

nodeH.parent = nodeE;
nodeG.parent = nodeE;

nodeE.parent = nodeB;
nodeD.parent = nodeB;

nodeB.parent = nodeA;

const bt = new BinaryTree(nodeA);

console.log('pre order ---');
bt.preOrder(bt.root);
console.log('nodeA preorder successor :>>', bt.preOrderSuccessor(nodeA).data);
console.log('nodeB preorder successor :>>', bt.preOrderSuccessor(nodeB).data);
console.log('nodeC preorder successor :>>', bt.preOrderSuccessor(nodeC).data);
console.log('nodeD preorder successor :>>', bt.preOrderSuccessor(nodeD).data);
console.log('nodeE preorder successor :>>', bt.preOrderSuccessor(nodeE).data);
console.log('nodeF preorder successor :>>', bt.preOrderSuccessor(nodeF).data);
console.log('nodeG preorder successor :>>', bt.preOrderSuccessor(nodeG).data);
console.log('nodeH preorder successor :>>', bt.preOrderSuccessor(nodeH).data);
console.log('nodeI preorder successor :>>', bt.preOrderSuccessor(nodeI));

console.log('in order ---');
bt.inOrder(bt.root);
console.log('nodeA inorder successor :>>', bt.inOrderSuccessor(nodeA).data);
console.log('nodeB inorder successor :>>', bt.inOrderSuccessor(nodeB).data);
console.log('nodeC inorder successor :>>', bt.inOrderSuccessor(nodeC));
console.log('nodeD inorder successor :>>', bt.inOrderSuccessor(nodeD).data);
console.log('nodeE inorder successor :>>', bt.inOrderSuccessor(nodeE).data);
console.log('nodeF inorder successor :>>', bt.inOrderSuccessor(nodeF).data);
console.log('nodeG inorder successor :>>', bt.inOrderSuccessor(nodeG).data);
console.log('nodeH inorder successor :>>', bt.inOrderSuccessor(nodeH).data);
console.log('nodeI inorder successor :>>', bt.inOrderSuccessor(nodeI).data);
bt.inOrderByParent(bt.root);

console.log('post order ---');
bt.postOrder(bt.root);
console.log('nodeA postorder successor :>>', bt.postOrderSuccessor(nodeA));
console.log('nodeB postorder successor :>>', bt.postOrderSuccessor(nodeB).data);
console.log('nodeC postorder successor :>>', bt.postOrderSuccessor(nodeC).data);
console.log('nodeD postorder successor :>>', bt.postOrderSuccessor(nodeD).data);
console.log('nodeE postorder successor :>>', bt.postOrderSuccessor(nodeE).data);
console.log('nodeF postorder successor :>>', bt.postOrderSuccessor(nodeF).data);
console.log('nodeG postorder successor :>>', bt.postOrderSuccessor(nodeG).data);
console.log('nodeH postorder successor :>>', bt.postOrderSuccessor(nodeH).data);
console.log('nodeI postorder successor :>>', bt.postOrderSuccessor(nodeI).data);