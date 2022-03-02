const calculator = require('./calculator');

test('Given a calculator When I pass 1 and 2 Then three is returned', () => {
    expect(calculator(1, 2)).toBe(3);
});