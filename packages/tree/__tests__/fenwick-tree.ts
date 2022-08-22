import tape from 'tape';
import { FenwickTree } from '../src/fenwick-tree';

tape('Test fenwich tree: build', t => {
  const inputs = [3, 2, -1, 6, 5, 4, -3, 3, 7, 2, 3];
  const tree = new FenwickTree(
    inputs,
    (a, b) => a + b,
    0,
  );

  t.equal(tree.tree.length, inputs.length + 1, 'tree size is correct');
  t.deepEqual(tree.tree, [0, 3, 5, -1, 10, 5, 9, -3, 19, 7, 9, 3], 'tree is build correct');

  const queryResult = [3, 5, 4, 10, 15, 19, 16, 19, 26, 28, 31];
  for (let i = 0; i < queryResult.length; i++) {
    t.equal(tree.query(i), queryResult[i], `Query index ${i + 1} is correct`);
  }

  tree.update(3, 9 - inputs[3]); // increase to 9
  t.deepEqual(tree.tree, [0, 3, 5, -1, 13, 5, 9, -3, 22, 7, 9, 3], 'update is correct');

  t.end();
});