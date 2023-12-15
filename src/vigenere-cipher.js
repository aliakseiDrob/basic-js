const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(message, keyword) {
    if (!message || !keyword) {
      throw new Error('Incorrect arguments!');
    }
    const input = message.toUpperCase();
    const key = keyword.toUpperCase();

    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (this.alphabet.includes(char)) {
        const charIndex = this.alphabet.indexOf(char);
        const keyCharIndex = this.alphabet.indexOf(key[keyIndex % key.length]);
        const encryptedCharIndex = (charIndex + keyCharIndex) % 26;

        result += this.alphabet[encryptedCharIndex];
        keyIndex++;
      } else {
        result += char;
      }
    }

    return result;
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }/*
    let result = ''

    for (let i = 0, j = 0; i < message.length; i++) {
      const c = message.charAt(i)
      if (c.toUpperCase() == c) {
        result += String.fromCharCode(90 - (25 - (c.charCodeAt(0) - key.toUpperCase().charCodeAt(j))) % 26)
      } else {
        result += String.fromCharCode(122 - (25 - (c.charCodeAt(0) - key.toLowerCase().charCodeAt(j))) % 26)
      }
    }
    j = ++j % key.length
    return result;*/
  }

}

module.exports = {
  VigenereCipheringMachine
};
