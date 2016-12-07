exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	return str.replace(/(\w)\1+/g, (match)=>{
  		return match.slice(0, amount);
  	});
  },

  wordWrap: function(str, cols) {
  	let res = str.split(''),
  		re = /\w/;
  	for(let i = cols; i <= str.length; i += cols){
  		if(re.test(str[i])){
  			let space = str.slice(i - cols, i).lastIndexOf(" ");
  			if(space !== -1){
  				res[i - cols + space] = "\n";
  			}
  		}
  		else{
  			res[i] = "\n";
  		}
  	}
  	return res.join('');
  },

  reverseString: function(str) {
  	return str.split('').reverse().join('');
  }
};
