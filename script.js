"use strict";


/* ==========================================================
   CONFIGURAÇÕES
========================================================== */

const TOTAL_PAIRS =
  10;


const CARD_BACK_ID =
  "capa";


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
      "capa.jpg"
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
      "Ira",

    englishName:
      "Wrath",

    description:
      "É a raiva intensa que pode conduzir a atitudes impulsivas. " +
      "Compreender as próprias emoções e criar tempo para refletir " +
      "ajuda a transformar a ira em ação responsável."
  },

  {
    firstImage:
      "img03",

    secondImage:
      "img04",

    name:
      "Preguiça",

    englishName:
      "Sloth",

    description:
      "Representa a falta de disposição para agir diante das " +
      "responsabilidades. Pequenas ações, realizadas com constância, " +
      "podem superar a imobilidade e recuperar a motivação."
  },

  {
    firstImage:
      "img05",

    secondImage:
      "img06",

    name:
      "Inveja",

    englishName:
      "Envy",

    description:
      "Surge da comparação constante com as conquistas de outras " +
      "pessoas. Reconhecer o próprio valor ajuda a substituir a " +
      "inveja pelo aprendizado e pela admiração."
  },

  {
    firstImage:
      "img07",

    secondImage:
      "img08",

    name:
      "Ganância",

    englishName:
      "Greed",

    description:
      "É o desejo exagerado de possuir riquezas, poder ou vantagens. " +
      "A busca sem limites pode fazer com que necessidades humanas, " +
      "relações e responsabilidades sejam esquecidas."
  },

  {
    firstImage:
      "img09",

    secondImage:
      "img10",

    name:
      "Gula",

    englishName:
      "Gluttony",

    description:
      "Simboliza o excesso e a dificuldade de reconhecer limites. " +
      "Pode estar relacionada ao consumo de alimentos, bens, informações " +
      "ou experiências de maneira descontrolada."
  },

  {
    firstImage:
      "img11",

    secondImage:
      "img12",

    name:
      "Orgulho",

    englishName:
      "Pride",

    description:
      "Representa a valorização excessiva de si mesmo. Quando o orgulho " +
      "domina as escolhas, pode dificultar o reconhecimento dos próprios " +
      "limites e afastar as pessoas."
  },

  {
    firstImage:
      "img13",

    secondImage:
      "img14",

    name:
      "Luxúria",

    englishName:
      "Lust",

    description:
      "Representa o desejo intenso quando ele ultrapassa o respeito, " +
      "o equilíbrio e a responsabilidade. O autocontrole permite " +
      "transformar impulsos em escolhas conscientes."
  },

  {
    firstImage:
      "img15",

    secondImage:
      "img16",

    name:
      "Coragem e covardia",

    englishName:
      "Courage and Cowardice",

    description:
      "A coragem não significa ausência de medo, mas a capacidade de " +
      "agir com responsabilidade mesmo diante da insegurança. A covardia " +
      "surge quando o medo impede a defesa do que é justo ou transfere " +
      "para outras pessoas a responsabilidade por uma escolha."
  },

  {
    firstImage:
      "img17",

    secondImage:
      "img18",

    name:
      "Cura e enfermidade",

    englishName:
      "Healing and Illness",

    description:
      "A enfermidade revela a fragilidade da vida e a necessidade de " +
      "cuidado, apoio e compreensão. A cura pode envolver o corpo, as " +
      "emoções e as relações, exigindo tempo, acolhimento, tratamento " +
      "e participação de outras pessoas."
  },

  {
    firstImage:
      "img19",

    secondImage:
      "img20",

    name:
      "Amizade e indiferença",

    englishName:
      "Friendship and Indifference",

    description:
      "A amizade é construída por meio de confiança, presença, respeito " +
      "e cuidado mútuo. A indiferença acontece quando as necessidades e " +
      "os sentimentos de outras pessoas são ignorados, enfraquecendo os " +
      "vínculos e a convivência."
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
    (
      card
    ) => ({
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
  (
    id
  ) =>
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
   CONTROLE SEGURO DAS ESPERAS
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

      ? "SEVEN SINS"

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
            stop-color="#0d0914"
          />

          <stop
            offset="52%"
            stop-color="#673b91"
          />

          <stop
            offset="100%"
            stop-color="#ffd84d"
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
        stroke="#c8a7ff"
        stroke-width="8"
      />


      <rect
        x="34"
        y="34"
        width="892"
        height="472"
        rx="24"
        fill="none"
        stroke="#ffd84d"
        stroke-width="3"
      />


      <circle
        cx="480"
        cy="255"
        r="150"
        fill="#07050b"
        fill-opacity="0.58"
        stroke="#fff1a8"
        stroke-width="8"
      />


      <text
        x="480"
        y="310"
        text-anchor="middle"
        font-family="Georgia, serif"
        font-size="${isCardBack ? 130 : 150}"
        font-weight="900"
        fill="#fff8d8"
      >
        ${mainText}
      </text>


      <rect
        x="310"
        y="430"
        width="340"
        height="58"
        rx="29"
        fill="#07050b"
        fill-opacity="0.66"
      />


      <text
        x="480"
        y="468"
        text-anchor="middle"
        font-family="Arial, sans-serif"
        font-size="24"
        font-weight="800"
        letter-spacing="5"
        fill="#fff8d8"
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

            ? "Preparando capa.jpg..."

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
    `${completed} de ${RESOURCES.length} recursos preparados`;


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
        <strong>capa.jpg</strong>
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
        Verifique os nomes e a extensão
        <strong>.jpg</strong>.
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
    [
      ...items
    ];


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
  clearPendingGameTimeouts();


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
        capa.jpg
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
        A carta responde somente ao clique.

        Não existem eventos:
        mouseenter
        mouseover
        mouseleave
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
    "Vitória! Todos os pares foram encontrados.";


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
        `CONCEITO ${String(
          index + 1
        ).padStart(
          2,
          "0"
        )}`;


      title.textContent =
        theme.name;


      subtitle.textContent =
        theme.englishName;


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
