QUnit.test('turn 24 hour clock into 12 hour', function(assert){
  var test = {h:14, m:36, s:34};
  var expected = {h:2, m:36, s:34};
  var actual = correctHours(test);
  assert.deepEqual(actual, expected, 'correctHours works')
})
