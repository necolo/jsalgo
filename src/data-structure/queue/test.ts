import tape from 'tape';
import Queue from '.';

tape('Test queue', (t) => {
    const queue = new Queue();

    t.equals(queue.isEmpty(), true, 'queue is empty after initialized');
    t.equals(queue.peek(), null, 'cant get anything when queue is empty');

    queue.add(1);
    queue.add(2);
    t.equals(queue.peek(), 1, 'peek() is 1 from [1, 2]');
    queue.remove();
    t.equals(queue.peek(), 2);

    queue.remove();
    t.equals(queue.peek(), null);
    t.equals(queue.isEmpty(), true);

    queue.remove();

    queue.add(3);
    queue.add(4);
    t.equals(queue.peek(), 3);

    t.end();
});