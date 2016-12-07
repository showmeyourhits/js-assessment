exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
  	return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
  	constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
  	return Object.getOwnPropertyNames(obj).map((el)=>{return `${el}: ${obj[el]}`});
  }
};
