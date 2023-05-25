class TrieNode {
    constructor() {
      this.children = new Map();
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
        for (let i = word.length; i >0 ; i--) {
            this.subStringInsertion(i,word)
        }
    }

    subStringInsertion(index,word){
        let node = this.root;
        for (let i = 0; i < index; i++) {
          let char = word[i];
          if (!node.children.has(char)) {
            node.children.set(char, new TrieNode());
          }
          node = node.children.get(char);
        }
        node.isEndOfWord = true;
    }
  
    search(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!node.children.has(char)) {
          return false;
        }
        node = node.children.get(char);
      }
      return node.isEndOfWord;
    }
  
    startsWith(prefix) {
      let node = this.root;
      for (let i = 0; i < prefix.length; i++) {
        let char = prefix[i];
        if (!node.children.has(char)) {
          return false;
        }
        node = node.children.get(char);
      }
      return true;
    }

    suggession(char){
      let current=this.root
      let res=[]
     for (let i = 0; i < char.length; i++) {
      if (!current.children.has(char[i])) {
        return null
      }
      current=current.children.get(char[i])
     }
     while (current.children.size>0) {
      for (const [word,child] of current.children) {
        char+=word
        if (current.isEndOfWord) {
          res.push(char)
        }            
        current=current.children.get(word)
      }
    }
     return res

     
    }
  }
  

  const list=new Trie()
list.insert("mannan")
console.log(list.search("mannan"));
console.log(list.startsWith("an"));
console.log(list.suggession("m"));
