"use strict";


/* ==========================================================
   CONFIGURAÇÕES
========================================================== */

const TOTAL_PAIRS =
  10;


const CARD_BACK_ID =
  "CAPA";


/* ==========================================================
   CAMINHOS DAS IMAGENS
========================================================== */

const IMAGE_SOURCES =
  Object.fromEntries([
    ...Array.from(
      {
        length:
          20
      },

      (
        _,
        index
      ) => {
        const number =
          String(
            index + 1
          ).padStart(
            2,
            "0"
          );


        return [
          `img${number}`,
          `img${number}.jpg`
        ];
      }
    ),

    [
      CARD_BACK_ID,
      "CAPA.jpg"
    ]
  ]);


/* ==========================================================
   ORGANIZAÇÃO DOS PARES E TEXTOS
========================================================== */

const THEMES = [
  {
    firstImage:
      "img01",

    secondImage:
      "img02",

    name:
      "O Semeador",

    subtitle:
      "Aquele que lança a semente",

    description:
      "O semeador representa quem compartilha uma boa mensagem com generosidade. " +
      "Ele lança as sementes em diferentes lugares, sem controlar completamente o " +
      "resultado, mas confiando que algumas encontrarão espaço para crescer. Sua " +
      "ação ensina sobre dedicação, esperança e disposição para transmitir aquilo " +
      "que pode transformar vidas."
  },

  {
    firstImage:
      "img03",

    secondImage:
      "img04",

    name:
      "A Semente",

    subtitle:
      "A palavra e o ensinamento",

    description:
      "A semente simboliza uma mensagem capaz de gerar vida e transformação. Mesmo " +
      "sendo pequena, carrega dentro de si a possibilidade de crescer e produzir " +
      "frutos. Seu desenvolvimento depende da maneira como é recebida, compreendida, " +
      "protegida e cultivada ao longo do tempo."
  },

  {
    firstImage:
      "img05",

    secondImage:
      "img06",

    name:
      "À Beira do Caminho",

    subtitle:
      "Uma mensagem que não encontra espaço",

    description:
      "A semente que cai à beira do caminho permanece sobre uma superfície endurecida " +
      "e não consegue penetrar no solo. Ela representa aquilo que é ouvido, mas não " +
      "encontra abertura para ser compreendido ou acolhido. Quando não existe atenção " +
      "ou interesse, o ensinamento pode desaparecer antes de produzir qualquer mudança."
  },

  {
    firstImage:
      "img07",

    secondImage:
      "img08",

    name:
      "As Aves",

    subtitle:
      "Aquilo que retira a semente",

    description:
      "As aves levam as sementes que ficaram expostas sobre o caminho. Elas representam " +
      "distrações, pressões, dúvidas e influências que podem retirar uma boa mensagem " +
      "antes que ela seja compreendida e guardada. Esse par destaca a importância da " +
      "atenção e do cuidado com aquilo que aprendemos."
  },

  {
    firstImage:
      "img09",

    secondImage:
      "img10",

    name:
      "Solo Pedregoso",

    subtitle:
      "Crescimento rápido e pouca profundidade",

    description:
      "No solo pedregoso, a semente nasce rapidamente, mas encontra pouca terra para " +
      "aprofundar suas raízes. Esse cenário representa o entusiasmo inicial que não é " +
      "acompanhado por compreensão, compromisso e continuidade. Quando surgem dificuldades, " +
      "aquilo que parecia forte pode desaparecer por não possuir raízes profundas."
  },

  {
    firstImage:
      "img11",

    secondImage:
      "img12",

    name:
      "Sol e Falta de Raiz",

    subtitle:
      "A dificuldade que revela a fragilidade",

    description:
      "Quando o sol se intensifica, a planta sem raízes profundas seca. O sol representa " +
      "os desafios, as dificuldades e as situações que colocam nossas escolhas à prova. " +
      "Esse par ensina que o crescimento verdadeiro precisa de raízes formadas por " +
      "conhecimento, confiança, prática e perseverança."
  },

  {
    firstImage:
      "img13",

    secondImage:
      "img14",

    name:
      "Entre Espinhos",

    subtitle:
      "Preocupações que sufocam o crescimento",

    description:
      "Os espinhos crescem ao redor da planta e impedem seu desenvolvimento. Eles " +
      "representam preocupações excessivas, ambições, medos, distrações e interesses " +
      "que ocupam tanto espaço que a boa mensagem deixa de produzir frutos. O ensinamento " +
      "convida a reconhecer aquilo que sufoca o crescimento e a reorganizar as prioridades."
  },

  {
    firstImage:
      "img15",

    secondImage:
      "img16",

    name:
      "A Boa Terra",

    subtitle:
      "Acolher, compreender e cultivar",

    description:
      "A boa terra representa um coração e uma mente disponíveis para ouvir, compreender " +
      "e colocar em prática. Ela não é apenas um lugar de recepção, mas também de cuidado, " +
      "compromisso e crescimento contínuo. A mensagem encontra condições para criar raízes, " +
      "desenvolver-se e transformar atitudes."
  },

  {
    firstImage:
      "img17",

    secondImage:
      "img18",

    name:
      "Os Frutos",

    subtitle:
      "O resultado de uma mensagem bem cultivada",

    description:
      "A semente que cresce em boa terra produz frutos em diferentes quantidades. Os " +
      "frutos simbolizam atitudes, escolhas e ações que demonstram que o ensinamento foi " +
      "verdadeiramente acolhido. Uma boa mensagem produz resultados quando se transforma " +
      "em respeito, solidariedade, responsabilidade e cuidado com outras pessoas."
  },

  {
    firstImage:
      "img19",

    secondImage:
      "img20",

    name:
      "Escuta e Perseverança",

    subtitle:
      "Transformar a mensagem em modo de viver",

    description:
      "Ouvir é apenas o início. Compreender, guardar, praticar e perseverar tornam o " +
      "aprendizado duradouro. A parábola convida cada pessoa a preparar sua vida como boa " +
      "terra, capaz de acolher uma boa mensagem, resistir às dificuldades e multiplicar " +
      "seus frutos na convivência com a comunidade."
  }
];


