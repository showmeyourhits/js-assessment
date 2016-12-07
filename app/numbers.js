exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	return (num >> bit - 1) & 1 ? 1 : 0;
  },

  base10: function(str) {
  	return parseInt(str, 2);
  },

  convertToBinary: function(num) {
  	let fill = (str, filler, len)=>{
  		return filler.repeat(len - str.length) + str;
  	}
  	return fill(num.toString(2), "0", 8);
  },

  multiply: function(a, b) {
  	let m = (num)=>{
  		num = num.toString(10);
  		return num.indexOf(".") === -1 ? 0 : num.length - num.indexOf(".") - 1;
  	}
  	let mul_a = Math.pow(10, m(a)),
  		mul_b = Math.pow(10, m(b));
	return (a*mul_a) * (b*mul_b) /mul_a / mul_b;
  }
};
