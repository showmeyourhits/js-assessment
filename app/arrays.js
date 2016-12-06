exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((prev, curr)=>{
      return typeof curr === "number" ? (prev + curr) : prev;
    })
  },

  remove: function(arr, item) {
    while(arr.indexOf(item) !== -1){
      arr.splice(arr.indexOf(item), 1);
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    while(arr.indexOf(item) !== -1){
      arr.splice(arr.indexOf(item), 1);
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift()
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.filter((el)=>{
      return el === item;
    }).length;
  },

  duplicates: function(arr) {
    let s = new Set(arr),
        dup = [];
    s.forEach((el)=>{
      console.log(this);
      if(this.count(arr, el) > 1){
        dup.push(el);
      }
    });
    return dup;
  },

  square: function(arr) {
    return arr.map((el)=>{
      return typeof el === "number" ? Math.pow(el, 2): el;
    })
  },

  findAllOccurrences: function(arr, target) {
    let occ = [],
        seek = arr.indexOf(target);
    while(seek !== -1){
      occ.push(seek);
      seek = arr.indexOf(target, seek+1);
    }
    return occ;
  }
};
