import { TreeNode, BinaryTree } from './binary-tree';

const RED = 0;
const BLACK = 1;

export class RBNode<T = number> extends TreeNode<T> {
  color = RED;

  get sibling() {
    if (!this.parent) {
      return null;
    }
    if (this.parent.left === this) {
      return this.parent.right;
    }
    return this.parent.left;
  }

  get uncle() {
    return this.parent?.sibling || null;
  }

  get grandParent() {
    return this.parent?.parent || null;
  }

  get nephews() {
    let closeNephew: this | null = null;
    let distantNephew: this | null = null;
    if (this.parent) {
      if (this.parent.left === this) {
        const sibling = this.parent.right;
        if (sibling) {
          closeNephew = sibling.left;
          distantNephew = sibling.right;
        }
      } else {
        const sibling = this.parent.left;
        if (sibling) {
          closeNephew = sibling.right;
          distantNephew = sibling.left;
        }
      }
    }
    return [closeNephew, distantNephew];
  }
}

export class RedBlackTree<T = number> extends BinaryTree<T, RBNode<T>> {
  root: null | RBNode<T> = null;
  debug = false;

  add(...values: T[]) {
    for (let i = 0; i < values.length; i++) {
      this._addNode(new RBNode(values[i], this.comparator));
    }
  }

  protected _addNode(node: RBNode<T>) {
    const added = super._addNode(node);
    if (!added) return false;

    if (!node.parent) {
      // node is the root
      return true;
    }

    if (node.parent.color === BLACK) {
      return true;
    }

    if (!node.grandParent) {
      node.parent.color = BLACK;
      return true;
    }

    if (!node.uncle || node.uncle.color === BLACK) {
      let n = node;
      if (node === node.parent.right && node.parent === node.grandParent.left) {
        n = node.parent;
        this._rotateLeft(node.parent);
      } else if (node === node.parent.left && node.parent === node.grandParent.right) {
        n = node.parent;
        this._rotateRight(node.parent);
      }

      // case 6
      const { parent, grandParent } = n;
      if (parent === grandParent.left) {
        this._rotateRight(n.grandParent);
      } else {
        this._rotateLeft(n.grandParent);
      }
      parent!.color = BLACK;
      grandParent.color = RED;

      return true;
    }

    // case 2 (Parent and Uncle are both red)
    let n = node;
    while (n?.parent) {
      n.parent.color = BLACK;
      const uncle = n.uncle;
      uncle && (uncle.color = BLACK);
      const grandParent = n.grandParent;
      grandParent && (grandParent.color = RED);
      n = grandParent;
    }

    return true;
  }

  private _rotateLeft(node: RBNode<T>) {
    const { right } = node;
    if (!right) return;
    if (node.parent) {
      node.parent.setChild(node, right);
    } else {
      this._setRoot(right);
    }
    node.setRight(right.left);
    right.setLeft(node);
  }

  private _rotateRight(node: RBNode<T>) {
    const { left } = node;
    if (!left) return;
    if (node.parent) {
      node.parent.setChild(node, left);
    } else {
      this._setRoot(left);
    }
    node.setLeft(left.right);
    left.setRight(node);
  }

  // Delete cases

  private _D1() {

  }
  private _D2() {
    
  }
  private _D3() {
    
  }
  private _D4() {
    
  }
  private _D5() {
    
  }
  private _D6() {
    
  }
}