/* ==========================================================
   PRODUÇÃO DAS CARTAS
========================================================== */

const CARDS =
  THEMES.flatMap(
    (
      theme,
      index
    ) => [
      {
        id:
          theme.firstImage,

        pair:
          index + 1,

        type:
          "first",

        alt:
          `${theme.name}: primeira imagem`
      },

      {
        id:
          theme.secondImage,

        pair:
          index + 1,

        type:
          "second",

        alt:
          `${theme.name}: segunda imagem`
      }
    ]
  );


const RESOURCES = [
  ...CARDS.map(
    (card) => ({
      id:
        card.id,

      src:
        IMAGE_SOURCES[
          card.id
        ],

      alt:
        card.alt
    })
  ),

  {
    id:
      CARD_BACK_ID,

    src:
      IMAGE_SOURCES[
        CARD_BACK_ID
      ],

    alt:
      "Imagem da face fechada das cartas"
  }
];


/* ==========================================================
   ELEMENTOS
========================================================== */

const $ =
  (id) =>
    document.getElementById(
      id
    );


const initialScreen =
  $("initialScreen");


const gameScreen =
  $("gameScreen");


const meaningScreen =
  $("meaningScreen");


const resultModal =
  $("resultModal");


const screens = [
  initialScreen,
  gameScreen,
  meaningScreen
];


const previewImages = [
  $("previewImage1"),
  $("previewImage2"),
  $("previewImage3")
];


const previewCards = [
  ...document.querySelectorAll(
    ".preview-card"
  )
];


const imageCache =
  new Map();


/* ==========================================================
   ESTADO
========================================================== */

let resourcesReady =
  false;


let missingFilesCount =
  0;


let firstCard =
  null;


let secondCard =
  null;


let boardLocked =
  false;


let moves =
  0;


let matchedPairs =
  0;


let elapsedSeconds =
  0;


let timerInterval =
  null;


let timerStarted =
  false;


let meaningsRendered =
  false;


let previewTimeoutId =
  null;


let gameSessionId =
  0;


const pendingGameTimeouts =
  new Set();


/* ==========================================================
   CONTROLE DE ESPERAS
========================================================== */

