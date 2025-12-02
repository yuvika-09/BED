// const jest = require("jest");
const sum = jest.fn();  // function mocking -> it creates a new function

test('addition of 2 and 3 is 5', () => {
    // let value = sum.mockReturnValue(5);
    // expect(value()).toBe(5);

    // sum.mockReturnValue(5);
    sum.mockReturnValueOnce(5);
    // expect(sum()).toBe(5); //true
    expect(sum(2,3)).toBe(5); //true
    // expect(sum(4,9)).toBe(5); //true

    // pass anything in sum, it will return 5 

})


test('addition of 6 and 3 is 5', () => {
    sum.mockReturnValueOnce(9);
    expect(sum(6,3)).toBe(9); 

})
