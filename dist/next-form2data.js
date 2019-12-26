/*!
 * name: @feizheng/next-form2data
 * description: FormData to js data.
 * url: https://github.com/afeiship/next-form2data
 * version: 1.0.0
 * date: 2019-12-26 17:33:08
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

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
