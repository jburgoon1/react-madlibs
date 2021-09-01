const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test('adds commas to numbers', () =>{
    expect(addCommas(10000000)).toEqual('10,000,000')
  })
  test('adds commas to numbers', () =>{
    expect(addCommas(8675309)).toEqual('8,675,309')
  })
  test('adds commas to numbers', () =>{
    expect(addCommas(6)).toEqual('6')
  })
  test('adds commas to numbers', () =>{
    expect(addCommas(-10)).toEqual('-10')
  })
  test('adds commas to numbers', () =>{
    expect(addCommas(1234)).toEqual('1,234')
  })
});


