const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

   function decString (str) {
      return MORSE_TABLE[str];
   }

   
   function decWord  (word) {
      return word.split(' ').map(decString).join('');
   }


function decode(expr) {
  return expr
         .match(/.{1,10}/g)
         .map(val =>{
          return (val[0] == "*") ? " " :
            val
            .match(/.{1,2}/g)
            .filter(num => num != '00')
            .map(el => (el === '10') ? "." : "-")
            .join("");
         }).join(" ").split('   ').map(decWord).join(' ');
}
console.log(
  decode(
    '00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'
  )
);

module.exports = {
    decode
}
