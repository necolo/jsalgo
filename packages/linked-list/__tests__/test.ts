import tape from 'tape';
import LinkedList from '../src';

tape('Test linked list', (t) => {
    const list = new LinkedList();
    list.fromArray([1, 2, 3, 4, 5]);

    t.equals(list.toString(), '[1,2,3,4,5]');
    t.equal(list.length, 5);

    list.append(6);
    t.equals(list.tail?.value, 6);
    t.equal(list.length, 6);

    list.remove(3);
    t.equals(list.toString(), '[1,2,4,5,6]');
    t.equal(list.length, 5);

    list.reverse();
    t.equals(list.toString(), '[6,5,4,2,1]');
    t.equals(list.findPrev(4), 5);

    t.equals(list.findPrev(0), null, 'can\t find the element from the list');
    t.equals(list.findPrev(6), null, 'the parent of the head should be null');
    t.equals(list.findPrev(1), 2, 'getParent(1) from [6, 5, 4, 2, 1] should be 2');
    t.equals(list.find(v => v === 6), 6, 'can search the node 6');

    t.equals(list.has(1), true);
    t.equals(list.has(6), true);
    t.equals(list.has(4), true);
    t.equals(list.has(3), false);

    list.remove(1);
    list.remove(2);
    list.remove(4);
    list.remove(5);
    list.remove(6);
    t.equals(list.head, null);
    t.equals(list.tail, null);
    t.equal(list.length, 0);

    list.fromArray([1, 2]);
    t.equal(list.length, 2);
    list.unshift();
    t.equal(list.length, 1);
    t.equals(list.head?.value, 2, 'unshift [1, 2], head should be 2');
    t.equals(list.tail?.value, 2, 'unshift [1, 2], tail should be equal to head');
    list.unshift();
    t.equals(list.length, 0);
    t.equals(list.head, null, 'unshift [2]');
    t.equals(list.tail, null, 'unshift [2]');

    list.fromArray([1, 2, 3]);
    list.pop();
    t.equals(list.length, 2);
    t.equals(list.head?.value, 1, 'pop [1, 2, 3], head should be 1');
    t.equals(list.tail?.value, 2, 'pop [1, 2, 3], tail should be 2');
    list.pop();
    t.equal(list.length, 1);
    t.equals(list.tail!.value, 1, 'pop [1, 2], tail should be 1');
    list.pop();
    t.equals(list.head, null, 'pop [1], head should be null');
    t.equals(list.tail, null, 'pop [1], head should be null');
    t.equals(list.length, 0);

    t.end();
});

tape('Test linked list reverse', t => {
    const list = new LinkedList();
    list.fromArray([1, 2]);
    list.reverse();
    t.equals(list.toString(), '[2,1]');

    list.fromArray([1]);
    list.reverse();
    t.equals(list.head?.value, 1);
    t.equals(list.tail?.value, 1);

    t.end();
});