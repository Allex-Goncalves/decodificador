document.getElementById('encrypt').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;
    if (inputText.trim() === '') {
        showNoMessage();
        return;
    }
    let encryptedText = btoa(inputText);
    showOutput(encryptedText);
    document.getElementById('input-text').value = '';
});

document.getElementById('decrypt').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;

    if (inputText.trim() === '') {
        showNoMessage();
        return;
    }

    let decryptedText = '';
    try {
        decryptedText = atob(inputText);
    } catch (e) {
        decryptedText = 'Erro na descriptografia: Texto inválido!';
    }
    showOutput(decryptedText);
});

document.getElementById('delete').addEventListener('click', function() {
    document.getElementById('input-text').value = '';
    document.getElementById('output-text').value = '';
});


document.getElementById('copy-btn').addEventListener('click', function() {
    let outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
});

function showOutput(text) {
    document.querySelector('.output-message').style.display = 'none';
    document.querySelector('.output-instruction').style.display = 'none';
    document.getElementById('output-image').style.display = 'none';
    let outputText = document.getElementById('output-text');
    outputText.style.display = 'block';
    outputText.value = text;
    document.getElementById('copy-btn').style.display = 'block';
}

function showNoMessage() {
    alert('Nenhuma mensagem encontrada. Digite um texto para criptografar ou descriptografar.');
   
}