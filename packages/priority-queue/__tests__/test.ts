import tape from 'tape';
import PriorityQueue from '../src';

tape('Test priority queue', t => {
  const queue = new PriorityQueue();
  queue.add('a', 10),
  queue.add('b', 8);
  queue.add('c', 12);

  t.equals(queue.getMaxPriority(), 12);
  t.equals(queue.length, 3);
  t.equals(queue.poll(), 'c');
  t.equals(queue.poll(), 'a');
  t.equals(queue.poll(), 'b');
  t.equals(queue.length, 0);

  queue.add('a', 10),
  queue.add('b', 8);
  queue.add('c', 12);
  queue.changePriority('b', 15);
  t.equals(queue.poll(), 'b');
  t.equals(queue.poll(), 'c');
  t.equals(queue.poll(), 'a');

  t.end();
});