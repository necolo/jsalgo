import { BinaryTree, TreeNode } from './binary-tree';

class AVLNode<T = number> extends TreeNode<T> {
  height = 1;

  updateHeight() {
    let h = 1;
    if (this.left || this.right) {
      h = Math.max(this.left?.height || 0, this.right?.height || 0) + 1;
    }
    const heightChanged = this.height !== h;
    this.height = h;
    return heightChanged;
  }

  balanceFactor() {
    return (this.left?.height || 0) - (this.right?.height || 0);
  }

  isBalance() {
    return Math.abs(this.balanceFactor()) < 2;
  }
}

export class AVLTree<T = number> extends BinaryTree<T, AVLNode<T>> {
  root: AVLNode<T> | null = null;
  debug = false

  add(...values: T[]) {
    for (let i = 0; i < values.length; i++) {
      this._addNode(new AVLNode(values[i], this.comparator));
    }
  }

  remove(...values: T[]) {
    for (let i = 0; i < values.length; i++) {
      this._remove(values[i]);
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                               native methods                               */
  /* -------------------------------------------------------------------------- */

  protected _addNode(node: AVLNode<T>) {
    const added = super._addNode(node);
    added && this._balance(node.parent);
    return added;
  }

  protected _remove(value: T) {
    const affectedNode = super._remove(value);
    this._balance(affectedNode);
    return affectedNode;
  }

  private _balance(node: AVLNode<T> | null) {
    if (!node) return;
    const heightChanged = node.updateHeight();
    if (node.isBalance()) {
      if (!heightChanged) {
        return;
      }
      this._balance(node.parent);
      return;
    }
    this.debug && console.log(node?.value);

    let newNode;
    const parent = node.parent;
    if (node.balanceFactor() > 0) {
      if (node.left!.balanceFactor() > 0) {
        // scene left left
        newNode = this._rotateRight(node);
      } else {
        newNode = this._rotateLeftRight(node);
      }
    } else {
      if (node.right!.balanceFactor() < 0) {
        // scene right right
        newNode = this._rotateLeft(node);
      } else {
        // scene right left
        newNode = this._rotateRightLeft(node);
      }
    }

    if (parent) {
      if (node === parent.left) {
        parent.setLeft(newNode);
      } else {
        parent.setRight(newNode);
      }
    } else {
      this._setRoot(newNode);
    }
  }

  private _rotateLeft(node: AVLNode<T>) {
    const temp = node.right;
    node.setRight(temp!.left);
    node.updateHeight();
    temp!.setLeft(node);
    temp!.updateHeight();
    return temp;
  }

  private _rotateRight(node: AVLNode<T>) {
    const temp = node.left;
    node.setLeft(temp!.right);
    node.updateHeight();
    temp!.setRight(node);
    temp!.updateHeight();
    return temp;
  }

  private _rotateLeftRight(node: AVLNode<T>) {
    node.setLeft(this._rotateLeft(node.left!));
    return this._rotateRight(node);
  }

  private _rotateRightLeft(node: AVLNode<T>) {
    node.setRight(this._rotateRight(node.right!));
    return this._rotateLeft(node);
  }
}