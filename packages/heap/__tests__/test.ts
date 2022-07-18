import tape from 'tape';
import Heap, { MaxHeap } from '../src';

tape('Test maximum heap', t => {
  const list: number[] = [];
  const heap = new MaxHeap();
  const testCount = 10;
  for (let i = 0; i < testCount; i++) {
    const v = Math.round(Math.random() * testCount);
    list.push(v);
    heap.add(v);
  }

  const sortedList = list.slice().sort((a, b) => b - a);
  for (let i = 0; i < sortedList.length; i++) {
    const v1  = sortedList[i];
    const v2 = heap.poll();
    t.equal(v1, v2);
  }

  t.end();
});