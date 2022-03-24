class TrieNode {
  value: string;
  children: { [key: string]: TrieNode } = {};
  isEndOfWord: boolean = false;

  constructor(char: string) {
    this.value = char;
  }

  hasChild(char: string) {
    return !!this.children[char];
  }

  hasAnyChild() {
    return this.getChildren().length !== 0;
  }

  addChild(char: string) {
    this.children[char] = new TrieNode(char);
  }

  removeChild(char: string) {
    delete this.children[char];
  }

  getChild(char: string) {
    return this.children[char];
  }

  getChildren() {
    const arr = [];

    for (const key in this.children) {
      if (Object.prototype.hasOwnProperty.call(this.children, key)) {
        const element = this.children[key];
        arr.push(element);
      }
    }

    return arr;
  }
}

class Trie {
  private root = new TrieNode('');

  insert(word: string) {
    let current = this.root;
    word.split('').forEach((char) => {
      if (!current.hasChild(char)) {
        current.addChild(char);
      }
      current = current.getChild(char);
    });
    (current as TrieNode).isEndOfWord = true;
  }

  contains(word: string): boolean {
    let current = this.root;
    const chars = word.split('');
    for (let index = 0; index < chars.length; index++) {
      const char = chars[index];

      if (!current.hasChild(char)) return false;

      current = current.getChild(char);
    }

    return current.isEndOfWord;
  }

  traverse() {
    this.recursiveTraverse(this.root);
  }

  private recursiveTraverse(root: TrieNode) {
    console.log(root.value);
    root.getChildren().forEach((child) => this.recursiveTraverse(child));
  }

  remove(word: string) {
    this.recursiveRemove(this.root, word, 0);
  }

  private recursiveRemove(root: TrieNode, word: string, index: number) {
    if (index === word.length) {
      root.isEndOfWord = false;
      return;
    }

    const char = word.charAt(index);
    const child = root.getChild(char);
    if (!child) return;

    this.recursiveRemove(child, word, index + 1);

    if (!child.hasAnyChild() && !child.isEndOfWord) {
      root.removeChild(char);
    }
  }

  findWords(prefix: string) {
    const matchedWords: string[] = [];

    const lastNode = this.findLastNodeOf(prefix);
    if (!lastNode) return matchedWords;
    this.recursiveFindWords(lastNode, prefix, matchedWords);

    return matchedWords;
  }

  private findLastNodeOf(prefix: string) {
    let current = this.root;
    const chars = prefix.split('');
    for (let index = 0; index < chars.length; index++) {
      const child = current.getChild(chars[index]);
      if (!child) return null;

      current = child;
    }

    return current;
  }

  private recursiveFindWords(
    root: TrieNode,
    currentWord: string,
    matchedWords: string[]
  ) {
    if (root.isEndOfWord) {
      matchedWords.push(currentWord);
    }

    const children = root.getChildren();
    children.forEach((child) => {
      this.recursiveFindWords(child, currentWord + child.value, matchedWords);
    });
  }
}

const trieExample = () => {
  const trie = new Trie();
  trie.insert('car');
  trie.insert('care');
  trie.insert('careful');
  trie.insert('card');
  trie.insert('egg');

  // console.log(trie.contains('a') ? 'yes' : 'no');
  // console.log(trie.contains('word') ? 'yes' : 'no');
  // console.log(trie.contains('wo') ? 'yes' : 'no');

  // trie.traverse();
  // trie.remove('car');

  // console.log(trie.contains('car'));
  // console.log(trie.contains('care'));

  const matchedWords = trie.findWords('car');
  console.log(matchedWords);
};

trieExample();
