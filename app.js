let buttonTranslate = document.querySelector('.button-translate');
let textInput = document.querySelector('.textarea-input');
let output = document.querySelector('.output-container');

let serverUrl = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json';

textInput.addEventListener('click', () => output.textContent = 'Your translations will appear here');

buttonTranslate.addEventListener('click', () => {
    fetch(serverUrl + "?text=" + textInput.value)
        .then(response => response.json())
        .then(data => {
            output.textContent = data.contents.translated
            textInput.value = ''
        }).catch(error => console.log(error));
});