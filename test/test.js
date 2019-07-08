var nx = require('next-js-core2');
require('../src/next-form2data');

test('nx.form2data', function() {
  var formData = new FormData();
  formData.append('u', 'username');
  formData.append('p', 'pass1');
  var res = nx.form2data(formData);
  expect(res).toEqual({ u: 'username', p: 'pass1' });
});