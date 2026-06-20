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
  {
    title: "Hakan and the Moonlit Library",
    libraryKicker: "Book Magic",
    readerKicker: "A secret library bedtime mystery",
    description:
      "A glowing bookmark opens a hidden library where lost endings need a brave reader.",
    cover: "assets/book-cover-moonlit-library.webp",
    coverAlt:
      "Cover art for Hakan and the Moonlit Library showing Hakan, Yusuf, and a glowing secret library",
    pages: [
      {
        title: "The Bookmark Blinked",
        paragraphs: [
          "Hakan was almost asleep when a thin silver light blinked under his pillow.",
          "He pulled out a bookmark. It was cool and shiny, like a slice of moon.",
          "The bookmark floated from his hand and pointed toward the hall.",
          "From the bookshelf came a soft sound. Shhh. A page was turning by itself.",
        ],
        image: "assets/moonlit-page-01.webp",
        alt: "Hakan finding a glowing silver bookmark under his pillow while Yusuf peeks from the doorway",
      },
      {
        title: "The Book Door",
        paragraphs: [
          "Yusuf met Hakan in the hall. \"Why are you awake?\" he whispered.",
          "\"I am not awake,\" said Hakan. \"I am reading a clue.\"",
          "At the end of the hall, the bookshelf bent into the shape of a door.",
          "The silver bookmark slipped into the crack. Click. The door opened.",
        ],
        image: "assets/moonlit-page-02.webp",
        alt: "Hakan and Yusuf discovering a secret door made of glowing books",
      },
      {
        title: "The Library Woke Up",
        paragraphs: [
          "Inside was a library bigger than any house. Shelves curled up like tall stairs.",
          "Books floated past. A ladder rolled by with no one pushing it.",
          "A tiny woman with round glasses stood behind a tall desk.",
          "\"I am the Keeper,\" she said. \"And tonight, my Last Page Bell is gone.\"",
        ],
        image: "assets/moonlit-page-03.webp",
        alt: "A huge moonlit library with floating books and Hakan and Yusuf standing in wonder",
      },
      {
        title: "The Empty Pillow",
        paragraphs: [
          "The Keeper pointed to a red pillow. It had a round empty spot in the middle.",
          "\"The bell helps stories find their endings,\" she said.",
          "A bedtime book nearby kept saying, \"Once upon a... once upon a...\"",
          "Yusuf looked at Hakan. \"We should find that bell fast.\"",
        ],
        image: "assets/moonlit-page-04.webp",
        alt: "The Keeper showing Hakan and Yusuf the empty velvet pillow where the bell should be",
      },
      {
        title: "Books Behaving Badly",
        paragraphs: [
          "A sea book sneezed and spilled a tiny wave across the floor.",
          "A castle book forgot how to close its bridge.",
          "Hakan laughed, then saw a small gray book sitting alone on a shelf.",
          "It had no title. It had no ending. It had only three glowing dots.",
        ],
        image: "assets/moonlit-page-05.webp",
        alt: "Funny unfinished books causing harmless surprises in the magical library",
      },
      {
        title: "The Dot Trail",
        paragraphs: [
          "The three dots rolled off the page and bounced onto the floor.",
          "Plink. Plink. Plink.",
          "They made a trail to a ladder made of moonlight.",
          "\"Up?\" Yusuf asked. Hakan nodded. \"The story wants us to climb.\"",
        ],
        image: "assets/moonlit-page-06.webp",
        alt: "A blank gray book making glowing dots that lead toward a moonbeam ladder",
      },
      {
        title: "Up the Moonbeam",
        paragraphs: [
          "The ladder looked like light, but it held Hakan's feet.",
          "Yusuf climbed behind him, one hand ready in case Hakan slipped.",
          "At the top, three little sparks slept in paper nests.",
          "When Hakan came close, the sparks woke and danced around his hands.",
        ],
        image: "assets/moonlit-page-07.webp",
        alt: "Hakan and Yusuf climbing a moonbeam ladder inside the secret library",
      },
      {
        title: "Three Bright Sparks",
        paragraphs: [
          "One spark felt kind. One spark felt brave. One spark felt like home.",
          "Hakan cupped them gently. They were warm, but they did not burn.",
          "The sparks flew into the gray book.",
          "A paper castle rose from the pages, and a silver bell shone at the top.",
        ],
        image: "assets/moonlit-page-08.webp",
        alt: "Hakan holding three glowing story sparks while Yusuf smiles beside him",
      },
      {
        title: "The Paper Castle",
        paragraphs: [
          "The castle folded and unfolded like a pop-up card.",
          "The bell was tied with a ribbon of unfinished sentences.",
          "Hakan said, \"Kind. Brave. Home.\"",
          "The ribbon slipped loose. The bell dropped into his hands with a bright ding!",
        ],
        image: "assets/moonlit-page-09.webp",
        alt: "Hakan rescuing a silver bell from a pop-up paper castle while Yusuf holds the book steady",
      },
      {
        title: "Reader of Moonlight",
        paragraphs: [
          "When Hakan placed the bell on its pillow, the whole library sighed happily.",
          "The books found their endings. The tiny wave went back into its page.",
          "The Keeper bowed. \"You listened first. That is what good readers do.\"",
          "Back in bed, Hakan found the silver bookmark beside him. It blinked once, as if another story was waiting.",
        ],
        image: "assets/moonlit-page-10.webp",
        alt: "Hakan and Yusuf smiling as the moonlit library glows and the silver bell returns to its pillow",
      },
    ],
  },
  {
    title: "Hakan and the Lanterns of Cappadocia",
    libraryKicker: "Cappadocia Quest",
    readerKicker: "A sunrise adventure above the valleys",
    description:
      "A lantern floating the wrong way leads Hakan and Yusuf to a lost little star.",
    cover: "assets/book-cover-lanterns-cappadocia.webp",
    coverAlt:
      "Cover art for Hakan and the Lanterns of Cappadocia showing Hakan, Yusuf, balloons, and a glowing lantern",
    pages: [
      {
        title: "Before the Balloons",
        paragraphs: [
          "In Cappadocia, morning started while the sky was still purple.",
          "Hakan stood by the balcony in his socks. Balloons slept in the valley below.",
          "Yusuf yawned beside him. \"Sunrise should come with snacks,\" he said.",
          "Then one small lantern floated up from the valley. It was going the wrong way.",
        ],
        image: "assets/cappadocia-page-01.webp",
        alt: "Hakan and Yusuf watching Cappadocia before sunrise from a balcony",
      },
      {
        title: "The Lantern's Secret",
        paragraphs: [
          "The lantern drifted to their balcony and glowed gold.",
          "Inside its light was a tiny blue sparkle.",
          "Hakan touched the handle. A soft voice seemed to whisper, \"A star fell. Help it home.\"",
          "Yusuf stopped yawning. \"Okay,\" he said. \"That is not a normal lantern.\"",
        ],
        image: "assets/cappadocia-page-02.webp",
        alt: "A glowing lantern arriving at the balcony while Hakan and Yusuf look amazed",
      },
      {
        title: "Ready Before Breakfast",
        paragraphs: [
          "Angela found them at the door with their shoes on.",
          "She wrapped a red scarf around Hakan's neck. \"For the cold morning,\" she said.",
          "Koray gave Yusuf a small flashlight. \"For careful looking.\"",
          "The lantern bobbed outside as if it could hardly wait.",
        ],
        image: "assets/cappadocia-page-03.webp",
        alt: "Angela and Koray helping Hakan and Yusuf get ready before sunrise",
      },
      {
        title: "The Light Dots",
        paragraphs: [
          "The lantern led them between tall stone towers called fairy chimneys.",
          "Every few steps, it dropped a dot of light on the sandy path.",
          "Hakan counted the dots. \"They are making a trail.\"",
          "The trail curved toward a cave doorway glowing softly in the hill.",
        ],
        image: "assets/cappadocia-page-04.webp",
        alt: "Hakan and Yusuf following glowing lantern dots through Cappadocia fairy chimneys",
      },
      {
        title: "The Cave Spark",
        paragraphs: [
          "Inside the cave, painted horses ran across the stone walls.",
          "Yusuf shone the flashlight low. Something blue blinked under a smooth rock.",
          "Hakan lifted the rock and found a tiny spark.",
          "The spark spun once and pointed toward the balloon field.",
        ],
        image: "assets/cappadocia-page-05.webp",
        alt: "Hakan finding a tiny blue spark in a glowing Cappadocia cave while Yusuf holds a flashlight",
      },
      {
        title: "The Balloon Captain",
        paragraphs: [
          "A kind balloon captain was checking ropes beside a striped balloon.",
          "Hakan showed her the blue spark. Yusuf showed her the lantern.",
          "The captain smiled like she understood everything.",
          "\"Then you need to look from the sky,\" she said. \"Climb in, helpers.\"",
        ],
        image: "assets/cappadocia-page-06.webp",
        alt: "Hakan and Yusuf meeting a kind hot air balloon captain at dawn",
      },
      {
        title: "Up, Up, Up",
        paragraphs: [
          "The balloon rose slowly, like a deep breath.",
          "Below them, the valleys turned pink and gold.",
          "The lantern floated beside the basket. The blue spark pointed in a wobbly circle.",
          "\"The star is moving,\" Hakan said. \"Or hiding.\"",
        ],
        image: "assets/cappadocia-page-07.webp",
        alt: "Hakan and Yusuf riding in a hot air balloon above Cappadocia at sunrise",
      },
      {
        title: "The Carpet Clue",
        paragraphs: [
          "On a sunny stone roof, Hakan saw a shadow shaped like a star.",
          "The captain lowered the balloon near colorful carpets spread in the morning light.",
          "In one carpet was a small empty golden space.",
          "There, tucked into the pattern, blinked the lost little star.",
        ],
        image: "assets/cappadocia-page-08.webp",
        alt: "Hakan finding the lost blue star tucked into a colorful Cappadocia carpet",
      },
      {
        title: "Back to the Sky",
        paragraphs: [
          "Hakan lifted the star with both hands. It was lighter than a crumb.",
          "The lantern opened like a flower.",
          "When Hakan placed the star inside, it shot upward with a silver ribbon of light.",
          "All the balloons glowed, as if the morning had smiled.",
        ],
        image: "assets/cappadocia-page-09.webp",
        alt: "Hakan returning the lost star to the sky from a hot air balloon basket",
      },
      {
        title: "The Lantern Charm",
        paragraphs: [
          "By breakfast, the sky was blue and full of balloons.",
          "Angela brushed dust from Hakan's sleeve. Koray smiled at Yusuf's sleepy face.",
          "On Hakan's plate sat a tiny golden lantern charm.",
          "When he held it close, it whispered, \"There are more bright things to find.\"",
        ],
        image: "assets/cappadocia-page-10.webp",
        alt: "Hakan holding a tiny lantern charm at breakfast with Yusuf, Angela, and Koray nearby",
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
  document.body.classList.toggle("drop-cap-book", bookIndex === 0);
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
  document.body.classList.remove("drop-cap-book");
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
