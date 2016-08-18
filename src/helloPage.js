import React from 'react';
import KanaFinder from './kanaFinder'

var Hello = React.createClass({
  getInitialState: function() {
    return {
      output: '',
      hiragana: true,
      katakana: false,
      kanji: false,
      input: '',
    };
  },

  getKanaSystem(){
    if(this.state.hiragana){
      return 'hiragana';
    }else if(this.state.katakana){
      return 'katakana';
    }else{
      return 'kanji'
    }
  },

  onChange(event){
    var input = event.target.value;
    this.setState({input: input});
    console.log('input: ' + input);
    this.findKana(input, this.getKanaSystem());
  },

  findKana(input, activeKana){
    var result = KanaFinder.findKana(activeKana, input);
    console.log('result: ' + result);
    this.setState({output: result});
  },

  toggleKana(event){
    var activeKana = event.target.value;

    if('katakana' === activeKana){
      this.setState({hiragana: false});
      this.setState({katakana: true});
      this.setState({kanji: false});
    }else if('hiragana' ===activeKana){
      this.setState({hiragana: true});
      this.setState({katakana: false});
      this.setState({kanji: false});
    }else{
      this.setState({hiragana: false});
      this.setState({katakana: false});
      this.setState({kanji: true});
    }

    this.findKana(this.state.input, activeKana);
  },

  render: function() {
    return (
        <div>
          <span>Japanese</span>
          <input id="myInput" type="text" onChange={this.onChange} value={this.state.input} />
          <div id="japaneseOutput">{this.state.output}</div>
          <input onChange={this.toggleKana} type="radio" name="kana" value="hiragana" checked={this.state.hiragana} /><span>Hiragana</span><br />
          <input onChange={this.toggleKana} type="radio" name="kana" value="katakana" /><span>Katakana</span><br />
          <input onChange={this.toggleKana} type="radio" name="kana" value="kanji" /><span>Kanji</span><br />
        </div>
    );
  }
});

module.exports = Hello;