function scheduleGameTimeout(
  callback,
  delay
) {
  const sessionId =
    gameSessionId;


  const timeoutId =
    window.setTimeout(
      () => {
        pendingGameTimeouts.delete(
          timeoutId
        );


        if (
          sessionId !==
          gameSessionId
        ) {
          return;
        }


        callback();
      },

      delay
    );


  pendingGameTimeouts.add(
    timeoutId
  );


  return timeoutId;
}


function clearPendingGameTimeouts() {
  pendingGameTimeouts.forEach(
    (
      timeoutId
    ) => {
      window.clearTimeout(
        timeoutId
      );
    }
  );


  pendingGameTimeouts.clear();
}


/* ==========================================================
   IMAGEM PROVISÓRIA
========================================================== */

function createFallbackImage(
  resourceId,
  isCardBack = false
) {
  const mainText =
    isCardBack

      ? "✦"

      : resourceId
          .replace(
            "img",
            ""
          )
          .toUpperCase();


  const footerText =
    isCardBack

      ? "SEMEADOR"

      : resourceId.toUpperCase();


  const svg = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="960"
      height="540"
      viewBox="0 0 960 540"
    >
      <defs>
        <linearGradient
          id="gradient"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop
            offset="0%"
            stop-color="#2b1607"
          />

          <stop
            offset="52%"
            stop-color="#7a4616"
          />

          <stop
            offset="100%"
            stop-color="#f47f17"
          />
        </linearGradient>
      </defs>

      <rect
        width="960"
        height="540"
        rx="38"
        fill="url(#gradient)"
      />

      <rect
        x="22"
        y="22"
        width="916"
        height="496"
        rx="28"
        fill="none"
        stroke="#ffd447"
        stroke-width="8"
      />

      <circle
        cx="480"
        cy="255"
        r="150"
        fill="#160b04"
        fill-opacity="0.55"
        stroke="#fff0a5"
        stroke-width="8"
      />

      <text
        x="480"
        y="310"
        text-anchor="middle"
        font-family="Georgia, serif"
        font-size="${isCardBack ? 130 : 150}"
        font-weight="900"
        fill="#fff7d4"
      >
        ${mainText}
      </text>

      <rect
        x="310"
        y="430"
        width="340"
        height="58"
        rx="29"
        fill="#160b04"
        fill-opacity="0.64"
      />

      <text
        x="480"
        y="468"
        text-anchor="middle"
        font-family="Arial, sans-serif"
        font-size="24"
        font-weight="800"
        letter-spacing="5"
        fill="#fff7d4"
      >
        ${footerText}
      </text>
    </svg>
  `;


  return (
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(
      svg
    )
  );
}


/* ==========================================================
   CARREGAMENTO DAS IMAGENS
========================================================== */

function loadImageResource(
  resource
) {
  return new Promise(
    (
      resolve
    ) => {
      const image =
        new Image();


      image.alt =
        resource.alt;


      image.decoding =
        "async";


      image.onload =
        () => {
          imageCache.set(
            resource.id,
            resource.src
          );


          resolve(
            false
          );
        };


      image.onerror =
        () => {
          missingFilesCount +=
            1;


          imageCache.set(
            resource.id,

            createFallbackImage(
              resource.id,

              resource.id ===
                CARD_BACK_ID
            )
          );


          resolve(
            true
          );
        };


      image.src =
        resource.src;
    }
  );
}


/* ==========================================================
   PRÉ-CARREGAMENTO
========================================================== */

async function preloadAllResources() {
  resourcesReady =
    false;


  missingFilesCount =
    0;


  imageCache.clear();


  $("startButton").hidden =
    true;


  $("startButton").disabled =
    true;


  let completed =
    0;


  updateLoadingProgress(
    completed
  );


  await Promise.all(
    RESOURCES.map(
      async (
        resource
      ) => {
        $("loadingText").textContent =
          resource.id ===
          CARD_BACK_ID

            ? "Preparando CAPA.jpg..."

            : `Preparando ${resource.src}...`;


        await loadImageResource(
          resource
        );


        completed +=
          1;


        updateLoadingProgress(
          completed
        );
      }
    )
  );


  resourcesReady =
    true;


  finishLoading();
}


/* ==========================================================
   PROGRESSO DO CARREGAMENTO
========================================================== */

function updateLoadingProgress(
  completed
) {
  const percentage =
    Math.round(
      (
        completed /
        RESOURCES.length
      ) * 100
    );


  $("loadingPercentage").textContent =
    `${percentage}%`;


  $("loadingCounter").textContent =
    `${completed} de ` +
    `${RESOURCES.length} recursos preparados`;


  $("loadingBar").style.width =
    `${percentage}%`;


  $("loadingTrack").setAttribute(
    "aria-valuenow",

    String(
      completed
    )
  );
}


/* ==========================================================
   FINAL DO CARREGAMENTO
========================================================== */

function finishLoading() {
  $("loadingPercentage").textContent =
    "100%";


  $("loadingBar").style.width =
    "100%";


  if (
    missingFilesCount ===
    0
  ) {
    $("loadingText").textContent =
      "Todas as imagens estão prontas.";


    $("fileInformation").innerHTML = `
      <span aria-hidden="true">
        ✓
      </span>

      <p>
        <strong>img01.jpg</strong>
        até
        <strong>img20.jpg</strong>
        e
        <strong>CAPA.jpg</strong>
        foram encontrados corretamente.
      </p>
    `;

  } else {
    $("loadingText").textContent =
      "O jogo está pronto com imagens provisórias.";


    $("fileInformation").innerHTML = `
      <span aria-hidden="true">
        !
      </span>

      <p>
        ${missingFilesCount}
        arquivo(s) não foram encontrados.
        Verifique os nomes, a extensão
        <strong>.jpg</strong>
        e as letras maiúsculas em
        <strong>CAPA.jpg</strong>.
      </p>
    `;
  }


  refreshInitialPreview(
    false
  );


  $("startButton").hidden =
    false;


  $("startButton").disabled =
    false;
}


/* ==========================================================
   FUNÇÕES AUXILIARES
========================================================== */

function shuffle(
  items
) {
  const result =
    [...items];


  for (
    let index =
      result.length - 1;

    index > 0;

    index -= 1
  ) {
    const randomIndex =
      Math.floor(
        Math.random() *
        (
          index + 1
        )
      );


    [
      result[index],
      result[randomIndex]
    ] = [
      result[randomIndex],
      result[index]
    ];
  }


  return result;
}


function createImage(
  resourceId,
  altText
) {
  const image =
    document.createElement(
      "img"
    );


  image.src =
    imageCache.get(
      resourceId
    ) ||
    IMAGE_SOURCES[
      resourceId
    ];


  image.alt =
    altText;


  image.draggable =
    false;


  image.loading =
    "eager";


  return image;
}


/* ==========================================================
   PRÉVIA INICIAL
========================================================== */

function refreshInitialPreview(
  animate = true
) {
  if (
    !resourcesReady
  ) {
    return;
  }


  const selectedCards =
    shuffle(
      CARDS.filter(
        (
          card
        ) =>
          card.type ===
          "second"
      )
    ).slice(
      0,
      3
    );


  if (
    previewTimeoutId !==
    null
  ) {
    window.clearTimeout(
      previewTimeoutId
    );


    previewTimeoutId =
      null;
  }


  if (
    animate
  ) {
    previewCards.forEach(
      (
        card
      ) => {
        card.classList.add(
          "preview-changing"
        );
      }
    );
  }


  previewTimeoutId =
    window.setTimeout(
      () => {
        selectedCards.forEach(
          (
            card,
            index
          ) => {
            previewImages[
              index
            ].src =
              imageCache.get(
                card.id
              ) ||
              IMAGE_SOURCES[
                card.id
              ];


            previewImages[
              index
            ].alt =
              card.alt;
          }
        );


        previewCards.forEach(
          (
            card
          ) => {
            card.classList.remove(
              "preview-changing"
            );
          }
        );


        previewTimeoutId =
          null;
      },

      animate
        ? 250
        : 0
    );
}


/* ==========================================================
   TELAS E NAVEGAÇÃO
========================================================== */

function syncBodyLock() {
  document.body.classList.toggle(
    "page-locked",

    !initialScreen.hidden ||
    !resultModal.hidden
  );
}


function showOnlyScreen(
  targetScreen
) {
  screens.forEach(
    (
      screen
    ) => {
      const isTarget =
        screen ===
        targetScreen;


      screen.hidden =
        !isTarget;


      screen.setAttribute(
        "aria-hidden",

        isTarget
          ? "false"
          : "true"
      );


      screen.classList.remove(
        "is-visible"
      );
    }
  );


  if (
    targetScreen !==
    initialScreen
  ) {
    window.requestAnimationFrame(
      () => {
        targetScreen.classList.add(
          "is-visible"
        );
      }
    );
  }


  syncBodyLock();
}


function openGameScreen() {
  if (
    !resourcesReady
  ) {
    return;
  }


  closeResultModal();


  resetGameState();


  createBoard();


  showOnlyScreen(
    gameScreen
  );


  window.scrollTo({
    top:
      0,

    behavior:
      "auto"
  });
}


function restartGame() {
  closeResultModal();


  resetGameState();


  createBoard();


  showOnlyScreen(
    gameScreen
  );


  window.scrollTo({
    top:
      0,

    behavior:
      "smooth"
  });
}


function returnToInitialScreen() {
  resetGameState();


  closeResultModal();


  refreshInitialPreview(
    true
  );


  showOnlyScreen(
    initialScreen
  );


  $("loadingText").textContent =
    "As imagens continuam preparadas para uma nova partida.";


  window.scrollTo({
    top:
      0,

    behavior:
      "auto"
  });
}


function openMeaningScreen() {
  closeResultModal();


  renderMeaningScreen();


  showOnlyScreen(
    meaningScreen
  );


  window.scrollTo({
    top:
      0,

    behavior:
      "smooth"
  });
}


function backToCompletedGame() {
  showOnlyScreen(
    gameScreen
  );


  window.setTimeout(
    () => {
      $("completionPanel")
        .scrollIntoView({
          behavior:
            "smooth",

          block:
            "center"
        });
    },

    100
  );
}


/* ==========================================================
   CRIAÇÃO DO TABULEIRO
========================================================== */

function createBoard() {
  const grid =
    $("memoryGrid");


  const fragment =
    document.createDocumentFragment();


  grid.innerHTML =
    "";


  shuffle(
    CARDS
  ).forEach(
    (
      cardData,
      index
    ) => {
      const button =
        document.createElement(
          "button"
        );


      const inner =
        document.createElement(
          "span"
        );


      const back =
        document.createElement(
          "span"
        );


      const front =
        document.createElement(
          "span"
        );


      button.type =
        "button";


      button.className =
        `memory-card ${cardData.type}-card`;


      button.dataset.id =
        cardData.id;


      button.dataset.pair =
        String(
          cardData.pair
        );


      button.dataset.position =
        String(
          index + 1
        );


      button.setAttribute(
        "aria-label",

        `Carta ${index + 1}, fechada`
      );


      inner.className =
        "memory-card-inner";


      /*
        FACE FECHADA:
        CAPA.jpg
      */

      back.className =
        "memory-card-face memory-card-back";


      back.setAttribute(
        "aria-hidden",
        "true"
      );


      back.appendChild(
        createImage(
          CARD_BACK_ID,
          ""
        )
      );


      /*
        FACE ABERTA:
        img01.jpg até img20.jpg
      */

      front.className =
        "memory-card-face memory-card-front";


      front.appendChild(
        createImage(
          cardData.id,
          cardData.alt
        )
      );


      inner.append(
        back,
        front
      );


      button.appendChild(
        inner
      );


      /*
        A única interação da carta é o clique.
        Não existe mouseenter ou mouseleave.
      */

      button.addEventListener(
        "click",

        () => {
          flipCard(
            button
          );
        }
      );


      fragment.appendChild(
        button
      );
    }
  );


  grid.appendChild(
    fragment
  );
}


/* ==========================================================
   VIRAR CARTA
========================================================== */

function flipCard(
  card
) {
  if (
    boardLocked ||
    card.classList.contains(
      "is-flipped"
    ) ||
    card.classList.contains(
      "is-matched"
    )
  ) {
    return;
  }


  startTimer();


  card.classList.add(
    "is-flipped"
  );


  card.setAttribute(
    "aria-label",

    `Carta aberta: ${card.dataset.id}`
  );


  if (
    !firstCard
  ) {
    firstCard =
      card;


    $("gameInstruction").textContent =
      "Agora selecione a segunda carta.";


    return;
  }


  secondCard =
    card;


  moves +=
    1;


  updateGameStatus();


  if (
    firstCard.dataset.pair ===
    secondCard.dataset.pair
  ) {
    registerMatchedPair();

  } else {
    hideIncorrectCards();
  }
}


/* ==========================================================
   PAR CORRETO
========================================================== */

function registerMatchedPair() {
  boardLocked =
    true;


  const matchedCards = [
    firstCard,
    secondCard
  ];


  matchedCards.forEach(
    (
      card
    ) => {
      card.classList.add(
        "is-matched"
      );


      card.disabled =
        true;


      card.setAttribute(
        "aria-label",
        "Carta encontrada"
      );
    }
  );


  matchedPairs +=
    1;


  updateGameStatus();


  $("gameInstruction").textContent =
    "Combinação encontrada!";


  scheduleGameTimeout(
    () => {
      firstCard =
        null;


      secondCard =
        null;


      boardLocked =
        false;


      if (
        matchedPairs ===
        TOTAL_PAIRS
      ) {
        finishGame();

      } else {
        $("gameInstruction").textContent =
          "Continue procurando os pares restantes.";
      }
    },

    650
  );
}


/* ==========================================================
   PAR INCORRETO
========================================================== */

function hideIncorrectCards() {
  boardLocked =
    true;


  const incorrectCards = [
    firstCard,
    secondCard
  ];


  incorrectCards.forEach(
    (
      card
    ) => {
      card.classList.add(
        "is-wrong"
      );
    }
  );


  $("gameInstruction").textContent =
    "Essas imagens não formam uma combinação.";


  scheduleGameTimeout(
    () => {
      incorrectCards.forEach(
        (
          card
        ) => {
          card.classList.remove(
            "is-flipped",
            "is-wrong"
          );


          card.setAttribute(
            "aria-label",

            `Carta ${card.dataset.position}, fechada`
          );
        }
      );


      firstCard =
        null;


      secondCard =
        null;


      boardLocked =
        false;


      $("gameInstruction").textContent =
        "Selecione duas novas cartas.";
    },

    1000
  );
}


/* ==========================================================
   CRONÔMETRO
========================================================== */

function startTimer() {
  if (
    timerStarted
  ) {
    return;
  }


  timerStarted =
    true;


  timerInterval =
    window.setInterval(
      () => {
        elapsedSeconds +=
          1;


        $("timer").textContent =
          formatTime(
            elapsedSeconds
          );
      },

      1000
    );
}


function stopTimer() {
  if (
    timerInterval !==
    null
  ) {
    window.clearInterval(
      timerInterval
    );
  }


  timerInterval =
    null;


  timerStarted =
    false;
}


function formatTime(
  totalSeconds
) {
  const minutes =
    Math.floor(
      totalSeconds / 60
    );


  const seconds =
    totalSeconds % 60;


  return (
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")}`
  );
}


