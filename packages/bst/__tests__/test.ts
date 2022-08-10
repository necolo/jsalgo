import tape from 'tape';
import Tree from '../src';
import { ptree } from '@ptree/core';

function printTree(tree: Tree, text = '') {
  if (text) console.log('--->', text);
  console.log(ptree(tree.root, {
    formatter: n => (n ? String(n.v) : ''),
    getChildren: n => {
      if (!n) return null;
      if (!n.left && !n.right) return null;
      // if (!n.left) return [n.right];
      // if (!n.right) return [n.left];
      return [n.left, n.right];
    }
  }));
} 

tape('Test', t => {
  const tree = new Tree();
  tree.add(8);
  tree.add(3);
  tree.add(10);
  tree.add(1);
  tree.add(6);
  tree.add(4);
  tree.add(7);
  tree.add(14);
  tree.add(13);
  tree.add(1.5);
  tree.add(0);

  printTree(tree);

  t.assert(tree.exists(1));
  t.assert(tree.exists(14));
  t.assert(tree.exists(10));
  t.false(tree.exists(88));

  tree.delValue(8);
  tree.delValue(3);
  printTree(tree, 'del 8');

  t.end();
});