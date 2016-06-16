test('hour string turns correct hour into correct string', function(assert){
  var expected = "hour_1"
  var actual = hourString(1);
  assert.equal(actual, expected, 'it is highlighted')
})

test('update time returns current time', function(assert){
  var actual = updateTime();
  var expected =h + ":" + m;
  assert.equal(actual, expected, 'time is correct')
})

test('if minutes are greater than 34 hour = h + 1', function(assert){
  var actual = correctHours(11,35);
  var expected = 12;
  assert.equal(actual, expected, 'hours are correct')
})
test('is 8 oclock dimmed(wont work from 7:30 - 8)', function(assert){
  var actual = document.getElementById('hour_8').className;
  var expected = 'dimmed';
  assert.equal(actual, expected, 'It is dimmed')
})
