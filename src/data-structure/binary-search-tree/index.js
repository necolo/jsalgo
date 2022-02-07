class Node {
    constructor(v) {
        this.value = v;
        this.parent = null;
        this.leftChild = null;
        this.rightChild = null;
    }

    insert(v) {
        if (v < this.value) {
            if (this.leftChild) {
                this.leftChild.insert(v);
            } else {
                const node = new Node(v);
                node.parent = this;
                this.leftChild = node;
            }
        } else if (v > this.value) {
            if (this.rightChild) {
                this.rightChild.insert(v);
            } else {
                const node = new Node(v);
                node.parent = this;
                this.rightChild = node;
            }
        }
    }

    isLeaf() {
        return (!this.leftChild && !this.rightChild);
    }

    deleteChild(node) {
        if (this.leftChild === node) {
            this.leftChild = null;
            return;
        }
        if (this.rightChild === node) {
            this.rightChild = null;
            return;
        }
    }

    setChild(node) {
        if (node.value < this.value) {
            this.leftChild = node;
        } else if (node.value > this.value) {
            this.rightChild = node;
        }
    }

    /**
     * 
     * @param {*} v 
     * @param {Function} setRoot callback to set the root 
     * @returns 
     */
    delete(v, setRoot) {
        if (v < this.value) {
            this.leftChild && this.leftChild.delete(v);
            return;
        }
        if (v > this.value) {
            this.rightChild && this.rightChild.delete(v);
            return;
        }

        // delete this node
        if (this.isLeaf()) {
            if (this.parent) {
                this.parent.deleteChild(this);
            } else {
                setRoot(null);
            }
            return;
        }

        // handle only one child
        if (!(this.leftChild && this.rightChild)) {
            const child = this.leftChild || this.rightChild;
            if (this.parent) {
                if (child.value < this.parent.value) {
                    this.parent.leftChild = child;
                    child.parent = this.parent;
                } else {
                    this.parent.rightChild = child;
                    child.parent = this.parent;
                }
            } else {
                child.parent = null;
                setRoot(child);
            }
            return;
        }
        
        // handle two children
        const nextNode = this.nextNode();
        if (nextNode !== this.rightChild) {
            if (!nextNode.isLeaf()) {
                nextNode.parent.leftChild = nextNode.rightChild;
                nextNode.rightChild.parent = nextNode.parent;
            }
            nextNode.rightChild = this.rightChild;
            nextNode.leftChild = this.leftChild;
        }
        nextNode.parent = this.parent;
        this.parent.setChild(nextNode);
    }

    /**
     * find the next smallest value that greater than this
     * @return {Node}
     */
    nextNode() {
        let node = this.rightChild;
        while(node.leftChild) {
            node = node.leftChild;
        }
        return node;
    }

    /**
     * find the previous largest value that smaller than this
     */
    prevNode() {
        if (!this.parent) { return null; }
        // todo:
    }

    find(v) {
        if (this.value === v) {
            return this;
        }
        if (v < this.value && this.leftChild) {
            return this.leftChild.find(v);
        }
        if (v > this.value && this.rightChild) {
            return this.rightChild.find(v);
        }
        return null;
    }

    toSortedArray() {
        return [
            ...(this.leftChild?.toSortedArray() ?? []),
            this.value,
            ...(this.rightChild?.toSortedArray() ?? []),
        ];
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(v) {
        if (this.root) {
            this.root.insert(v);
        } else {
            this.root = new Node(v);
        }
    }

    delete(v) {
        if (!this.root) { return; }
        this.root.delete(v, (node) => {
            this.root = node;
        });
    }

    /**
     * if the tree contains the value
     * @param {*} value 
     * @returns {boolean}
     * 
     */
    contains(v) {
        return this.root.find(v) !== null;
    }

    findParent(v) {
        const node = this.findNode(v);
        if (node) {
            return node.parent;
        }
        return null;
    }

    findNode(v) {
        return this.root.find(v);
    }

    getMin() {
        let node = this.root;
        if (!node) { return; }
        while(node.leftChild) {
            node = node.leftChild;
        }
        return node.value;
    }

    getMax() {
        let node = this.root;
        if (!node) { return; }
        while(node.rightChild) {
            node = node.rightChild;
        }
        return node.value;
    }

    fromArray(arr) {
        if (!this.root) {
            this.root = new Node(arr[0]);
        }
        for (let i = 0; i < arr.length; i++) {
            this.root.insert(arr[i]);
        }
    }

    toSortedArray() {
        if (!this.root) {
            return [];
        }
        return this.root.toSortedArray();
    }
}

module.exports = BinarySearchTree;