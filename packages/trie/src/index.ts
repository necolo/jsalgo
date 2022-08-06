class TrieNode {
  public children: Record<string, TrieNode> = {};
  public isLeaf = true;
  constructor(public prefix: string) { }

  addWord(word: string) {
    if (!word.length) {
      return;
    }
    this.isLeaf = false;
    const firstLetter = word[0];
    if (!this.children[firstLetter]) {
      this.children[firstLetter] = new TrieNode(this.prefix + firstLetter);
    }
    const child = this.children[firstLetter];
    child.addWord(word.slice(1));
  }

  getChild(letter: string) {
    return this.children[letter];
  }

  getRestWords(): string[] {
    if (this.isLeaf) {
      return [this.prefix];
    }
    return Object.values(this.children)
      .map(child => child.getRestWords())
      .reduce((all, curr) => all.concat(curr), [] as string[]);
  }
}

export class Trie {
  public root = new TrieNode('');

  constructor(words: string[] = []) {
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      this.root.addWord(word);
    }
  }

  addWord(word: string) {
    this.root.addWord(word);
  }

  // get next words from prefix
  find(prefix: string): string[] {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const child = node.getChild(prefix[i]);
      if (!child) return [];
      node = child;
      if (node.prefix === prefix) break;
    }
    return node.getRestWords();
  }
}

export default Trie;