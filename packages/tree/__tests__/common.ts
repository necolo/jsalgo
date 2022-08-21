import tape from 'tape';
import { ptree } from '@ptree/core';
import { BinaryTree, TreeNode } from '../src/binary-tree';

export function printTree(tree: BinaryTree<any>, text = '') {
  if (text) console.log('--->', text);

  console.log(ptree(tree.root, {
    formatter: n => (n ? String(n.value) : ''),
    getChildren: n => {
      if (!n) return null;
      if (!n.left && !n.right) return null;
      return [n.left, n.right];
    }
  }));
} 

export function getHelpers(t) {
  function is(n: TreeNode | null, v: number | null, msg?: string) {
    if (!n && v !== null) {
      t.fail(`${msg || ''}: node is not exist`);
      return false;
    }
    if (!n) {
      t.equal(n, v, msg);
    } else {
      t.equal(n.value, v, msg);
    }
    return true;
  }

  return {
    is,
    nlr(n: TreeNode | null, v: number | null, l: number | null, r: number | null) {
      if (!is(n, v)) {
        return;
      }
      if (!n) return;
      if (!is(n.left, l, `Compare ${n.value}'s left node`)) {
        return;
      }
      if (!is(n.right, r, `Compare ${n.value}'s right node`)) {
        return;
      }
    },
    lr(n: TreeNode | null, l: number | null, r: number | null) {
      if (!n) {
        t.fail(`Compare l: ${l}, r: ${r} failed, node is not exist`);
        return;
      }
      if (!is(n.left, l, `Compare ${n.value}'s left node`)) {
        return;
      }
      if (!is(n.right, r, `Compare ${n.value}'s right node`)) {
        return;
      }
    },
  };
}