/* ==========================================================
   STATUS
========================================================== */

function updateGameStatus() {
  $("movesCounter").textContent =
    String(
      moves
    );


  $("pairsCounter").textContent =
    String(
      matchedPairs
    );


  $("pairsProgressBar").style.width =
    `${
      (
        matchedPairs /
        TOTAL_PAIRS
      ) * 100
    }%`;


  $("pairsProgress").setAttribute(
    "aria-valuenow",

    String(
      matchedPairs
    )
  );
}


/* ==========================================================
   REDEFINIR JOGO
========================================================== */

function resetGameState() {
  clearPendingGameTimeouts();


  gameSessionId +=
    1;


  stopTimer();


  firstCard =
    null;


  secondCard =
    null;


  boardLocked =
    false;


  moves =
    0;


  matchedPairs =
    0;


  elapsedSeconds =
    0;


  $("movesCounter").textContent =
    "0";


  $("timer").textContent =
    "00:00";


  $("pairsCounter").textContent =
    "0";


  $("pairsProgressBar").style.width =
    "0%";


  $("pairsProgress").setAttribute(
    "aria-valuenow",
    "0"
  );


  $("gameInstruction").textContent =
    "Selecione duas cartas para encontrar uma combinação.";


  $("completionPanel").hidden =
    true;
}


