function HashTable() {
  this.SIZE = 16;

  /*
      the array will be instantiated as [undefined, undefined....]
      pop() and push() shouldn't be used on the storage
  */
  this.storage = new Array(this.SIZE);
}

/*
    Stores a value in the storage array
    hint: use the hash function to determine where in the array to store the value
*/
HashTable.prototype.set = function(key, value) {
  if (typeof key !== "string") key = key.toString();

  const storageKey = hashCode(key, this.SIZE);

  this.storage[storageKey] === undefined
    ? this.storage[storageKey] = value
    : this.storage[storageKey] instanceof Array
      ? this.storage[storageKey] + value
      : this.storage[storageKey] = [this.storage[storageKey], value]

  return this.storage;
};

/*
    Return a previously stored value
*/ 
HashTable.prototype.get = function(key) {
  if (typeof key !== "string") key = key.toString();
  const storageKey = hashCode(key, this.SIZE);

  if (this.storage[storageKey] instanceof Array) {
    const storedArray = this.storage[storageKey];
    return storedArray[storedArray.length-1];
  }

  return this.storage[storageKey];
};

/*
    Returns and removes a key from the hash table
*/ 
HashTable.prototype.remove = function(key) {
  let storedValue;

  if (typeof key !== "string") key = key.toString();
  const storageKey = hashCode(key, this.SIZE);

  if (this.storage[storageKey]) {
    if (this.storage[storageKey] instanceof Array) {
      const storageBucket = this.storage[storageKey];
      storedValue = storageBucket[storageBucket.length-1];
      delete storageBucket[storageBucket.length-1];
    } else {
      storedValue = this.storage[storageKey];
      delete this.storage[storageKey];
    }
  }

  return storedValue;
};

/*
    Returns a number between 0 and size that is unique* and generated from the the inputted string
    Used to pick "Bucket"
*/ 
function hashCode(string, size){
  let hash = 0;
  if (string.length == 0) return hash;
  for (let i = 0; i < string.length; i++) {
    const letter = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + letter;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash) % size ;
}

/*
    Declare a new Hash Table instance
*/ 
const myHashTable = new HashTable();

/*
    See that it's filled with empty slots to begin with
*/ 
console.log(
  myHashTable
);

/*
    Set items on the table 
*/ 
console.log(
  myHashTable.set(2, 2)
  );

console.log(
  myHashTable.set(2, 6)
  );

console.log(
  myHashTable.set('25', 25)
  );

/*
    Get items
*/ 
console.log(
  myHashTable.get(2)
)

console.log(
  myHashTable.get('25')
)

console.log(
  myHashTable.get('should be undefined')
)

/*
    Remove items
*/ 
console.log(
  myHashTable.remove('25')
)

console.log(
  myHashTable
)

console.log(
  myHashTable.remove(2)
)

console.log(
  myHashTable
)

