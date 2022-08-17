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

  remove(...values: T[]) {
    for (let i = 0; i < values.length; i++) {
      this._remove(values[i]);
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
  protected _remove(value: T) {
    const node = this.findNode(value);
    if (!node) return;
    if (!node.parent) {
      if (node.left && node.right) {
        // If N has two non-NIL children, an additional navigation to either the maximum element in its left subtree (which is the in-order predecessor) or the minimum element in its right subtree (which is the in-order successor)
        // finds a node with no other node in between (as shown here). 
        // This "replacement node", say R, has
        // – as the maximal or minimal element of a subtree 
        // – at most one non-NIL child. In order to keep the software completely independent of the node structure as defined by the user, 
        // all red–black tree data related with N and R, 
        // i.e. the color of and the pointers to and from the two nodes, are exchanged. 
        // (The modified red–black tree is the same as before with the exception of the reversed order between N and R, an issue which immediately is resolved by the removal of N.) 
        // Now N has at most one non-NIL child.
        return;
      }
      if (node.left || node.right) {
        /**
         * If N has exactly one non-NIL child, it must be a red child, because if it were a black one then requirement 4 would force a second black non-NIL child.
         * If N is a red node, it cannot have a non-NIL child, because this would have to be black by requirement 3. Furthermore, it cannot have exactly one black child as argued just above. As a consequence, the red node N is without any child and can simply be removed.
         * If N is a black node, it may have a red child or no non-NIL child at all. If N has a red child, it is simply replaced with this child after painting the latter black.
         */
        return;
      }
      this.root = null;
      return;
    }

    // todo: Removal of a black non-root leaf
  }

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