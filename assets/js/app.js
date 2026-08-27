/* =========================================================
   Upload — simulação visual
   Nenhum arquivo é enviado. A barra e o link são fingidos.
   ========================================================= */

const etapas = {
    inicio:    document.getElementById('etapa-inicio'),
    progresso: document.getElementById('etapa-progresso'),
    pronto:    document.getElementById('etapa-pronto'),
};

const barra       = document.getElementById('barra');
const preenchida  = document.getElementById('barra-preenchida');
const percentual  = document.getElementById('percentual');
const nomeArquivo = document.getElementById('nome-arquivo');
const campoLink   = document.getElementById('campo-link');
const btnCopiar   = document.getElementById('btn-copiar');

/** Mostra uma etapa e esconde as outras. */
function mostrarEtapa(nome) {
    Object.values(etapas).forEach(el => el.classList.remove('etapa-ativa'));
    etapas[nome].classList.add('etapa-ativa');
}

/** Gera um código curto aleatório para o link. */
function gerarCodigo(tamanho = 8) {
    const letras = 'abcdefghijkmnpqrstuvwxyz23456789';
    let codigo = '';

    for (let i = 0; i < tamanho; i++) {
        codigo += letras[Math.floor(Math.random() * letras.length)];
    }

    return codigo;
}

/** Anima a barra de 0 a 100 e chama o callback ao terminar. */
function animarProgresso(aoConcluir) {
    let valor = 0;

    const intervalo = setInterval(() => {
        // Avanço irregular, para parecer um upload de verdade.
        valor += Math.random() * 12 + 3;

        if (valor >= 100) {
            valor = 100;
            clearInterval(intervalo);
            setTimeout(aoConcluir, 400);
        }

        const arredondado = Math.floor(valor);

        preenchida.style.width = arredondado + '%';
        percentual.textContent = arredondado + '%';
        barra.setAttribute('aria-valuenow', String(arredondado));
    }, 220);
}

/** Inicia o fluxo. */
function iniciarUpload() {
    preenchida.style.width = '0%';
    percentual.textContent = '0%';
    nomeArquivo.textContent = 'projeto-final.zip';

    mostrarEtapa('progresso');

    animarProgresso(() => {
        campoLink.value = 'https://appdownloads.test/s/' + gerarCodigo();
        mostrarEtapa('pronto');
    });
}

document.getElementById('btn-upload').addEventListener('click', iniciarUpload);
document.getElementById('btn-novo').addEventListener('click', iniciarUpload);

btnCopiar.addEventListener('click', async () => {
    campoLink.select();

    try {
        await navigator.clipboard.writeText(campoLink.value);
    } catch {
        document.execCommand('copy'); // navegadores antigos
    }

    const original = btnCopiar.textContent;
    btnCopiar.textContent = 'Copiado';
    setTimeout(() => { btnCopiar.textContent = original; }, 1600);
});
