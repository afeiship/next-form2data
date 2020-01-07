/*!
 * name: @feizheng/next-form2data
 * description: FormData to js data.
 * url: https://github.com/afeiship/next-form2data
 * version: 1.2.0
 * date: 2020-01-07 14:08:39
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.form2data = function(inFormData) {
    var result = {};
    inFormData.forEach(function(value, key) {
      if (typeof result[key] !== 'undefined') {
        if (typeof result[key] !== 'object') {
          result[key] = [result[key]];
        }
        result[key].push(value);
      } else {
        result[key] = value;
      }
    });
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.form2data;
  }
})();

//# sourceMappingURL=next-form2data.js.map
