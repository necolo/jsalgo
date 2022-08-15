import { BinaryTree, TreeNode } from './binary-tree';

export class BinarySearchTree<T = number> extends BinaryTree<T> {
  add(...values: T[]) {
    for (let i = 0; i < values.length; i++) {
      this._addNode(new TreeNode(values[i], this.comparator));
    }
  }
}