/**
 * Constants.
 */
const formatList = ["dec", "hex", "oct", "bin", "html", "char"];
const asciiTable = {
    " " : 32,
    "!" : 33,
    '"' : 34,
    "#" : 35,
    "$" : 36,
    "%" : 37,
    "&" : 38,
    "'" : 39,
    "(" : 40,
    ")" : 41,
    "*" : 42,
    "+" : 43,
    "," : 44,
    "-" : 45,
    "." : 46,
    "/" : 47,
    "0" : 48,
    "1" : 49,
    "2" : 50,
    "3" : 51,
    "4" : 52,
    "5" : 53,
    "6" : 54,
    "7" : 55,
    "8" : 56,
    "9" : 57,
    ":" : 58,
    ";" : 59,
    "<" : 60,
    "=" : 61,
    ">" : 62,
    "?" : 63,
    "@" : 64,
    "A" : 65,
    "B" : 66,
    "C" : 67,
    "D" : 68,
    "E" : 69,
    "F" : 70,
    "G" : 71,
    "H" : 72,
    "I" : 73,
    "J" : 74,
    "K" : 75,
    "L" : 76,
    "M" : 77,
    "N" : 78,
    "O" : 79,
    "P" : 80,
    "Q" : 81,
    "R" : 82,
    "S" : 83,
    "T" : 84,
    "U" : 85,
    "V" : 86,
    "W" : 87,
    "X" : 88,
    "Y" : 89,
    "Z" : 90,
    "[" : 91,
    "\\": 92,
    "]" : 93,
    "^" : 94,
    "_" : 95,
    "`" : 96,
    "a" : 97,
    "b" : 98,
    "c" : 99,
    "d" : 100,
    "e" : 101,
    "f" : 102,
    "g" : 103,
    "h" : 104,
    "i" : 105,
    "j" : 106,
    "k" : 107,
    "l" : 108,
    "m" : 109,
    "n" : 110,
    "o" : 111,
    "p" : 112,
    "q" : 113,
    "r" : 114,
    "s" : 115,
    "t" : 116,
    "u" : 117,
    "v" : 118,
    "w" : 119,
    "x" : 120,
    "y" : 121,
    "z" : 122,
    "{" : 123,
    "|" : 124,
    "}" : 125,
    "~" : 126,
    "Delete": 127,
};

/**
 * Conversion functions.
 */

function toHTML(asciiCode) {
    return `&#${asciiCode}`;
}
function toBin(asciiCode) {
    return toBase(2, asciiCode);
}
function toHex(asciiCode) {
    return toBase(16, asciiCode);
}
function toOct(asciiCode) {
    return toBase(8, asciiCode).padStart(3, '0');
}
function toBase(b, asciiCode) {
    return asciiCode.toString(b);
}

/**
 * Like jQuery ready() but only supported on > IE8 
 */
document.addEventListener('DOMContentLoaded', function () {
    // Listen for key presses.
    document.body.addEventListener("keydown", event => {
        // Only for the printable ASCII characters, code 32-127.
        if (event.key in asciiTable) {
            // Grab the ASCII code from the table.
            var asciiCode = asciiTable[event.key];
            // Update the page title.
            document.title = event.key;
            // Get ASCII code in different formats.
            for (index in formatList) {
                var text = "";
                let k = formatList[index];
                switch (k) {
                    case "char":
                        text = event.key;
                        break;
                    case "dec":
                        text = asciiCode;
                        break;
                    case "hex":
                        text = toHex(asciiCode);
                        break;
                    case "oct":
                        text = toOct(asciiCode);
                        break;
                    case "bin":
                        text = toBin(asciiCode);
                        break;
                    case "html":
                        text = toHTML(asciiCode);
                        break;
                    default:
                        text = "";
                        break;
                }
                // Display the code.
                document.getElementById(`${k}`).innerText = text;
            }
        }
    });
}, false);