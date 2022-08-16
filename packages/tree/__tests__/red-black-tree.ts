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
  check: () => void;
}

function test(
  title: string,
  task: (tree: RedBlackTree, tools: ReturnType<typeof getHelpers> & Tools) => void,
  print = false,
) {
  tape(`Test RedBlackTree: ${title}`, t => {

    const tools = getHelpers(t);
    const tree = new RedBlackTree();

    function check() {
      const { root } = tree;
      if (!root) return;
      t.ok(!redParentChild(root), 'A red node does not have a red child');
      t.ok(blackNodes(root) > 0, 'Every paths has same number of black nodes');
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

  tree.debug = true;
  tree.add(7);
  check();
});