export default class SinglyLinkedList {
  constructor() {
    this.clear();
  }

  add(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  getFirstNode() {
    return this.head;
  }

  getNextNode(node) {
    return node.next;
  }

  dumpList() {
    let node = this.head;
    while (node !== null) {
      console.log(node);
      node = this.getNextNode(node);
    }
  }

  removeFirstNode() {
    if (this.length !== 0) {
      this.head = this.getNextNode(this.head);
      this.length--;
    } else {
      console.log("List empty");
    }
  }

  removeLastNode() {
    if (this.length !== 0) {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else if (this.length === 2) {
        this.head.next = null;
        this.tail = this.head;
      } else {
        let node = this.head;
        while (node.next.next !== null) {
          console.log(node);
          node = node.next;
        }
        node.next = null;
        this.tail = node;
      }
      console.log("Tail:", this.tail);
      this.length--;
    } else {
      console.log("List empty");
    }
  }

  removeNode(node) {
    if (this.length !== 0) {
      if (this.head === node) {
        console.log("The node was the head!");
        this.head = this.head.next;
        if (this.length === 1) {
          this.tail = null;
        }
        this.length--;
      } else {
        let pn = null; //Previous Node
        let cn = this.head; //Current Node

        while (cn !== null) {
          if (cn === node) {
            console.log("Node found!");
            pn.next = cn.next;
            if (cn === this.tail) {
              this.tail = pn;
            }
            this.length--;
            return;
          }
          console.log("Not the node...");
          pn = cn;
          cn = cn.next;
        }
      }
    } else {
      console.log("List empty");
    }
  }

  getLastNode() {
    return this.tail;
  }

  getNodeWith(data) {
    if (this.length !== 0) {
      let node = this.head;
      while (node !== null) {
        if (node.data === data) {
          console.log("Node with data found!");
          return node;
        }
        console.log("Not this node...");
        node = node.next;
      }
    } else {
      console.log("List empty");
    }
  }

  remove(data) {
    this.removeNode(this.getNodeWith(data));
  }

  size() {
    return this.length;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
