test('return javascript date object', function(assert){
  var actual = getTime();
  var expected = new Date();
  assert.equal(actual, expected, 'date returned')
})
