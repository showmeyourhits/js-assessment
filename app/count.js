exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
  	var countId;
  	console.log(start);
  	countId = setInterval(()=>{
  		if(start === end){
  			clearInterval(countId);
  		}else{
  			start++;
  			console.log(start);
  		}
  	}, 100);
  	return {
  		cancel: function(){
  			clearInterval(countId);
  		}
  	}
  }
};
