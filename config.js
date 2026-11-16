/* ==========================================================================
   CONFIG.JS  —  ÚNICO ARQUIVO QUE VOCÊ EDITA PARA CRIAR UM NOVO CONVITE
   ==========================================================================

   COMO USAR:
   1. Troque apenas os arquivos usados na pasta /assets (mantendo os mesmos nomes).
   2. Edite os valores abaixo (nome, WhatsApp, mapa, cores, etc.).
   3. Suba no GitHub. Pronto — não precisa mexer no index.html.

   As cores no campo "tema" podem ser nome ('pink'), hexadecimal ('#f6c1cd')
   ou rgb('rgb(246,193,205)'). Use o formato que preferir.

   DICA: para reposicionar os botões da tela principal, abra o convite no
   navegador com ?editor=1 no final do link (ex.: .../index.html?editor=1),
   arraste os botões e clique em "Copiar código". Cole o resultado no campo
   "hotspots" aqui embaixo
   ========================================================================== */

window.CONFIG = {

  // ENGINE V4 MODULAR

  // ----- IDENTIDADE DO CONVITE -------------------------------------------
  // Nome do aniversariante. Aparece no título da aba do navegador e nos
  // textos automáticos do convite.
  nome: "Melissa",

  // ----- WHATSAPP (CONFIRMAR PRESENÇA) -----------------------------------
  // numero: DDI + DDD + número, SÓ DÍGITOS (sem +, espaço, parênteses ou traço).
  //         Ex.: 55 (Brasil) + 31 (DDD) + 985657116 -> "5531985657116"
  // mensagem: texto que já vem pré-preenchido quando a pessoa abre o WhatsApp.
  whatsapp: {
    numero: "5527988821677",
    mensagem: "Olá! Confirmo minha presença no aniversário da Melissa."
  },

  confirmacao: { maxPessoas: 6 },

  // ----- LOCALIZAÇÃO (BOTÃO MAPA) ----------------------------------------
  // Link completo do Google Maps. Abra o local no Maps, clique em "Compartilar"
  // -> "Copiar link" e cole aqui (mantenha as aspas).
  mapa: "https://maps.app.goo.gl/n79EkGZQsZBKM7ZQA",

  // ----- QUAIS TELAS APARECEM --------------------------------------------
  // video:     true  -> toca o vídeo (assets/video.mp4) depois da abertura.
  //            false  -> pula direto da abertura para a tela principal.
  // Cada opção pode ser true ou false.
  // Quando estiver false, o hotspot, a tela e a opção do editor são removidos.
  telas: {
    video: true,
    whatsapp: true,
    localizacao: true,
    presentes: true,
    dresscode: true,
    manual: true,
    contagem: false
  },

  // ----- PIX OPCIONAL (SUGESTÕES DE PRESENTES) ---------------------------
  // ativo: true  -> cria uma área clicável na tela de presentes.
  //        false -> não cria a área de PIX e o convite continua como antes.
  // chave: é exatamente o texto que será copiado quando o convidado clicar.
  // posicao: ajuste pelo editor visual (?editor=1), escolhendo “PIX (copiar chave)”.
  pix: {
    ativo: true,
    chave: "meloliveirastumbo@gmail.com",
    posicao: {"left":32.13546325878595,"top":77.80897120206508,"width":37.98722668730033,"height":3.712072397246148}
  },

  // ----- TEXTOS DOS BOTÕES -----------------------------------------------
  // Rótulos que aparecem nos botões. Edite livremente.
  textos: {
    abrir: "Toque para abrir",
    pularVideo: "Pular vídeo",
    voltar: "Voltar",
    ativarMusica: "Ativar música"
  },

  // ----- TEMA / CORES ----------------------------------------------------
  // cor:                 cor principal (barra do navegador mobile, acentos).
  // corBotaoVoltar:      fundo do botão "Voltar" (tela de presentes).
  // corTextoBotaoVoltar: texto do botão "Voltar".
  tema: {
    cor: "#f6c1cd",
    corBotaoVoltar: "rgba(255,255,255,.76)",
    corTextoBotaoVoltar: "#6b3a21"
  },


  // ----- BOTÕES DE VOLTAR -------------------------------------------------
  // mostrarTexto: true mostra “Voltar”; false deixa apenas a área clicável.
  // A posição pode ser alterada no editor ?editor=1.
  botoesVoltar: {
    presentes: { mostrarTexto:false, posicao: {"left":23.99551467651757,"top":87.5125448402511,"width":50.70607340754792,"height":5.958796230815783} },
    dresscode: { mostrarTexto:false, posicao: {"left":26.3964825029952,"top":88.26639619629475,"width":48.217274236222046,"height":6.230147178831688} },
    manual: { mostrarTexto:false, posicao: {"left":24.351738468450478,"top":87.80609305912114,"width":52.102245781749204,"height":7.035677120166123} }
  },

  // ----- POSIÇÃO DOS BOTÕES NA TELA PRINCIPAL ----------------------------
  // Valores em PORCENTAGEM da imagem (0 a 100). Para evitar mexer à mão,
  // use o editor (?editor=1) e cole o resultado aqui.
  //   left/top: canto superior esquerdo do botão
  //   width/height: tamanho do botão
    hotspots: {
        confirm: { left:10.932117299122135, top:59.66051059081367, width:21.48381183310703, height:9.377910962948095 },
        map: { left:39.264283831828514, top:59.89063451645776, width:20.51931482436097, height:9.098354679560018 },
        gift: { left:66.86956992500015, top:60.10998564376256, width:20.998396315894567, height:9.33393555091549 },
        dress: { left:22.492012779552716, top:73.45865151377647, width:22.225230256589455, height:8.528406707019835 },
        manual: { left:52.76095620694905, top:73.57372455447295, width:22.63418530351437, height:8.758548398657624 }
  },

  // ----- CONTAGEM REGRESSIVA ---------------------------------------------
  // Formato da data: ANO-MÊS-DIAT HORA:MINUTO:SEGUNDO (sem espaço antes do T).
  // Exemplo: "2026-10-03T16:00:00"
  // A posição pode ser ajustada no editor escolhendo "Contador (na tela)".
  // corNumero altera somente a cor dos números.
  // corLegenda altera a cor de Meses, Dias, Horas, Min e Seg.
  // Aceita hexadecimal, nome de cor ou rgb().
  contagem: {
    dataEvento: "2026-08-29T18:30:00",
    textoFinal: "A festa começou!",
    corNumero: "#ffffff",
    corLegenda: "#ffffff",
    posicao: { left:22.5175531649361, top:51.45224389795505, width:56.19169641074281, height:6.218642289127358 }
  },

  // ----- MÚSICA DE FUNDO -------------------------------------------------
  // volume: de 0 (mudo) a 1 (máximo). O padrão 0.30 é agradável e não
  //         briga com o áudio do vídeo.
  musica: {
    volume: 0.60
  }
};
