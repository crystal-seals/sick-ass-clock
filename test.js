test('set it to be highlighted', function(assert){
  var actual = document.getElementById('it').className;
  var expected = "highlighted";
  assert.equal(actual, expected, 'it is highlighted')
})
test('set is to be highlighted', function(assert){
  var actual = document.getElementById('is').className;
  var expected = "highlighted";
  assert.equal(actual, expected, 'it is highlighted')
})
test('for a time of 12:25, twenty should be highlighted', function(assert){
  var actual = document.getElementById('twenty').className;
  var expected = "highlighted";
  assert.equal(actual, expected, 'it is highlighted')
})

test('for a time of 12:25, five should be highlighted', function(assert){
  var actual = document.getElementById('five').className;
  var expected = "highlighted";
  assert.equal(actual, expected, 'it is highlighted')
})

test('for a time of 12:25, past should be highlighted', function(assert){
  var actual = document.getElementById('past').className;
  var expected = "highlighted";
  assert.equal(actual, expected, 'it is highlighted')
})
