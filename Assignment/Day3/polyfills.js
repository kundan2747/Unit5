Array.prototype.myMap = function (callbackfn) {
  var res = [];
  for (var indx in this) {
    if (this.hasOwnProperty(indx)) res.push(callbackfn(this[indx], indx, this));
  }
  return res;
};
Array.prototype.myFilter = function (cb) {
  var res = [];
  for (var key in this) {
    if (this.hasOwnProperty(key)) {
      if (cb(this[key], key, this)) res.push(this[key]);
    }
  }
  return res;
};
Array.prototype.myReduce = function (cb, start) {
  var ans = start;

  for (var key in this) {
    if (this.hasOwnProperty(key)) {
      if (ans) {
        ans = cb(ans, this[key]);
      } else {
        ans = this[key];
      }
    }
  }
  return ans;
};

Array.prototype.myForEach = function (cb) {
  for (var key in this) {
    if (this.hasOwnProperty(key)) {
      cb(this[key], key, this);
    }
  }
};
