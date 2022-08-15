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
  function is(n: TreeNode | null, v: number) {
    if (!n) {
      t.fail(`Compare ${v} failed, node is not exist`);
      return;
    }
    t.equal(n!.value, v);
  }

  return {
    is,

    lr(n: TreeNode | null, l: number, r: number) {
      if (!n) {
        t.fail(`Compare l: ${l}, r: ${r} failed, node is not exist`);
        return;
      }
      if (l && !n.left) {
        t.fail(`Left node is not exist in ${n.value}`);
        return;
      }
      if (r && !n.right) {
        t.fail(`Right node is not exist in ${n.value}`);
        return;
      }
      is(n.left, l);
      is(n.right, r);
    },
  };
}