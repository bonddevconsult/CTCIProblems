const { v4: uuid } = require('uuid');
class Element {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.id = uuid()
  }
}
module.exports = Element
