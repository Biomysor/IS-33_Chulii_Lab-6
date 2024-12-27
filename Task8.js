console.log("Task 8")
class Storage {
    constructor(items = []) {
      this.items = items;
    }
  
    getItems() {
      return this.items;
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    removeItem(item) {
      this.items = this.items.filter(i => i !== item);
    }
  }
  
  const arr = ["apple", "banana", "mango"];
  const storage = new Storage(arr);
  

  console.log(storage.getItems()); 
  storage.addItem("orange");
  console.log(storage.getItems()); 
  storage.removeItem("banana");
  console.log(storage.getItems()); 
  