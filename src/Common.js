
class Common  {

	constructor() {
		this.head = null;
	}

	timeStamp() {
		return new Date().getTime();
	}
	calculateTime(start, end) {
		return end - start;
	}

	removeAtIndex(index) {
		if (isNaN(index) || !this.getElement(index)) return null;
		if (index === 0) {
			this.head = this.head.next;
			return;
		}
		const prev = this.getElement(index - 1);
		if (!prev || !prev.next) return;

		prev.next = prev.next.next;
		return this.head
	}

	getElement(index) {
		if (index === undefined || !this.head || index < 0) return null;
		let curr = this.head;
		let counter = 0;
		while (curr && counter < index) {
			if (!curr) {
				break;
			} else {
				curr = curr.next;
				counter++;
			}
		}
		return curr || null;
	}

	show() {
		const result = [];
		let curr = this.head;

		while (curr) {
			result.push(curr.val);
			curr = curr.next;
		}

		return result;
	}
}

module.exports = Common;
