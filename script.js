const books = [
  {
    title: "Hakan and the Cats of Istanbul",
    libraryKicker: "Istanbul Adventure",
    readerKicker: "A magical Istanbul bedtime story",
    description:
      "A rooftop mystery with Misket, Yusuf, and the secret cats who guard the city.",
    cover: "assets/book-cover-cats-of-istanbul.webp",
    coverAlt:
      "Cover art for Hakan and the Cats of Istanbul showing Hakan, Yusuf, Misket, and Istanbul at sunset",
    pages: [
      {
        title: "Morning Over Istanbul",
        paragraphs: [
          "Hakan woke before everyone else. The room was quiet, but the city was not. Far below his window, Istanbul was already whispering.",
          "A ferry horn called from the Bosphorus. Gulls spun over red rooftops. The sunrise poured orange and gold across the domes and hills.",
          "Then Hakan saw something odd on the windowsill. One tiny paw print shone like a drop of honey.",
          "He leaned closer. The paw print winked. Tap, tap, tap came a sound from the front door.",
        ],
        image: "assets/page-01.webp",
        alt: "Hakan looking out at an Istanbul sunrise from his bedroom window",
      },
      {
        title: "Misket at the Door",
        paragraphs: [
          "Hakan opened the door just a crack. A small cat sat on the blue tiles as if she had been invited to breakfast.",
          "Her fur was gray and brown like warm stones. Her green eyes were bright as new leaves after rain.",
          "Yusuf came up behind Hakan. He was skinny and a little taller, with hair cut even shorter than Hakan's. \"A street cat?\" he whispered. \"At our door?\"",
          "The cat dropped something from her mouth. It was a blue bead with a golden fish carved on it. Then she turned and flicked her tail. Follow me.",
        ],
        image: "assets/page-02.webp",
        alt: "Misket the green-eyed cat waiting at Hakan's blue doorway",
      },
      {
        title: "Quiet Streets",
        paragraphs: [
          "Misket trotted down the old street. Hakan followed. Yusuf followed too, because older brothers are good at acting calm when things are very strange.",
          "Blue shutters opened with soft creaks. Flower pots leaned from windows. The cobblestones felt cool under Hakan's shoes.",
          "At each corner, Misket tapped one paw on the ground. The stones answered with a tiny gold sparkle.",
          "\"Did the street just light up?\" Yusuf asked. Hakan nodded. The city was giving them a path.",
        ],
        image: "assets/page-03.webp",
        alt: "Hakan and Yusuf following Misket through an old Istanbul street",
      },
      {
        title: "The Hidden Courtyard",
        paragraphs: [
          "The path ended at a blue gate Hakan had never seen before. It stood between two shops he knew well, as if it had been hiding there all his life.",
          "Misket pushed the gate with one paw. It swung open without a squeak.",
          "Inside was a courtyard full of cats. Striped cats, white cats, orange cats, sleepy cats, proud cats, and one tiny kitten in a flower pot all looked up at once.",
          "Then every cat bowed to Hakan. Even Yusuf forgot to blink.",
        ],
        image: "assets/page-04.webp",
        alt: "A hidden Istanbul courtyard full of friendly cats",
      },
      {
        title: "The Missing Key",
        paragraphs: [
          "The eldest cat sat on a red cushion beneath a lantern. His whiskers curled like silver thread.",
          "\"We are the Cats of Istanbul,\" he said. \"We guard the rooftops, ferries, fountains, and moonlit streets.\"",
          "On a velvet cloth in the center of the courtyard was the shape of a fish. It glowed gold, but the fish was missing.",
          "\"The Golden Fish Key is gone,\" said the eldest cat. \"Without it, the city's secret doors will sleep. We need a reader of clues. We need Hakan.\"",
        ],
        image: "assets/page-05.webp",
        alt: "A council of cats showing the glowing outline of the missing Golden Fish Key",
      },
      {
        title: "A Trail of Clues",
        paragraphs: [
          "The first clue waited by a fountain. Hakan read the pattern of wet paw prints around the blue tiles.",
          "\"One, two, three prints,\" he said. \"Then a jump. Misket, the key went this way!\"",
          "The trail curved past a simit cart. The round breads smelled warm and nutty, but one crumb was brighter than the rest.",
          "When Hakan picked it up, the crumb spun like a tiny compass. It pointed toward the sea. Then it whispered one word: Ferry.",
        ],
        image: "assets/page-06.webp",
        alt: "Hakan finding glowing clues near a fountain and simit cart",
      },
      {
        title: "Across the Bosphorus",
        paragraphs: [
          "The ferry slid across the Bosphorus with a low, happy rumble. Water flashed blue and white beside the boat.",
          "Yusuf held the rail. Misket sat between the brothers like a tiny captain. Hakan kept the shining crumb safe in his pocket.",
          "Halfway across, a gull swooped low. It did not steal the crumb. It dropped a silver feather into Hakan's hand.",
          "The feather pointed up, up, up toward the rooftops. \"Of course,\" Yusuf said. \"Cats love rooftops.\"",
        ],
        image: "assets/page-07.webp",
        alt: "Hakan, Yusuf, and Misket riding a ferry across the Bosphorus",
      },
      {
        title: "On the Red Rooftop",
        paragraphs: [
          "The feather led them up a narrow stair and onto a rooftop warm from the sun.",
          "A seagull sat beside a nest made of twigs, ribbon, and one shiny golden fish key.",
          "Hakan stepped softly. The gull watched him with one bright eye. She was not mean. She looked worried.",
          "Then Hakan understood. The key had blown into her nest, and she had guarded it like treasure. He bowed. \"Thank you for keeping it safe.\"",
        ],
        image: "assets/page-08.webp",
        alt: "Hakan finding the Golden Fish Key on a red Istanbul rooftop near a seagull nest",
      },
      {
        title: "Sunset Celebration",
        paragraphs: [
          "When Hakan brought the Golden Fish Key back, the courtyard burst into sunset light.",
          "The key rose from his hands and turned in the air. Click! A tiny golden door opened in the fountain.",
          "Inside the door was not gold or jewels. It was a warm light that spread through the city, waking every secret kindness the cats had saved.",
          "Misket leaped. Yusuf laughed. Cats danced in soft circles while Istanbul glowed orange, blue, and gold.",
        ],
        image: "assets/page-09.webp",
        alt: "The Cats of Istanbul celebrating at sunset around the Golden Fish Key",
      },
      {
        title: "Friend of the Cats",
        paragraphs: [
          "At last, Misket padded to Hakan and placed a tiny charm in his hands. It was shaped like a golden paw.",
          "\"You read the clues,\" said the eldest cat. \"You listened. You helped. From this night on, you are a friend of the Cats of Istanbul.\"",
          "Angela and Koray smiled from the doorway. Yusuf squeezed Hakan's shoulder, proud of him.",
          "That night, Hakan tucked the charm beside his book. Just before he fell asleep, it gave one soft blink. On the windowsill, a new paw print appeared. Hakan smiled. Another story was waiting.",
        ],
        image: "assets/page-10.webp",
        alt: "Misket giving Hakan a tiny golden paw charm while Angela, Koray, and Yusuf watch warmly",
      },
    ],
  },
];