/* ==========================================================
   FINALIZAÇÃO
========================================================== */

function finishGame() {
  stopTimer();


  $("finalMoves").textContent =
    String(
      moves
    );


  $("finalTime").textContent =
    formatTime(
      elapsedSeconds
    );


  $("gameInstruction").textContent =
    "Parabéns! Todos os pares foram encontrados.";


  $("completionPanel").hidden =
    false;


  scheduleGameTimeout(
    openResultModal,
    500
  );
}


/* ==========================================================
   MODAL
========================================================== */

function openResultModal() {
  resultModal.hidden =
    false;


  resultModal.setAttribute(
    "aria-hidden",
    "false"
  );


  syncBodyLock();


  $("modalMeaningButton").focus();
}


function closeResultModal() {
  resultModal.hidden =
    true;


  resultModal.setAttribute(
    "aria-hidden",
    "true"
  );


  syncBodyLock();
}


/* ==========================================================
   TELA DE SIGNIFICADOS
========================================================== */

function renderMeaningScreen() {
  if (
    meaningsRendered
  ) {
    return;
  }


  meaningsRendered =
    true;


  const grid =
    $("meaningGrid");


  const fragment =
    document.createDocumentFragment();


  grid.innerHTML =
    "";


  THEMES.forEach(
    (
      theme,
      index
    ) => {
      const article =
        document.createElement(
          "article"
        );


      const images =
        document.createElement(
          "div"
        );


      const content =
        document.createElement(
          "div"
        );


      const number =
        document.createElement(
          "p"
        );


      const title =
        document.createElement(
          "h3"
        );


      const subtitle =
        document.createElement(
          "p"
        );


      const description =
        document.createElement(
          "p"
        );


      article.className =
        "meaning-card";


      images.className =
        "meaning-images";


      content.className =
        "meaning-content";


      number.className =
        "meaning-number";


      subtitle.className =
        "meaning-subtitle";


      description.className =
        "meaning-description";


      images.append(
        createMeaningFigure(
          theme.firstImage,

          `${theme.name}: primeira imagem`,

          "IMAGEM 1",

          true
        ),

        createMeaningFigure(
          theme.secondImage,

          `${theme.name}: segunda imagem`,

          "IMAGEM 2",

          false
        )
      );


      number.textContent =
        `ETAPA ${String(
          index + 1
        ).padStart(
          2,
          "0"
        )}`;


      title.textContent =
        theme.name;


      subtitle.textContent =
        theme.subtitle;


      description.textContent =
        theme.description;


      content.append(
        number,
        title,
        subtitle,
        description
      );


      article.append(
        images,
        content
      );


      fragment.appendChild(
        article
      );
    }
  );


  grid.appendChild(
    fragment
  );
}


