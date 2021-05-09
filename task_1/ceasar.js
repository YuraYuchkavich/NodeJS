const EngAlfUp = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const EngAlfLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','m','o','p','q','r','s','t','u','v','w','x','y','z']
let EngAlfUpEncrypt = Array(26)
let EngAlfLowerEncrypt = Array(26)

function CezarEncrypt(stap, arr) {
    var CopyAlf = arr.slice()
    var i = 0
    
    while ((i + stap) < (CopyAlf.length)) {
      var buff = CopyAlf[i]
      CopyAlf[i] = CopyAlf[i + stap]
      CopyAlf[i + stap] = buff
      i++
    }
    return CopyAlf
}

function contains(symb, arr) {
    var letter = symb
    pos = 0
    for (var i = 0; i < arr.length; i++) {
      if (letter === arr[i]) {
        pos = i
        return true
        break
      }
    }
}

function encrypt(text) {
    var result = ''

    for (var i = 0; i <= text.length-1; i++) {
      var symbol = text[i]
      if (contains(symbol, EngAlfUp)) {
          symbol = EngAlfUpEncrypt[pos]
          result += symbol
      } else
      if ((contains(symbol, EngAlfLower))) {
          symbol = EngAlfLowerEncrypt[pos]
          result += symbol
      } else {
        result += symbol
      }
    }
    return result
}
  
  function decrypt(text) {
    var result = ''
    for (var i = 0; i <= text.length; i++) {
      var symbol = text[i]
      if (contains(symbol, EngAlfUpEncrypt)) {
          symbol = EngAlfUp[pos]
          result += symbol
      }
      if ((contains(symbol, EngAlfLowerEncrypt))) {
          symbol = EngAlfLower[pos]
          result += symbol
      }
    }
    return result
}

const ceasar = (step, type, text) => {
    EngAlfUpEncrypt = CezarEncrypt(step, EngAlfUp)
    EngAlfLowerEncrypt = CezarEncrypt(step, EngAlfLower)
    if (type === 'encode') {
        return encrypt(text)
    }

    if (type === 'decode') {
        return decrypt(text)
    }
    return ''
}

module.exports.ceasar = ceasar