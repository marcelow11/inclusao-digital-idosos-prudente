// Controle de Acessibilidade e Prevenção de Erros Acidentais
document.addEventListener('DOMContentLoaded', () => {
    const htmlEl = document.documentElement;
    const bodyEl = document.body;

    // Ajuste dinâmico de fonte (100% até 200%)
    let tamanhoAtual = 18;
    const tamanhoMin = 16;
    const tamanhoMax = 32;

    const btnAumentar = document.getElementById('btn-aumentar-fonte');
    const btnDiminuir = document.getElementById('btn-diminuir-fonte');
    const btnContraste = document.getElementById('btn-alto-contraste');

    btnAumentar.addEventListener('click', () => {
        if (tamanhoAtual < tamanhoMax) {
            tamanhoAtual += 2;
            htmlEl.style.fontSize = `${tamanhoAtual}px`;
        }
    });

    btnDiminuir.addEventListener('click', () => {
        if (tamanhoAtual > tamanhoMin) {
            tamanhoAtual -= 2;
            htmlEl.style.fontSize = `${tamanhoAtual}px`;
        }
    });

    // Alternador de Alto Contraste (WCAG AAA)
    btnContraste.addEventListener('click', () => {
        bodyEl.classList.toggle('alto-contraste');
    });

    // Modal de Confirmação Explícita
    const modal = document.getElementById('modal-confirmacao');
    const textoModal = document.getElementById('texto-modal');
    const btnConfirmar = document.getElementById('btn-confirmar-acao');
    const btnCancelar = document.getElementById('btn-cancelar-acao');
    const cartoes = document.querySelectorAll('.cartao-servico');

    let urlDestino = '';

    cartoes.forEach((cartao) => {
        cartao.addEventListener('click', () => {
            const nomeServico = cartao.getAttribute('data-servico');
            urlDestino = cartao.getAttribute('data-url');
            textoModal.textContent = `Você tocou em "${nomeServico}". Deseja abrir este serviço agora?`;
            modal.classList.remove('oculto');
            btnConfirmar.focus();
        });
    });

    btnConfirmar.addEventListener('click', () => {
        modal.classList.add('oculto');
        if (urlDestino) {
            window.open(urlDestino, '_blank', 'noopener,noreferrer');
        }
    });

    btnCancelar.addEventListener('click', () => {
        modal.classList.add('oculto');
        urlDestino = '';
    });
});
