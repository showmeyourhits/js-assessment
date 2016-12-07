exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
  	console.log(dirName);
  	let helper = (_data, _dirName)=>{
  		if(_data.dir){
  			let res = [];
  			_data.files.forEach((file)=>{
  				res = res.concat(helper(file, `${_dirName ? _dirName + "/" : ""}${_data.dir}`));
  			})

  			return res;
  		}else{
  			console.log(_dirName)
  			if(!dirName || (new RegExp("\/*" + dirName + "\/*")).test(_dirName)){
  				return _data;
  			}else{
  				return [];
  			}
  		}
  	}
  	console.log(helper(data))
  	return helper(data);
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
  	let fib = (first, second, iteration)=>{
  		if(iteration >= n){
  			return first;
  		}else{
  			return fib(second, first + second, iteration + 1); 
  		}
  	}
  	return fib(0, 1, 0);
  },

  validParentheses: function(n) {

  }
};
