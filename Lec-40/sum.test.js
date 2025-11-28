const sum = require('./sum');

test("addition of two number 1+2 will be 3" , () => {
    // expect -> return value nd toBe is a matcher
    expect(sum(1,2)).toBe(3);
    // expect(sum(0,0)).toBe(0);
})

test("all arguments must be passed" , () => {
    expect(sum()).toBe("invalid arguments");
})