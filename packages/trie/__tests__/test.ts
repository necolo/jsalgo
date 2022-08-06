import tape from 'tape';
import Trie from '../src';

tape('Test', t => {
  const trie = new Trie([
    'to',
    'tea',
    'ted',
    'ten',
    'A',
    'inn',
  ]);

  t.deepEqual(trie.find('te'), ['tea', 'ted', 'ten']);
  t.deepEqual(trie.find('t'), ['to', 'tea', 'ted', 'ten']);
  t.deepEqual(trie.find('to'), ['to']);
  t.deepEqual(trie.find('tea'), ['tea']);
  t.deepEqual(trie.find('teab'), []);
  t.deepEqual(trie.find('A'), ['A']);
  t.deepEqual(trie.find('b'), []);
  t.deepEqual(trie.find('i'), ['inn']);

  trie.addWord('inb');
  t.deepEqual(trie.find('i'), ['inn', 'inb']);

  t.end();
});