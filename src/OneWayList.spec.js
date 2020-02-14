const OneWayList = require('./OneWayList');

const createListWithElements = (numbersOfElements) => {
	const list = new OneWayList();
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
		const oneWayList = createListWithElements(3);
		expect(oneWayList.show()).toEqual(oneWayList.mockReturn);

		expect(oneWayList.removeAtIndex(-1)).toEqual(null);
		expect(oneWayList.getElement(-1)).toEqual(null);

		expect(oneWayList.addTo('ADD_NEW_ONE')).toEqual(null);
		expect(oneWayList.addTo('ADD_NEW_ONE', -1)).toEqual(null);

	});


	it('should return 5 elements', () => {
		const oneWayList = createListWithElements(500);
		expect(oneWayList.show()).toEqual(oneWayList.mockReturn);
	});

	it('should return proper numbers of elements', () => {
		const oneWayList = createListWithElements(3);

		oneWayList.removeAtIndex(0);
		expect(oneWayList.show()).toEqual(["element-nr-1", "element-nr-2"]);

		oneWayList.removeAtIndex(1);
		expect(oneWayList.show()).toEqual(["element-nr-1"]);

		oneWayList.addTo('ADD_NEW_ONE', 1)

		expect(oneWayList.show()).toEqual(["element-nr-1", "ADD_NEW_ONE"]);

	});

	it('should return proper element from list', () => {
		const oneWayList = createListWithElements(3);

		for (let x = 0; x <= oneWayList.mockReturn.length; x++) {
			expect(oneWayList.getElement(0).val).toEqual(oneWayList.mockReturn[0]);
		}
	});

});
