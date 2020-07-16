class TreeNode{
    constructor(){
        this.children = [null]*26
        this.isEndWord = false 
    }
}

class Trie{
    constructor(){
        this.root = this.getNode()
    }

    // Helper methods
    getNode(){
        return new TreeNode()
    }

    // hash key gen
    _charToIndex(ch){
        var offset = 'a'
        return ch.charCodeAt(0) - offset.charCodeAt(0)
    }

    insert(word){
        // Inserts a word into the trie.
        var pCrawl = this.root // getting root object
        var lenght = word.lenght

        for (let i = 0; i < word.length; i++) {
            var index = this._charToIndex(word[i]) // getting hash key for current char of string
            
            // if key is not preexist, create it
            if (!(pCrawl.children[index])) {
                pCrawl.children[index] = new TreeNode()
                
            }
            pCrawl = pCrawl.children[index] // keep updating pCrawl

        }

        pCrawl.isEndWord = true // mark last node as leaf

    }

    search(word){
        /** Returns True if the word is in the trie. */
        var pCrawl = this.root
        var length = word.length

        for (let i = 0; i < word.length; i++) {
            var index = this._charToIndex(word[i])
            if ( !(pCrawl.children[i]) ) { // if hash keys are not present in children array, return false 
                return false
                
            }
            pCrawl = pCrawl.children[i] // traverse till last node

        }

        if ( !(pCrawl) && (pCrawl.isEndWord) ) {
            return true
        }

        return false
    }

    startsWith(){
        //
    }
}


const fruits = new Trie()
fruits.insert("apple")
fruits.insert("bananna")
fruits.insert("orange")

console.log( fruits.search("apple") )


