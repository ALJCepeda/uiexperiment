var internalMethod = function() {
    return 'hi';
};

var internalMethod2 = function() {
    return 'bye';
};

var findHiragana = function(input) {
  input = input.toLowerCase();
  var result;

  switch(input){
    case 'a': result = 'あ';break;
    case 'e': result = 'え';break;
    case 'i': result = 'い';break;
    case 'o': result = 'お';break;
    case 'u': result = 'う';break;
    default: result = 'unknown';break;
  }

  return result;
};

var findKatakana = function(input) {
  input = input.toLowerCase();
  var result;

  switch(input){
    case 'a': result = 'ア';break;
    default: result = 'unknown';break;
  }

  return result;
};

var findKanji = function(input) {
  input = input.toLowerCase();
  var result;

  switch(input){
    case 'a': result = 'KANJI';break;
    case 'japan': result = '日本';break;
    default: result = 'unknown word';break;
  }

  return result;
};

var findKana = function(kana, input) {
    if(kana === 'hiragana'){
      return findHiragana(input);
    }else if(kana === 'katakana'){
      return findKatakana(input);
    }else{
      return findKanji(input);
    }
};

var KanaFinder = {
      'func1': internalMethod(),
      'func2': internalMethod2(),
      'findKana': findKana
};

module.exports = KanaFinder;
