import tape = require('tape');
import DoubleLinkedList, { DoubleLinkedListNode } from '.';

function isCorrectLinked<T, N extends DoubleLinkedListNode<T>>(
  n: N,
  prev: N | null,
  next: N | null,
) {
  if (prev && (n.prev !== prev || prev.next !== n)) {
    return false;
  }
  if (next && (n.next !== next || next.prev !== n)) {
    return false;
  }
  return true;
}

tape('test serialize: toArray, fromArray, toString', (t) => {
  const list = new DoubleLinkedList();

  // test fromArray & toString
  list.fromArray([1, 2, 3, 4, 5]);
  t.equals(list.toString(), '[1,2,3,4,5]');
  t.equals(list.head?.value, 1);
  t.equals(list.tail?.value, 5);

  // test toArray
  const arr = list.toArray()
  arr.forEach((v, i) => t.equals(v, i + 1));

  t.end();
});

tape('test add: push & unshift', t => {
  const list = new DoubleLinkedList();
  list.fromArray([1, 2, 3, 4, 5]);

  // test push
  list.push(6);
  t.equals(list.tail?.value, 6);
  t.ok(isCorrectLinked(list.tail!, list.tail!.prev, list.tail!.next));

  // test unshift
  const prevHead = list.head;
  list.unshift(0);
  t.equals(list.head?.value, 0);
  t.equals(list.head!.next, prevHead);
  t.ok(isCorrectLinked(list.head!, null, prevHead));

  t.end();
});

tape('test delete: pop & remove & clear', t => {
  const list = new DoubleLinkedList();
  list.fromArray([1, 2, 3, 4, 5]);

  // test pop
  const popValue = list.pop();
  t.equals(list.tail!.value, 4);
  t.equals(list.tail!.next, null);
  t.equals(popValue, 5);

  // test remove the middle
  list.fromArray([1, 2, 3, 4, 5]);
  list.remove(3);
  t.equals(list.length, 4);
  const node2 = list.head!.next!;
  t.equals(node2.value, 2);
  t.equals(node2.next!.value, 4);
  t.equals(node2.next!.prev!.value, 2);

  // test remove the head
  list.remove(1);
  t.equals(list.length, 3);
  t.equals(list.head!.value, 2);
  t.equals(list.head!.prev, null);

  // test remove the tail
  list.remove(5);
  t.equals(list.tail!.value, 4);
  t.equals(list.tail!.next, null);
  t.equals(list.length, 2);

  // test remove un-exist node
  list.remove(999);
  t.equals(list.length, 2);
  t.equals(list.toString(), '[2,4]');

  // test clear
  list.clear();
  t.equals(list.head, null);
  t.equals(list.tail, null);
  t.equals(list.length, 0);

  t.end();
});

tape('test search: find & some & has', t => {
  const list = new DoubleLinkedList();
  const arr = [1, 2, 3, 4, 5];
  list.fromArray(arr); 

  // test find
  for (let i = 0; i < list.length; i++) {
    const findValue = arr[i];
    const node = list.find(findValue);
    t.equals(node!.value, findValue);
    t.ok(list.some(v => v === findValue));
    t.ok(list.has(findValue));
  }

  // test find un-exist
  t.equals(list.find(99), null);
  t.notOk(list.some(v => v === 99));
  t.notOk(list.has(99));

  t.end();
});

tape('test traverse: forEach', t => {
  const list = new DoubleLinkedList();
  list.fromArray([1, 2, 3, 4, 5]); 
  list.forEach((n, i) => {
    t.equals(n, i + 1);
  });
  t.end();
});

tape('test reverse', t => {
  const list = new DoubleLinkedList();
  list.fromArray([1, 2, 3, 4, 5]); 
  list.reverse();
  t.equals(list.toString(), '[5,4,3,2,1]');
  t.end();
});