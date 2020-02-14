
const Common = require('./Common');

class TwoWayList extends Common {
	constructor() {
		super();
		this.head = null;
	}

	createElement(val, next = null, prev = null) {
		return { val, next, prev };
	}

	addTo(val, index) {
		if (isNaN(index) || index < 0) return null;
		let node = this.createElement(val);
		if (this.head === null) {
			if (index > 0) return null;
			this.head = node;
			return this.head;
		}
		if (index == 0) {
			node.prev = null;
			node.next = this.head;
			this.head.prev = node;
			this.head = node;
			return this.head;
		}
		let counter = 1;
		let curr = this.head;
		while (curr.next != null) {
			curr = curr.next;
			counter++;

		}
		node.next = curr.next;
		if (curr.next != null) {
			curr.next.prev = node;
		}
		node.prev = curr;
		curr.next = node;

		return node;
	}

}

module.exports = TwoWayList;
