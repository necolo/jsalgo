import tape from 'tape';
import PriorityQueue from '../src';

tape('Test priority queue', t => {
  const queue = new PriorityQueue();
  queue.add('b', 4);
  queue.add('a', 5);
  queue.add('c', 3);
  queue.add('e', 1);
  queue.add('d', 2);

  t.equal(queue.length, 5);
  t.equal(queue.poll(), 'a');
  t.equal(queue.poll(), 'b');
  t.equal(queue.poll(), 'c');
  t.equal(queue.poll(), 'd');
  t.equal(queue.poll(), 'e');
  t.equal(queue.length, 0);

  t.end();
});