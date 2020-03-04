class VigenereCipheringMachine {
  constructor(mode = true) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.mode = mode;

    this.getCipherValue = function(message, key, method) {
      if (!message || !key) throw new Error();
      message = message.toUpperCase();
      key = key.toUpperCase();
      let result = '',
        encryptedCharNumber,
        index = 0;

      for (let i = 0; i < message.length; i++) {
        if (~this.alphabet.indexOf(message[i])) {
          if (method === 'encrypt') {
            encryptedCharNumber =
              this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(key[index]);
          } else {
            encryptedCharNumber =
              this.alphabet.indexOf(message[i]) +
              this.alphabet.length -
              this.alphabet.indexOf(key[index]);
          }
          result +=
            encryptedCharNumber >= this.alphabet.length
              ? this.alphabet[encryptedCharNumber % this.alphabet.length]
              : this.alphabet[encryptedCharNumber];
          ++index >= key.length ? (index = 0) : index;
        } else {
          result += message[i];
        }
      }
      return this.mode
        ? result
        : result
            .split('')
            .reverse()
            .join('');
    };
  }

  encrypt(message, key) {
    return this.getCipherValue(message, key, this.encrypt.name);
  }

  decrypt(message, key) {
    return this.getCipherValue(message, key);
  }
}

module.exports = VigenereCipheringMachine;
