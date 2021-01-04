const Element = require('./Element')

class LinkedList {
  constructor(data=null){
    this.header = new Element(data);
  }
  isEmpty() {
    return !this.header
  }
  append(data){
    let newElement = new Element(data)
    newElement.next = this.header
    this.header = newElement
  }
}

module.exports = LinkedList
