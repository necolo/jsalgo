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

  get nephews(): [this | null, this | null] {
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

  /**
   * Add values
   * @param values 
   */
  add(...values: T[]) {
    for (let i = 0; i < values.length; i++) {
      this._addNode(new RBNode(values[i], this.comparator));
    }
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

  protected _addNode(node: RBNode<T>) {
    const added = super._addNode(node);
    if (!added) return false;

    if (!node.parent) {
      return true;
    }

    let n = node;
    while (n) {
      let p = n.parent;
      if (!p) {
        n.color = BLACK;
        break;
      }
      if (p.color === BLACK) {
        break;
      }
      let g = n.grandParent;
      if (!g) {
        p.color = BLACK;
        break;
      }
      let u = n.uncle;
      if (u?.color === RED) {
        p.color = BLACK;
        u.color = BLACK;
        g.color = RED;
        n = g;
        continue;
      }
      if (n === p.right && p === g.left) {
        this._rotateLeft(n);
        n = n.left!;
      } else if (n === p.left && p === g.right) {
        this._rotateRight(n);
        n = n.right!;
      }
      n.parent!.color = BLACK;
      n.grandParent!.color = RED;
      if (n === n.parent!.left && n.parent === n.grandParent.left) {
        this._rotateRight(n.parent!);
      } else {
        this._rotateLeft(n.parent!);
      }
    }
    return true;
  }

  private _rotateLeft(n: RBNode<T>) {
    if (!n.parent) {
      this._setRoot(n);
      return;
    }
    let g = n.grandParent;
    let p = n.parent;
    let left = n.left;
    p.setRight(left);
    n.setLeft(p);
    if (this.root === p) {
      this._setRoot(n);
    }
    g && g.setChild(p, n);
  }

  private _rotateRight(n: RBNode<T>) {
    let g = n.grandParent;
    let p = n.parent;
    if (!p) return;
    let right = n.right;
    p.setLeft(right);
    n.setRight(p);
    if (p === this.root) {
      this._setRoot(n);
    }
    g && g.setChild(p, n);
  }

  // Delete cases
  protected _remove(value: T) {
    let n = this.findNode(value);
    if (!n) return null;
    if (!n.parent) {
      if (!n.left && !n.right) {
        this.root = null;
        return null;
      }
      if (!(n.left && n.right)) {
        const child = n.left || n.right;
        this._setRoot(child!);
        return child;
      }
    }

    if (n.left && n.right) {
      const r = this._findLargestNode(n.left);
      n.value = r.value;
      n = r;
    }

    const parent = n.parent!;
    if (n.left) {
      parent.setChild(n, n.left);
      if (n.color === BLACK) {
        n.left.color = n.color;
      }
      return n.parent;
    }

    if (n.right) {
      parent.setChild(n, n.right);
      if (n.color === BLACK) {
        n.right.color = n.color;
      }
      return n.parent;
    }

    const node = n;
    if (n.color === BLACK) {
      while (n?.parent) {
        let p = n.parent;
        let s = n.sibling;

        // sibling is red
        if (s.color === RED) {
          p.color = RED;
          s.color = BLACK;
          if (n === p.left) {
            this._rotateLeft(s);
          } else {
            this._rotateRight(s);
          }
          p = n.parent;
          s = n.sibling;
        }

        let [c, d] = n.nephews;

        // s, d = black, c = red
        if (c?.color === RED && (!d || d.color === BLACK)) {
          s.color = RED;
          c.color = BLACK;
          if (n === p.left) {
            this._rotateRight(c);
          } else {
            this._rotateLeft(c);
          }
          s = n.sibling;
          [c, d] = n.nephews;
        }

        // s = black, d = red
        if (d?.color === RED) {
          s.color = p.color;
          p.color = BLACK;
          d.color = BLACK;
          if (n === p.left) {
            this._rotateLeft(s);
          } else {
            this._rotateRight(s);
          }
          break;
        }

        // s, c, d = black, p = red
        if (p.color === RED) {
          s.color = RED;
          p.color = BLACK;
          break;
        }

        s.color = RED;
        n = p;
      }
    }

    parent.removeChild(node);
    return parent;
  }
}