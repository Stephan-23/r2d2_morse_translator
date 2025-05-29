// Morse code dictionary
const morseCodeDict = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
    'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '.': '.-.-.-', ',': '--..--', '?': '..--..', '!': '-.-.--'
};

// Function to encode text into Morse code
function encode() {
    const input = document.getElementById('inputText').value.toUpperCase();  // Get the value of the input text field and convert it to uppercase
    document.getElementById('outputText').innerText = 'Encoding: ' + input;  // Display the raw input text as part of the output, no encoding yet
}

// Function to decode Morse code into text
function decode() {
    const input = document.getElementById('inputText').value;                 // Get the value of the input text field (expected to be Morse code)
    document.getElementById('outputText').innerText = 'Decoding: ' + input;     // Display the raw Morse code as part of the output (decoding not yet implemented)
}