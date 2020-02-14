const TwoWayList = require('./TwoWayList');

const createListWithElements = (numbersOfElements) => {
	const list = new TwoWayList();
	const mockReturn = [];
	for (let x = 0; x < numbersOfElements; ++x) {
		list.addTo(`element-nr-${x}`, x);
		mockReturn.push(`element-nr-${x}`)
	}
	list.mockReturn = mockReturn;
	return list;
}
describe('List', () => {

	it('should return proper value', () => {
		const twoWayList = createListWithElements(3);
		expect(twoWayList.show()).toEqual(twoWayList.mockReturn);

		expect(twoWayList.removeAtIndex(-1)).toEqual(null);
		expect(twoWayList.getElement(-1)).toEqual(null);

		expect(twoWayList.addTo('ADD_NEW_ONE')).toEqual(null);
		expect(twoWayList.addTo('ADD_NEW_ONE', -1)).toEqual(null);

	});

	it('should return 5 elements', () => {
		const twoWayList = createListWithElements(5);
		expect(twoWayList.show()).toEqual(twoWayList.mockReturn);
	});

	it('should return proper numbers of elements', () => {
		const twoWayList = createListWithElements(3);

		twoWayList.removeAtIndex(0);
		expect(twoWayList.show()).toEqual(["element-nr-1", "element-nr-2"]);

		twoWayList.removeAtIndex(1);
		expect(twoWayList.show()).toEqual(["element-nr-1"]);

		twoWayList.addTo('ADD_NEW_ONE', 1)

		expect(twoWayList.show()).toEqual(["element-nr-1", "ADD_NEW_ONE"]);

	});

	it('should return proper element from list', () => {
		const twoWayList = createListWithElements(3);

		for (let x = 0; x <= twoWayList.mockReturn.length; x++) {
			expect(twoWayList.getElement(0).val).toEqual(twoWayList.mockReturn[0]);
		}
	});

});
