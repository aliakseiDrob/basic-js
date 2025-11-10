const { NotImplementedError } = require("../lib");

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
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    const input = message.toUpperCase();
    const keyword = key.toUpperCase();

    let result = [];
    let keyIndex = 0;

    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (this.alphabet.includes(char)) {
        const charIndex = this.alphabet.indexOf(char);
        const keyCharIndex = this.alphabet.indexOf(
          keyword[keyIndex % keyword.length]
        );
        const encryptedCharIndex =
          (charIndex + keyCharIndex) % this.alphabet.length;

        result.push(this.alphabet[encryptedCharIndex]);
        keyIndex++;
      } else {
        result.push(char);
      }
    }

    return this.direct ? result.join("") : result.reverse().join("");
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    const input = message.toUpperCase();
    const keyword = key.toUpperCase();
    let result = [];
    let keyIndex = 0;

    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (this.alphabet.includes(char)) {
        const charIndex = this.alphabet.indexOf(char);
        const keyCharIndex = this.alphabet.indexOf(
          keyword[keyIndex % key.length]
        );
        const decryptedCharIndex =
          (charIndex - keyCharIndex + this.alphabet.length) %
          this.alphabet.length;
        result.push(this.alphabet[decryptedCharIndex]);
        keyIndex++;
      } else {
        result.push(char);
      }
    }
    return this.direct ? result.join("") : result.reverse().join("");
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
