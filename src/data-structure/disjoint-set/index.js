class Node {
    constructor(v, fa) {
        this.value = v;
        this.father = fa || this;
    }

    isRoot() {
        return this.father === this;
    }

    // find father
    find() {
        let father = this.father;
        while (father !== this) {
            father = father.find();
        }
        this.father = father;
        return father;
    }
}

class DisjointSet {
    constructor() {
        this.list = [];
        this.root = null;
    }

    find(i) {
        const node = this.list[i];
        if (node) {
            return node.find();
        }
        return null;
    }

    merge(i, j) {
        const nodeI = this.list[i];
        const nodeJ = this.list[j];
        if (nodeI && nodeJ) {
            nodeJ.father = nodeJ.find();
        }
    }

    mergeSet(list) {

    }
}

module.exports = DisjointSet;