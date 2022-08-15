import tape from 'tape';
import { BinarySearchTree } from '../src/binary-search-tree';
import { printTree, getHelpers } from './common';

tape('Test binary search tree', t => {
  const tree = new BinarySearchTree();
  tree.add(8, 3, 10, 1, 6, 4, 7, 14, 13, 1.5, 0);
  t.assert(tree.contains(1));
  t.assert(tree.contains(14));
  t.assert(tree.contains(10));
  t.false(tree.contains(88));

  const { is, lr } = getHelpers(t);
  is(tree.root, 8);
  lr(tree.root, 3, 10);
  lr(tree.root!.left, 1, 6);
  lr(tree.root!.left!.left, 0, 1.5);
  lr(tree.root!.left!.right, 4, 7);
  is(tree.root!.right!.right, 14);
  is(tree.root!.right!.right!.left, 13);

  tree.remove(8);
  is(tree.root, 7);
  lr(tree.root, 3, 10);
  t.equal(tree.root!.left!.right!.right, null);

  tree.add(1.2);
  tree.remove(3);

  is(tree.root!.left, 1.5);
  lr(tree.root!.left, 1, 6);
  is(tree.root!.left!.left!.right, 1.2);

  // printTree(tree);

  t.end();
});

tape('Test tree size', t => {
  const tree = new BinarySearchTree();
  t.equal(tree.size(), 0);
  const numbers = [8, 3, 10, 1, 6, 4, 7, 14, 13, 1.5, 0];
  tree.add(8); 
  t.equal(tree.size(), 1);
  tree.add(...numbers.slice(1));
  t.equal(tree.size(), numbers.length);
  t.end();
});

tape('Test tree height', t => {
  const tree = new BinarySearchTree();
  t.equal(tree.height(), 0);

  tree.add(1);
  t.equal(tree.height(), 1);

  const numbers = [8, 3, 10, 1, 6, 4, 7, 14, 13];
  tree.add(...numbers);
  t.equal(tree.height(), 5);
  t.end();
});