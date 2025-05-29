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

// Reverse dictionary for decoding (Morse to text)
const reverseMorseDict = Object.fromEntries(
    Object.entries(morseCodeDict).map(([key, value]) => [value, key])
);


// Function to encode text into Morse code
// Encode text to Morse code
function encode() {
    const input = document.getElementById('inputText').value.toUpperCase().trim();
    const outputElement = document.getElementById('outputText');

    // Handle empty input
    if (!input) {
        outputElement.innerText = 'Error: Please enter text to encode.';
        return;
    }

    // Convert each character to Morse code
    let result = '';
    for (let char of input) {
        if (morseCodeDict[char]) {
            result += morseCodeDict[char] + ' ';
        } else {
            outputElement.innerText = `Error: Invalid character "${char}" found.`;
            return;
        }
    }

    // Display the Morse code (trim trailing space)
    outputElement.innerText = result.trim();
}

// Function to decode Morse code into text
function decode() {
    const input = document.getElementById('inputText').value;                 // Get the value of the input text field (expected to be Morse code)
    document.getElementById('outputText').innerText = 'Decoding: ' + input;     // Display the raw Morse code as part of the output (decoding not yet implemented)
}