let activeBook = books[0];
let currentPage = 0;
let pointerStartX = 0;

const pageEl = document.getElementById("page");
const storyImage = document.getElementById("storyImage");
const titleEl = document.getElementById("story-title");
const textEl = document.getElementById("storyText");
const progressLabel = document.getElementById("progressLabel");
const progressBar = document.getElementById("progressBar");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const fullscreenButton = document.getElementById("fullscreenButton");
const bookCard = document.querySelector(".book-card");
const bookGrid = document.getElementById("bookGrid");
const siteKicker = document.getElementById("siteKicker");
const siteTitle = document.getElementById("siteTitle");
const libraryView = document.getElementById("libraryView");
const readerView = document.getElementById("readerView");
const libraryButton = document.getElementById("libraryButton");

function renderLibrary() {
  bookGrid.textContent = "";

  books.forEach((book, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "book-tile";
    button.setAttribute("aria-label", `Open ${book.title}`);
    button.addEventListener("click", () => showReader(index));

    const coverShell = document.createElement("span");
    coverShell.className = "cover-shell";

    const cover = document.createElement("img");
    cover.src = book.cover;
    cover.alt = book.coverAlt;
    cover.width = 941;
    cover.height = 1672;
    cover.decoding = "async";
    cover.loading = index === 0 ? "eager" : "lazy";

    const meta = document.createElement("span");
    meta.className = "book-meta";

    const kicker = document.createElement("span");
    kicker.className = "book-kicker";
    kicker.textContent = book.libraryKicker;

    const title = document.createElement("span");
    title.className = "book-title";
    title.textContent = book.title;

    const description = document.createElement("span");
    description.className = "book-description";
    description.textContent = book.description;

    coverShell.append(cover);
    meta.append(kicker, title, description);
    button.append(coverShell, meta);
    bookGrid.append(button);
  });
}

