import tape from 'tape';
import HashTable from '.';

tape('Test hash table', (t) => {
    const table = new HashTable();
    table.put('foo', 'bar');
    t.equals(table.has('foo'), true);
    t.equals(table.get('foo'), 'bar');

    table.put('hello', 'world');
    t.equals(table.size(), 2);
    t.equals(table.get('hello'), 'world');
    t.equals(table.has('hello'), true);

    table.remove('hello');
    t.equals(table.has('hello'), false);
    table.remove('hello'); // can handle remove un-exist element
    t.end();
});