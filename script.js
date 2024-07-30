document.getElementById('encryption-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const plaintext = document.getElementById('plaintext').value.toUpperCase();
    const key = document.getElementById('key').value.toUpperCase();
    const ciphertext = vigenereEncrypt(plaintext, key);
    document.getElementById('ciphertext').textContent = ciphertext;
});

document.getElementById('decryption-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const ciphertext = document.getElementById('ciphertext-input').value.toUpperCase();
    const key = document.getElementById('key-decrypt').value.toUpperCase();
    const plaintext = vigenereDecrypt(ciphertext, key);
    document.getElementById('plaintext-output').textContent = plaintext;
});

function vigenereEncrypt(plaintext, key) {
    let result = '';
    key = key.replace(/[^A-Z]/g, '').repeat(Math.ceil(plaintext.length / key.length)).toUpperCase();
    for (let i = 0, j = 0; i < plaintext.length; i++) {
        const char = plaintext[i];
        if (char === ' ') {
            result += ' ';
        } else {
            const charCode = (char.charCodeAt(0) - 65 + key[j].charCodeAt(0) - 65) % 26 + 65;
            result += String.fromCharCode(charCode);
            j = (j + 1) % key.length;
        }
    }
    return result;
}

function vigenereDecrypt(ciphertext, key) {
    let result = '';
    key = key.replace(/[^A-Z]/g, '').repeat(Math.ceil(ciphertext.length / key.length)).toUpperCase();
    for (let i = 0, j = 0; i < ciphertext.length; i++) {
        const char = ciphertext[i];
        if (char === ' ') {
            result += ' ';
        } else {
            const charCode = (ciphertext.charCodeAt(i) - key[j].charCodeAt(0) + 26) % 26 + 65;
            result += String.fromCharCode(charCode);
            j = (j + 1) % key.length;
        }
    }
    return result;
}
