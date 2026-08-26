<?php declare(strict_types=1); ?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<main class="caixa">

    <!-- ETAPA 1 — botão inicial -->
    <section class="etapa etapa-ativa" id="etapa-inicio">
        <h1>Enviar arquivo</h1>
        <p class="legenda">Escolha um arquivo e nós envie para virar link compartilhavel.</p>

        <button type="button" class="botao" id="btn-upload">Upload</button>
    </section>

    <!-- ETAPA 2 — barra de progresso -->
    <section class="etapa" id="etapa-progresso">
        <h1>Enviando…</h1>
        <p class="legenda" id="nome-arquivo">arquivo.zip</p>

        <div class="barra" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" id="barra">
            <div class="barra-preenchida" id="barra-preenchida"></div>
        </div>

        <p class="percentual" id="percentual">0%</p>
    </section>

    <!-- ETAPA 3 — link pronto -->
    <section class="etapa" id="etapa-pronto">
        <div class="selo-ok" aria-hidden="true">✓</div>
        <h1>Envio concluído</h1>
        <p class="legenda">Qualquer pessoa com o link pode baixar.</p>

        <div class="link">
            <input type="text" id="campo-link" readonly value="">
            <button type="button" class="botao botao-menor" id="btn-copiar">Copiar</button>
        </div>

        <button type="button" class="botao botao-vazado" id="btn-novo">Enviar outro</button>
    </section>

</main>

<script src="assets/js/app.js"></script>

</body>
</html>
