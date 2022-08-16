import { Comparator, CompareFunc } from '@jsalgo/utils';

export class TreeNode<T = number> {
  left: this | null = null;
  right: this | null = null;
  parent: this | null = null;

  constructor(
    public value: T,
    public comparator: Comparator<T>,
  ) { }

  setLeft(node: this | null) {
    this.left = node;
    if (node) {
      node.parent = this;
    }
  }

  setRight(node: this | null) {
    this.right = node;
    if (node) {
      node.parent = this;
    }
  }

  addChild(node: this) {
    if (this.comparator.greaterThan(this.value, node.value)) {
      this.setLeft(node);
      return;
    }

    if (this.comparator.lessThan(this.value, node.value)) {
      this.setRight(node);
      return;
    }
  }

  removeChild(node: this) {
    this.setChild(node, null);
  }

  setChild(from: this, to: this | null) {
    if (from === this.left) {
      this.setLeft(to);
    } else if (from === this.right) {
      this.setRight(to);
    }
  }

  size() {
    const leftSize = this.left?.size() || 0;
    const rightSize = this.right?.size() || 0;
    return 1 + leftSize + rightSize;
  }

  calculateHeight() {
    if (this.left || this.right) {
      return Math.max(this.left?.calculateHeight() || 0, this.right?.calculateHeight() || 0) + 1;
    }
    return 1;
  }
}

export class BinaryTree<T = number, N extends TreeNode<T> = TreeNode<T>> {
  public comparator: Comparator<T>;
  public root: N | null = null;

  constructor(compareFunc?: CompareFunc<T>) {
    this.comparator = new Comparator(compareFunc);
  }

  remove(...values: T[]) {
    for (let i = 0; i < values.length; i++) {
      const node = this.findNode(values[i]);
      node && this._removeNode(node);
    }
  }

  findNode(value: T) {
    const node = this._findClosestNode(value);
    if (node && this.comparator.equals(value, node.value)) {
      return node;
    }
    return null;
  }

  contains(value: T) {
    return Boolean(this.findNode(value));
  }

  findSmallest() {
    if (!this.root) {
      return undefined;
    }
    return this._findSmallestNode(this.root).value;
  }

  findLargest() {
    if (!this.root) {
      return undefined;
    }
    return this._findLargestNode(this.root).value;
  }

  clear() {
    this.root = null;
  }

  size() {
    return this.root?.size() || 0;
  }

  height() {
    return this.root?.calculateHeight() || 0;
  }

  /* -------------------------------------------------------------------------- */
  /*                               native methods                               */
  /* -------------------------------------------------------------------------- */

  protected _addNode(node: N) {
    const parent = this._findClosestNode(node.value);
    if (!parent) {
      this._setRoot(node);
      return true;
    }

    if (this.comparator.equals(node.value, parent.value)) {
      return false;
    }

    parent.addChild(node);
    return true;
  }

  /**
   * 
   * @param node 
   * @returns the moved node's parent
   */
  protected _removeNode(node: N) {
    if (node.left && node.right) {
      // find largest node that is smallest than value
      const replaceNode = this._findLargestNode(node.left);
      const replaceNodeParent = replaceNode.parent;
      if (replaceNode === node.left) {
        replaceNode.setRight(node.right);
        if (node.parent) {
          node.parent.setLeft(replaceNode);
        } else {
          this._setRoot(replaceNode);
        }
        return replaceNode;
      }
      
      if (replaceNode.left) {
        replaceNode.parent!.setRight(replaceNode.left);
      } else {
        replaceNode.parent!.removeChild(replaceNode);
      }
      replaceNode.setLeft(node.left);
      replaceNode.setRight(node.right);
      if (!node.parent) {
        this._setRoot(replaceNode);
      } else {
        node.parent.setChild(node, replaceNode);
      }
      return replaceNodeParent;
    }

    if (node.left) {
      if (!node.parent) {
        this._setRoot(node.left);
      } else {
        node.parent.setChild(node, node.left);
      }
      return node.parent;
    }

    if (node.right) {
      if (!node.parent) {
        this._setRoot(node.right);
      } else {
        node.parent.setChild(node, node.right);
      }
      return node.parent;
    }

    if (!node.parent) {
      this.root = null;
      return null;
    }

    node.parent.removeChild(node);
    return node.parent;
  }

  protected _findClosestNode(value: T, startNode = this.root) {
    let parent = startNode?.parent || null;
    let node = startNode;
    const { comparator } = this;
    while(node) {
      parent = node;
      if (comparator.lessThan(value, parent.value)) {
        node = parent.left;
        continue;
      }
      if (comparator.greaterThan(value, parent.value)) {
        node = parent.right;
        continue;
      }
      return parent;
    }
    return parent;
  }

  protected _setRoot(node: N) {
    this.root = node;
    node.parent = null;
  }

  protected _findSmallestNode(node: N) {
    let result = node;
    while(result.left) {
      result = result.left;
    }
    return result;
  }

  protected _findLargestNode(node: N) {
    let result = node;
    while(result.right) {
      result = result.right;
    }
    return result;
  }
}
