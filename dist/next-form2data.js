/*!
 * name: next-form2data
 * url: https://github.com/afeiship/next-form2data
 * version: 1.0.0
 * date: 2019-07-08T13:19:59.845Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.form2data = function(inFormData) {
    var keys = Array.from(inFormData.keys());
    var result = {};
    keys.forEach(function(key) {
      result[key] = inFormData.get(key);
    });
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.form2data;
  }
})();

//# sourceMappingURL=next-form2data.js.map
