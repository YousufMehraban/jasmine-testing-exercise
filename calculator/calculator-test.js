
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 100000, years: 10, rate: 5}
  expect(calculateMonthlyPayment(values)).toEqual('1060.66')
  const values2 = {amount: 10000, years: 10, rate: 5}
  expect(calculateMonthlyPayment(values2)).toEqual('106.07')
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 60000, years: 5, rate: 1.6308}
  expect(calculateMonthlyPayment(values)).toEqual('1042.00')
});

/// etc
