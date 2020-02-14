
const Common = require('./Common');

class OneWayList extends Common {

	createElement(val, next = null) {
		return { val, next };
	}

	addTo(value, index) {
		if (isNaN(index) || index < 0) return null;
		let curr = this.head;
		let prev;

		while (curr && index > 0) {
			prev = curr;
			curr = curr.next;
			index--;
		}
		let newElement = this.createElement(value);
		if (prev) {
			prev.next = newElement;
			prev.next.next = curr;
		} else {
			this.head = newElement;
		}
		return this.head;
	}
}

module.exports = OneWayList;