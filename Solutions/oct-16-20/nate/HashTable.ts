class HashTable<T> {
  private readonly SIZE:number = 16;
  private storage: { [key:number]: T | T[] } = {};
  
  // ---- Stores a value in the storage array
  set(key:string, value:T): void { 
    const storageKey = this.hashCode(key, this.SIZE);
    const bucket = this.storage[storageKey];

    !bucket ? this.storage[storageKey] = value 
      : bucket instanceof Array ? bucket.push(value) 
      : this.storage[storageKey] = [bucket, value];
  };
  
  // ---- Return a previously stored value 
  get(key:string) {
    const storageKey = this.hashCode(key, this.SIZE);
    const bucket = this.storage[storageKey];

    return bucket instanceof Array ? bucket[bucket.length-1] : undefined
  };

  // ---- Returns and removes a key from the hash table 
  remove(key:string) {
    const storageKey = this.hashCode(key, this.SIZE);
    const bucket = this.storage[storageKey];
    const item = bucket instanceof Array ? bucket.pop() : undefined;

    return item;
  };
  
  // ---- Hashing Function 
  private hashCode(string:string, size:number):number {
    let hash = 0;
    if (string.length == 0) return hash;
    for (let i = 0; i < string.length; i++) {
      const letter = string.charCodeAt(i);
      hash = ((hash << 5) - hash) + letter;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash) % size ;
  }
}
        


/*
    Declare a new Hash Table instance
*/ 
const myHashTable = new HashTable();

/*
    See that it's filled with empty slots to begin with
*/ 
console.log("myHashTable (should be filled with empty slots): ", myHashTable);

/*
    Set items on the table 
*/ 
myHashTable.set("25", 25)
myHashTable.set("2", 6)
myHashTable.set("2", 2)
console.log("myHashTable (should contain -> 25, 6, 2): ", myHashTable);

/*
    Get items
*/ 
console.log(
  myHashTable.get("2")
)

console.log(
  myHashTable.get("25")
)

console.log(
  myHashTable.get("should be undefined")
)

/*
    Remove items
*/ 
console.log(
  myHashTable.remove("25")
)

console.log(
  myHashTable
)

console.log(
  myHashTable.remove("2")
)

console.log(
  myHashTable
)

