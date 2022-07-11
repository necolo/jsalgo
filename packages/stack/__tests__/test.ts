import tape from 'tape';
import Stack from '../src';

tape('Test stack', (t) => {
  const stack = new Stack();

  t.equals(stack.isEmpty(), true);
  t.equals(stack.peek(), null);

  stack.add(1);
  stack.add(2);
  t.equals(stack.peek(), 2);
  stack.remove();
  t.equals(stack.peek(), 1);

  stack.remove();
  t.equals(stack.peek(), null);
  t.equals(stack.isEmpty(), true);

  stack.remove();

  stack.add(3);
  stack.add(4);
  t.equals(stack.peek(), 4);

  t.end();
});