/* ==========================================================
   FIGURAS DOS SIGNIFICADOS
========================================================== */

function createMeaningFigure(
  imageId,
  altText,
  labelText,
  isFirst
) {
  const figure =
    document.createElement(
      "figure"
    );


  const caption =
    document.createElement(
      "figcaption"
    );


  figure.className =
    isFirst

      ? "meaning-figure first"

      : "meaning-figure";


  caption.className =
    "meaning-label";


  caption.textContent =
    labelText;


  figure.append(
    createImage(
      imageId,
      altText
    ),

    caption
  );


  return figure;
}


/* ==========================================================
   EVENTOS
========================================================== */

$("startButton").addEventListener(
  "click",
  openGameScreen
);


$("restartButton").addEventListener(
  "click",
  restartGame
);


$("homeButton").addEventListener(
  "click",
  returnToInitialScreen
);


$("accessMeaningButton").addEventListener(
  "click",
  openMeaningScreen
);


$("modalMeaningButton").addEventListener(
  "click",
  openMeaningScreen
);


$("playAgainButton").addEventListener(
  "click",
  restartGame
);


$("modalHomeButton").addEventListener(
  "click",
  returnToInitialScreen
);


$("backToGameButton").addEventListener(
  "click",
  backToCompletedGame
);


$("meaningHomeButton").addEventListener(
  "click",
  returnToInitialScreen
);


$("meaningPlayAgainButton").addEventListener(
  "click",
  restartGame
);


$("modalOverlay").addEventListener(
  "click",
  closeResultModal
);


document.addEventListener(
  "keydown",

  (
    event
  ) => {
    if (
      event.key ===
        "Escape" &&

      !resultModal.hidden
    ) {
      closeResultModal();
    }
  }
);


/* ==========================================================
   INICIALIZAÇÃO
========================================================== */

preloadAllResources();
