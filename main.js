
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const corInput = document.getElementById('cor');
const espessuraInput = document.getElementById('espessura');

let desenhando = false;

canvas.addEventListener('mousedown', iniciarDesenho);
canvas.addEventListener('mouseup', pararDesenho);
canvas.addEventListener('mousemove', desenhar);
corInput.addEventListener('input', atualizarCor);
espessuraInput.addEventListener('input', atualizarEspessura);

function iniciarDesenho(e) {
    desenhando = true;
    desenhar(e);
}

function pararDesenho() {
    desenhando = false;
    ctx.beginPath();
}

function desenhar(e) {
    if (!desenhando) return;

    const cor = corInput.value;
    const espessura = espessuraInput.value;
    ctx.lineWidth = espessura;
    ctx.lineCap = 'round';
    ctx.strokeStyle = cor;

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

function atualizarCor() {
    ctx.strokeStyle = corInput.value;
}

function atualizarEspessura() {
    ctx.lineWidth = espessuraInput.value;
}

function limparTela() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
