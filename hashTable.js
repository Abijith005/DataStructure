// // class HashTable {
// //     constructor() {
// //       this.values = {};
// //       this.length =  0;
// //       this.size =  0;
// //     }
  
// //     calculateHash(key) {
// //       return key.toString().length % this.size;
// //     }
  
// //     add(key, value) {
// //       const hash = this.calculateHash(key);
// //       if (!this.values.hasOwnProperty(hash)) {
// //         this.values[hash] = {};
// //       }
// //       if (!this.values[hash].hasOwnProperty(key)) {
// //          this.length++;
// //       }
// //       this.values[hash][key] = value;
// //     }
  
// //     search(key) {
// //        const hash = this.calculateHash(key);
// //        if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
// //          return this.values[hash][key];
// //        } else {
// //          return null;
// //        }
// //     }
// //   }
  
// //   //create object of type hash table
// //   const ht = new HashTable();
// //   //add data to the hash table ht
// //   ht.add("Canada", "300");
// //   ht.add("Germany", "100");
// //   ht.add("Italy", "50");
// //   ht.add("Canada", "350");
  
// //   //search
// //   console.log(ht.search("Canada"));

// // HashTable class
// class HashTable {
//   constructor() {
//     this.table = {};
//   }

//   // Hash function
//   hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash += key.charCodeAt(i);
//     }
//     return hash;
//   }

//   // Add a key-value pair to the hash table
//   add(key, value) {
//     const hashKey = this.hash(key);
//     if (!this.table.hasOwnProperty(hashKey)) {
//       this.table[hashKey] = {};
//     }
//     this.table[hashKey][key] = value;
//   }

//   // Get the value associated with a given key
//   get(key) {
//     const hashKey = this.hash(key);
//     if (this.table.hasOwnProperty(hashKey) && this.table[hashKey].hasOwnProperty(key)) {
//       return this.table[hashKey][key];
//     } else {
//       return undefined;
//     }
//   }

//   // Remove a key-value pair from the hash table
//   remove(key) {
//     const hashKey = this.hash(key);
//     if (this.table.hasOwnProperty(hashKey) && this.table[hashKey].hasOwnProperty(key)) {
//       delete this.table[hashKey][key];
//       // Clean up the hash key if the bucket is empty
//       if (Object.keys(this.table[hashKey]).length === 0) {
//         delete this.table[hashKey];
//       }
//     }
//   }

//   // Check if a key exists in the hash table
//   contains(key) {
//     const hashKey = this.hash(key);
//     return this.table.hasOwnProperty(hashKey) && this.table[hashKey].hasOwnProperty(key);
//   }

//   // Get all keys in the hash table
//   keys() {
//     const keys = [];
//     for (const hashKey in this.table) {
//       for (const key in this.table[hashKey]) {
//         keys.push(key);
//       }
//     }
//     return keys;
//   }

//   // Get all values in the hash table
//   values() {
//     const values = [];
//     for (const hashKey in this.table) {
//       for (const key in this.table[hashKey]) {
//         values.push(this.table[hashKey][key]);
//       }
//     }
//     return values;
//   }
// }

// // Example usage
// const myHashTable = new HashTable();
// myHashTable.add("John", 25);
// myHashTable.add("Jane", 30);
// myHashTable.add("Bob", 35);
// myHashTable.add("Bbo", 38);


// console.log(myHashTable.get("Bbo")); // Output: 25
// console.log(myHashTable.contains("Jane")); // Output: true
// console.log(myHashTable.keys()); // Output: ["John", "Jane", "Bob"]
// console.log(myHashTable.values()); // Output: [25, 30, 35]

// myHashTable.remove("Jane");
// console.log(myHashTable.contains("Jane")); // Output: false

// seperate chaining


class hashTable{
  constructor(){
    this.table={};
  }

  hashCode(key){
let hashKey=0;
for (let i = 0; i < key.length; i++) {
  hashKey+=key.charCodeAt(i);
}
return hashKey;
  }

  add(key,value){
    const hashKey=this.hashCode(key);
    if (!this.table.hasOwnProperty(hashKey)) {
      this.table[hashKey]={};
    }
    this.table[hashKey][key]=value
  }

  search(key){
    const hashKey=this.hashCode(key);
    if (this.table.hasOwnProperty(hashKey)&&this.table[hashKey].hasOwnProperty(key)) {
      return this.table[hashKey][key]
    }
    else{
      return undefined;
    }
  }

  remove(key){
const hashKey=this.hashCode(key);
if (this.table.hasOwnProperty(hashKey)&&this.table[hashKey].hasOwnProperty(key)) {
  delete this.table[hashKey][key]
}
if (Object.keys(this.table[hashKey]).length===0) {
  delete this.table[hashKey]
}
  }

  displayKeys(){
    const keys=[];
    for (const hashKey in this.table) {
      for (const key in this.table[hashKey]) {

        keys.push(key);

      }
    
    }

    return keys;
  }

  displayValues(){
    const values=[];
    for (const hashKey in this.table) {
     for (const key in this.table[hashKey]) {
      values.push(this.table[hashKey][key])
     }
    }
    return values;
  }
}

const list=new hashTable()
list.add("abijith",25)
list.add("adwaith",26)
list.add("divin",26)
list.add("teveeto",26)
list.add("dinvi",55)
console.log(list.displayKeys());
console.log(list.displayValues());
list.remove("divin")
console.log(list.displayKeys());
console.log(list.displayValues());
console.log(list.search("abijith"))



//chaining (linked list)
//  class hashMap{
//   constructor(){
//     this.size=10;
//     this.table=new Array(this.size);
//   }

//   hashCode(key){
//     let hashKey=0;
//     for (let i = 0; i < key.length; i++) {
//       hashKey+=key.charCodeAt(i);
//     }
//     return hashKey;
//   }
// add(key,value){
//   const hashKey=this.hashCode(key)
//   const index=hashKey%this.size
//   if (!this.table[index]) {
//     this.table[index]=[]
//   }
//   this.table[index].push({key,value})
// }

// search(key){
//   const hashKey=this.hashCode(key);
//   const index=hashKey%this.size;
//   if (this.table[index]) {
//     for (const item of this.table[index]) {
//       if (key==item.key) {
//         return item.value;
//       }
//     }
    
//   }
// }

//  }

//  const list=new hashMap()
// list.add("abijith",25)
// list.add("adwaith",26)
// list.add("divin",26)
// list.add("teveeto",26)
// list.add("dinvi",55)
// list.remove("abijith")
// console.log(list.search("abijith"))