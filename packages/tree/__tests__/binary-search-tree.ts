import tape from 'tape';
import { BinarySearchTree } from '../src/binary-search-tree';
import { printTree, getHelpers } from './common';

function test(msg: string, func: (t, tree, helps) => void, print = false) {
  return tape(`Test binary search tree: ${msg}`, t => {
    const tree = new BinarySearchTree();
    const helps = getHelpers(t);
    func(t, tree, helps);
    if (print) { printTree(tree); }
    t.end();
  });
}

test('insert', (t, tree) => {
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
});

test('remove a root with no child', (t, tree) => {
  tree.remove(1);
  t.equal(tree.root, null);

  tree.add(1);
  tree.remove(1);
  t.equal(tree.root, null);
});

test('remove a root with only left child', (t, tree) => {
  tree.add(10, 5, 2, 1);
  tree.remove(10);
  t.equal(tree.root.value, 5);
  t.equal(tree.root.left.value, 2);
  t.equal(tree.root.right, null);
});

test('remove a root with only right child', (t, tree) => {
  tree.add(10, 15, 20);
  tree.remove(10);
  t.equal(tree.root.value, 15);
  t.equal(tree.root.left, null);
  t.equal(tree.root.right.value, 20);
});

test('remove a root with both left and right child, and the left largest node is root\'s left', (t, tree, { is, lr }) => {
  tree.add(10, 5, 15, 1, 20);
  tree.remove(10);
  is(tree.root, 5);
  is(tree.root.right, 15);
  is(tree.root.left, 1);
});

test('remove a root with both left and right child, and the left largest node is not root\'s left', (t, tree, { nlr }) => {
  tree.add(10, 5, 15, 1, 8, 6, 9, 8.5);
  tree.remove(10);
  nlr(tree.root, 9, 5, 15);
  nlr(tree.root.left.right, 8, 6, 8.5);
});

test('remove a non-root node with both children', (t, tree, { nlr }) => {
  tree.add(30, 25, 20, 10, 22, 5, 18, 15);
  tree.remove(20);
  nlr(tree.root.left.left, 18, 10, 22);
  nlr(tree.root.left.left.left, 10, 5, 15);
});

test('remove a non-root node with only right child', (t, tree, { nlr }) => {
  tree.add(30, 25, 20, 22);
  tree.remove(20);
  nlr(tree.root.left.left, 22, null, null);
});

test('remove a non-root node with only left child', (t, tree, { nlr }) => {
  tree.add(30, 25, 20, 10, 5, 6, 1);
  tree.remove(20);
  nlr(tree.root.left.left, 10, 5, null);
});

test('tree size', (t, tree) => {
  t.equal(tree.size(), 0);
  const numbers = [8, 3, 10, 1, 6, 4, 7, 14, 13, 1.5, 0];
  tree.add(8); 
  t.equal(tree.size(), 1);
  tree.add(...numbers.slice(1));
  t.equal(tree.size(), numbers.length);
});

test('tree height', (t, tree) => {
  t.equal(tree.height(), 0);

  tree.add(1);
  t.equal(tree.height(), 1);

  const numbers = [8, 3, 10, 1, 6, 4, 7, 14, 13];
  tree.add(...numbers);
  t.equal(tree.height(), 5);
})