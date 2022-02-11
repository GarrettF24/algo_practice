//piece of data - val
//reference to next node - next

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  traverse() {
    let current = this.head
    while (current) {
      // console.log(current.val)
      current = current.next
    }
  }
  pop() {
    if (!this.head) return undefined
    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }
  shift() {
    if (!this.head) return undefined
    let currentHead = this.head
    this.head = currentHead.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return currentHead
  }
  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return null
    let counter = 0
    let current = this.head
    while (counter !== idx) {
      current = current.next
      counter++
    }
    return current
  }
  set(idx, val) {
    let setNode = this.get(idx)
    if (setNode) {
      setNode.val = val
      return true
    }
    return false
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false
    if (idx === this.length) return !!this.push(val)
    if (idx === 0) return !!this.unshift(val)

    let newNode = new Node(val)
    let prev = this.get(idx - 1)
    let temp = prev.next
    prev.next = newNode
    newNode.next = temp
    this.length++
    return true
  }
  remove(idx, val) {
    if (idx < 0 || idx > this.length) return undefined
    if (idx === 0) this.shift()
    if (idx === this.length - 1) this.pop()
    let prevNode = this.get(idx - 1)
    let removed = prevNode.next
    prevNode.next = removed.next
    this.length--
    return removed
  }
  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node
    let next
    let prev
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }
  print() {
    var arr = []
    var current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }
}

// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

let list = new SinglyLinkedList()
// list.push("hello")
// list.push("goodbye")
// list.push("!!")

console.log(list)
