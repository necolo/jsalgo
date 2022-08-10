class TreeNode {
  public left: TreeNode | null = null;
  public right: TreeNode | null = null;
  public keys?: Set<string>;

  constructor(public v: number, k?: string) {
    if (k) {
      this.keys = new Set(k);
    }
  }
}

export class BinarySearchTree {
  public root: TreeNode | null = null;

  add(v: number, k?: string) {
    const { parent, node } = this._findNode(v);
    if (node) {
      k && node.keys?.add(k);
      return;
    }
    if (!parent) {
      this.root = new TreeNode(v, k);
      return;
    }
    if (v < parent.v) {
      parent.left = new TreeNode(v, k);
      return;
    }
    parent.right = new TreeNode(v, k);
  }

  delValue(value: number) {
    let { parent, node } = this._findNode(value);
    if (!node) return;
    if (node.left && node.right) {
      this._change(parent, node, node.left);
      const newParentNode = parent || this.root;
      const inherit = this._findNodeFrom(value, parent || this.root, node.left);
      if (!inherit.parent || inherit.node) {
        throw new Error('Something is wrong');
      }
      if (node.right.v < inherit.parent.v) {
        inherit.parent.left = node.right; 
      } else {
        inherit.parent.right = node.right;
      }
      return;
    }

    if (node.left) {
      this._change(parent, node, node.left);
      return;
    }

    if (node.right) {
      this._change(parent, node, node.right);
      return;
    }

    // node is leaf
    this._change(parent, node, null);
  }

  delKey(value: number, key: string) {
    const { node } = this._findNode(value);
    if (!node) return;
    node.keys?.delete(key);
  }

  findKeys(value: number) {
    return this._findNode(value).node?.keys;
  }

  exists(value: number) {
    return this._findNode(value).node !== null;
  }

  private _change(parent: TreeNode | null, from: TreeNode, to: TreeNode | null) {
    if (!parent && this.root === from) {
      this.root = to;
      return;
    }
    if (parent?.left === from) {
      parent.left = to;
      return;
    }
    if (parent?.right === to) {
      parent.right = to;
      return;
    }
  }

  private _findNode(value: number) {
    return this._findNodeFrom(value, null, this.root);
  }
  
  private _findNodeFrom(value: number, _parent: TreeNode | null, from: TreeNode | null) {
    let parent = _parent;
    let node = from;
    while(node) {
      if (node.v === value) {
        return { parent, node };
      }
      parent = node;
      if (node.v < value) {
        node = parent.right;
        continue;
      }
      node = parent.left;
    }
    return { parent, node };
  }
}

export default BinarySearchTree;