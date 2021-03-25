// --- Queues ---

// Linear collection of nodes that adds (enqueues) to the tail and removes (dequeues) from the head

// Think of an line at the bank or an amusement park. First come first serve (FIFO)

// IMPLEMENTATION 
// Use a LL as the underlying Data Structure. Front of queue is tail, back is head
// Requires reference to the head and tail nodes. All other modification disallowed (i.e. cant add to middle)

const LinkedList = require("./LinkedList");

class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  enqueue(data) {
    if (this.hasRoom()) {
      this.queue.addToTail(data);
      this.size++;
    } else {
      throw new Error("Queue is full!");
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const data = this.queue.removeHead();
      this.size--;
      return data;
    } else {
      throw new Error("Queue is empty!");
    }
  }
}

module.exports = Queue;