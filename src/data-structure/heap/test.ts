import tape from 'tape';
import { MinHeap, MaxHeap, Heap } from '.';

function randomInt(min: number, max: number) {
  const _min = Math.ceil(min);
  const _max = Math.floor(max);
  return Math.floor(Math.random() * (_max - _min) + _min);
}

function randomArray(len: number) {
  const arr = new Array(len);
  for (let i = 0; i < len; i ++) {
    let num = randomInt(0, len * 2);
    while(arr.indexOf(num) >= 0) {
      num = randomInt(0, len * 2);
    }
    arr[i] = num;
  }
  return arr;
}

tape('Test multiple max heaps', t => {
  const heap = new MaxHeap();

  const testTimes = 99;
  for (let i = 0; i < testTimes; i++) {
    const arr = randomArray(randomInt(5, 30));
    heap.fromArray(arr);
    try {
      heap.validate();

      heap.poll();
      heap.validate();

      heap.remove(arr[4]);
      heap.validate();

      t.pass('validated heap');
    } catch (e) {
      console.log('remove', arr[4]);
      console.log('original', JSON.stringify(arr));
      console.log('heap', heap.toString());
      t.error(e);
    }
  }

  t.end();
});

tape('Test max heap', t => {
  const heap = new MaxHeap();
  heap.fromArray([6,2,7,9,0,13,11,12]);
  heap.poll();
  heap.remove(0);
  try {
    heap.validate();
  } catch (e) {
    console.error(e);
  }
  t.end();
})