/*!
 * name: @feizheng/next-form2data
 * description: FormData to js data.
 * url: https://github.com/afeiship/next-form2data
 * version: 1.0.0
 * date: 2019-12-30 10:28:21
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.form2data = function(inFormData) {
    var result = {};
    inFormData.forEach(function(value, key) {
      result[key] = value;
    });
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.form2data;
  }
})();

//# sourceMappingURL=next-form2data.js.map
