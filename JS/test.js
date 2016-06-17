QUnit.test('turn 24 hour clock into 12 hour', function(assert){
  var test = {h:14, m:28, s:34};
  var expected = {h:2, m:28, s:34};
  var actual = correctHours(test);
  assert.deepEqual(actual, expected, 'correctHours works')
});

QUnit.test('hour string returns correct hour string', function(assert){
  var test = {h:14, m:28, s:34};
  var expected = {h:"hour_2", m:28, s:34};
  var actual = hourString(correctHours(test));
  assert.deepEqual(actual, expected, 'hourString works')
});

QUnit.test('setClock highlights right minutes', function(assert){
  var test = {h:2, m:28, s:34};
  setClock(test);
  var actual = document.getElementById('twenty').className;
  var expected = "highlighted";
  assert.deepEqual(actual, expected, 'set clock highlights correct minutes')
});

QUnit.test('highlight hour highlights right hour', function(assert){
  var test = {h:"hour_2", m:28, s:34};
  highlightHour(test);
  var actual = document.getElementById('hour_2').className;
  var expected = "highlighted";
  assert.deepEqual(actual, expected, 'two is highlighted')
});

QUnit.test('dim hours dims two hour', function(assert){
  dimHours();
  var actual = document.getElementById('hour_2').className;
  var expected = "dimmed";
  assert.deepEqual(actual, expected, 'two is dimmed')
});

QUnit.test('highlight hour highlights right hour', function(assert){
  var test = {h:"hour_2", m:28, s:34};
  highlightHour(test);
  var actual = document.getElementById('hour_2').className;
  var expected = "highlighted";
  assert.deepEqual(actual, expected, 'two is highlighted')
});
