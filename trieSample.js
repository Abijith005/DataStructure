class TrieNode{
    constructor(){
        this.children=new Map()
        this.isEndOfWord=false
    }
}

class Trie{
    constructor(){
        this.root=new TrieNode()
    }

    insertWord(word){
        for (let i = 0; i < word.length; i++) {
this.inserSubString(i,word)
        }
    }

    inserSubString(index,word){
        let node=this.root
        for(let i=index;i<word.length;i++){
            if (!node.children.has(word[i])) {
                node.children.set(word[i],new TrieNode())
            }
            node=node.children.get(word[i])
        }
        node.isEndOfWord=true
    }

    search(word){
        let node= this.root
        for (let i = 0; i < word.length; i++) {
            if (!node.children.has(word[i])) {
                return false
            }
            node=node.children.get(word[i])
        }
        return node.isEndOfWord
    }

    startsWith(prefix){
        let node=this.root
        for (let i = 0; i < prefix.length; i++) {

            if (!node.children.has(prefix[i])) {
                return false
            }
            node=node.children.get(prefix[i])
        }
        return true;
    }
}

const t=new Trie()
t.insertWord("mannan")
console.log(t.search("annan"));
console.log(t.startsWith("map"));
