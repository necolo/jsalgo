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
  comparator: Comparator<T>;
  root: N | null = null;

  /**
   * Create the BinaryTree
   * @param compareFunc the customized comparator, default is (a, b) => a - b
   */
  constructor(compareFunc?: CompareFunc<T>) {
    this.comparator = new Comparator(compareFunc);
  }

  /**
   * Remove values
   * @param values 
   */
  remove(...values: T[]) {
    for (let i = 0; i < values.length; i++) {
      this._remove(values[i]);
    }
  }

  /**
   * Find the node by given value
   * @param value 
   * @returns TreeNode<T>
   */
  findNode(value: T) {
    const node = this._findClosestNode(value);
    if (node && this.comparator.equals(value, node.value)) {
      return node;
    }
    return null;
  }

  /**
   * Find the value by given key value
   * @param value 
   * @returns T
   */
  find(value: T) {
    return this.findNode(value)?.value;
  }

  /**
   * Find the closet value
   * @param value 
   * @returns T
   */
  findClosest(value: T) {
    return this._findClosestNode(value)?.value;
  }

  /**
   * If tree contains the value
   * @param value 
   * @returns T
   */
  contains(value: T) {
    return Boolean(this.findNode(value));
  }

  /**
   * Find the most left value
   * @returns T | undefined
   */
  findSmallest() {
    if (!this.root) {
      return undefined;
    }
    return this._findSmallestNode(this.root).value;
  }

  /**
   * Find the most right value
   * @returns T | undefined
   */
  findLargest() {
    if (!this.root) {
      return undefined;
    }
    return this._findLargestNode(this.root).value;
  }

  /**
   * Clear the tree
   */
  clear() {
    this.root = null;
  }

  /**
   * Get the size of the tree
   * @returns number
   */
  size() {
    return this.root?.size() || 0;
  }

  /**
   * Get the height of the tree
   * @returns number
   */
  height() {
    return this.root?.calculateHeight() || 0;
  }

  /* -------------------------------------------------------------------------- */
  /*                               native methods                               */
  /* -------------------------------------------------------------------------- */

  /** @internal */
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

  /** @internal */
  protected _remove(value: T) {
    let node = this.findNode(value);
    if (!node) return null;
    if (!node.parent) {
      if (!node.left && !node.right) {
        this.root = null;
        return null;
      }
      if (!(node.left && node.right)) {
        const child = node.left || node.right;
        this._setRoot(child!);
        return child;
      }
    }

    if (node.left && node.right) {
      const r = this._findLargestNode(node.left);
      node.value = r.value;
      node = r;
    }

    const p = node.parent as N;
    if (node.left) {
      p.setChild(node, node.left);
      return node.parent;
    }

    if (node.right) {
      p.setChild(node, node.right);
      return node.parent;
    }

    const parent = node.parent;
    p.removeChild(node);
    return parent;
  }

  /** @internal */
  protected _findClosestNode(value: T, startNode = this.root) {
    let parent: N | null = startNode?.parent || null;
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

  /** @internal */
  protected _setRoot(node: N) {
    this.root = node;
    node.parent = null;
  }

  /** @internal */
  protected _findSmallestNode(node: N) {
    let result = node;
    while(result.left) {
      result = result.left;
    }
    return result;
  }

  /** @internal */
  protected _findLargestNode(node: N) {
    let result = node;
    while(result.right) {
      result = result.right;
    }
    return result;
  }
}
