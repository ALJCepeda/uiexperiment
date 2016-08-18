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
    case 'u': result = 'う';break;

    case 'ka': result = 'か';break;
    case 'ki': result = 'き';break;
    case 'ku': result = 'く';break;
    case 'ke': result = 'け';break;
    case 'ko': result = 'こ';break;

    case 'sa': result = 'さ';break;
    case 'shi': result = 'し';break;
    case 'su': result = 'す';break;
    case 'se': result = 'せ';break;
    case 'so': result = 'そ';break;

    case 'ta': result = 'た';break;
    case 'chi': result = 'ち';break;
    case 'tsu': result = 'つ';break;
    case 'te': result = 'て';break;
    case 'to': result = 'と';break;

    case 'na': result = 'な';break;
    case 'ni': result = 'に';break;
    case 'nu': result = 'ぬ';break;
    case 'ne': result = 'ね';break;
    case 'no': result = 'の';break;

    case 'ha': result = 'は';break;
    case 'hi': result = 'ひ';break;
    case 'hu': result = 'ふ';break;
    case 'he': result = 'へ';break;
    case 'ho': result = 'ほ';break;

    case 'ya': result = 'や';break;
    case 'yu': result = 'ゆ';break;
    case 'yo': result = 'よ';break;

    case 'ra': result = 'ら';break;
    case 'ri': result = 'り';break;
    case 'ru': result = 'る';break;
    case 're': result = 'れ';break;
    case 'ro': result = 'ろ';break;

    case 'wa': result = 'わ';break;
    case 'wo': result = 'を';break;

    case 'n': result = 'ん';break;

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