function renderStoryText(page) {
  textEl.textContent = "";

  page.paragraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    textEl.append(p);
  });
}

function preloadNextPage() {
  const nextPage = activeBook.pages[currentPage + 1];
  if (!nextPage) return;

  const image = new Image();
  image.src = nextPage.image;
}

function renderPage(direction = 1) {
  const page = activeBook.pages[currentPage];
  const pageNumber = currentPage + 1;

  storyImage.src = page.image;
  storyImage.alt = page.alt;
  titleEl.textContent = page.title;
  renderStoryText(page);
  progressLabel.textContent = `Page ${pageNumber} of ${activeBook.pages.length}`;
  progressBar.style.width = `${(pageNumber / activeBook.pages.length) * 100}%`;

  backButton.disabled = currentPage === 0;
  nextButton.disabled = currentPage === activeBook.pages.length - 1;

  pageEl.classList.remove("turning");
  pageEl.style.setProperty("--turn-direction", direction);
  window.requestAnimationFrame(() => {
    pageEl.classList.add("turning");
  });

  preloadNextPage();
}

function showReader(bookIndex) {
  activeBook = books[bookIndex];
  currentPage = 0;
  libraryView.hidden = true;
  readerView.hidden = false;
  siteKicker.textContent = activeBook.readerKicker;
  siteTitle.textContent = activeBook.title;
  document.body.classList.add("reader-open");
  renderPage(1);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function showLibrary() {
  if (document.fullscreenElement) {
    await document.exitFullscreen();
  }

  readerView.hidden = true;
  libraryView.hidden = false;
  siteKicker.textContent = "Story library";
  siteTitle.textContent = "Hakan's Picture Books";
  document.body.classList.remove("reader-open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function nextPage() {
  if (currentPage < activeBook.pages.length - 1) {
    currentPage += 1;
    renderPage(1);
  }
}

function previousPage() {
  if (currentPage > 0) {
    currentPage -= 1;
    renderPage(-1);
  }
}

function isInteractiveTarget(target) {
  return ["BUTTON", "A"].includes(target.tagName);
}

function updateFullscreenButton() {
  const isFullscreen = Boolean(document.fullscreenElement);
  fullscreenButton.textContent = isFullscreen ? "Exit full screen" : "Full screen";
  fullscreenButton.setAttribute(
    "aria-label",
    isFullscreen ? "Exit full screen" : "Enter full screen",
  );
}

async function toggleFullscreen() {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    if (bookCard.requestFullscreen) {
      await bookCard.requestFullscreen();
    }
  } catch (error) {
    console.warn("Fullscreen is not available in this browser.", error);
  }
}

backButton.addEventListener("click", previousPage);
nextButton.addEventListener("click", nextPage);
libraryButton.addEventListener("click", showLibrary);

if (bookCard.requestFullscreen && document.exitFullscreen) {
  fullscreenButton.addEventListener("click", toggleFullscreen);
  document.addEventListener("fullscreenchange", updateFullscreenButton);
  updateFullscreenButton();
} else {
  fullscreenButton.hidden = true;
}

document.addEventListener("keydown", (event) => {
  if (readerView.hidden) return;
  if (isInteractiveTarget(event.target)) return;

  if (event.key === "ArrowRight") {
    nextPage();
  }

  if (event.key === "ArrowLeft") {
    previousPage();
  }
});

pageEl.addEventListener("pointerdown", (event) => {
  pointerStartX = event.clientX;
});

pageEl.addEventListener("pointerup", (event) => {
  if (readerView.hidden) return;

  const distance = event.clientX - pointerStartX;
  if (Math.abs(distance) < 58) return;

  if (distance < 0) {
    nextPage();
  } else {
    previousPage();
  }
});

renderLibrary();
