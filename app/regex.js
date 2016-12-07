exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter: function(str) {
    return /([A-Z])\1/i.test(str);
  },

  endsWithVowel: function(str) {
    return /[aeoiuy]$/i.test(str);
  },

  captureThreeNumbers: function(str) {
    let res =/\d{3}/.exec(str); 
    return res ? res[0] : false;
  },

  matchesPattern: function(str) {
    return /^\d{3}\-\d{3}\-\d{4}$/.test(str);
  },

  isUSD: function(str) {
    return /^\$\d+(?:,\d{3})*(?:\.\d{2}){0,1}$/.test(str);
  }
};
