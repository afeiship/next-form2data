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
