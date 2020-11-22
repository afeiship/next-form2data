/*!
 * name: @jswork/next-form2data
 * description: FormData to js data.
 * homepage: https://github.com/afeiship/next-form2data
 * version: 1.0.0
 * date: 2020-11-22 20:32:07
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.form2data = function (inFormData) {
    var result = {};
    inFormData.forEach(function (value, key) {
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
