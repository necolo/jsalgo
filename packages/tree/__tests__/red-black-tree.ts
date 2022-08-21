import tape from 'tape';
import { ptree } from '@ptree/core';
import { RedBlackTree, RBNode } from '../src/red-black-tree';
import { getHelpers } from './common';

const RED = 0;
const BLACK = 1;

function redParentChild(node: RBNode | null) {
  if (!node) return false;
  return (
    (
      node.color === RED &&
      node.left?.color === RED
    ) || (
      node.color === RED &&
      node.right?.color === RED
    ) || (
      redParentChild(node.left)
    ) || (
      redParentChild(node.right)
    )
  );
}

function blackNodes(node: RBNode) {
  let selfCount = node.color === BLACK ? 1 : 0;
  const rightCount = node.right ? blackNodes(node.right) : 1;
  const leftCount = node.left ? blackNodes(node.left) : 1;
  if (rightCount === leftCount) return rightCount + selfCount;
  return -1;
}

function printTree(tree: RedBlackTree<any>, text = '') {
  if (text) console.log('--->', text);
  console.log(ptree(tree.root, {
    formatter: n => (n ? `${String(n.value)} ${n.color ? 'B' : 'R'}` : ''),
    getChildren: n => {
      if (!n) return null;
      if (!n.left && !n.right) return null;
      return [n.left, n.right];
    }
  }));
} 

interface Tools {
  check: (msg?: string) => void;
}

function test(
  title: string,
  task: (tree: RedBlackTree, tools: ReturnType<typeof getHelpers> & Tools) => void,
  print = false,
) {
  tape(`Test RedBlackTree: ${title}`, t => {

    const tools = getHelpers(t);
    const tree = new RedBlackTree();

    function check(msg = '') {
      const { root } = tree;
      if (!root) return;
      t.ok(!redParentChild(root), 'A red node does not have a red child: ' + msg);
      t.ok(blackNodes(root) > 0, 'Every paths has same number of black nodes: ' + msg);
    }

    task(tree, { ...tools, check });

    if (print) {
      printTree(tree);
    }

    t.end();
  });
}

test('Insertion', (tree, { check }) => {
  tree.add(13);
  check();

  tree.add(8);
  tree.add(17);
  check();

  tree.add(1, 11, 15, 25);
  check();

  tree.add(6, 22, 27);
  check();
});

test('Insertion with case 56', (tree, { check }) => {
  tree.add(40, 20, 50, 10, 30, 5);
  check();
  tree.add(7);
  check();
});

test('Remove a root node with no children', (tree, { check, nlr }) => {
  tree.remove(1);
  tree.add(40);
  tree.remove(40);
  nlr(tree.root, null, null, null);
});

test('Remove a root node with only one child', (tree, { check, nlr }) => {
  tree.add(40, 60);
  tree.remove(40);
  nlr(tree.root, 60, null, null)
  tree.add(20);
  tree.remove(60);
  nlr(tree.root, 20, null, null);
});

test('Remove a root with two leaf children', (tree, { check, nlr }) => {
  tree.add(40, 20, 60);
  tree.remove(40);
  nlr(tree.root, 20, null, 60);
  check();
});

test('Remove a red leaf node', (tree, { check, nlr }) => {
  tree.add(10, 5, 30, -5, 7, 20, 38, 32, 41);
  tree.add(35);
  tree.remove(35);
  check();
});

test('Remove a black node with one child', (tree, { check, nlr }) => {
  tree.add(10, 5, 30, -5, 7, 20, 38, 32, 41, 35);
  tree.remove(32);
  nlr(tree.root?.right!, 38, 35, 41);
  check();
});

test('Remove a black leaf node with case 4: parent is red and sibling is black', (tree, { check, nlr }) => {
  tree.add(10, -10, 30, 20, 38, 21, 39);
  tree.remove(21, 39);
  check();
});

test('Remove a black leaf node with case 5: only close nephew is red', (tree, { check }) => {
  tree.add(40, 20, 50, 7, 30, 10);
  tree.remove(30);
  check();

  tree.debug = true;
  tree.remove(50);
  check('Remove a black leaf node with case 3: sibling is red');
}, true);

test('Remove a black leaf node with case 6: nephews are red', (tree, { check }) => {
  tree.add(40, 20, 50, 7, 30, 5, 10);
  tree.remove(30);
  check();
});

test('Random test', (tree, { check }) => {
  const numbers: number[] = [];
  for (let i = 0; i < 20; i++) {
    numbers.push(i);
  }
  shuffleArray(numbers);
  for (let i = 0; i < numbers.length; i++) {
    tree.add(numbers[i]);
    check();
  }
  shuffleArray(numbers);
  for (let i = 0; i < numbers.length; i++) {
    tree.remove(numbers[i]);
    check();
  }
});

function shuffleArray(array: unknown[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}