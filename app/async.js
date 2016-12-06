exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	return new Promise(function(res, rej){
  		setTimeout(function(){
  			res(value);
  		}, 0);
  	});
  },

  manipulateRemoteData: function(url) {
  	return fetch(url).then(function(response){
  		return response.json().then(function(data){
  			return data["people"].map((el)=>{
	  			return el["name"];
	  		}).sort();
  		}); 		
  	});
  }
};
