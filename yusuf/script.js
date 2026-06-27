const pages = [
  {
    title: "The Blue Egg",
    paragraphs: [
      "At Marvel Tree Hotel in Bozyazi, the sea was so blue it looked painted.",
      "Yusuf found the egg under the huge tree roots. It was bright blue with neon red spots.",
      "Hakan's speed boots gave a tiny hum. They were set to 999.",
      "\"That egg is not from breakfast,\" Hakan whispered.",
    ],
    image: "assets/yusie-page-01.webp",
    alt: "Yusuf and Hakan finding a glowing blue egg under the huge Marvel Tree by the Mediterranean",
  },
  {
    title: "Crack, Crack, Glow",
    paragraphs: [
      "The egg rocked once. Then it rocked twice.",
      "A red light blinked from inside. Crack, crack, glow!",
      "Out popped a white chick-dragon, small as a puppy, with a tiny crest and sharp little toes.",
      "He shook his feathers and blinked at Yusuf like they were already friends.",
    ],
    image: "assets/yusie-page-02.webp",
    alt: "A tiny white chick-dragon hatching from a blue egg with red spots while Yusuf and Hakan watch",
  },
  {
    title: "Call Me Yusie",
    paragraphs: [
      "The chick-dragon stood on a stone and puffed up his soft white chest.",
      "\"Cock-a-doodle... ROAR!\" he cried. The tree leaves jumped.",
      "Then he spoke in a squeaky brave voice. \"Call me Yusie.\"",
      "Yusuf smiled. \"That is a good dragon name.\"",
    ],
    image: "assets/yusie-page-03.webp",
    alt: "The white chick-dragon Yusie making a funny rooster call and tiny roar near the sea",
  },
  {
    title: "A Very Tiny Flame",
    paragraphs: [
      "Yusie opened his beak. A little flame puffed out.",
      "It did not burn the boys. It made one tiny scrape on a flat pebble.",
      "\"Careful,\" Yusuf said gently.",
      "Yusie nodded. \"I am learning. Big dragons start small.\"",
    ],
    image: "assets/yusie-page-04.webp",
    alt: "Hakan racing in glowing speed boots while tiny white Yusie practices a small safe flame on a pebble",
  },
  {
    title: "The Tree's Riddle",
    paragraphs: [
      "Inside the Marvel Tree, red lights woke up in the bark.",
      "A branch bent down and tapped the blue eggshell in Hakan's hand.",
      "A whisper rustled through the leaves. \"To become red, Yusie must catch the sunset spark.\"",
      "\"Before it sinks into the sea,\" Yusuf said. \"Then we better move.\"",
    ],
    image: "assets/yusie-page-05.webp",
    alt: "The Marvel Tree glowing while Yusuf, Hakan, and white Yusie discover the sunset spark riddle",
  },
  {
    title: "999 Speed",
    paragraphs: [
      "Hakan clicked his boots together. The soles flashed blue and gold.",
      "Whoosh! He ran so fast the beach became a ribbon.",
      "Yusuf followed with a shell lantern. Yusie hovered in place above the waves, wings beating hard.",
      "Ahead of them, one red spark skipped across the water.",
    ],
    image: "assets/yusie-page-06.webp",
    alt: "Hakan using glowing speed boots to chase a red spark along the Mediterranean beach while Yusuf and Yusie follow",
  },
  {
    title: "The Glass Float",
    paragraphs: [
      "The spark zipped under a wooden pier and got stuck inside a glass fishing float.",
      "Yusuf lowered the shell lantern. Hakan leaned close, ready to dash.",
      "Yusie hovered beside the float and breathed the smallest red flame.",
      "Ping! The glass warmed. The spark slipped free.",
    ],
    image: "assets/yusie-page-07.webp",
    alt: "Yusuf, Hakan, and white Yusie freeing a red spark from a glass fishing float under a pier",
  },
  {
    title: "Red Feathers Rise",
    paragraphs: [
      "The spark touched Yusie's chest.",
      "White feathers swirled. Red feathers rose. Black wings opened like night.",
      "Yusie grew taller and taller until a proud rooster-dragon stood under the Marvel Tree.",
      "He bowed his crested head to Yusuf. \"Still me,\" he said.",
    ],
    image: "assets/yusie-page-08.webp",
    alt: "Yusie transforming from a white chick-dragon into a crimson rooster-dragon with black wings",
  },
  {
    title: "The Red Fire Beacon",
    paragraphs: [
      "Out on the dark sea, the floating lanterns had gone dim.",
      "Yusie rose into the air and flew in place, wings steady as drums.",
      "\"Cock-a-doodle... ROAR!\" he called.",
      "Then he sent a dark red stream of fire over the water, bright enough to guide every light home.",
    ],
    image: "assets/yusie-page-09.webp",
    alt: "Grown red rooster-dragon Yusie safely breathing dark red fire over the Mediterranean like a beacon",
  },
  {
    title: "Guardian of the Tree",
    paragraphs: [
      "By morning, the Marvel Tree was glowing softly again.",
      "Yusuf held a smooth piece of blue eggshell with one red spot shining on it.",
      "Hakan's boots gave one last 999 hum, then settled down for breakfast.",
      "Yusie folded a black wing beside them. \"When the sea needs a dragon,\" he said, \"call me.\"",
    ],
    image: "assets/yusie-page-10.webp",
    alt: "Grown red Yusie with Yusuf, Hakan, Angela, and Koray at breakfast near the Marvel Tree and sea",
  },
];

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

function renderStoryText(page) {
  textEl.textContent = "";

  page.paragraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    textEl.append(p);
  });
}

function preloadNextPage() {
  const nextPage = pages[currentPage + 1];
  if (!nextPage) return;

  const image = new Image();
  image.src = nextPage.image;
}

function renderPage(direction = 1) {
  const page = pages[currentPage];
  const pageNumber = currentPage + 1;

  storyImage.src = page.image;
  storyImage.alt = page.alt;
  titleEl.textContent = page.title;
  renderStoryText(page);
  progressLabel.textContent = `Page ${pageNumber} of ${pages.length}`;
  progressBar.style.width = `${(pageNumber / pages.length) * 100}%`;

  backButton.disabled = currentPage === 0;
  nextButton.disabled = currentPage === pages.length - 1;

  pageEl.classList.remove("turning");
  pageEl.style.setProperty("--turn-direction", direction);
  window.requestAnimationFrame(() => {
    pageEl.classList.add("turning");
  });

  preloadNextPage();
}

function nextPage() {
  if (currentPage < pages.length - 1) {
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

if (bookCard.requestFullscreen && document.exitFullscreen) {
  fullscreenButton.addEventListener("click", toggleFullscreen);
  document.addEventListener("fullscreenchange", updateFullscreenButton);
  updateFullscreenButton();
} else {
  fullscreenButton.hidden = true;
}

document.addEventListener("keydown", (event) => {
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
  const distance = event.clientX - pointerStartX;
  if (Math.abs(distance) < 58) return;

  if (distance < 0) {
    nextPage();
  } else {
    previousPage();
  }
});

renderPage();
