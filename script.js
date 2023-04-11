
class LinkedList {


constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  
  createNode(value) {
    return {
      value,
      next: null,
    };
  }

  append(value) {
    const newNode = this.createNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = this.createNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  at(index) {
    if (index >= this.size || index < 0) return null;
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  pop() {
    if (!this.head) return null;
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (previousNode) {
      previousNode.next = null;
      this.tail = previousNode;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.size--;
    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentIndex;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    return null;
  }

  toString() {
    let result = '';
    let currentNode = this.head;
    while (currentNode) {
      result += `(${currentNode.value}) -> `;
      currentNode = currentNode.next;
    }
    result += 'null';
    return result;
  }

  insertAt(value, index) {
    if (index > this.size || index < 0) return false;
    if (index === 0) {
      this.prepend(value);
    } else if (index === this.size) {
      this.append(value);
    } else {
      const newNode = this.createNode(value);
      let currentNode = this.head;
      let previousNode = null;
      let currentIndex = 0;
      while (currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
      previousNode.next = newNode;
      newNode.next = currentNode;
      this.size++;
    }
    return true;
  }

  removeAt(index) {
    if (index >= this.size || index < 0) return null;
    if (index === 0) {
      const removedNode = this.head;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      this.size--;
      return removedNode.value;
    } else {
      let currentNode = this.head;
      let previousNode = null;
      let currentIndex = 0;
      while (currentIndex < index) {
        previousNode = currentNode;
  currentNode = currentNode.next;
  currentIndex++;
}
const removedNode = currentNode;
previousNode.next = currentNode.next;
if (!previousNode.next) {
  this.tail = previousNode;
}
this.size--;
return removedNode.value;
    }  }





}



const linkedList = new LinkedList();

linkedList.append(5);
linkedList.append(10);
linkedList.prepend(1);
console.log(linkedList.toString()); 
console.log(linkedList.size); 
console.log(linkedList.head.value); 
console.log(linkedList.tail.value); 
console.log(linkedList.at(1).value); 
console.log(linkedList.pop()); 
console.log(linkedList.toString()); 
console.log(linkedList.contains(5)); 
console.log(linkedList.find(5)); 
linkedList.insertAt(10, 1);
console.log(linkedList.toString()); 
console.log(linkedList.size); 
console.log(linkedList.removeAt(1)); 
console.log(linkedList.toString()); 
console.log(linkedList.size); 
