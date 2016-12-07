exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(str2){
      return `${str}, ${str2}`;
    }
  },

  makeClosures: function(arr, fn) {
    return arr.map((num)=>{
      return ()=>{return Math.pow(num, 2)};
    });
  },

  partial: function(fn, str1, str2) {
    //curry?
    return function(str3){
      return fn.call(this, str1, str2, str3);
    }
  },

  useArguments: function() {
    return Array.prototype.reduce.call(arguments, (prev, curr)=>{return prev + curr;});
  },

  callIt: function(fn) {
    fn(...Array.prototype.slice.call(arguments, 1));
  },

  partialUsingArguments: function(fn) {
    let args = Array.prototype.slice.call(arguments, 1);
    return function(){
      return fn(...Array.prototype.concat.call(args, [...arguments]));
    }
  },

  curryIt: function(fn) {
    return (x)=>{
      return (y)=>{
        return (z)=>{
          return fn.call(this, x, y, z);
        }
      }
    }
  }
};
