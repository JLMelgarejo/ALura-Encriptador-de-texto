document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById('inputbox');
    const answerBox = document.getElementById('answerbox');
    const EncryptButton = document.getElementById('inputbutton');
    const DesencryptionButton = document.getElementById('answerbutton');
    const CopyButton = document.getElementById('copybutton');

    function encryptText() {
        const inputText = inputBox.value.toLowerCase();
        let encryptedText = '';

        for (let i = 0; i < inputText.length; i++) {
            let currentChar = inputText[i];

            switch (currentChar) {
                case 'a':
                    encryptedText += 'ai';
                    break;
                case 'e':
                    encryptedText += 'enter';
                    break;
                case 'i':
                    encryptedText += 'imes';
                    break;
                case 'o':
                    encryptedText += 'ober';
                    break;
                case 'u':
                    encryptedText += 'ufat';
                    break;
                default:
                    encryptedText += currentChar; 
                    break;
            }
        }

        answerBox.value = encryptedText;
    }

    function desencryptText(traduccion) {
        var inputTexto = document.getElementById("inputbox").value.trim();
        var textoDesencriptado = "";
    
        for (var i = 0; i < inputTexto.length; i++) {
            var caracter = inputTexto[i];
            if (caracter == 'a' && inputTexto[i+1] == 'i') {
                textoDesencriptado += 'a';
                i++; 
            } else if (caracter == 'e' && inputTexto.substring(i, i+5) == 'enter') {
                textoDesencriptado += 'e';
                i += 4;
            } else if (caracter == 'i' && inputTexto.substring(i, i+4) == 'imes') {
                textoDesencriptado += 'i';
                i += 3; 
            } else if (caracter == 'o' && inputTexto.substring(i, i+4) == 'ober') {
                textoDesencriptado += 'o';
                i += 3; 
            } else if (caracter == 'u' && inputTexto.substring(i, i+4) == 'ufat') {
                textoDesencriptado += 'u';
                i += 3; 
            } else {
                textoDesencriptado += caracter;
            }
        }
    
        document.getElementById("answerbox").value = textoDesencriptado;
    }

    function copyToClipboard() {
        answerBox.select();
        document.execCommand('copy'); 
    }

    EncryptButton.addEventListener('click', encryptText);
    DesencryptionButton.addEventListener('click', desencryptText);
    CopyButton.addEventListener('click', copyToClipboard);
});
