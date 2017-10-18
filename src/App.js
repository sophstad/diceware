import { english } from './data/diceware';
import React, { Component } from 'react';
import styled from 'styled-components';
import Word from './components/Word';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      diceware: english,
      length: 7
    }
  }

  range = n => Array.from({length: n}, (value, key) => key);

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generatePassphrase(wordCount) {
    let passphrase = [];
    for (let i in this.range(wordCount)) {
      passphrase.push(this.generateWord());
    }
    return passphrase;
  }

  generateWord() {
    let wordCode = '';
    for (let i in this.range(5)) {
      wordCode += this.getRandomIntInclusive(1, 6);
    }
    return this.state.diceware[parseInt(wordCode)];
  }

  selectText(event) {
    event.target.focus();
    event.target.select();
  }

  render() {
    const words = this.generatePassphrase(this.state.length);
    const password = words.join(' ');

    const SelectAll = styled.textarea`
      background-color: gray;
      border: none;
      outline: 0;
      padding: 1rem;
      resize: none;
    `;

    return (
      <div className="clearfix mxn2">
        <h1>Diceware</h1>
        {words.map((word, index) =>
          <Word key={index} word={word} />
        )}
        <SelectAll
          onClick={this.selectText}
          readOnly="readonly"
          value={password}
        >
        </SelectAll>
      </div>
    )
  }
}
