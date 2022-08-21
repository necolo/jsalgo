import tape from 'tape';
import { SegmentTree } from '../src/segment-tree';

tape('Test segment tree: min', t => {
  const tree = new SegmentTree(
    [2, 5, 1, 4, 9, 3],
    Math.min,
    Infinity,
  );

  t.deepEqual(tree.tree, [1, 1, 3, 2, 1, 4, 3, 2, 5, Infinity, Infinity, 4, 9, Infinity, Infinity], 'tree is build correctly');

  t.equal(tree.query(2, 4), 1)
  t.equal(tree.query(3, 5), 3)
  t.equal(tree.query(0, 1), 2)

  t.end();
});

tape('Test segment tree: sum', t => {
  const tree = new SegmentTree(
    [1, 3, 5, 7, 9, 11],
    (a, b) => a + b,
    0,
  );

  t.deepEqual(tree.tree, [36, 9, 27, 4, 5, 16, 11, 1, 3, 0, 0, 7, 9, 0, 0], 'tree is build correctly');
  t.equal(tree.query(0, 2), 9);
  t.equal(tree.query(0, 1), 4);
  t.equal(tree.query(3, 4), 16);
  t.equal(tree.query(5, 5), 11);
  t.equal(tree.query(2, 3), 12);
  t.end();
});