describe('Monthly rate', function () {
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({
    amount: 10000,
    years: 1,
    rate: 1,
  })).toEqual('888.49');
  expect(calculateMonthlyPayment({
    amount: 15000,
    years: 2,
    rate: 1,
  })).toEqual('706.10');
});
});

describe('2 Decimals', function () {
it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({
    amount: 10000,
    years: 1,
    rate: 1,
  })).toMatch(/^\d+\.\d\d$/);
  expect(calculateMonthlyPayment({
    amount: 15000,
    years: 2,
    rate: 1,
  })).toMatch(/^\d+\.\d\d$/);
});
});
