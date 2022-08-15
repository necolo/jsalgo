import tape from 'tape';
import { AVLTree } from '../src/avl-tree';
import { printTree, getHelpers } from './common';

function fibonacci(n: number) {
  if (n <= 2) return n; 
  return fibonacci(n - 1) + fibonacci(n - 2) + 1;
}

interface Tools {
  checkBalance: () => void;
}

function test(
  title: string,
  initValues: number[],
  task: (tree: AVLTree, tools: ReturnType<typeof getHelpers> & Tools) => void,
  print = false,
) {
  tape(`Test AVLTree: ${title}`, t => {

    const tools = getHelpers(t);
    const tree = new AVLTree();

    function checkBalance() {
      const size = tree.size();
      const height = tree.height();
      t.ok(size >= fibonacci(height) && size < (Math.pow(2, height + 1) -1), `The tree is balance with size ${size} height ${height}`);
    }

    tree.add(...initValues);
    task(tree, { ...tools, checkBalance });

    if (print) {
      printTree(tree);
    }

    t.end();
  });
}

test('Normal insert', [20, 15, 25], (tree, { is, lr, checkBalance }) => {
  is(tree.root, 20);
  is(tree.root!.left, 15);
  is(tree.root!.right, 25);
  checkBalance();

  tree.add(10);
  is(tree.root!.left!.left, 10);
  checkBalance();

  tree.add(17);
  is(tree.root!.left!.right, 17);
  checkBalance();

  tree.add(30);
  is(tree.root!.right!.right, 30);
  checkBalance();

  tree.add(5);
  is(tree.root!.left!.left!.left, 5);
  checkBalance();

  tree.add(12);
  is(tree.root!.left!.left!.right, 12);
  checkBalance();
});


test('Rotate right', [20, 15, 25, 10, 17, 5, 12], (tree, { is, lr, checkBalance }) => {
  is(tree.root, 15);
  lr(tree.root, 10, 20);
  lr(tree.root!.left, 5, 12);
  lr(tree.root!.right, 17, 25);
  checkBalance();
});

test('Rotate left', [20, 25, 15, 23, 30, 27, 35], (tree, { is, lr, checkBalance }) => {
  is(tree.root, 25);
  lr(tree.root, 20, 30);
  lr(tree.root!.left, 15, 23);
  lr(tree.root!.right, 27, 35);
  checkBalance();
});

test('Rotate left right', [20, 25, 15, 10, 18, 17, 19], (tree, { is, lr, checkBalance }) => {
  is(tree.root, 18);
  lr(tree.root, 15, 20);
  lr(tree.root!.left, 10, 17);
  lr(tree.root!.right, 19, 25);
  checkBalance();
});

test('Rotate right left', [20, 15, 25, 22, 30, 21, 24], (tree, { is, lr, checkBalance }) => {
  is(tree.root, 22);
  lr(tree.root, 20, 25);
  lr(tree.root!.left, 15, 21);
  lr(tree.root!.right, 24, 30);
  checkBalance();
});

test('Wiki example', [30, 35, 40], (tree, { is, lr, checkBalance }) => {
  is(tree.root, 35);
  lr(tree.root, 30, 40);
  checkBalance();

  tree.add(25, 20);
  is(tree.root!.left, 25);
  lr(tree.root!.left, 20, 30);
  checkBalance();

  tree.add(45, 43);
  is(tree.root!.right, 43);
  lr(tree.root!.right, 40, 45);
  checkBalance();

  tree.add(15, 18);
  is(tree.root!.left!.left, 18);
  lr(tree.root!.left!.left, 15, 20);
  checkBalance();

  tree.add(10);
  is(tree.root!.left, 18);
  lr(tree.root!.left, 15, 25);
  lr(tree.root!.left!.right, 20, 30);
  checkBalance();

  tree.add(5, 2);
  checkBalance();
});

test('Remove', [20, 15, 25, 30], (tree, { is, lr, checkBalance }) => {
  tree.remove(15);
  checkBalance();
  is(tree.root, 25);
  lr(tree.root, 20, 30);
});

test('Remove a deep leaf', [20, 15, 25, 10, 17, 22, 30, 27, 5, 35, 40], (tree, { is, lr, checkBalance}) => {
  tree.remove(17);
  checkBalance();
  is(tree.root!.left, 10);
  lr(tree.root!.left, 5, 15);
});

test('Remove root', [20, 15, 25, 10, 17, 22, 30, 27, 5, 35, 40], (tree, { is, lr, checkBalance }) => {
  const nums = [20, 15, 25, 10, 17, 22, 30, 27, 5, 35, 40];
  for (let i = 0; i < nums.length; i++) {
    tree.remove(nums[i]);
    checkBalance();
  }
});