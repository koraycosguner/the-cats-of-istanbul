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
    seriesId: "cats-of-istanbul",
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
    title: "Hakan, Yusuf, and the Blue Tile Map",
    libraryKicker: "Istanbul Cats Sequel",
    readerKicker: "A blue-tile mystery through Istanbul",
    description:
      "Misket returns with a dim map, three missing tiles, and a path for both brothers to read.",
    cover: "assets/book-cover-cats-blue-tile-map.webp",
    coverAlt:
      "Cover art for Hakan, Yusuf, and the Blue Tile Map showing the brothers, Misket, and a glowing Istanbul tile map",
    seriesId: "cats-of-istanbul",
    pages: [
      {
        title: "Misket Returns",
        paragraphs: [
          "Hakan's golden paw charm blinked during breakfast.",
          "Tap, tap, tap. Misket stood at the window with a blue tile in her mouth.",
          "Yusuf leaned closer. \"That is not just a tile,\" he said. \"It is one piece of a bigger pattern.\"",
          "Misket's green eyes flashed. Then she leaped down and waited by the door.",
        ],
        image: "assets/cats-blue-tile-map-page-01.webp",
        alt: "Misket tapping the breakfast window with a blue tile while Hakan and Yusuf study it",
      },
      {
        title: "The Dim Map",
        paragraphs: [
          "Misket led them back to the hidden courtyard of the Cats of Istanbul.",
          "On one wall, hundreds of blue tiles made a map of the city.",
          "But the map was dull, like the sea under clouds.",
          "\"This map guides lost cats to safe doors,\" said the eldest cat. \"Tonight, it cannot see.\"",
        ],
        image: "assets/cats-blue-tile-map-page-02.webp",
        alt: "Hakan and Yusuf facing the dim Blue Tile Map in the hidden cat courtyard",
      },
      {
        title: "Yusuf Reads the Pattern",
        paragraphs: [
          "Yusuf stepped close to the empty spaces in the wall.",
          "\"Three shapes are missing,\" he said. \"A tulip, a wave, and a star.\"",
          "Hakan touched the edge of one dull tile. \"The map looks sad.\"",
          "Misket nodded as if Hakan had read the most important clue.",
        ],
        image: "assets/cats-blue-tile-map-page-03.webp",
        alt: "Yusuf pointing to tulip, wave, and star-shaped gaps in the Blue Tile Map",
      },
      {
        title: "Angela's Tulip Clue",
        paragraphs: [
          "At the Spice Bazaar, warm colors glowed under hanging lamps.",
          "Angela stopped beside an old scarf covered in tulips.",
          "\"This tulip is the same shape,\" she said. \"My grandmother loved patterns like this.\"",
          "When Angela hummed softly, one tulip on the scarf shone blue.",
        ],
        image: "assets/cats-blue-tile-map-page-04.webp",
        alt: "Angela finding the tulip clue on an old scarf in the Spice Bazaar",
      },
      {
        title: "The Yarn Basket Kitten",
        paragraphs: [
          "In the Grand Bazaar, a tiny kitten squeaked from a basket of yarn.",
          "Hakan untangled her gently, loop by loop.",
          "Yusuf followed the red-blue pattern under the stalls. \"It ends here!\"",
          "The kitten batted a ball of yarn aside, and the Tulip Tile sparkled underneath.",
        ],
        image: "assets/cats-blue-tile-map-page-05.webp",
        alt: "Hakan freeing a kitten from yarn while Yusuf follows the floor pattern to the Tulip Tile",
      },
      {
        title: "Koray's Tiny Tram Bell",
        paragraphs: [
          "A tiny cat tram waited in a hidden alley, frozen on its little track.",
          "Koray knelt beside it. \"The bell cord is twisted.\"",
          "He fixed it with careful fingers. Ding!",
          "The tram rolled forward just enough to point its bright nose toward the water.",
        ],
        image: "assets/cats-blue-tile-map-page-06.webp",
        alt: "Koray fixing the bell cord on a tiny magical cat tram in a hidden Istanbul alley",
      },
      {
        title: "The Cistern of Reflections",
        paragraphs: [
          "Below the city, cool stone columns stood in quiet water.",
          "Yusuf counted the columns and their reflections. \"The missing wave is under the seventh light.\"",
          "Hakan listened to the drops. Plink. Plink-plink. Plink.",
          "The water rippled, and the Wave Tile rose into his hands.",
        ],
        image: "assets/cats-blue-tile-map-page-07.webp",
        alt: "Yusuf counting cistern reflections while Hakan listens to water drops near the Wave Tile",
      },
      {
        title: "Fog on the Bosphorus",
        paragraphs: [
          "Soft fog slid over the ferry dock.",
          "Koray watched the ferry lights blink through the mist. \"The route turns left at the blue one.\"",
          "Angela sang quietly, and the nervous cats tucked closer to her shoes.",
          "The map line shimmered upward, toward the red rooftops.",
        ],
        image: "assets/cats-blue-tile-map-page-08.webp",
        alt: "Koray reading ferry lights while Angela calms the cats in Bosphorus fog",
      },
      {
        title: "The Helpful Gull",
        paragraphs: [
          "On a warm red rooftop, a gull sat beside a nest of ribbons.",
          "The Star Tile glittered inside it like moon bread.",
          "Hakan bowed. \"May we have it back, please?\"",
          "Yusuf held out a smooth blue bead. The gull traded with a proud little flap.",
        ],
        image: "assets/cats-blue-tile-map-page-09.webp",
        alt: "Hakan asking a rooftop gull for the Star Tile while Yusuf offers a blue bead",
      },
      {
        title: "Three Tiles, One Pattern",
        paragraphs: [
          "Back in the courtyard, Yusuf did not place the tiles by size.",
          "He placed them by pattern: tulip to garden, wave to ferry, star to rooftop.",
          "Hakan turned the Golden Fish Key in a tiny blue lock.",
          "The map glowed once, then waited, as if it needed one more thing.",
        ],
        image: "assets/cats-blue-tile-map-page-10.webp",
        alt: "Yusuf placing the three missing tiles while Hakan turns the Golden Fish Key",
      },
      {
        title: "Angela Wakes the Blue",
        paragraphs: [
          "Angela sang the soft bazaar song again.",
          "Koray rang the tiny tram bell. Ding!",
          "Hakan and Yusuf pressed their hands on the map together.",
          "Blue light ran through every tile, fast as a happy river.",
        ],
        image: "assets/cats-blue-tile-map-page-11.webp",
        alt: "Angela singing and Koray ringing the tram bell while Hakan and Yusuf wake the Blue Tile Map",
      },
      {
        title: "Readers of Paths",
        paragraphs: [
          "The Cats of Istanbul cheered in soft meows and proud tail swishes.",
          "Tiny blue paths spread across the map, over rooftops, ferries, fountains, and doors.",
          "Misket gave Hakan and Yusuf matching blue tile charms.",
          "\"Readers of Paths,\" said the eldest cat. \"The city can see again.\"",
        ],
        image: "assets/cats-blue-tile-map-page-12.webp",
        alt: "Misket giving Hakan and Yusuf matching blue tile charms as the Cats of Istanbul celebrate",
      },
    ],
  },
  {
    title: "Hakan, Yusuf, and the Galata Moon Bell",
    libraryKicker: "Istanbul Cats Sequel",
    readerKicker: "A moonlit Galata Tower rescue",
    description:
      "A silent bell, three missing sounds, and a night path for the whole family.",
    cover: "assets/book-cover-cats-galata-moon-bell.webp",
    coverAlt:
      "Cover art for Hakan, Yusuf, and the Galata Moon Bell showing the family, Misket, and the glowing Moon Bell",
    seriesId: "cats-of-istanbul",
    pages: [
      {
        title: "A Line to Galata",
        paragraphs: [
          "At bedtime, Hakan and Yusuf's blue tile charms began to glow.",
          "The Blue Tile Map opened on Hakan's desk by itself.",
          "A silver line curled across the tiny city, over rooftops and water.",
          "It stopped at Galata Tower.",
        ],
        image: "assets/cats-galata-moon-bell-page-01.webp",
        alt: "Hakan and Yusuf watching the Blue Tile Map draw a silver line to Galata Tower",
      },
      {
        title: "The Silent Bell",
        paragraphs: [
          "In the hidden courtyard, Misket touched the map with one paw.",
          "A silver-blue bell appeared above the tiles, but it made no sound.",
          "\"The Galata Moon Bell opens secret cat doors at night,\" said the eldest cat.",
          "\"Three sounds are missing: sea, street, and home.\"",
        ],
        image: "assets/cats-galata-moon-bell-page-02.webp",
        alt: "Misket showing Hakan and Yusuf the silent Galata Moon Bell on the Blue Tile Map",
      },
      {
        title: "Koray's Ferry Knot",
        paragraphs: [
          "At the ferry pier, a rope gate blocked the hidden cat path.",
          "Koray studied the knot. \"This wants a sailor's twist.\"",
          "Loop, tuck, pull. The rope gate opened.",
          "Behind it, a glowing shell hummed beside the water.",
        ],
        image: "assets/cats-galata-moon-bell-page-03.webp",
        alt: "Koray tying a sailor knot to open a hidden ferry-pier cat path",
      },
      {
        title: "The Sea Note",
        paragraphs: [
          "The shell hummed with ferry horns and Bosphorus waves.",
          "Yusuf held it steady with both hands.",
          "Hakan leaned close and listened until the sound curled into shape.",
          "A blue pearl rose from the shell. The Sea Note was found.",
        ],
        image: "assets/cats-galata-moon-bell-page-04.webp",
        alt: "Yusuf holding a glowing shell steady while Hakan listens for the Sea Note",
      },
      {
        title: "Angela Spots the Wrong Shadow",
        paragraphs: [
          "Near Galata Tower, Angela stopped on the cobblestones.",
          "\"The moon is there,\" she said, \"but the tower shadow points that way.\"",
          "The shadow stretched to a warm window full of lanterns.",
          "Misket flicked her tail. Another clue.",
        ],
        image: "assets/cats-galata-moon-bell-page-05.webp",
        alt: "Angela noticing the wrong shadow near Galata Tower leading to a lantern shop",
      },
      {
        title: "The Lantern Kitten",
        paragraphs: [
          "Inside the shop, lanterns swung in soft circles.",
          "A kitten crouched under a shelf, too scared to move.",
          "Hakan spoke softly while Yusuf held the ladder steady.",
          "The kitten touched Hakan's hand, and the Street Note sparkled beside her paw.",
        ],
        image: "assets/cats-galata-moon-bell-page-06.webp",
        alt: "Hakan calming a kitten in a lantern shop while Yusuf steadies a ladder",
      },
      {
        title: "Yusuf Climbs First",
        paragraphs: [
          "Inside Galata Tower, the stairs curled up and up.",
          "The wind hummed through the stone windows.",
          "Yusuf climbed first with Misket at his side.",
          "He left small blue chalk marks so Hakan could follow safely.",
        ],
        image: "assets/cats-galata-moon-bell-page-07.webp",
        alt: "Yusuf climbing first inside Galata Tower and leaving blue chalk marks for Hakan",
      },
      {
        title: "The Wind in Angela's Scarf",
        paragraphs: [
          "At the top, the Home Note fluttered in the wind.",
          "It zipped left. It zipped right. Hakan could not catch it.",
          "Angela opened her scarf like a sail.",
          "The wind filled it gently, and the Home Note landed in the soft cloth.",
        ],
        image: "assets/cats-galata-moon-bell-page-08.webp",
        alt: "Angela catching the glowing Home Note in her scarf at the top of Galata Tower",
      },
      {
        title: "Koray Fixes the Bell Frame",
        paragraphs: [
          "The Moon Bell waited above them, silver and quiet.",
          "It was not broken, but its wooden frame had cracked.",
          "Koray wrapped the frame with cord and tied it tight.",
          "The bell hung straight. Now it was ready to ring.",
        ],
        image: "assets/cats-galata-moon-bell-page-09.webp",
        alt: "Koray repairing the cracked wooden frame of the Galata Moon Bell",
      },
      {
        title: "Brothers at the Rope",
        paragraphs: [
          "Hakan unlocked the bell heart with the Golden Fish Key.",
          "Yusuf held the rope as the wind pushed hard.",
          "Hakan held Yusuf's wrist. Yusuf nodded.",
          "Together, they rang the Galata Moon Bell.",
        ],
        image: "assets/cats-galata-moon-bell-page-10.webp",
        alt: "Hakan unlocking the Moon Bell heart while Yusuf holds the bell rope",
      },
      {
        title: "Doors of Moonlight",
        paragraphs: [
          "The bell sang over Istanbul in silver-blue rings.",
          "Blue doors glowed under stairs, beside fountains, and behind flower pots.",
          "Lost cats lifted their heads and padded safely home.",
          "From the tower, Hakan and Yusuf watched the whole city answer.",
        ],
        image: "assets/cats-galata-moon-bell-page-11.webp",
        alt: "Blue cat doors glowing across moonlit Istanbul as lost cats find their way home",
      },
      {
        title: "Keepers of the Bell",
        paragraphs: [
          "Back in the courtyard, Misket placed silver bell charms before the brothers.",
          "\"Keepers of the Bell,\" said the eldest cat. \"You listened together.\"",
          "Angela and Koray smiled as the Cats of Istanbul bowed.",
          "On the Blue Tile Map, one last sparkle winked. Istanbul was saving another secret for another night.",
        ],
        image: "assets/cats-galata-moon-bell-page-12.webp",
        alt: "Misket giving Hakan and Yusuf silver bell charms as Angela, Koray, and the cats celebrate",
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
    seriesId: "book-magic",
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
          "A tiny old man with round glasses stood behind a tall desk.",
          "\"I am the Keeper,\" he said. \"And tonight, my Last Page Bell is gone.\"",
        ],
        image: "assets/moonlit-page-03.webp",
        alt: "A huge moonlit library with floating books and Hakan and Yusuf standing in wonder",
      },
      {
        title: "The Empty Pillow",
        paragraphs: [
          "The Keeper pointed to a red pillow. It had a round empty spot in the middle.",
          "\"The bell helps stories find their endings,\" he said.",
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
    title: "Hakan, Yusuf, and the Clockwork Chapter",
    libraryKicker: "Book Magic Sequel",
    readerKicker: "A Moonlit Library mystery about missing middles",
    description:
      "The Last Page Bell rings again, but the Story Clock is skipping the middle of every tale.",
    cover: "assets/book-cover-book-magic-clockwork-chapter.webp",
    coverAlt:
      "Cover art for Hakan, Yusuf, and the Clockwork Chapter showing the family beside the magical Story Clock",
    seriesId: "book-magic",
    pages: [
      {
        title: "The Bell Rings Twice",
        paragraphs: [
          "Hakan was reading in bed when the silver bookmark blinked again.",
          "Ding. Ding.",
          "The sound came from inside the book, tiny but bright.",
          "Yusuf looked in from the doorway. \"That bell is calling us back.\"",
        ],
        image: "assets/book-magic-clockwork-page-01.webp",
        alt: "Hakan reading in bed as the silver bookmark glows and Yusuf watches from the doorway",
      },
      {
        title: "An Ending Too Soon",
        paragraphs: [
          "The book opened by itself. The first page said, \"Once upon a time.\"",
          "Then the pages flipped fast. Swish, swish, swish.",
          "The last page said, \"The End.\"",
          "Yusuf frowned. \"Wait. Where did the middle go?\"",
        ],
        image: "assets/book-magic-clockwork-page-02.webp",
        alt: "A magical book skipping from the first page to the last while Hakan and Yusuf look surprised",
      },
      {
        title: "Back to the Moonlit Library",
        paragraphs: [
          "The bookshelf door opened with a soft silver click.",
          "Hakan, Yusuf, Angela, and Koray stepped into the Moonlit Library.",
          "The Keeper hurried toward them with his round glasses shining.",
          "\"The Last Page Bell is home,\" he said, \"but the Story Clock is skipping.\"",
        ],
        image: "assets/book-magic-clockwork-page-03.webp",
        alt: "Hakan, Yusuf, Angela, and Koray returning to the Moonlit Library with the Keeper waiting",
      },
      {
        title: "The Story Clock",
        paragraphs: [
          "A giant clock hung above the tallest shelf.",
          "Instead of numbers, it held parts of a story: begin, trouble, choose, change, and end.",
          "Three golden spaces were empty.",
          "\"Find the missing pieces,\" said the Keeper, \"or stories will keep jumping ahead.\"",
        ],
        image: "assets/book-magic-clockwork-page-04.webp",
        alt: "A giant magical Story Clock glowing above the Moonlit Library shelves",
      },
      {
        title: "Angela's Margin Note",
        paragraphs: [
          "Angela opened an old book and touched a note in the margin.",
          "\"A story grows one careful step at a time,\" she read.",
          "The words glowed warm gold.",
          "A little clock door swung open, and a tiny train whistle peeped from inside.",
        ],
        image: "assets/book-magic-clockwork-page-05.webp",
        alt: "Angela reading a glowing margin note while the family gathers near the Story Clock",
      },
      {
        title: "The Train of First Words",
        paragraphs: [
          "A train made of paper puffed around a shelf.",
          "At the station, one shy first sentence would not climb aboard.",
          "Hakan knelt low. \"You can start small,\" he whispered.",
          "The sentence hopped on, and the Tick of Beginning appeared in Hakan's hand.",
        ],
        image: "assets/book-magic-clockwork-page-06.webp",
        alt: "Hakan helping a shy paper sentence board a tiny train of first words while Yusuf smiles",
      },
      {
        title: "Yusuf Spots the Skip",
        paragraphs: [
          "Yusuf watched the clock hands move.",
          "Tick. Tock. Jump.",
          "\"There,\" he said, marking the missing beat with blue chalk. \"It skips right before trouble.\"",
          "A second door opened into a pop-up forest.",
        ],
        image: "assets/book-magic-clockwork-page-07.webp",
        alt: "Yusuf marking a skipped beat near the Story Clock as a pop-up forest opens",
      },
      {
        title: "The Trouble That Helps",
        paragraphs: [
          "In the pop-up forest, a paper rabbit stopped before a shiny puddle.",
          "\"Poor rabbit,\" Hakan said. \"The puddle is in the way.\"",
          "Then the rabbit found a leaf, made a little boat, and crossed with a proud hop.",
          "Hakan smiled. \"Trouble helps the brave part happen.\"",
        ],
        image: "assets/book-magic-clockwork-page-08.webp",
        alt: "A paper rabbit crossing a puddle in a pop-up forest while Hakan and Yusuf watch",
      },
      {
        title: "Koray Fixes the Gear Path",
        paragraphs: [
          "The Tock of Trouble rolled out of the forest and bumped into the clock.",
          "Clink. It stopped.",
          "Koray bent close and found a tiny gear path twisted under the clock.",
          "He turned it gently. \"Now the beginning can lead to the trouble.\"",
        ],
        image: "assets/book-magic-clockwork-page-09.webp",
        alt: "Koray carefully fixing a tiny gear path under the magical Story Clock",
      },
      {
        title: "The Paper Knight",
        paragraphs: [
          "The clock opened one last book.",
          "Inside, a paper knight stood before two bridges.",
          "\"Pick the big bridge,\" Yusuf said quickly.",
          "Hakan listened. From the small bridge came a tiny cry for help.",
        ],
        image: "assets/book-magic-clockwork-page-10.webp",
        alt: "A paper knight standing before two bridges in a pop-up castle book while the brothers decide",
      },
      {
        title: "The Chime of Choice",
        paragraphs: [
          "The paper knight chose the small bridge.",
          "At the other side, a little paper friend wiped away a tear.",
          "The knight's shield shone, and the Chime of Choice rang clear.",
          "Yusuf grinned. \"The best choice was the kind one.\"",
        ],
        image: "assets/book-magic-clockwork-page-11.webp",
        alt: "The paper knight choosing the small bridge to help a friend as a golden chime appears",
      },
      {
        title: "Middle Restored",
        paragraphs: [
          "Angela read the margin note again.",
          "Koray turned the repaired gear.",
          "Hakan placed the Tick. Yusuf placed the Tock. Together, they set the Chime in the clock.",
          "The Story Clock hummed like a happy bedtime song.",
        ],
        image: "assets/book-magic-clockwork-page-12.webp",
        alt: "Hakan and Yusuf placing the missing pieces into the Story Clock while Angela, Koray, and the Keeper help",
      },
      {
        title: "The Bell Waits",
        paragraphs: [
          "The Last Page Bell floated above the open book.",
          "It did not ring right away.",
          "Pages filled with paths, problems, choices, and changes.",
          "Yusuf smiled. \"It is waiting for the middle. Now the ending can mean something.\"",
        ],
        image: "assets/book-magic-clockwork-page-13.webp",
        alt: "The Last Page Bell waiting above a repaired storybook as the family watches",
      },
      {
        title: "A Blank Page Breathes",
        paragraphs: [
          "Back home, Hakan tucked the silver bookmark beside his pillow.",
          "Yusuf stayed for one more page.",
          "The book opened to a blank sheet. A tiny blue-black wing print appeared.",
          "Then the page gave a soft little breath.",
        ],
        image: "assets/book-magic-clockwork-page-14.webp",
        alt: "Hakan and Yusuf finding a tiny ink wing print on a blank page in Hakan's bedroom",
      },
    ],
  },
  {
    title: "Hakan, Yusuf, and the Ink Dragon's Promise",
    libraryKicker: "Book Magic Finale",
    readerKicker: "A Moonlit Library story about brave mistakes",
    description:
      "A worried ink dragon teaches the family that a messy mark can become a better story.",
    cover: "assets/book-cover-book-magic-ink-dragon.webp",
    coverAlt:
      "Cover art for Hakan, Yusuf, and the Ink Dragon's Promise showing the family with a tiny ink dragon",
    seriesId: "book-magic",
    pages: [
      {
        title: "The Ink Wing Print",
        paragraphs: [
          "The blank page breathed again.",
          "A tiny wing print lifted from the paper.",
          "Blue-black ink drops floated into the air and made a trail.",
          "Hakan whispered, \"Something is trying to show us the way.\"",
        ],
        image: "assets/book-magic-ink-dragon-page-01.webp",
        alt: "A tiny ink wing print rising from a blank page while Hakan and Yusuf watch",
      },
      {
        title: "Drops to the Door",
        paragraphs: [
          "The drops drifted down the hall.",
          "Yusuf carried the silver bookmark. Hakan followed the shining trail.",
          "Angela and Koray came too, because book magic had learned their address.",
          "On the book door, a smudge curled like a dragon tail.",
        ],
        image: "assets/book-magic-ink-dragon-page-02.webp",
        alt: "The family following blue ink drops to a glowing book door with a dragon-tail smudge",
      },
      {
        title: "Blank Pages Everywhere",
        paragraphs: [
          "In the Moonlit Library, books floated open all around them.",
          "Every page was blank.",
          "The Keeper held one book with shaking hands. \"Someone is hiding the words.\"",
          "From under his desk came the smallest sniffle.",
        ],
        image: "assets/book-magic-ink-dragon-page-03.webp",
        alt: "Blank books floating through the Moonlit Library while the family and Keeper search for the hidden words",
      },
      {
        title: "Nib Under the Desk",
        paragraphs: [
          "Hakan crouched and looked under the desk.",
          "A tiny dragon sat in the shadows, blue-black as fresh ink.",
          "His wings were folded tight. His eyes were wet.",
          "\"I am Nib,\" he whispered. \"Please do not look at my mess.\"",
        ],
        image: "assets/book-magic-ink-dragon-page-04.webp",
        alt: "Hakan gently finding Nib, a tiny blue-black ink dragon, hiding under the library desk",
      },
      {
        title: "The Big Blot",
        paragraphs: [
          "Nib showed them a page with one giant blot.",
          "\"I sneezed ink,\" he said. \"Now the story is ruined forever.\"",
          "The blot wobbled on the paper like it wanted to run away.",
          "Yusuf leaned closer. \"Maybe it is not finished yet.\"",
        ],
        image: "assets/book-magic-ink-dragon-page-05.webp",
        alt: "Nib pointing sadly at a huge blue-black ink blot on an open storybook",
      },
      {
        title: "Angela's Crossed-Out Note",
        paragraphs: [
          "Angela pulled a recipe card from her pocket.",
          "It had crossed-out lines and little arrows all over it.",
          "\"This card was messy,\" she said. \"Then it helped me make a better cake.\"",
          "Nib blinked. \"A mistake can help?\"",
        ],
        image: "assets/book-magic-ink-dragon-page-06.webp",
        alt: "Angela showing Nib a crossed-out recipe note while Hakan and Yusuf listen",
      },
      {
        title: "The Ink River",
        paragraphs: [
          "The blot slipped off the page and became a small ink river.",
          "Cream-colored pages floated on top like boats.",
          "Yusuf studied the marks. \"These pages are out of order.\"",
          "He began to line them up, one careful page at a time.",
        ],
        image: "assets/book-magic-ink-dragon-page-07.webp",
        alt: "Yusuf leading the family by arranging floating page pieces on a glowing ink river",
      },
      {
        title: "Koray's Blotter Bridge",
        paragraphs: [
          "The ink river grew too wide to step across.",
          "Koray folded clean paper into a bridge.",
          "The paper drank extra ink from the edges but kept the path bright.",
          "\"A good fix does not erase everything,\" he said. \"It saves what matters.\"",
        ],
        image: "assets/book-magic-ink-dragon-page-08.webp",
        alt: "Koray making a folded blotter-paper bridge over the ink river while Yusuf helps Hakan cross",
      },
      {
        title: "Comma Clouds",
        paragraphs: [
          "Above the bridge, comma-shaped clouds drifted the wrong way.",
          "Nib breathed tiny blue ink stars. They sparkled in short bursts.",
          "Hakan listened to the spaces between the bursts.",
          "\"Here,\" he said. \"The story needs a pause.\"",
        ],
        image: "assets/book-magic-ink-dragon-page-09.webp",
        alt: "Hakan listening to Nib's tiny blue ink-star breath among comma-shaped clouds",
      },
      {
        title: "The Promise Page",
        paragraphs: [
          "At the center of the library stood a glowing blank page.",
          "It did not shout. It did not scold.",
          "It waited.",
          "The Keeper bowed. \"This is the Promise Page. It asks for only one promise: try again.\"",
        ],
        image: "assets/book-magic-ink-dragon-page-10.webp",
        alt: "The family standing before a glowing blank Promise Page in the Moonlit Library",
      },
      {
        title: "I Made a Mess",
        paragraphs: [
          "Nib shook from nose to tail.",
          "\"I made a mess,\" he said.",
          "Hakan knelt beside him. \"Then we can clean it, shape it, and keep going.\"",
          "Yusuf nodded. \"And I will help put the pages in order.\"",
        ],
        image: "assets/book-magic-ink-dragon-page-11.webp",
        alt: "Hakan comforting Nib beside a small ink blot while Yusuf stands protectively nearby",
      },
      {
        title: "Yusuf Sets the Order",
        paragraphs: [
          "Yusuf placed the pages in a line.",
          "Beginning. Trouble. Choice. Change.",
          "Angela found the best lines. Koray held the bridge steady.",
          "Hakan helped Nib press one tiny ink footprint onto the Promise Page.",
        ],
        image: "assets/book-magic-ink-dragon-page-12.webp",
        alt: "Yusuf arranging floating pages while Hakan helps Nib make a promise on the glowing page",
      },
      {
        title: "The Blot Becomes a Dragon",
        paragraphs: [
          "The big blot lifted from the book.",
          "It stretched, curled, and sparkled.",
          "Then it became a friendly dragon made of ink stars.",
          "Nib laughed so hard a few blue stars popped from his nose.",
        ],
        image: "assets/book-magic-ink-dragon-page-13.webp",
        alt: "A huge ink blot becoming a friendly dragon-shaped constellation above the family",
      },
      {
        title: "Keepers of Better Drafts",
        paragraphs: [
          "The Keeper smiled at Hakan and Yusuf.",
          "\"Stories need brave readers,\" he said, \"and careful fixers.\"",
          "Back home, Hakan wrote one messy sentence, crossed out one word, and kept going.",
          "Yusuf sat beside him. \"That,\" he said, \"is how a story gets braver.\"",
        ],
        image: "assets/book-magic-ink-dragon-page-14.webp",
        alt: "Hakan writing bravely at his desk while Yusuf helps and Angela and Koray smile from the doorway",
      },
    ],
  },
  {
    title: "Hakan, Yusuf, and the Lanterns of Cappadocia",
    libraryKicker: "Cappadocia Quest",
    readerKicker: "A sunrise adventure above the valleys",
    description:
      "A lantern floating the wrong way leads Hakan and Yusuf to a lost little star.",
    cover: "assets/book-cover-lanterns-cappadocia.webp",
    coverAlt:
      "Cover art for Hakan and the Lanterns of Cappadocia showing Hakan, Yusuf, balloons, and a glowing lantern",
    seriesId: "cappadocia-lanterns",
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
  {
    title: "Hakan, Yusuf, and the Underground Star River",
    libraryKicker: "Cappadocia Quest",
    readerKicker: "A hidden river below the fairy chimneys",
    description:
      "The brothers follow the lantern charm into a cave city to restart Cappadocia's star-river.",
    cover: "assets/book-cover-cappadocia-underground-star-river.webp",
    coverAlt:
      "Cover art for Hakan, Yusuf, and the Underground Star River showing the brothers, Toprak, and a glowing river below Cappadocia",
    seriesId: "cappadocia-lanterns",
    pages: [
      {
        title: "The Charm Blinks Twice",
        paragraphs: [
          "Breakfast was almost over when Hakan's tiny lantern charm blinked blue, then green.",
          "Yusuf leaned close. \"That means it knows a new secret.\"",
          "The charm warmed in Hakan's palm and pointed toward the fairy chimneys.",
          "Outside, one balloon rose with no glow at all.",
        ],
        image: "assets/cappadocia-underground-page-01.webp",
        alt: "Hakan and Yusuf discovering the lantern charm blinking at breakfast while an unglowing balloon rises outside",
      },
      {
        title: "The Door in the Stone",
        paragraphs: [
          "The kind balloon captain from before was waiting by a tall stone tower.",
          "\"I am Captain Selma,\" she said. \"The valley lights are fading.\"",
          "Angela tied Hakan's scarf. Koray checked Yusuf's flashlight.",
          "A little round door opened in the stone with a soft clack.",
        ],
        image: "assets/cappadocia-underground-page-02.webp",
        alt: "Captain Selma showing Hakan, Yusuf, Angela, and Koray a secret round door in a Cappadocia stone tower",
      },
      {
        title: "Down to the Cave City",
        paragraphs: [
          "Stone steps curled down into cool rooms under the hill.",
          "Tiny blue lights slept in jars along the walls.",
          "Yusuf drew the turns with his finger in the dust.",
          "\"If we get lost,\" he said, \"we follow my map back.\"",
        ],
        image: "assets/cappadocia-underground-page-03.webp",
        alt: "Yusuf mapping the underground cave city while Hakan follows the glowing jars",
      },
      {
        title: "Toprak the Pottery Turtle",
        paragraphs: [
          "In the deepest room sat a clay turtle with painted blue flowers on his shell.",
          "\"I am Toprak,\" he said slowly. \"The star-river has stopped.\"",
          "He pointed to a dry channel in the floor.",
          "Far away, something made a tiny cloudy sneeze.",
        ],
        image: "assets/cappadocia-underground-page-04.webp",
        alt: "Toprak the painted pottery turtle explaining the stopped star-river to Hakan and Yusuf",
      },
      {
        title: "Yusuf Counts the Air Holes",
        paragraphs: [
          "Three tunnels waited ahead.",
          "One sparkled too brightly. One smelled like smoke. One had cool air brushing out.",
          "Yusuf counted the little air holes near the ceiling.",
          "\"This way,\" he said. \"A river needs breath.\"",
        ],
        image: "assets/cappadocia-underground-page-05.webp",
        alt: "Yusuf choosing the correct tunnel by counting air holes while Hakan holds the lantern charm",
      },
      {
        title: "Hakan's Careful Dash",
        paragraphs: [
          "Blue glow seeds floated above the path.",
          "Hakan wanted to zoom, but Toprak shook his clay head.",
          "\"Too much dust will hide the seeds.\"",
          "So Hakan dashed gently, catching each seed in the lantern's warm light.",
        ],
        image: "assets/cappadocia-underground-page-06.webp",
        alt: "Hakan carefully catching blue glow seeds in the lantern light while Yusuf and Toprak watch",
      },
      {
        title: "Angela's Echo Song",
        paragraphs: [
          "The tunnel ended at a wall with no door.",
          "Angela sang one soft note.",
          "The note bounced back as three notes, then five.",
          "Stone doves opened their eyes in the wall and fluttered into the dark.",
        ],
        image: "assets/cappadocia-underground-page-07.webp",
        alt: "Angela singing in the cave while stone doves wake and Hakan and Yusuf follow the echo",
      },
      {
        title: "Koray and the Little Wheel",
        paragraphs: [
          "The stone doves led them to a tiny water wheel stuck with sand.",
          "Koray knelt beside it. \"This wheel has been waiting for one small fix.\"",
          "He cleaned the axle with Yusuf's handkerchief.",
          "Drip, drip, drip. The first water began to move.",
        ],
        image: "assets/cappadocia-underground-page-08.webp",
        alt: "Koray fixing a tiny underground water wheel while Hakan and Yusuf help",
      },
      {
        title: "The Sleeping Chimney",
        paragraphs: [
          "The water ran to a narrow chimney that should have carried wind upward.",
          "Inside was a baby balloon-cloud, round as a puppy and very stuck.",
          "In its soft cloud paws was a blue Wind Pebble.",
          "\"I only wanted a nap,\" it whispered.",
        ],
        image: "assets/cappadocia-underground-page-09.webp",
        alt: "Hakan and Yusuf finding a baby balloon-cloud stuck in a narrow chimney with a blue Wind Pebble",
      },
      {
        title: "The Brother Lift",
        paragraphs: [
          "Yusuf tied a safe rope and climbed first to check the ledge.",
          "\"Ready,\" he called. \"I can see the pebble.\"",
          "Hakan zipped up the rope in one careful flash and tickled the cloud's nose with his scarf.",
          "The cloud sneezed, popped free, and dropped the Wind Pebble into Hakan's hands.",
        ],
        image: "assets/cappadocia-underground-page-10.webp",
        alt: "Yusuf anchoring a safe rope while Hakan climbs to free the baby balloon-cloud",
      },
      {
        title: "River of Blue Lights",
        paragraphs: [
          "Toprak placed the Wind Pebble in the dry channel.",
          "Water, wind, and blue light rushed together.",
          "The star-river woke with a sound like tiny bells underwater.",
          "Every jar in the cave city blinked awake.",
        ],
        image: "assets/cappadocia-underground-page-11.webp",
        alt: "Toprak placing the Wind Pebble into the channel as the underground star-river wakes",
      },
      {
        title: "A Second Light",
        paragraphs: [
          "By sunrise, the balloons glowed softly again.",
          "Captain Selma bowed to Hakan and Yusuf. \"The sky can see us now.\"",
          "The lantern charm gained a second light: one blue, one green.",
          "Then both lights pointed up, higher than any balloon.",
        ],
        image: "assets/cappadocia-underground-page-12.webp",
        alt: "Captain Selma thanking Hakan and Yusuf at sunrise as the lantern charm shines blue and green",
      },
    ],
  },
  {
    title: "Hakan, Yusuf, and the Sky Lantern Caravan",
    libraryKicker: "Cappadocia Quest",
    readerKicker: "A sunrise rescue above Red Valley",
    description:
      "A torn sky map leads Hakan and Yusuf into the clouds to guide Cappadocia's lost lantern caravan home.",
    cover: "assets/book-cover-cappadocia-sky-lantern-caravan.webp",
    coverAlt:
      "Cover art for Hakan, Yusuf, and the Sky Lantern Caravan showing the brothers in a balloon above Cappadocia with glowing lanterns",
    seriesId: "cappadocia-lanterns",
    pages: [
      {
        title: "Two Lights at Night",
        paragraphs: [
          "That night, Hakan's lantern charm blinked blue and green on his pillow.",
          "A paper sky lantern tapped the window.",
          "It had a tiny hole in its side and a torn map tucked inside.",
          "Yusuf whispered, \"This is definitely not bedtime anymore.\"",
        ],
        image: "assets/cappadocia-sky-caravan-page-01.webp",
        alt: "Hakan and Yusuf discovering a damaged paper sky lantern tapping their Cappadocia window at night",
      },
      {
        title: "Before the Balloon Field",
        paragraphs: [
          "Captain Selma met them before sunrise with a worried face.",
          "\"The sky lantern caravan is lost above Red Valley,\" she said.",
          "Angela packed warm bread and apricots.",
          "Koray checked the balloon basket ropes twice.",
        ],
        image: "assets/cappadocia-sky-caravan-page-02.webp",
        alt: "Captain Selma meeting Hakan, Yusuf, Angela, and Koray at the balloon field before sunrise",
      },
      {
        title: "Koray's Basket Fix",
        paragraphs: [
          "One basket strap snapped with a sharp twang.",
          "Hakan gasped, but Koray was already moving.",
          "He wrapped, tied, pulled, and tested the strap.",
          "\"Now it is stronger than before,\" he said, and the balloon lifted.",
        ],
        image: "assets/cappadocia-sky-caravan-page-03.webp",
        alt: "Koray fixing a snapped balloon basket strap while Hakan and Yusuf help hold the ropes",
      },
      {
        title: "The Cloud Road",
        paragraphs: [
          "The balloon rose into peach-colored morning.",
          "A road of tiny clouds appeared beside the basket.",
          "On it stood Nefes, the wind shepherd, with a flock of cloud-lambs.",
          "\"The caravan cannot hear the Dawn Bell,\" Nefes said.",
        ],
        image: "assets/cappadocia-sky-caravan-page-04.webp",
        alt: "Nefes the wind shepherd standing on a cloud road beside the balloon basket",
      },
      {
        title: "Yusuf Reads the Wind Ribbons",
        paragraphs: [
          "Red, blue, and silver ribbons of wind twisted ahead.",
          "The red ribbon looked fastest.",
          "Yusuf watched dry leaves spin below it. \"Fast is not safe today.\"",
          "He pointed to the silver ribbon, turning steady and slow.",
        ],
        image: "assets/cappadocia-sky-caravan-page-05.webp",
        alt: "Yusuf choosing the steady silver wind ribbon while Hakan watches from the balloon basket",
      },
      {
        title: "Hakan on the Wind Steps",
        paragraphs: [
          "A torn piece of sky-map fluttered away.",
          "Hakan's boots glowed.",
          "Wind steps appeared under his feet, one after another.",
          "He ran across the air, grabbed the map piece, and bounced back into the basket laughing.",
        ],
        image: "assets/cappadocia-sky-caravan-page-06.webp",
        alt: "Hakan running across glowing wind steps to catch a torn sky-map piece while Yusuf holds the safety rope",
      },
      {
        title: "Paper Kite Foxes",
        paragraphs: [
          "A pack of paper kite foxes swooped from a cloud.",
          "They tugged the balloon ropes and giggled in crinkly voices.",
          "\"They are not mean,\" Angela said. \"They are bored.\"",
          "One fox wore a ribbon shaped like a bell.",
        ],
        image: "assets/cappadocia-sky-caravan-page-07.webp",
        alt: "Paper kite foxes tugging balloon ropes while Hakan and Yusuf look for the bell-shaped ribbon",
      },
      {
        title: "Angela's Warm Song",
        paragraphs: [
          "Angela sang the bread song from the cave city, soft and warm.",
          "The kite foxes stopped tugging.",
          "They folded themselves into a paper arrow.",
          "The arrow pointed toward one silent fairy chimney on the ridge.",
        ],
        image: "assets/cappadocia-sky-caravan-page-08.webp",
        alt: "Angela singing as paper kite foxes fold into an arrow pointing to a silent fairy chimney",
      },
      {
        title: "The Silent Dawn Bell",
        paragraphs: [
          "On top of the chimney hung the Dawn Bell, silver and still.",
          "Frost from a night cloud had stuck the clapper in place.",
          "Without the bell, the sky lantern caravan could not find morning.",
          "Yusuf looked at Hakan. \"I will go first.\"",
        ],
        image: "assets/cappadocia-sky-caravan-page-09.webp",
        alt: "Yusuf preparing a safety rope beside Hakan below the frosty silver Dawn Bell",
      },
      {
        title: "The Brother Bell Plan",
        paragraphs: [
          "Yusuf climbed carefully and tied the safety rope.",
          "Hakan raced around the bell in a warm golden circle.",
          "Koray fixed the loose clapper pin with one tiny tool.",
          "Angela counted the rhythm: one, two, three, ring!",
        ],
        image: "assets/cappadocia-sky-caravan-page-10.webp",
        alt: "Hakan racing around the Dawn Bell while Yusuf anchors the rope and Koray fixes the clapper",
      },
      {
        title: "The Caravan Returns",
        paragraphs: [
          "The Dawn Bell rang across Cappadocia.",
          "From behind the clouds came hundreds of tiny lanterns, glowing like friendly stars.",
          "They followed the bell, the silver wind ribbon, and Hakan's golden boot trail.",
          "Captain Selma laughed. \"They found the road home!\"",
        ],
        image: "assets/cappadocia-sky-caravan-page-11.webp",
        alt: "Hundreds of glowing sky lanterns returning across Cappadocia as Hakan and Yusuf guide them",
      },
      {
        title: "Lantern Keepers",
        paragraphs: [
          "At breakfast, three lights shone inside Hakan's charm: star blue, river green, and dawn gold.",
          "Captain Selma gave Yusuf a tiny sky-map patch.",
          "Angela kissed the top of Hakan's head. Koray ruffled Yusuf's short hair.",
          "Above the valleys, the balloons, lanterns, and morning all rose together.",
        ],
        image: "assets/cappadocia-sky-caravan-page-12.webp",
        alt: "Hakan holding the three-light lantern charm while Yusuf receives a sky-map patch at breakfast",
      },
    ],
  },
  {
    title: "Hakan, Yusuf, and the Starlit School Key",
    libraryKicker: "Starlit School Adventure",
    readerKicker: "A first night at Asterhall",
    description:
      "A moon-blue invitation leads Hakan and Yusuf to Asterhall, where a school key loses its three lights.",
    cover: "assets/book-cover-starlit-school-key.webp",
    coverAlt:
      "Cover art for Hakan, Yusuf, and the Starlit School Key showing the brothers at a glowing magical school with a three-light key",
    seriesId: "starlit-school",
    pages: [
      {
        title: "The Moon-Blue Invitation",
        paragraphs: [
          "The envelope arrived at breakfast without a stamp.",
          "It unfolded by itself into a moon-blue map of towers, windows, and tiny walking stars.",
          "Angela smiled at the boys over the table. Koray turned the map carefully so the light would not spill into the orange juice.",
          "\"Asterhall School for Young Spellmakers,\" Yusuf read. Hakan whispered, \"It knows our names.\"",
        ],
        image: "assets/starlit-school-key-page-01.webp",
        alt: "Angela, Koray, Hakan, and Yusuf studying a glowing moon-blue invitation at breakfast",
      },
      {
        title: "The Lantern Tram",
        paragraphs: [
          "At sunset, a lantern tram rolled to the curb without making a sound.",
          "Its windows shone with little constellations, and its floor drew a gold path under Hakan's shoes.",
          "Yusuf checked the map twice, then tucked it under his arm like a serious student.",
          "The tram bell chimed once. The city folded away, and Asterhall rose ahead under the evening stars.",
        ],
        image: "assets/starlit-school-key-page-02.webp",
        alt: "Hakan and Yusuf stepping onto a glowing lantern tram bound for Asterhall",
      },
      {
        title: "Asterhall Opens",
        paragraphs: [
          "The school doors were round and silver, with star marks turning slowly in the wood.",
          "Inside, chalk constellations drifted across the ceiling. Midnight-blue capes waited on a brass rail.",
          "A kind teacher named Mira fastened one cape around Hakan and one around Yusuf.",
          "\"At Asterhall,\" she said, \"magic listens best to students who listen first.\"",
        ],
        image: "assets/starlit-school-key-page-03.webp",
        alt: "Hakan and Yusuf receiving midnight-blue school capes beneath floating chalk stars",
      },
      {
        title: "First Lantern Lesson",
        paragraphs: [
          "Their first class was Spell-Lanterns.",
          "Each student set one small lantern on a desk and breathed gently toward the glass.",
          "Hakan's lantern flashed too fast, bright-bright-bright, like it wanted to race around the room.",
          "Yusuf put his long fingers beside the flame. \"Slow down with me,\" he said, and Hakan matched his breath.",
        ],
        image: "assets/starlit-school-key-page-04.webp",
        alt: "Hakan and Yusuf learning to calm a glowing spell-lantern in a warm classroom",
      },
      {
        title: "The Three Lights Fly Away",
        paragraphs: [
          "After class, Teacher Mira showed them the Starlit School Key.",
          "It had three lights inside it: Door, Desk, and Bell.",
          "But when Hakan leaned close, the key gave a worried little click.",
          "Blue, gold, and green sparks flew out and vanished down three different halls.",
        ],
        image: "assets/starlit-school-key-page-05.webp",
        alt: "The Starlit School Key losing three colored lights while Hakan and Yusuf watch",
      },
      {
        title: "The Door Light",
        paragraphs: [
          "Hakan heard a tiny sniffle near the chalk wall.",
          "The Door Light was hiding inside a shy comet drawn in silver dust.",
          "Yusuf held the map steady while Hakan sat on the floor and spoke softly.",
          "\"You do not have to open every door at once,\" Hakan told it. The Door Light glowed blue and curled into his palm.",
        ],
        image: "assets/starlit-school-key-page-06.webp",
        alt: "Hakan comforting the blue Door Light hiding inside a chalk comet while Yusuf holds the map",
      },
      {
        title: "The Desk Maze",
        paragraphs: [
          "The Desk Light had run into a room where the desks rearranged themselves.",
          "When Hakan hurried forward, the desks clicked into a wall.",
          "Yusuf watched the legs, shadows, and tiny scratches on the floor.",
          "\"They move like a sentence,\" he said. He read the pattern aloud, and the gold Desk Light rolled into view.",
        ],
        image: "assets/starlit-school-key-page-07.webp",
        alt: "Yusuf solving a moving desk maze while Hakan holds a lantern nearby",
      },
      {
        title: "The Bell Tower Steps",
        paragraphs: [
          "The last light waited in the practice bell tower.",
          "The stairs curled upward in a moonlit spiral, narrow but safe.",
          "Hakan carried the lantern. Yusuf counted the bells, because each one hummed a different note.",
          "At the top, the green Bell Light trembled under the smallest bell, afraid to ring too loudly.",
        ],
        image: "assets/starlit-school-key-page-08.webp",
        alt: "Hakan and Yusuf climbing the moonlit practice bell tower to find the green Bell Light",
      },
      {
        title: "The Key Wakes",
        paragraphs: [
          "Hakan placed the blue Door Light back first.",
          "Yusuf fitted the gold Desk Light beside it, exactly where the key's lines met.",
          "Together, they lifted the green Bell Light into the final space.",
          "The Starlit School Key woke with a warm chime, and the First Lesson Hall opened in a circle of stars.",
        ],
        image: "assets/starlit-school-key-page-09.webp",
        alt: "Hakan and Yusuf restoring three colored lights to the Starlit School Key",
      },
      {
        title: "The Whispering Shelf",
        paragraphs: [
          "Teacher Mira bowed, but the key was not finished showing them secrets.",
          "A hidden shelf slid open behind the lesson hall.",
          "On it lay a silver spellbook with feather-soft pages and a nervous glow.",
          "\"Help,\" whispered the book. Yusuf looked at Hakan. Hakan looked at Yusuf. Their second lesson had already begun.",
        ],
        image: "assets/starlit-school-key-page-10.webp",
        alt: "Hakan and Yusuf discovering a nervous glowing spellbook on a hidden shelf at Asterhall",
      },
    ],
  },
  {
    title: "Hakan, Yusuf, and the Whispering Spellbook",
    libraryKicker: "Starlit School Adventure",
    readerKicker: "A living-library mystery",
    description:
      "The nervous silver spellbook has lost its page-feathers, and Asterhall's living library will only help students who listen.",
    cover: "assets/book-cover-starlit-whispering-spellbook.webp",
    coverAlt:
      "Cover art for Hakan, Yusuf, and the Whispering Spellbook showing the brothers with a glowing silver spellbook in Asterhall's living library",
    seriesId: "starlit-school",
    pages: [
      {
        title: "The Book That Whispered",
        paragraphs: [
          "The silver spellbook trembled on the hidden shelf.",
          "Its pages fluttered like tiny white feathers, but the feathers did not land.",
          "\"Help,\" it whispered again.",
          "Yusuf stepped closer first. \"We hear you,\" he said. Hakan lifted his spell-lantern so the book would not feel alone.",
        ],
        image: "assets/starlit-whispering-spellbook-page-01.webp",
        alt: "Hakan and Yusuf listening to a nervous silver spellbook on a hidden shelf at Asterhall",
      },
      {
        title: "The Living Library",
        paragraphs: [
          "The shelf opened into a library that breathed softly in the walls.",
          "Curved bookcases leaned like sleepy trees. Little ladders walked by themselves.",
          "Page-feathers drifted over the boys' heads.",
          "Hakan reached up, but the nearest feather slid away and tucked itself behind a moonlit window.",
        ],
        image: "assets/starlit-whispering-spellbook-page-02.webp",
        alt: "Hakan and Yusuf entering Asterhall's living library with curved shelves and floating page-feathers",
      },
      {
        title: "The Librarian Moth",
        paragraphs: [
          "A tiny amber moth flew out from between two books.",
          "It wore no glasses, carried no list, and still looked exactly like a librarian.",
          "\"This book lost its page-feathers,\" the moth hummed. \"Students rushed past its whispers and never listened to the end.\"",
          "Yusuf nodded slowly. \"Then we start by listening.\"",
        ],
        image: "assets/starlit-whispering-spellbook-page-03.webp",
        alt: "A glowing librarian moth explaining the lost page-feathers to Hakan and Yusuf",
      },
      {
        title: "Shelves That Move",
        paragraphs: [
          "Hakan hurried after a feather, and the shelves clicked into a maze.",
          "A book ladder scooted backward. A row of storybooks folded itself shut.",
          "\"Wait,\" Yusuf said.",
          "He stood very still. The shelves stopped too, as if the whole library had been waiting for someone to notice its breathing.",
        ],
        image: "assets/starlit-whispering-spellbook-page-04.webp",
        alt: "The living library shelves forming a gentle maze while Yusuf calmly reads the pattern",
      },
      {
        title: "The Sad Ink",
        paragraphs: [
          "Near a reading alcove, silver ink puddled on the floor.",
          "It rose into little droplet faces, all looking worried.",
          "Hakan knelt and held his lantern close enough to warm them, but not close enough to frighten them.",
          "\"We will not rush,\" he promised. The ink shapes shimmered and pointed toward the balcony.",
        ],
        image: "assets/starlit-whispering-spellbook-page-05.webp",
        alt: "Hakan comforting sad silver ink shapes while Yusuf holds the spellbook nearby",
      },
      {
        title: "Feather Wind",
        paragraphs: [
          "On the high reading balcony, the missing page-feathers spun in a moon-blue wind.",
          "Hakan wanted to chase them, but Yusuf watched first.",
          "\"They are not flying away,\" Yusuf said. \"They are making a sentence with their turns.\"",
          "He pointed to the calmest curve, and Hakan followed with careful steps.",
        ],
        image: "assets/starlit-whispering-spellbook-page-06.webp",
        alt: "Yusuf reading the pattern of swirling page-feathers while Hakan follows with a lantern",
      },
      {
        title: "The Listening Corner",
        paragraphs: [
          "The feather trail ended in a round nook of deep blue cushions.",
          "The boys sat beside the spellbook and did nothing at all.",
          "At first, Hakan heard lanterns ticking. Then he heard the book breathe.",
          "At last, one silver whisper floated up, soft as a bedtime line.",
        ],
        image: "assets/starlit-whispering-spellbook-page-07.webp",
        alt: "Hakan and Yusuf sitting still in the Listening Corner while the spellbook glows softly",
      },
      {
        title: "Feathers Come Home",
        paragraphs: [
          "The missing page-feathers circled back one by one.",
          "Yusuf guided them with the quiet sentence he had learned.",
          "Hakan held the lantern steady so every feather could find its page.",
          "When the last feather landed, the spellbook's cracked silver cover mended with a happy glow.",
        ],
        image: "assets/starlit-whispering-spellbook-page-08.webp",
        alt: "Hakan and Yusuf returning glowing page-feathers to the healed silver spellbook",
      },
      {
        title: "Pictures Instead of Words",
        paragraphs: [
          "The spellbook opened wider than before.",
          "It did not shout. It did not sparkle too hard.",
          "It showed gentle picture-lights: a bell, a tower, a moon, and a path made of listening.",
          "\"The book is teaching us,\" Yusuf whispered. Hakan smiled. \"And it is not scared anymore.\"",
        ],
        image: "assets/starlit-whispering-spellbook-page-09.webp",
        alt: "The healed spellbook showing glowing picture clues while Hakan and Yusuf study them",
      },
      {
        title: "The Midnight Bell",
        paragraphs: [
          "A black-and-silver note fluttered out of the spellbook.",
          "It had no writing, only a folded star shape that pointed through the window.",
          "Far across Asterhall, the bell tower stood under the moon.",
          "The smallest bell gave one lonely ring. Hakan and Yusuf knew where their next lesson waited.",
        ],
        image: "assets/starlit-whispering-spellbook-page-10.webp",
        alt: "Hakan and Yusuf finding a folded star note that points toward Asterhall's moonlit bell tower",
      },
    ],
  },
  {
    title: "Hakan, Yusuf, and the Midnight Bell Tower",
    libraryKicker: "Starlit School Adventure",
    readerKicker: "A moonlit Asterhall finale",
    description:
      "When Asterhall's Midnight Bell loses its true note, Hakan and Yusuf must listen, lead, and ring the school lanterns awake.",
    cover: "assets/book-cover-starlit-midnight-bell-tower.webp",
    coverAlt:
      "Cover art for Hakan, Yusuf, and the Midnight Bell Tower showing the brothers beneath Asterhall's moonlit bell tower",
    seriesId: "starlit-school",
    pages: [
      {
        title: "The Note Points Up",
        paragraphs: [
          "The folded star note hovered above the healed spellbook.",
          "It had no words, only a silver point aimed at the window.",
          "Across Asterhall, the bell tower waited under the moon.",
          "Then every lantern in the living library flickered once. Hakan held his lantern tighter. Yusuf tucked the note safely in his hand.",
        ],
        image: "assets/starlit-midnight-bell-tower-page-01.webp",
        alt: "Hakan and Yusuf seeing the folded star note point toward Asterhall's moonlit bell tower",
      },
      {
        title: "The Courtyard of Flickers",
        paragraphs: [
          "Teacher Mira led them into the midnight courtyard.",
          "Windows blinked gold, then blue, then almost dark.",
          "\"The Midnight Bell has lost its true note,\" she said. \"Without it, the school lanterns cannot rest or wake properly.\"",
          "Yusuf looked at the tower. \"Then we need to find what it cannot say.\"",
        ],
        image: "assets/starlit-midnight-bell-tower-page-02.webp",
        alt: "Hakan and Yusuf walking through Asterhall's moonlit courtyard toward the bell tower",
      },
      {
        title: "Yusuf Maps the Echo",
        paragraphs: [
          "Inside the echo classroom, sound ripples floated in blue circles.",
          "Yusuf watched each ripple turn, shrink, and fade.",
          "Hakan moved his lantern low so the floor pattern shone clearly.",
          "\"The missing note is not gone,\" Yusuf said. \"It is stuck between two rings.\"",
        ],
        image: "assets/starlit-midnight-bell-tower-page-03.webp",
        alt: "Yusuf mapping blue sound ripples while Hakan lights the echo classroom floor",
      },
      {
        title: "The Bell Spark",
        paragraphs: [
          "On the first tower steps, Hakan heard a tiny ting.",
          "Under one stone step, a green-gold bell spark trembled.",
          "It was not naughty. It was scared of being too loud.",
          "Hakan knelt beside it. \"You can be small and still be heard,\" he whispered.",
        ],
        image: "assets/starlit-midnight-bell-tower-page-04.webp",
        alt: "Hakan comforting a small green-gold bell spark under the tower steps while Yusuf watches",
      },
      {
        title: "The Step Rhythm",
        paragraphs: [
          "The tower stairs rearranged whenever the boys climbed too quickly.",
          "Yusuf tapped the railing: slow, slow, quick, rest.",
          "One safe step glowed. Then another. Then three more.",
          "Hakan followed the rhythm with the bell spark floating beside his lantern.",
        ],
        image: "assets/starlit-midnight-bell-tower-page-05.webp",
        alt: "Yusuf finding the safe rhythm on the bell tower stairs while Hakan follows with the bell spark",
      },
      {
        title: "The Missing Star-Chime",
        paragraphs: [
          "At the top of the tower, the great bells hung still.",
          "A round moon window shone on the bell machine.",
          "One star-shaped space was empty.",
          "\"The spark belongs there,\" Yusuf said. \"But it needs a brave sound to carry it home.\"",
        ],
        image: "assets/starlit-midnight-bell-tower-page-06.webp",
        alt: "Hakan and Yusuf finding the missing star-chime space in the moonlit bell tower mechanism",
      },
      {
        title: "The Listening Circle",
        paragraphs: [
          "Teacher Mira and the classmates gathered their lanterns in a circle.",
          "Yusuf lifted one hand. \"No rushing,\" he said. \"Listen for the smallest ring.\"",
          "Everyone grew quiet.",
          "Hakan carried the bell spark into the middle, and the spark glowed brighter because nobody tried to hurry it.",
        ],
        image: "assets/starlit-midnight-bell-tower-page-07.webp",
        alt: "Yusuf leading a listening circle while Hakan carries the bell spark in his lantern",
      },
      {
        title: "Family Light",
        paragraphs: [
          "A warm glow opened in the round tower window.",
          "For one soft moment, Angela and Koray appeared like a golden reflection from home.",
          "Hakan smiled, steadier than before.",
          "Yusuf saw the bell rope's echo knot and loosened it gently, loop by loop.",
        ],
        image: "assets/starlit-midnight-bell-tower-page-08.webp",
        alt: "A warm reflection of Angela and Koray appearing while Yusuf untangles the bell rope and Hakan steadies the lantern",
      },
      {
        title: "The Midnight Bell Rings",
        paragraphs: [
          "Hakan placed the bell spark into the star-chime space.",
          "Yusuf held the rope beside him.",
          "Together, they pulled once.",
          "The Midnight Bell rang silver and gold, and ribbons of sound flew across Asterhall, waking every lantern with a gentle glow.",
        ],
        image: "assets/starlit-midnight-bell-tower-page-09.webp",
        alt: "Hakan and Yusuf ringing the Midnight Bell together as silver and gold sound ribbons relight Asterhall",
      },
      {
        title: "Starlit Students",
        paragraphs: [
          "By dawn, Asterhall was calm and bright.",
          "Teacher Mira gave Hakan and Yusuf two small star badges and two fresh notebooks.",
          "\"You listened when magic was quiet,\" she said. \"That is how Asterhall learns your names.\"",
          "The silver spellbook fluttered happily on the table. Hakan and Yusuf grinned. Their first three lessons had become a story of their own.",
        ],
        image: "assets/starlit-midnight-bell-tower-page-10.webp",
        alt: "Teacher Mira giving Hakan and Yusuf Starlit Student badges at dawn in Asterhall",
      },
    ],
  },
  {
    title: "Hakan, Yusuf, and the Underwater Star Reef",
    libraryKicker: "Starlit School Adventure",
    readerKicker: "An underwater Asterhall sequel",
    description:
      "A bubbling spell-lantern opens the Tideglass Door, sending Hakan and Yusuf to relight Asterhall's underwater reef classroom.",
    cover: "assets/book-cover-starlit-underwater-star-reef.webp",
    coverAlt:
      "Cover art for Hakan, Yusuf, and the Underwater Star Reef showing the brothers in Asterhall's glowing underwater reef classroom",
    seriesId: "starlit-school",
    pages: [
      {
        title: "Bubbles in the Lantern",
        paragraphs: [
          "The morning after the Midnight Bell rang, Asterhall felt calm and bright.",
          "Hakan set his spell-lantern on the round table. One bubble rose inside it. Then another. Then ten.",
          "Yusuf looked at his Starlit Student badge. A tiny blue wave had appeared beside the star.",
          "Teacher Mira smiled. \"Asterhall has heard another lesson calling.\"",
        ],
        image: "assets/starlit-underwater-star-reef-page-01.webp",
        alt: "Hakan and Yusuf watching a bubbling spell-lantern and blue wave badge mark in Asterhall's First Lesson Hall",
      },
      {
        title: "The Tideglass Door",
        paragraphs: [
          "The moon-pool in the floor opened with a soft splash of light.",
          "Glass-clear water rose into an archway, but not one drop spilled onto the stones.",
          "Hakan's cape filled with a shining air bubble. Yusuf's current-map unfolded into blue ribbons.",
          "Together, the brothers stepped through the Tideglass Door.",
        ],
        image: "assets/starlit-underwater-star-reef-page-02.webp",
        alt: "Teacher Mira leading Hakan and Yusuf through the glowing Tideglass Door into an underwater corridor",
      },
      {
        title: "Reef Hall",
        paragraphs: [
          "Below Asterhall waited Reef Hall, a classroom made of coral arches and shell desks.",
          "Pearl lanterns hung everywhere, but most of them were dim.",
          "A tiny reef sprite made of pearl light bowed to the boys. \"I am Nila,\" she said. \"Our Tide Bell cannot wake the reef.\"",
          "Yusuf studied the bell. Hakan lifted his lantern so Nila could see they had come to help.",
        ],
        image: "assets/starlit-underwater-star-reef-page-03.webp",
        alt: "Nila the pearl-light reef sprite showing Hakan and Yusuf the dim lanterns of Reef Hall",
      },
      {
        title: "Yusuf Reads the Current",
        paragraphs: [
          "Outside Reef Hall, three current paths curled through the water.",
          "One spun fast. One flashed bright. One turned slowly and stayed clear.",
          "Yusuf watched the bubbles lean. \"The calm blue path is safest,\" he said.",
          "Hakan followed with the lantern, and the water opened around them like a quiet hallway.",
        ],
        image: "assets/starlit-underwater-star-reef-page-04.webp",
        alt: "Yusuf choosing the calm blue current path while Hakan follows with his underwater spell-lantern",
      },
      {
        title: "The Pearl Spark",
        paragraphs: [
          "In a coral cave, Hakan heard a tiny plink.",
          "A pearl spark hid inside a small coral cup, glowing and going dim, glowing and going dim.",
          "Hakan knelt close. \"You do not have to shine alone,\" he whispered.",
          "The pearl spark rolled gently into his lantern, warm and brave enough to travel.",
        ],
        image: "assets/starlit-underwater-star-reef-page-05.webp",
        alt: "Hakan comforting a frightened pearl spark in a coral cave while Yusuf watches protectively",
      },
      {
        title: "The Shell Maze",
        paragraphs: [
          "The current carried them to a maze of giant spiral shells.",
          "Every shell sent out a bubble echo. Some echoes turned back. Some echoes crossed.",
          "Yusuf waited until the bubbles made one clean curve.",
          "\"This way,\" he said, and led them through the maze without waking a single sharp echo.",
        ],
        image: "assets/starlit-underwater-star-reef-page-06.webp",
        alt: "Yusuf mapping bubble echoes through a giant shell maze while Hakan carries the pearl spark",
      },
      {
        title: "The Shy Reef Ray",
        paragraphs: [
          "In the moon-kelp garden, a soft blue reef ray hid behind the leaves.",
          "It carried a bubble note under one fin, but the kelp kept tangling around it.",
          "Hakan held out his lantern. \"We can go slowly,\" he said.",
          "Yusuf opened a safe path on the current-map, and the reef ray glided beside them.",
        ],
        image: "assets/starlit-underwater-star-reef-page-07.webp",
        alt: "Hakan helping a shy pearl-blue reef ray while Yusuf guides them through the moon-kelp garden",
      },
      {
        title: "The Moon-Kelp Knot",
        paragraphs: [
          "At the heart of the reef, the Tide Bell hung from a coral arch.",
          "Its rope was tied in a glowing moon-kelp knot.",
          "Yusuf read the twists the way he read currents and echoes.",
          "Hakan shone warm light on the knot while Yusuf loosened it, loop by careful loop.",
        ],
        image: "assets/starlit-underwater-star-reef-page-08.webp",
        alt: "Yusuf untangling the Tide Bell's moon-kelp knot while Hakan shines his lantern",
      },
      {
        title: "The Tide Bell Rings",
        paragraphs: [
          "Hakan lifted the pearl spark into the bell.",
          "Yusuf held the rope beside him.",
          "They pulled together, once, gently.",
          "The Tide Bell rang in silver-blue bubbles, and every coral lantern in the reef woke with a soft pearl glow.",
        ],
        image: "assets/starlit-underwater-star-reef-page-09.webp",
        alt: "Hakan and Yusuf ringing the Tide Bell together as glowing bubbles relight the underwater Star Reef",
      },
      {
        title: "The Blue Wave Mark",
        paragraphs: [
          "Back in Asterhall, the moon-pool settled flat and shining.",
          "Teacher Mira touched each badge, and the tiny wave mark glowed blue.",
          "Nila waved from the water before the Tideglass Door folded away.",
          "Hakan kept one pearl bubble in his lantern. Yusuf folded the current-map into a neat ribbon. Asterhall had learned their names a little more.",
        ],
        image: "assets/starlit-underwater-star-reef-page-10.webp",
        alt: "Teacher Mira adding blue wave marks to Hakan and Yusuf's badges after the underwater reef adventure",
      },
    ],
  },
  {
    title: "Hakan, Yusuf, and the Map Below the Waves",
    libraryKicker: "Lost City of Aqualis - Book 1",
    readerKicker: "An epic underwater rescue adventure",
    description:
      "A living sea compass and a young sea dragon lead the brothers across the open ocean toward a vanished golden city.",
    cover: "assets/book-cover-aqualis-map-below-waves.webp",
    coverAlt:
      "Cover art for Hakan, Yusuf, and the Map Below the Waves showing the brothers and Marin racing toward the lost city of Aqualis",
    seriesId: "aqualis",
    pages: [
      {
        title: "The Cave That Breathed",
        paragraphs: [
          "The sea was bright when Angela and Koray anchored the family boat beside a blue coastal cave.",
          "Inside, Hakan heard a sound beneath the waves. It was small and lonely, like someone trying not to cry.",
          "Yusuf reached between two wet rocks and lifted an old bronze compass. Its needle spun once, then pointed into the cave.",
          "A golden line appeared across the water. The cave breathed in.",
        ],
        image: "assets/aqualis-map-below-waves-page-01.webp",
        alt: "Hakan hearing a cry in a coastal cave while Yusuf finds a bronze compass and their parents wait on the boat outside",
      },
      {
        title: "Pulled Below",
        paragraphs: [
          "The inward tide grabbed their ankles and swept both brothers through the tunnel.",
          "Yusuf caught Hakan's wrist. The compass flashed, and two clear breathing bubbles closed around their heads.",
          "Rocks crashed behind them. The way back vanished under a cloud of sand.",
          "Ahead, the golden line raced deeper. The lonely cry came again.",
        ],
        image: "assets/aqualis-map-below-waves-page-02.webp",
        alt: "Yusuf holding Hakan as the compass gives them breathing bubbles in a collapsing underwater cave",
      },
      {
        title: "The Young Sea Dragon",
        paragraphs: [
          "They found a young sea dragon tangled in black vines of current.",
          "Yusuf used the compass rim to cut the tightest vine. Hakan held the dragon steady until the last knot snapped.",
          "The dragon clutched half of a golden crescent. \"I am Marin,\" he said. \"This belongs to my mother, Sera.\"",
          "A dark current moved in the tunnel behind them. Marin whispered, \"She disappeared with Aqualis.\"",
        ],
        image: "assets/aqualis-map-below-waves-page-03.webp",
        alt: "Yusuf and Hakan freeing Marin the young turquoise sea dragon from black current vines",
      },
      {
        title: "A Promise in the Blue",
        paragraphs: [
          "Marin had searched every reef for the city and every current for his mother.",
          "Hakan touched Marin's forehead. \"You do not have to search alone anymore.\"",
          "Yusuf placed the broken crescent inside the compass. Click! It became the missing needle.",
          "A road of gold unrolled across the open sea. Yusuf nodded. \"We find Aqualis. Then we bring Sera home.\"",
        ],
        image: "assets/aqualis-map-below-waves-page-04.webp",
        alt: "Hakan promising to help Marin while the crescent pendant becomes the needle of Yusuf's sea compass",
      },
      {
        title: "The Glass-Kelp Forest",
        paragraphs: [
          "The road led into a forest of clear kelp. Every leaf made a shining copy of them.",
          "Ten Marins darted left. Ten more hurried right. Hakan nearly followed the wrong one.",
          "Yusuf watched the crescent needle pulse. Only one Marin's forehead glowed in the same rhythm.",
          "\"There!\" Yusuf called. The real friends joined hands, and the false forest cracked open behind them.",
        ],
        image: "assets/aqualis-map-below-waves-page-05.webp",
        alt: "Yusuf using the compass to find the real Marin among reflections in the glass-kelp forest",
      },
      {
        title: "The Hunters in the Current",
        paragraphs: [
          "Silver ray-guards burst from the kelp. Their dark currents twisted into a net.",
          "The three friends raced through a coral canyon, but falling stone trapped the smallest guard.",
          "Hakan turned back. He pushed until the guard's silver wing came free.",
          "The guard stared at him. Then it sliced a secret door through the net. Yusuf saw the opening. \"Go!\"",
        ],
        image: "assets/aqualis-map-below-waves-page-06.webp",
        alt: "Hakan freeing a trapped silver ray-guard while Yusuf and Marin face the approaching hunters",
      },
      {
        title: "The Singing Trench",
        paragraphs: [
          "The golden route ended above a trench so deep that even the compass light could not find the bottom.",
          "Then a warm song rose through the darkness. Marin's crescent mark shone bright.",
          "\"My mother,\" he breathed. \"That is her song.\"",
          "Yusuf led the dive. Hakan held Marin close as glowing whales spiraled around them like living stars.",
        ],
        image: "assets/aqualis-map-below-waves-page-07.webp",
        alt: "Yusuf leading Hakan and Marin into a vast singing trench among bioluminescent whales",
      },
      {
        title: "The Graveyard of Ships",
        paragraphs: [
          "At the bottom waited dozens of old explorer ships. None had sunk by accident.",
          "Every bow pointed toward the next ship. Together they made one enormous arrow.",
          "Hakan found a fresh turquoise scale tied to the final mast. Marin pressed it to his cheek. \"Sera made this trail.\"",
          "Behind them, a tall shadow opened its manta wings. \"And you should not have followed it,\" said Riven.",
        ],
        image: "assets/aqualis-map-below-waves-page-08.webp",
        alt: "The brothers and Marin discovering Sera's arrow trail among wrecked ships as Riven approaches",
      },
      {
        title: "The City Rises",
        paragraphs: [
          "Riven struck his tide staff against the sand. A black current charged toward the compass.",
          "Yusuf covered Hakan. Hakan held Marin. Marin lifted Sera's scale and sang back to her.",
          "Compass, crescent, scale, and song blazed together.",
          "The seafloor broke open. Golden towers rose through the storm. The lost city of Aqualis had heard them.",
        ],
        image: "assets/aqualis-map-below-waves-page-09.webp",
        alt: "Aqualis rising from the seafloor as Yusuf, Hakan, and Marin combine the compass, crescent, scale, and song",
      },
      {
        title: "The Gate Between Them",
        paragraphs: [
          "They reached the golden gate just as a great turquoise dragon rushed toward them from inside.",
          "\"Mama!\" Marin cried.",
          "Riven's staff flashed. The gate slammed shut between mother and child, and the whole city began sliding toward the black abyss.",
          "Hakan kept one hand on Marin. Yusuf raised the compass. \"We found her,\" he said. \"Now we find a way in.\"",
        ],
        image: "assets/aqualis-map-below-waves-page-10.webp",
        alt: "Marin and his mother Sera touching the opposite sides of Aqualis's sealed golden gate while the brothers prepare to enter",
      },
    ],
  },
  {
    title: "Hakan, Yusuf, and the Prison of Aqualis",
    libraryKicker: "Lost City of Aqualis - Book 2",
    readerKicker: "A rescue inside the moving lost city",
    description:
      "The city is sinking into the abyss, Sera is still trapped, and the truth about Riven waits inside Aqualis.",
    cover: "assets/book-cover-aqualis-prison.webp",
    coverAlt:
      "Cover art for Hakan, Yusuf, and the Prison of Aqualis showing the brothers trying to free Sera inside the moving city",
    seriesId: "aqualis",
    pages: [
      {
        title: "The City Slides Deeper",
        paragraphs: [
          "Aqualis tilted toward the abyss. Marin pressed his claws to the gate while Sera reached from the other side.",
          "The small silver ray-guard returned. It was the same guard Hakan had freed in the coral canyon.",
          "With one sharp wing, it opened an old flood-grate below the gate.",
          "Yusuf pointed the compass into the tunnel. \"That is our way in.\" Hakan pulled Marin close. \"We are coming back for her.\"",
        ],
        image: "assets/aqualis-prison-page-01.webp",
        alt: "The rescued silver ray-guard opening a flood tunnel as Aqualis slides deeper and the heroes leave Sera's sealed gate",
      },
      {
        title: "The Flood-Tunnel Ride",
        paragraphs: [
          "The tunnel caught them like a rushing water slide.",
          "Aqualis rolled as it sank. The floor became a wall. The wall became the ceiling.",
          "Yusuf watched the compass and called each turn. \"Left arch! High pipe! Now dive!\"",
          "The ray-guard cut through a curtain of bubbles, and the friends shot into the heart of the city.",
        ],
        image: "assets/aqualis-prison-page-02.webp",
        alt: "Yusuf guiding Hakan, Marin, and the silver ray-guard through Aqualis's rotating flood tunnels",
      },
      {
        title: "Aqualis Inside Out",
        paragraphs: [
          "Golden streets climbed the walls. Fountains poured upward. Silent homes hung sideways around them.",
          "On a tall mosaic, Sera and Riven stood together beside a shining golden sun.",
          "\"They were friends,\" Hakan said.",
          "Yusuf traced the streets on his compass. \"And this city is not only sinking. It is turning like a lock.\"",
        ],
        image: "assets/aqualis-prison-page-03.webp",
        alt: "The heroes exploring the sideways streets of Aqualis and finding a mosaic of Sera and Riven guarding the Sunheart",
      },
      {
        title: "Riven's Story",
        paragraphs: [
          "Riven landed in the round council hall. His staff filled the water with a giant memory.",
          "It showed Sera beside the bright Sunheart while the city shook.",
          "\"She tried to take its power,\" Riven said. \"I sealed Aqualis to save everyone.\"",
          "Marin trembled, but Hakan stood in front of him. Yusuf saw the compass needle point behind Riven's memory. Part of the story was hidden.",
        ],
        image: "assets/aqualis-prison-page-04.webp",
        alt: "Riven projecting a false memory about Sera while Yusuf notices the compass pointing behind it",
      },
      {
        title: "The Archive of Living Water",
        paragraphs: [
          "Yusuf followed the needle into a secret archive. Sheets of living water floated like open books.",
          "The compass beam touched one sheet and peeled Riven's shadow away.",
          "The true memory appeared. Sera had protected the Sunheart. Riven had closed every gate because he was afraid the outside world would find Aqualis.",
          "Marin stared at the truth. \"He trapped my mother because she wanted the city to live.\"",
        ],
        image: "assets/aqualis-prison-page-05.webp",
        alt: "Yusuf revealing the true memory of Sera protecting the Sunheart in Aqualis's living-water archive",
      },
      {
        title: "The Walls Remember",
        paragraphs: [
          "The palace folded around them. Doorways vanished. Golden walls slid together.",
          "Hakan pressed his palm against one wall. A soft song trembled inside it.",
          "\"Sera,\" he said. \"The city remembers her song.\"",
          "Hakan followed the heartbeat in the stone. Yusuf used the compass to hold each passage open until they reached one enormous door.",
        ],
        image: "assets/aqualis-prison-page-06.webp",
        alt: "Hakan following Sera's song through the living palace walls while Yusuf holds the moving passages open",
      },
      {
        title: "The Current Prison",
        paragraphs: [
          "Beyond the door, Sera stood inside a round cage of spinning blue water.",
          "Above her floated the Sunheart, bright enough to light the whole city.",
          "Marin rushed to the bars. Sera's crescent mark flashed in the same rhythm as his.",
          "Yusuf opened the compass. Hakan listened to the matching beat. High above them, Riven raised his staff.",
        ],
        image: "assets/aqualis-prison-page-07.webp",
        alt: "Marin reaching Sera's current prison while the brothers study its lock and Riven watches above",
      },
      {
        title: "The Guard Chooses",
        paragraphs: [
          "Riven sent a black wave toward the boys.",
          "The little silver guard flew between them and split the wave in two. Hakan's kindness had returned when they needed it most.",
          "Yusuf turned the compass against the prison current. Hakan and Marin matched the two crescent beats.",
          "The bars burst into rings of harmless light. Sera stepped free.",
        ],
        image: "assets/aqualis-prison-page-08.webp",
        alt: "The silver ray-guard protecting the brothers as they open Sera's current prison together",
      },
      {
        title: "Family Reunited",
        paragraphs: [
          "Marin leaped into his mother's fins. Their crescent marks touched, and warm light filled the chamber.",
          "Hakan hugged Marin's side. Even the ray-guard spun a happy circle.",
          "Sera looked at Yusuf's compass. \"The Sunheart was never made to hide Aqualis,\" she said. \"It lets the city breathe with the whole sea.\"",
          "Yusuf's smile vanished. The compass needle had begun to spin.",
        ],
        image: "assets/aqualis-prison-page-09.webp",
        alt: "Marin and Sera embracing after their reunion while Yusuf notices the compass warning",
      },
      {
        title: "The City Rockets Up",
        paragraphs: [
          "Riven tore the Sunheart from its cradle and locked it onto his staff.",
          "\"Then Aqualis will breathe above every sea!\" he cried.",
          "The Sunheart cracked. The city shot upward so fast that towers broke loose and dark water became white foam.",
          "Far above, a giant storm covered the surface. Yusuf grabbed Hakan. Sera wrapped one fin around Marin. Aqualis was rising straight toward it.",
        ],
        image: "assets/aqualis-prison-page-10.webp",
        alt: "Riven using the cracked Sunheart to launch Aqualis upward toward a giant surface storm",
      },
    ],
  },
  {
    title: "Hakan, Yusuf, and the Last Tide Crown",
    libraryKicker: "Lost City of Aqualis - Book 3",
    readerKicker: "The epic Aqualis finale",
    description:
      "A cracked Sunheart drives Aqualis toward the surface, where both families must trust one another to stop the reverse tide.",
    cover: "assets/book-cover-aqualis-last-tide-crown.webp",
    coverAlt:
      "Cover art for Hakan, Yusuf, and the Last Tide Crown showing the heroes joining the compass, pendant, and tide staff",
    seriesId: "aqualis",
    pages: [
      {
        title: "The Storm Above",
        paragraphs: [
          "Aqualis raced upward beneath a storm that covered the whole sky.",
          "Inside a cracked tower, Yusuf's compass fired one thin beam toward the surface.",
          "Far above, Angela saw the golden light beside the family boat. Koray turned the wheel toward it.",
          "\"The boys are down there,\" Angela said. The sea rose around them like a wall.",
        ],
        image: "assets/aqualis-last-tide-crown-page-01.webp",
        alt: "The compass signaling Angela and Koray's rescue boat while Aqualis rises beneath a giant storm",
      },
      {
        title: "The Reverse Tide",
        paragraphs: [
          "The city reached the storm layer. Water climbed upward between its spinning towers.",
          "Fish, boats, and broken bridges began floating toward the clouds.",
          "Riven pulled harder on the Sunheart. The crack across it grew wider.",
          "Yusuf studied the compass. \"He is not lifting the city,\" he said. \"He is turning the whole sea upside down.\"",
        ],
        image: "assets/aqualis-last-tide-crown-page-02.webp",
        alt: "Aqualis creating a reverse tide as Yusuf realizes Riven is turning the whole sea upside down",
      },
      {
        title: "Riven Falls",
        paragraphs: [
          "The Sunheart burst with wild golden light.",
          "Riven's bridge snapped. He fell into the spinning water below.",
          "\"Leave him!\" shouted one frightened city voice.",
          "Hakan pointed into the abyss. \"No. If we let him fall, we become part of the fear that started this.\" Marin and Sera dived.",
        ],
        image: "assets/aqualis-last-tide-crown-page-03.webp",
        alt: "Riven falling from a broken bridge as Hakan sends Marin and Sera after him",
      },
      {
        title: "Hakan Reaches Riven",
        paragraphs: [
          "Sera caught Riven on one golden fin. Marin held the other side.",
          "Hakan leaned into the rushing water and grabbed Riven's hand.",
          "Riven stared at him. \"After everything I did, why save me?\"",
          "\"Because saving people is how this ends,\" Hakan said. Yusuf opened a safe current with the compass and brought them home.",
        ],
        image: "assets/aqualis-last-tide-crown-page-04.webp",
        alt: "Hakan taking Riven's hand while Sera and Marin rescue him from the maelstrom",
      },
      {
        title: "The Forgotten Crown",
        paragraphs: [
          "Riven led them to a damaged sanctuary. An old carving glowed on the wall.",
          "It showed the Sea Compass, the crescent pendant, and the tide staff becoming one crown.",
          "\"The Sunheart was made from trust,\" Riven admitted. \"I tried to command it alone.\"",
          "Yusuf looked at the three objects. \"Then none of us can repair it alone.\"",
        ],
        image: "assets/aqualis-last-tide-crown-page-05.webp",
        alt: "Riven showing the heroes an ancient carving of the three objects forming the Last Tide Crown",
      },
      {
        title: "Yusuf's Impossible Route",
        paragraphs: [
          "The empty Sunheart cradle waited across a city that would not stop turning.",
          "Yusuf mapped the moving bridges, falling towers, and rising water at once.",
          "A warm lantern blinked through the surface above. Angela and Koray were answering his compass.",
          "\"Move on the third flash,\" Yusuf said. His golden route leaped across the rooftops.",
        ],
        image: "assets/aqualis-last-tide-crown-page-06.webp",
        alt: "Yusuf mapping an impossible route through rotating Aqualis using his parents' lantern signal",
      },
      {
        title: "The Signal from Home",
        paragraphs: [
          "Koray steered between two towering columns of water.",
          "Angela held the lantern high and sang the steady rhythm the boys knew from home.",
          "Below, Aqualis's gates turned with her song. On the third flash, they lined up.",
          "Yusuf grinned. \"Now!\" The route to the cradle opened for seven precious seconds.",
        ],
        image: "assets/aqualis-last-tide-crown-page-07.webp",
        alt: "Angela and Koray guiding Aqualis from the stormy surface with a lantern rhythm",
      },
      {
        title: "Flight Through the Maelstrom",
        paragraphs: [
          "Sera carried Yusuf. Marin carried Hakan. Riven and the silver guard flew beside them.",
          "They shot through the center of the maelstrom as towers and lightning spun around them.",
          "Yusuf protected the compass. Hakan protected the crescent.",
          "The seventh second ended just as all five friends landed at the empty cradle.",
        ],
        image: "assets/aqualis-last-tide-crown-page-08.webp",
        alt: "Sera and Marin carrying the brothers through the final maelstrom toward the Sunheart cradle",
      },
      {
        title: "The Last Tide Crown",
        paragraphs: [
          "Yusuf placed the Sea Compass. Hakan returned Marin's crescent pendant.",
          "Riven opened his hands and laid down the tide staff he had never allowed anyone else to touch.",
          "The three objects rose together. Marin and Sera sang. A crown of turquoise and gold formed around the broken Sunheart.",
          "The crack healed. The maelstrom stopped. For one quiet moment, the whole sea seemed to breathe.",
        ],
        image: "assets/aqualis-last-tide-crown-page-09.webp",
        alt: "Yusuf, Hakan, and Riven forming the Last Tide Crown as Marin and Sera sing",
      },
      {
        title: "A City Between Two Seas",
        paragraphs: [
          "At sunrise, Aqualis rested safely just below the clear blue surface.",
          "Angela and Koray reached the open gate. Hakan and Yusuf ran into their arms.",
          "Marin curled beside Sera. Riven stood without his staff, ready to guard a city that no longer needed to hide.",
          "Above them, the Last Tide Crown glowed. Below it, two families watched a new road open between the deep sea and home.",
        ],
        image: "assets/aqualis-last-tide-crown-page-10.webp",
        alt: "Both families reunited in restored Aqualis at sunrise beneath the Last Tide Crown",
      },
    ],
  },
  {
    title: "Hakan, Yusuf, and the Bronze Owl of Athens",
    libraryKicker: "The Lost Oracle - Book 1",
    readerKicker: "A Greek mythology adventure",
    description:
      "Athena's Golden Thread has been stolen, and the brothers must save Athens from losing every possible tomorrow.",
    cover: "assets/book-cover-greek-bronze-owl-athens.webp",
    coverAlt:
      "Cover art for Hakan, Yusuf, and the Bronze Owl of Athens showing the brothers, Thalia, Glaux, and Kryon's cracked prophecy mirror",
    seriesId: "greek-mythology",
    readerLayout: "wide-art",
    pages: [
      {
        title: "The Owl in the Olive Tree",
        paragraphs: [
          "The last sunlight turned the Acropolis gold when Hakan heard a tiny metallic cry.",
          "High in Athena's olive tree, a bronze owl struggled inside a knot of black-gold thread.",
          "Yusuf climbed first. Hakan steadied the branch while Yusuf loosened the knot.",
          "The owl opened moon-blue eyes. \"I am Glaux,\" he said. \"And someone has stolen tomorrow.\"",
        ],
        image: "assets/greek-bronze-owl-athens-page-01.webp",
        alt: "Yusuf freeing Glaux from a magical knot in Athena's olive tree while Hakan steadies the branch",
      },
      {
        title: "The Night Cracks Open",
        paragraphs: [
          "Glaux led them into a hidden chamber beneath Athena's temple.",
          "A golden loom stood empty. Beside it, a prophecy mirror was split from top to bottom.",
          "Thalia, a young oracle, raced through the door. \"The Golden Thread showed every possible tomorrow,\" she said.",
          "In the mirror, a cloaked man pulled away its final shining strand. Outside, tomorrow's dawn vanished from the marble sky.",
        ],
        image: "assets/greek-bronze-owl-athens-page-02.webp",
        alt: "Kryon stealing the final Golden Thread through a cracked mirror as the brothers, Thalia, and Glaux reach the empty loom",
      },
      {
        title: "Athena's Choice",
        paragraphs: [
          "A woman in silver armor appeared inside the broken glass. An owl shone on her shield.",
          "\"Kryon was once an oracle,\" Athena said. \"Now he wants one future that can never surprise him. He has torn the Thread into three strands.\"",
          "She gave Yusuf a bronze spindle that turned toward hidden patterns. She placed an olive-leaf flame in Hakan's palm.",
          "Glaux dropped one bronze feather. It became a blue path racing down the hill.",
        ],
        image: "assets/greek-bronze-owl-athens-page-03.webp",
        alt: "Athena giving Yusuf a bronze spindle and Hakan an olive-leaf flame while Glaux reveals a blue path",
      },
      {
        title: "The Marble Army Wakes",
        paragraphs: [
          "The trail crossed the moonlit Agora. With a grinding roar, rows of marble soldiers stepped from their pedestals.",
          "Their shields slammed left, right, left, pause.",
          "Yusuf saw the pattern. \"Move on the pause!\" he called, guiding Hakan, Thalia, and Glaux between the spears.",
          "Hakan freed a little stone horse trapped beneath one shield. It stamped twice, then opened a secret stair under the street.",
        ],
        image: "assets/greek-bronze-owl-athens-page-04.webp",
        alt: "Yusuf guiding the group through a repeating marble shield pattern while Hakan frees the stone horse that opens a secret stair",
      },
      {
        title: "The River Beneath Athens",
        paragraphs: [
          "Below Athens flowed a secret river filled with silver triremes.",
          "Three currents opened ahead. One showed victory. One showed treasure. One showed a safe road home.",
          "\"I cannot tell which vision is true,\" Thalia whispered.",
          "Hakan listened to Glaux's tiny metal heartbeat. \"The real path is the one Kryon tried to hide.\" He pointed to the dark water with no reflection at all.",
        ],
        image: "assets/greek-bronze-owl-athens-page-05.webp",
        alt: "Hakan finding the reflectionless route among three false futures on the underground river",
      },
      {
        title: "The Storm of Lost Futures",
        paragraphs: [
          "The dark current burst into a storm of broken futures.",
          "One shining picture showed Hakan safe forever. \"Choose it,\" Kryon's voice promised. \"Your brother will never face danger again.\"",
          "Yusuf reached toward the glass, then stopped. Hakan looked safe, but he stood alone inside a locked golden room.",
          "\"Safe is not the same as free,\" Yusuf said. He spun Athena's spindle, weaving a golden sail through the storm.",
        ],
        image: "assets/greek-bronze-owl-athens-page-06.webp",
        alt: "Yusuf rejecting a false future of Hakan in a golden cage and weaving a glowing sail through the storm",
      },
      {
        title: "The Temple Under the Sea",
        paragraphs: [
          "The river launched them into the moonlit sea beside a temple of white columns.",
          "A bronze serpent circled the ruins. The first Golden Strand was tied around its sleeping heart.",
          "\"We must defeat it,\" Thalia said.",
          "Glaux gave one more feather. Blue light showed black thread caught inside the serpent's chest. Hakan shook his head. \"It is not guarding the knot. The knot is hurting it.\"",
        ],
        image: "assets/greek-bronze-owl-athens-page-07.webp",
        alt: "Glaux revealing the painful black knot inside the bronze serpent at the moonlit sea temple",
      },
      {
        title: "Brothers Against the Serpent",
        paragraphs: [
          "The serpent woke. Its tail smashed columns into the sea.",
          "Yusuf raced along its bronze scales, following the pattern to its heart. Hakan stood before its enormous face and lifted the warm olive flame.",
          "\"We are here to help,\" Hakan said. The serpent held still for one precious breath.",
          "Thalia and Glaux blocked Kryon's shadow. Yusuf cut the black knot, and the serpent's angry red eyes turned peaceful blue.",
        ],
        image: "assets/greek-bronze-owl-athens-page-08.webp",
        alt: "Hakan calming the bronze serpent while Yusuf cuts the black knot and Thalia and Glaux block Kryon's mirror magic",
      },
      {
        title: "The First Strand",
        paragraphs: [
          "The first Golden Strand rose like sunlight from the serpent's heart.",
          "Yusuf wound it around the spindle. Hakan guided its bright end with the olive flame.",
          "\"I do not know exactly what comes next,\" Thalia said. \"But I know we face it together.\" The repaired glass showed Athens receiving its dawn again.",
          "Then Kryon appeared in the mirror, holding two more strands. \"Come find me,\" he said, and the glass filled with twisting stone walls.",
        ],
        image: "assets/greek-bronze-owl-athens-page-09.webp",
        alt: "The brothers recovering the first Golden Strand as Kryon reveals the Labyrinth of Crete in the repaired mirror",
      },
      {
        title: "The Road to Crete",
        paragraphs: [
          "At sunrise, Athena returned Glaux's missing feathers. Yet the spindle still pulled toward the sea.",
          "Inside the mirror, a young Minotaur clutched the second strand while a living maze closed around him.",
          "\"That is Asterion,\" Thalia said. \"The Labyrinth of Crete has never released anyone it chose to keep.\"",
          "Yusuf rolled up the golden map. Hakan held Glaux close. \"Then it has never met all four of us,\" he said. Their ship turned toward Crete.",
        ],
        image: "assets/greek-bronze-owl-athens-page-10.webp",
        alt: "Yusuf, Hakan, Thalia, and Glaux sailing toward Crete while the prophecy mirror shows Asterion trapped in a living labyrinth",
      },
    ],
  },
  {
    title: "Hakan, Yusuf, and the Labyrinth of Crete",
    libraryKicker: "The Lost Oracle - Book 2",
    readerKicker: "A Greek mythology adventure",
    description:
      "The brothers enter a living labyrinth to rescue Asterion and keep Kryon from opening the sky-road to Olympus.",
    cover: "assets/book-cover-greek-labyrinth-crete.webp",
    coverAlt:
      "Cover art for Hakan, Yusuf, Thalia, Glaux, and Asterion running through the living Labyrinth of Crete",
    seriesId: "greek-mythology",
    readerLayout: "wide-art",
    pages: [
      {
        title: "The Gate in the Cliff",
        paragraphs: [
          "The ship reached Crete before the sunrise had finished painting the sea.",
          "Yusuf's spindle pulled a golden line toward a bronze door in the cliff.",
          "The door opened just wide enough for Asterion's frightened hand to reach through.",
          "Hakan caught it. The cliff groaned, and the Labyrinth pulled all four friends and Glaux into the dark.",
        ],
        image: "assets/greek-labyrinth-crete-page-01.webp",
        alt: "Hakan catching Asterion's hand as the bronze door in the cliff pulls the friends into the Labyrinth of Crete",
      },
      {
        title: "The Maze Divides",
        paragraphs: [
          "Stone walls shot between them.",
          "Yusuf and Thalia ran left. Hakan, Glaux, and Asterion vanished right.",
          "Yusuf followed the spindle through seven turns, then stopped. His own footprints waited ahead of him.",
          "On the other side of the wall, the floor tipped. Hakan slid toward a chamber with no bottom.",
        ],
        image: "assets/greek-labyrinth-crete-page-02.webp",
        alt: "The living maze splitting Yusuf and Thalia from Hakan, Glaux, and Asterion as the floor tilts",
      },
      {
        title: "The Minotaur's Choice",
        paragraphs: [
          "Asterion planted his hooves and caught Hakan with both hands.",
          "The second Golden Strand slipped from his belt and vanished between the stones.",
          "\"You let it go for me,\" Hakan said.",
          "Asterion lowered his small horns. \"A strand can be found again. A brother cannot.\" Glaux's blue light opened a way forward.",
        ],
        image: "assets/greek-labyrinth-crete-page-03.webp",
        alt: "Asterion catching Hakan above a bottomless chamber while the second Golden Strand slips into the stones",
      },
      {
        title: "Keeper, Not Monster",
        paragraphs: [
          "Glaux led both groups into a round room held by giant olive roots.",
          "Asterion drew a map in the dust. \"The Labyrinth remembers everyone who entered afraid,\" he said. \"Kryon woke those memories and turned them against me.\"",
          "\"You are its keeper,\" Yusuf realized. \"Not its prisoner.\"",
          "The ground beat once like a heart. The second strand was moving deeper.",
        ],
        image: "assets/greek-labyrinth-crete-page-04.webp",
        alt: "Asterion drawing a map in an olive-root chamber as Yusuf realizes he is the Labyrinth's keeper",
      },
      {
        title: "The Hall of False Faces",
        paragraphs: [
          "The next hall filled with mirrors.",
          "They showed Asterion as a monster, Hakan as helpless, Yusuf walking away, and Thalia hiding from every choice.",
          "\"Those are fears, not futures,\" Thalia said.",
          "Each friend spoke another's true name. The false faces cracked, and the real path appeared between them.",
        ],
        image: "assets/greek-labyrinth-crete-page-05.webp",
        alt: "The friends facing cruel false reflections in the mirror hall and breaking them by speaking true names",
      },
      {
        title: "The Heartbeat Path",
        paragraphs: [
          "The Labyrinth changed faster than Yusuf could draw.",
          "Hakan pressed his palm to the floor. \"It moves when our hearts race.\"",
          "Asterion tapped one slow beat with his hoof. Hakan answered. Thalia and Yusuf joined them.",
          "Yusuf mapped the rhythm instead of the walls. For the first time, the Labyrinth opened calmly.",
        ],
        image: "assets/greek-labyrinth-crete-page-06.webp",
        alt: "Yusuf mapping the heartbeat rhythm while Hakan, Thalia, and Asterion calm the living maze",
      },
      {
        title: "The Chamber of Names",
        paragraphs: [
          "Thousands of names covered the final door. Asterion searched every line.",
          "His name was not there.",
          "\"The Labyrinth remembers fear,\" Hakan said, \"but it should remember who protected it too.\"",
          "He wrote ASTERION with the olive flame. The stone answered with a warm golden roar, and the Heartstone door opened.",
        ],
        image: "assets/greek-labyrinth-crete-page-07.webp",
        alt: "Hakan writing Asterion's name in golden flame on the carved door of names",
      },
      {
        title: "Kryon Tears the Heart",
        paragraphs: [
          "The second strand circled a bright marble heart.",
          "Kryon stepped from a cracked mirror. \"One certain road,\" he said, and tore the strand free.",
          "The Heartstone split. The whole Labyrinth began to fall.",
          "Asterion braced his back between two closing walls. \"Repair the heart!\" he cried. \"I can hold them, but not for long!\"",
        ],
        image: "assets/greek-labyrinth-crete-page-08.webp",
        alt: "Kryon tearing the second strand from the Heartstone as Asterion holds collapsing maze walls apart",
      },
      {
        title: "Two Strands Together",
        paragraphs: [
          "Yusuf cast the spindle. Its golden line caught the second strand before Kryon could escape.",
          "Hakan guided it through the broken Heartstone. First strand and second strand wove together.",
          "The crack healed. The walls lifted away from Asterion.",
          "Then a black mirror-knot closed around the joined Thread. Kryon pulled once, and both strands vanished through the glass.",
        ],
        image: "assets/greek-labyrinth-crete-page-09.webp",
        alt: "Yusuf and Hakan healing the Heartstone with two strands as a black mirror knot steals the joined Thread",
      },
      {
        title: "The Stairway to Olympus",
        paragraphs: [
          "The friends escaped as the Labyrinth settled peacefully beneath Crete.",
          "But the sun stopped at the edge of the sea. High above, Kryon climbed a staircase of cloud with the joined Thread.",
          "Athena appeared faintly in the spindle. \"The third strand is hidden on Olympus. If he binds all three, tomorrow will never change again.\"",
          "Asterion stepped onto the ship. Yusuf raised the sail. Hakan held Glaux close. Together, five friends followed the road into the sky.",
        ],
        image: "assets/greek-labyrinth-crete-page-10.webp",
        alt: "The friends on a ship outside Crete watching Kryon climb a cloud staircase toward Olympus with the joined Thread",
      },
    ],
  },
  {
    title: "Hakan and the Little Lost Moon",
    libraryKicker: "Space Team Adventure",
    readerKicker: "A glowing space rescue among the stars",
    description:
      "Hakan helps a lost moon friend cross a shifting asteroid field before the comet passes.",
    cover: "assets/book-cover-little-lost-moon.webp",
    coverAlt:
      "Cover art for Hakan and the Little Lost Moon showing Hakan, Yusuf, Glim, Blip, Pidge, and a glowing comet in space",
    seriesId: "space-team",
    pages: [
      {
        title: "Blast Off",
        paragraphs: [
          "High above Earth, a little silver starship sailed between the stars.",
          "Hakan floated up from the floor and turned a slow, happy somersault.",
          "Angela tucked a pouch of glowing star-snacks into his belt. \"For making friends,\" she said.",
          "Koray winked from the pilot seat. \"Remember, out here, no one flies alone.\"",
        ],
        image: "assets/little-moon-page-01.webp",
        alt: "Hakan floating in a warm silver starship while Angela gives him glowing snacks, Koray pilots, and Yusuf laughs",
      },
      {
        title: "A Tiny Cry",
        paragraphs: [
          "A tiny cry drifted through the dark.",
          "Outside the window, a soft blue moon-creature curled into a ball.",
          "\"I am Glim,\" it whispered. \"My little moon is far away. The comet is coming, and I must get home before it passes.\"",
          "Hakan pressed his hand to the glass. \"Then we will help you.\"",
        ],
        image: "assets/little-moon-page-02.webp",
        alt: "Hakan and Yusuf looking through a starship window at Glim, a sad blue moon-creature floating in space",
      },
      {
        title: "Meet Blip",
        paragraphs: [
          "Boing! Something round bounced off the wall.",
          "Boing! It bounced off the ceiling. Boing! It tapped Hakan's helmet.",
          "\"That is Blip,\" Yusuf laughed. \"He never lands where he plans.\"",
          "Blip grinned. Glim gave a tiny hopeful glow. The rescue team had begun.",
        ],
        image: "assets/little-moon-page-03.webp",
        alt: "Blip bouncing through the starship cabin while Hakan, Yusuf, and Glim laugh",
      },
      {
        title: "The Mighty Eagle",
        paragraphs: [
          "Outside the ship, a small grey moon-pigeon flapped by.",
          "\"Make way!\" he boomed. \"I am Pidge, the mightiest space-eagle in the sky!\"",
          "He was, in truth, a very small pigeon.",
          "Hakan smiled. A brave friend, even a tiny one, might be exactly what they needed.",
        ],
        image: "assets/little-moon-page-04.webp",
        alt: "Pidge the tiny moon-pigeon puffing up heroically while Hakan, Yusuf, Glim, and Blip watch",
      },
      {
        title: "The Drifting Field",
        paragraphs: [
          "The way to Glim's moon was blocked by a field of asteroids.",
          "The rocks drifted and turned. One gap opened. Another slid shut.",
          "Yusuf narrowed his eyes. \"It keeps changing.\"",
          "Far away, the comet shone brighter. Time was slipping by.",
        ],
        image: "assets/little-moon-page-05.webp",
        alt: "Hakan, Yusuf, Glim, and Blip facing a shifting asteroid field with a comet in the distance",
      },
      {
        title: "Turned Around",
        paragraphs: [
          "Hakan and Blip tried to dart through first.",
          "Left. Right. Up. Around.",
          "The asteroids shifted again, and suddenly they were back where they started.",
          "Glim's blue glow dimmed. \"We cannot do this alone,\" Hakan said.",
        ],
        image: "assets/little-moon-page-06.webp",
        alt: "Hakan and Blip looking turned around inside the asteroid field while Glim glows dimly",
      },
      {
        title: "The Glowing Snacks",
        paragraphs: [
          "Hakan opened Angela's pouch. Star-snacks floated out like tiny suns.",
          "From the shadows came shy space friends: star-mice, comet-kittens, and moon-bugs with bright eyes.",
          "Pidge puffed over too. \"Did someone say feast?\"",
          "Hakan looked at all those helpful faces, and an idea began to glow.",
        ],
        image: "assets/little-moon-page-07.webp",
        alt: "Hakan opening glowing star-snacks as friendly space creatures gather around",
      },
      {
        title: "One Big Team",
        paragraphs: [
          "\"We cannot cross alone,\" Hakan said. \"But together, we can.\"",
          "He gave everyone a job. \"Watch left. Watch right. Yusuf, count the gaps. Blip, lead the bounce.\"",
          "The creatures cheered. Glim glowed bright again.",
          "Hakan remembered Koray's words: out here, no one flies alone.",
        ],
        image: "assets/little-moon-page-08.webp",
        alt: "Hakan gathering Yusuf, Glim, Blip, Pidge, and space creatures into one team near the asteroid field",
      },
      {
        title: "Into the Field",
        paragraphs: [
          "Together, they floated into the asteroid field.",
          "\"Gap on the left!\" called a star-mouse.",
          "\"Duck here!\" called a comet-kitten.",
          "In low gravity they bounced and tumbled, light as feathers, moving deeper toward the little moon.",
        ],
        image: "assets/little-moon-page-09.webp",
        alt: "The whole team weaving through a drifting asteroid field while Hakan holds Glim and Yusuf counts gaps",
      },
      {
        title: "Pidge the Brave",
        paragraphs: [
          "Then the asteroids closed into one tall wall.",
          "No path showed at the bottom. No path showed in the middle.",
          "Pidge puffed up his chest. \"A space-eagle fears nothing!\"",
          "He flapped high above the wall. \"There! A gap! Follow me!\"",
        ],
        image: "assets/little-moon-page-10.webp",
        alt: "Pidge bravely finding a hidden high gap in a wall of asteroids while the team watches below",
      },
      {
        title: "Through the Gap",
        paragraphs: [
          "Up they soared, all together, through the narrow gap.",
          "Just then, the comet streaked past in a great silver blaze.",
          "Below them, a small moon glowed like a night-light.",
          "\"We made it!\" Hakan cried. \"We made it together!\"",
        ],
        image: "assets/little-moon-page-11.webp",
        alt: "Hakan, Yusuf, Glim, Blip, Pidge, and the team bursting through an asteroid gap as a comet passes",
      },
      {
        title: "Glim Goes Home",
        paragraphs: [
          "On the little moon, Glim's family rushed out, glowing blue with joy.",
          "Glim tumbled into their arms.",
          "Then Glim floated back and placed a warm piece of moonlight in Hakan's hand.",
          "\"So you remember,\" Glim whispered.",
        ],
        image: "assets/little-moon-page-12.webp",
        alt: "Glim reuniting with a blue moon-creature family and giving Hakan a glowing piece of moonlight",
      },
      {
        title: "The Floating Feast",
        paragraphs: [
          "That night, the space station glittered with a floating feast.",
          "Snacks drifted by. Space friends danced in the air.",
          "Pidge told the story of his mighty flight, making it bigger each time.",
          "Koray hugged Hakan. \"See? Out here, no one flies alone.\"",
        ],
        image: "assets/little-moon-page-13.webp",
        alt: "Hakan, Yusuf, Angela, Koray, and the space creatures celebrating at a floating feast in a space station",
      },
      {
        title: "Sailing Home",
        paragraphs: [
          "At last, the little starship turned for home.",
          "Hakan floated by the window with the moonlight gift glowing in his hands.",
          "Yusuf was already asleep. Blip dozed in a gentle bounce.",
          "The quiet stars drifted by, slow and soft.",
        ],
        image: "assets/little-moon-page-14.webp",
        alt: "Sleepy Hakan holding a glowing moonlight gift in the starship while Yusuf and Blip sleep nearby",
      },
      {
        title: "A Gentle Wink",
        paragraphs: [
          "Far away, the comet glowed once more.",
          "Just before Hakan closed his eyes, it seemed to give him a tiny silver wink.",
          "Had the comet helped them all along?",
          "Hakan smiled. He would always wonder. Then he drifted to sleep among the stars.",
        ],
        image: "assets/little-moon-page-15.webp",
        alt: "Hakan smiling sleepily at a distant winking comet through the starship window",
      },
    ],
  },
  {
    title: "Hakan, Yusuf, and the Comet Key",
    libraryKicker: "Space Team Sequel",
    readerKicker: "A glowing space rescue with the comet from before",
    description:
      "The comet returns with its tail tied in knots, and the brothers must make a key from helper lights.",
    cover: "assets/book-cover-space-comet-key.webp",
    coverAlt:
      "Cover art for Hakan, Yusuf, and the Comet Key showing the brothers, the family starship, and a knotted comet",
    seriesId: "space-team",
    pages: [
      {
        title: "The Comet Wink Returns",
        paragraphs: [
          "Hakan's moonlight gift blinked at bedtime.",
          "He sat up fast. Outside the window, the same comet from their first space trip shone in the sky.",
          "It winked once. Then it winked again.",
          "Yusuf came to the door. \"That comet is not saying hello,\" he said. \"It is asking for help.\"",
        ],
        image: "assets/space-comet-key-page-01.webp",
        alt: "Hakan holding his moonlight gift while Yusuf watches the comet wink through the bedroom window",
      },
      {
        title: "A Tail Full of Knots",
        paragraphs: [
          "The family starship lifted into the dark blue sky.",
          "Soon the comet floated beside them, bright and silver.",
          "But its long tail was tied in glowing knots.",
          "Angela gasped. Koray leaned over the controls. \"No comet can fly far like that.\"",
        ],
        image: "assets/space-comet-key-page-02.webp",
        alt: "The family looking through the starship window at a comet with a silver-blue tail tied in knots",
      },
      {
        title: "Glim's Message",
        paragraphs: [
          "The moon-screen flickered on.",
          "Glim's round blue face appeared, worried but brave.",
          "\"The comet cannot pass the next star gate,\" Glim said. \"It needs the Comet Key.\"",
          "Hakan touched the screen. \"Then we will find it.\"",
        ],
        image: "assets/space-comet-key-page-03.webp",
        alt: "Glim appearing on the starship moon-screen while Hakan and Yusuf listen",
      },
      {
        title: "No Key to Find",
        paragraphs: [
          "Yusuf spread the star map over the table.",
          "He searched every moon, ring, and tiny blue dot.",
          "\"The key is not on the map,\" he said slowly.",
          "Glim nodded. \"That is because you do not find a Comet Key. You make one.\"",
        ],
        image: "assets/space-comet-key-page-04.webp",
        alt: "Yusuf studying a glowing star map with Hakan, Angela, Koray, and their space friends nearby",
      },
      {
        title: "Angela's Spark Song",
        paragraphs: [
          "Their first stop was the Spark Garden.",
          "Little star sparks bounced so fast they bumped into crystal flowers.",
          "Angela clapped a soft rhythm. Clap, pause, clap-clap.",
          "The sparks slowed down. One calm spark became the Brave Path light.",
        ],
        image: "assets/space-comet-key-page-05.webp",
        alt: "Angela calming bouncing star sparks in a glowing space garden while the family watches",
      },
      {
        title: "The Crystal Ring",
        paragraphs: [
          "Next, the starship reached a ring of floating crystal stones.",
          "The safe path kept changing.",
          "Yusuf counted under his breath. \"One, two, wait. One, two, step.\"",
          "Hakan wanted to hurry, but this time he waited.",
        ],
        image: "assets/space-comet-key-page-06.webp",
        alt: "Yusuf counting a safe path through floating crystal stones while Hakan waits beside him",
      },
      {
        title: "Yusuf Pulls Him Back",
        paragraphs: [
          "A crystal turned without warning.",
          "Hakan drifted too close to the bright edge.",
          "Yusuf caught his sleeve and pulled him gently back.",
          "Between them, the Careful Count light appeared, steady and gold.",
        ],
        image: "assets/space-comet-key-page-07.webp",
        alt: "Yusuf pulling Hakan safely back from a shifting crystal path in space",
      },
      {
        title: "Koray's Loose Ring",
        paragraphs: [
          "At the comet's engine, Koray found a loose golden ring.",
          "It rattled each time the comet tried to move.",
          "Koray tightened it with a tiny space tool.",
          "The tail knots loosened just a little, as if the comet had taken a deep breath.",
        ],
        image: "assets/space-comet-key-page-08.webp",
        alt: "Koray repairing a loose golden ring near the glowing comet tail while the family watches",
      },
      {
        title: "Pidge's Big Promise",
        paragraphs: [
          "One small spark trembled near the last knot.",
          "Pidge puffed up. \"I can fly fast!\"",
          "The spark shook even harder.",
          "So Pidge folded his wings a little. \"Then I will fly slow beside you.\"",
        ],
        image: "assets/space-comet-key-page-09.webp",
        alt: "Pidge flying gently beside a shy golden spark near the comet tail",
      },
      {
        title: "The Kind Promise Light",
        paragraphs: [
          "The shy spark glowed warmer.",
          "Hakan held out both hands. \"You are safe with us.\"",
          "The spark spun once around Pidge, then became the Kind Promise light.",
          "Yusuf smiled. \"That is the brightest one yet.\"",
        ],
        image: "assets/space-comet-key-page-10.webp",
        alt: "The shy spark becoming a warm Kind Promise light beside Hakan, Yusuf, and Pidge",
      },
      {
        title: "Making the Comet Key",
        paragraphs: [
          "The Brave Path light, the Careful Count light, and the Kind Promise light floated together.",
          "Angela held the rhythm steady.",
          "Koray kept the comet ring in place.",
          "Hakan and Yusuf touched the lights at the same time. A tiny silver key appeared.",
        ],
        image: "assets/space-comet-key-page-11.webp",
        alt: "Hakan and Yusuf forming the silver Comet Key from three glowing helper lights",
      },
      {
        title: "Unlocking the Tail",
        paragraphs: [
          "Yusuf guided the key toward the first bright knot.",
          "Hakan held the shy spark's hand so it would not be afraid.",
          "Click.",
          "The comet tail opened into one long ribbon of silver-blue light.",
        ],
        image: "assets/space-comet-key-page-12.webp",
        alt: "Yusuf guiding the Comet Key while Hakan helps the shy spark as the comet tail unties",
      },
      {
        title: "The Star Gate Opens",
        paragraphs: [
          "The comet sailed forward, free at last.",
          "A huge star gate opened like a circle of morning.",
          "The comet passed through it with a happy flash.",
          "Behind the gate, a new map appeared, made from tiny blue dots.",
        ],
        image: "assets/space-comet-key-page-13.webp",
        alt: "The freed comet passing through a glowing star gate while a blue-dot map appears",
      },
      {
        title: "To Starlight Harbor",
        paragraphs: [
          "The blue-dot map floated above the starship table.",
          "One dot blinked at the far edge of space.",
          "Glim grew quiet. \"That is Starlight Harbor,\" he said. \"Lost ships wait there.\"",
          "Hakan looked at Yusuf. Yusuf nodded. The Space Team was not finished yet.",
        ],
        image: "assets/space-comet-key-page-14.webp",
        alt: "Hakan and Yusuf studying the blue-dot map to Starlight Harbor inside the starship",
      },
    ],
  },
  {
    title: "Hakan, Yusuf, and the Starlight Harbor",
    libraryKicker: "Space Team Finale",
    readerKicker: "A lighthouse rescue at the edge of space",
    description:
      "The comet's map leads the family to a dark harbor where little ships need a light home.",
    cover: "assets/book-cover-space-starlight-harbor.webp",
    coverAlt:
      "Cover art for Hakan, Yusuf, and the Starlight Harbor showing the brothers, the family, and a glowing space lighthouse",
    seriesId: "space-team",
    pages: [
      {
        title: "The Blue-Dot Map",
        paragraphs: [
          "That night, the blue-dot map floated above Hakan's bed.",
          "Yusuf turned it slowly, careful not to lose the blinking light.",
          "\"There,\" he said. \"The harbor is still calling.\"",
          "Hakan held his moonlight gift. It felt warm, like it remembered the way.",
        ],
        image: "assets/space-starlight-harbor-page-01.webp",
        alt: "Hakan and Yusuf studying a glowing blue-dot map above Hakan's bed",
      },
      {
        title: "Edge of Space",
        paragraphs: [
          "The starship followed the map past the last bright planets.",
          "At the edge of space, stars lay below them like a quiet sea.",
          "Tiny ships rocked in the dark.",
          "Their lights were dim, and none of them knew which way was home.",
        ],
        image: "assets/space-starlight-harbor-page-02.webp",
        alt: "The family starship arriving at a quiet sea of stars with tiny lost ships in the distance",
      },
      {
        title: "The Dark Lighthouse",
        paragraphs: [
          "A tall silver lighthouse stood on a moon-rock island.",
          "Its glass lens was cracked and dull.",
          "Yusuf looked through his small telescope. \"Three pieces are missing.\"",
          "Hakan looked at the waiting ships. \"Then we need three pieces fast.\"",
        ],
        image: "assets/space-starlight-harbor-page-03.webp",
        alt: "Hakan and Yusuf looking up at the dark Starlight Harbor lighthouse with a cracked lens",
      },
      {
        title: "Sleepy Star Turtles",
        paragraphs: [
          "On the moon-rock beach, three star turtles slept under glowing shells.",
          "One lens piece shone on the biggest shell.",
          "Hakan offered a moon-snack and whispered, \"Good morning, sleepy friends.\"",
          "The turtles opened their eyes and blinked like tiny lanterns.",
        ],
        image: "assets/space-starlight-harbor-page-04.webp",
        alt: "Hakan waking sleepy star turtles with glowing snacks while Yusuf holds the map",
      },
      {
        title: "Yusuf Chooses Slow",
        paragraphs: [
          "The next path crossed soft purple star mud.",
          "Blip bounced once. \"I can jump it!\"",
          "Yusuf shook his head. \"The safe way curves around.\"",
          "It took longer, but everyone crossed with clean boots and happy feet.",
        ],
        image: "assets/space-starlight-harbor-page-05.webp",
        alt: "Yusuf leading Hakan and Blip along the slower safe path around glowing star mud",
      },
      {
        title: "The Cloud Sailor",
        paragraphs: [
          "A tiny cloud sailor drifted by in a boat made of mist.",
          "The second lens piece was tangled in his silver sail.",
          "Angela hummed the same rhythm that calmed the sparks.",
          "The sail softened, the knot slipped loose, and the sailor tipped his hat.",
        ],
        image: "assets/space-starlight-harbor-page-06.webp",
        alt: "Angela helping a tiny cloud sailor untangle a lens piece from a silver sail",
      },
      {
        title: "Koray Fixes the Frame",
        paragraphs: [
          "At the top of the lighthouse, the lens frame was bent.",
          "Koray opened his little repair kit.",
          "Tap. Turn. Click.",
          "\"Now the pieces have a place to sit,\" he said.",
        ],
        image: "assets/space-starlight-harbor-page-07.webp",
        alt: "Koray repairing the silver lens frame inside the Starlight Harbor lighthouse",
      },
      {
        title: "Lantern Moons",
        paragraphs: [
          "Tiny lantern moons drifted away from the balcony.",
          "Pidge puffed up, then remembered his promise.",
          "He flew slowly in front of them, one careful wingbeat at a time.",
          "The lantern moons followed him back in a glowing line.",
        ],
        image: "assets/space-starlight-harbor-page-08.webp",
        alt: "Pidge guiding tiny lantern moons back toward the lighthouse balcony",
      },
      {
        title: "The Missing Piece",
        paragraphs: [
          "The first two lens pieces fit into the frame.",
          "But one empty space still glowed in the center.",
          "Glim looked at Hakan's moonlight gift and grew quiet.",
          "Hakan looked at the lost ships. Then he looked at the gift in his hands.",
        ],
        image: "assets/space-starlight-harbor-page-09.webp",
        alt: "Hakan holding his moonlight gift beside the lighthouse lens with one empty space",
      },
      {
        title: "Hakan Understands",
        paragraphs: [
          "The gift was from Glim's moon.",
          "It was warm because it had always been a helping light.",
          "Hakan's fingers closed around it for one more second.",
          "Then he smiled a brave little smile. \"I know where it goes.\"",
        ],
        image: "assets/space-starlight-harbor-page-10.webp",
        alt: "Hakan understanding that his moonlight gift can complete the Starlight Harbor lens",
      },
      {
        title: "One Gift for Many",
        paragraphs: [
          "Hakan placed the moonlight gift into the center of the lens.",
          "Yusuf put a hand gently on his shoulder.",
          "\"That was your gift,\" Yusuf said.",
          "\"Now it can help everyone,\" Hakan answered.",
        ],
        image: "assets/space-starlight-harbor-page-11.webp",
        alt: "Hakan placing his moonlight gift into the lighthouse lens while Yusuf supports him",
      },
      {
        title: "Angela Lights the Song",
        paragraphs: [
          "Angela hummed the spark rhythm one more time.",
          "Koray turned the repaired frame.",
          "The lens woke up with a soft golden-blue shine.",
          "Hakan and Yusuf watched the light grow wider and wider.",
        ],
        image: "assets/space-starlight-harbor-page-12.webp",
        alt: "Angela and Koray lighting the repaired Starlight Harbor lens while Hakan and Yusuf watch",
      },
      {
        title: "Ships Going Home",
        paragraphs: [
          "The lighthouse sent gentle paths across the star sea.",
          "One little ship followed. Then another. Then many.",
          "Blip bounced in place. Pidge bowed like a mighty captain.",
          "Glim glowed bright blue. \"They can find home now.\"",
        ],
        image: "assets/space-starlight-harbor-page-13.webp",
        alt: "The restored lighthouse guiding tiny ships home across the star sea",
      },
      {
        title: "The Star Team",
        paragraphs: [
          "Back in bed, Hakan and Yusuf found two tiny star badges on the blanket.",
          "Angela and Koray smiled from the doorway.",
          "Outside the window, the comet winked once.",
          "This time it was not asking for help. It was saying thank you.",
        ],
        image: "assets/space-starlight-harbor-page-14.webp",
        alt: "Hakan and Yusuf holding tiny star badges in Hakan's bedroom while the comet winks outside",
      },
    ],
  },
  {
    title: "Hakan and Yusuf and the Kitsune Moon Bridge",
    libraryKicker: "Kitsune Shrine Quest",
    readerKicker: "An ancient Japan brother adventure",
    description:
      "White kitsunes, cherry blossoms, and a moon bridge lead the brothers to a sleeping river spirit.",
    cover: "assets/book-cover-kitsune-moon-bridge.webp",
    coverAlt:
      "Cover art for Hakan and Yusuf and the Kitsune Moon Bridge showing the brothers with two white kitsunes at a moonlit shrine",
    seriesId: "kitsune",
    pages: [
      {
        title: "Cherry Blossom Mountain",
        paragraphs: [
          "Hakan and Yusuf climbed the mountain path with Angela and Koray.",
          "Bamboo clicked in the wind. Cherry blossoms drifted over the old shrine gate.",
          "Below the steps, the river did not sparkle or splash. It lay still as glass.",
          "Yusuf moved closer to Hakan. \"Something is wrong with that river.\"",
        ],
        image: "assets/kitsune-moon-bridge-page-01.webp",
        alt: "Hakan, Yusuf, Angela, and Koray arriving at an ancient mountain shrine with a still river below",
      },
      {
        title: "Two White Foxes",
        paragraphs: [
          "A blue-white flame danced between the bamboo stalks.",
          "Hakan followed it one step, then jumped back as a young white fox popped out. Five tails swished behind him.",
          "\"I am Bip Jr.!\" the little kitsune chirped.",
          "A much larger white fox stepped beside Yusuf. Nine tails fanned like moonlit clouds. \"And I am Bip,\" he said, puffing up his strong chest fur.",
        ],
        image: "assets/kitsune-moon-bridge-page-02.webp",
        alt: "Bip Jr the five-tailed white kitsune surprising Hakan while papa Bip the nine-tailed white kitsune stands by Yusuf",
      },
      {
        title: "The Sleeping River",
        paragraphs: [
          "Tiny moss sprites waved from a flat river stone.",
          "They pointed into the water. Deep below, a blue river spirit slept with her eyes closed.",
          "\"That is Mizuna,\" Bip said softly. \"When she sleeps too long, the lanterns cannot float home.\"",
          "Three lanterns bobbed near the bank, stuck and dim.",
        ],
        image: "assets/kitsune-moon-bridge-page-03.webp",
        alt: "Moss sprites showing Hakan and Yusuf the sleeping river spirit Mizuna beneath still water",
      },
      {
        title: "Angela's Old Song",
        paragraphs: [
          "Angela touched the blank paper charm in her hand.",
          "\"My grandmother taught me one line of an old river song,\" she said.",
          "She sang it gently. The shrine gate glowed blue and gold.",
          "The first gate opened, and the still river gave one tiny ripple.",
        ],
        image: "assets/kitsune-moon-bridge-page-04.webp",
        alt: "Angela singing an old river song as the shrine gate glows open while the family and white kitsunes watch",
      },
      {
        title: "Koray's Tiny Bridge",
        paragraphs: [
          "Past the gate was a moss-sprite village, but its tiny bridge was broken.",
          "Koray knelt with his wooden repair pouch. Tap, twist, tuck. The bridge stood again.",
          "The moss sprites cheered and gave Hakan a glowing Bell Note.",
          "\"First piece of the wake-up song,\" Yusuf said.",
        ],
        image: "assets/kitsune-moon-bridge-page-05.webp",
        alt: "Koray repairing a tiny moss-sprite bridge while the sprites give the brothers a glowing Bell Note",
      },
      {
        title: "The Tanuki Drum Trick",
        paragraphs: [
          "A tanuki drummer waited in the bamboo clearing.",
          "He beat his drum fast, slow, fast, slow, then changed it again with a grin.",
          "Hakan laughed, but Yusuf closed his eyes and listened past the trick.",
          "\"There,\" Yusuf said. He clapped the true rhythm. A Drumbeat light spun into his hand.",
        ],
        image: "assets/kitsune-moon-bridge-page-06.webp",
        alt: "Yusuf listening carefully to solve the tanuki drummer's changing rhythm while Hakan and the white kitsunes watch",
      },
      {
        title: "Sky Koi Pond",
        paragraphs: [
          "At the top of the hill, koi fish swam through a pond that reflected the moon.",
          "One tiny koi slipped out of the silver water and wiggled on a wet stone.",
          "Hakan cupped it gently and helped it back.",
          "The koi spun in a happy circle and gave him a round Moon Reflection.",
        ],
        image: "assets/kitsune-moon-bridge-page-07.webp",
        alt: "Hakan helping a small glowing koi spirit return to a moonlit pond while Yusuf holds the Drumbeat",
      },
      {
        title: "Bip Jr.'s Big Mistake",
        paragraphs: [
          "Bip Jr. wanted to make Hakan laugh again.",
          "He sent a foxfire dot bouncing down a mirror-bamboo path.",
          "Hakan followed one step too far. Mist slid between the bamboo, and his voice sounded far away.",
          "\"Hakan!\" Yusuf called. Bip Jr.'s ears drooped. \"I only meant to play.\"",
        ],
        image: "assets/kitsune-moon-bridge-page-08.webp",
        alt: "Hakan separated by mirror-bamboo mist while Yusuf reaches toward him and Bip Jr looks sorry",
      },
      {
        title: "The Moon Bridge Appears",
        paragraphs: [
          "The river brightened. A thin silver bridge grew from moonlight and cherry petals.",
          "\"That bridge will not hold a show-off,\" Bip said. \"It holds only a protector.\"",
          "Hakan waited on the far side of the mist.",
          "Yusuf held the Bell Note, the Drumbeat, and the Moon Reflection close. \"Then I go first.\"",
        ],
        image: "assets/kitsune-moon-bridge-page-09.webp",
        alt: "A silver moon bridge appearing over the sleeping river while Yusuf prepares to cross toward Hakan",
      },
      {
        title: "Yusuf Crosses First",
        paragraphs: [
          "Yusuf stepped onto the bridge.",
          "It trembled under his foot. He swallowed, but he did not turn back.",
          "\"I am coming, Hakan,\" he said.",
          "With each brave step, the bridge grew brighter, until Yusuf reached the mist and took his brother's hand.",
        ],
        image: "assets/kitsune-moon-bridge-page-10.webp",
        alt: "Yusuf bravely crossing the glowing moon bridge first to reach Hakan",
      },
      {
        title: "Wake, Mizuna",
        paragraphs: [
          "Together, the brothers brought the three lights to the river.",
          "Angela's song floated from the shrine gate. Koray's tiny bridge rang like a bell.",
          "Yusuf clapped the true drumbeat. Hakan lifted the Moon Reflection.",
          "The river rose in blue light. Mizuna opened her eyes and smiled.",
        ],
        image: "assets/kitsune-moon-bridge-page-11.webp",
        alt: "Hakan and Yusuf using the song pieces to wake Mizuna, the gentle blue river spirit",
      },
      {
        title: "Two Moon-Fox Charms",
        paragraphs: [
          "Water rushed happily over the stones. The lanterns floated home at last.",
          "Bip Jr. bowed so low his five tails flopped over his head. Hakan laughed and forgave him.",
          "Bip touched his nose to Yusuf's hand. \"A true protector crossed first tonight.\"",
          "The brothers held matching moon-fox charms. Yusuf squeezed Hakan's shoulder. \"I will always cross first if you need me.\"",
        ],
        image: "assets/kitsune-moon-bridge-page-12.webp",
        alt: "Hakan and Yusuf holding moon-fox charms with Angela, Koray, Bip Jr, and Bip at the flowing river",
      },
    ],
  },
  {
    title: "Hakan and Yusuf and the Kitsune Star Garden",
    libraryKicker: "Kitsune Sequel",
    readerKicker: "A sky garden adventure above the shrine",
    description:
      "A stuck river lantern leads the brothers, Bip Jr., and Papa Bip into a secret garden of stars.",
    cover: "assets/book-cover-kitsune-star-garden.webp",
    coverAlt:
      "Cover art for Hakan and Yusuf and the Kitsune Star Garden showing the brothers with two white kitsunes in a glowing star garden",
    seriesId: "kitsune",
    pages: [
      {
        title: "The Lantern That Stayed",
        paragraphs: [
          "The river flowed again, bright and happy under the cherry trees.",
          "Most lanterns floated away, but one little lantern stayed near Hakan's feet.",
          "Inside it, a tiny star seed blinked.",
          "Yusuf bent close. \"That one is asking for help.\"",
        ],
        image: "assets/kitsune-star-garden-page-01.webp",
        alt: "Hakan and Yusuf finding one glowing river lantern that stays behind beside the white kitsunes",
      },
      {
        title: "Mizuna Points Up",
        paragraphs: [
          "Mizuna rose from the river like blue morning mist.",
          "\"That seed belongs to the Star Garden,\" she said. \"It waits above the shrine, where clouds sleep.\"",
          "Bip Jr.'s five white tails popped up. \"A garden in the sky?\"",
          "Papa Bip smiled. \"A garden that only opens before dawn.\"",
        ],
        image: "assets/kitsune-star-garden-page-02.webp",
        alt: "Mizuna the blue river spirit pointing toward a hidden sky garden above the mountain shrine",
      },
      {
        title: "Angela's Paper Crane",
        paragraphs: [
          "Angela folded the blank charm into a paper crane.",
          "The crane flapped once, then twice, and lifted into the air.",
          "Silver lines glowed across its wings, making a map through the clouds.",
          "\"Follow gently,\" Angela said. \"Maps like this do not enjoy being rushed.\"",
        ],
        image: "assets/kitsune-star-garden-page-03.webp",
        alt: "Angela folding a glowing paper crane map while Hakan, Yusuf, and the kitsunes watch",
      },
      {
        title: "Koray and the Wind-Bell Gate",
        paragraphs: [
          "At the top of the shrine steps stood a gate with three silent wind bells.",
          "One bell had a cracked wooden hook.",
          "Koray fixed it with a careful twist of cord.",
          "The bells rang softly, and cloud stairs rolled out from the mountain.",
        ],
        image: "assets/kitsune-star-garden-page-04.webp",
        alt: "Koray repairing a wind bell at a mountain shrine gate as cloud stairs appear",
      },
      {
        title: "Moon Moth Maze",
        paragraphs: [
          "The cloud stairs led to a maze of moon moths.",
          "Hakan wanted to chase them, but Yusuf held up one hand.",
          "\"Slow,\" he whispered. \"Angela said gently.\"",
          "The moths opened their wings and showed the Wind Chime Light.",
        ],
        image: "assets/kitsune-star-garden-page-05.webp",
        alt: "Yusuf guiding Hakan slowly through glowing moon moths on cloud stairs",
      },
      {
        title: "The Stone Turtle Bridge",
        paragraphs: [
          "A stone turtle slept across a gap in the clouds.",
          "\"I am a bridge,\" the turtle said. \"But I am not a fast bridge.\"",
          "Bip Jr. bounced impatiently. Hakan almost did too.",
          "Yusuf stepped on first and waited. Slowly, safely, the turtle carried them across.",
        ],
        image: "assets/kitsune-star-garden-page-06.webp",
        alt: "Yusuf stepping first onto a huge gentle stone turtle bridge above the clouds",
      },
      {
        title: "The Laughing Star",
        paragraphs: [
          "In the Star Garden, the flowers were dark.",
          "Bip Jr. tried a tiny fox trick: he sneezed foxfire and made his five tails sparkle like silly noodles.",
          "Hakan laughed. Yusuf laughed. Even Papa Bip snorted.",
          "From the laughter, the Laughing Star Light rolled out from under a blossom.",
        ],
        image: "assets/kitsune-star-garden-page-07.webp",
        alt: "Bip Jr the young white five-tailed kitsune making everyone laugh in the dark Star Garden",
      },
      {
        title: "The Sudden Cloud Gust",
        paragraphs: [
          "Just then, a cloud gust spun through the garden.",
          "The lantern seed lifted from Hakan's hands.",
          "Yusuf grabbed the string, but the gust pulled him toward floating stones.",
          "\"Yusuf!\" Hakan shouted.",
        ],
        image: "assets/kitsune-star-garden-page-08.webp",
        alt: "A cloud gust pulling Yusuf and the glowing lantern seed toward floating moon stones",
      },
      {
        title: "Hakan Steps Across",
        paragraphs: [
          "Hakan looked at the floating stones. They bobbed like little moons.",
          "He was scared, but Yusuf had crossed first for him before.",
          "Now it was Hakan's turn.",
          "He stepped from stone to stone and caught Yusuf's moon-fox charm just before it slipped away.",
        ],
        image: "assets/kitsune-star-garden-page-09.webp",
        alt: "Hakan bravely crossing floating moon stones to catch Yusuf's glowing moon-fox charm",
      },
      {
        title: "Planting the Seed-Lights",
        paragraphs: [
          "The brothers carried the lantern seed back together.",
          "Wind Chime Light. Turtle Bridge Light. Laughing Star Light.",
          "They placed all three around the seed.",
          "The dark flowers trembled, then opened with tiny stars inside.",
        ],
        image: "assets/kitsune-star-garden-page-10.webp",
        alt: "Hakan and Yusuf planting three glowing seed-lights around the lantern seed in the Star Garden",
      },
      {
        title: "The Star Garden Blooms",
        paragraphs: [
          "Stars bloomed across the garden like silver blossoms.",
          "The lantern seed rose high and became the first bright flower.",
          "Below the clouds, every river lantern found its way home.",
          "Bip bowed to Yusuf. Bip Jr. bumped his nose against Hakan's hand.",
        ],
        image: "assets/kitsune-star-garden-page-11.webp",
        alt: "The Star Garden blooming with silver flowers while the river lanterns glow below the clouds",
      },
      {
        title: "Beyond the Highest Cloud",
        paragraphs: [
          "At dawn, the cloud stairs faded.",
          "Angela's paper crane folded itself back into a charm. Koray's wind bells sang in the gate.",
          "Hakan and Yusuf stood shoulder to shoulder with the two white kitsunes.",
          "Far above them, one new star winked twice, as if another story was waiting.",
        ],
        image: "assets/kitsune-star-garden-page-12.webp",
        alt: "Hakan, Yusuf, Angela, Koray, Bip Jr, and Papa Bip standing together at dawn by the mountain shrine",
      },
    ],
  },
  {
    title: "Hakan and Yusuf and the Kitsune Dawn Crown",
    libraryKicker: "Kitsune Finale",
    readerKicker: "The final fox-gate adventure",
    description:
      "Papa Bip and Bip Jr. must save the Dawn Crown before the fox gate closes at sunrise.",
    cover: "assets/book-cover-kitsune-dawn-crown.webp",
    coverAlt:
      "Cover art for Hakan and Yusuf and the Kitsune Dawn Crown showing Papa Bip and Bip Jr saving the fox gate at sunrise",
    seriesId: "kitsune",
    pages: [
      {
        title: "The Star That Fell",
        paragraphs: [
          "The Star Garden was still shining when one star winked twice.",
          "Then it slipped from the sky.",
          "It fell softly into Hakan's hands, no hotter than warm bread.",
          "Papa Bip's nine tails went very still. \"That is not a star. That is a dawn spark.\"",
        ],
        image: "assets/kitsune-dawn-crown-page-01.webp",
        alt: "Hakan holding a fallen dawn spark while Yusuf, Papa Bip, and Bip Jr watch in the Star Garden",
      },
      {
        title: "The Crack in the Crown",
        paragraphs: [
          "Bip touched the dawn spark with his nose.",
          "Far above the highest cloud, a golden crown flashed and cracked like thin ice.",
          "\"The Dawn Crown keeps our fox gate open,\" Bip said. \"If it breaks, we must close the path before sunrise.\"",
          "Bip Jr.'s ears drooped. \"Then we cannot visit Hakan and Yusuf?\"",
        ],
        image: "assets/kitsune-dawn-crown-page-02.webp",
        alt: "Papa Bip touching the dawn spark as the golden Dawn Crown cracks above the clouds",
      },
      {
        title: "Asa Wakes",
        paragraphs: [
          "Angela held out her paper crane charm.",
          "The crane unfolded, turned gold, and chirped like morning.",
          "\"I am Asa,\" said the tiny dawn bird. \"Follow quickly, but not carelessly.\"",
          "Yusuf looked at Hakan. \"That sounds like it was meant for both of us.\"",
        ],
        image: "assets/kitsune-dawn-crown-page-03.webp",
        alt: "Angela's paper crane charm turning into Asa the tiny golden dawn bird",
      },
      {
        title: "Koray's Kite",
        paragraphs: [
          "The first wind was too strong to climb.",
          "Koray cut bamboo, tied string, and folded shrine paper into a bright kite.",
          "\"Everyone holds one cord,\" he said.",
          "The kite lifted them gently, and the mountain fell away below.",
        ],
        image: "assets/kitsune-dawn-crown-page-04.webp",
        alt: "Koray building a bamboo and paper kite while the family and kitsunes hold the cords",
      },
      {
        title: "The 999-Step Sandals",
        paragraphs: [
          "At the Bamboo Wind, golden leaves burst into the air.",
          "Hakan's 999-step sandals tingled. He wanted to zoom.",
          "\"Stay with us,\" Yusuf called.",
          "So Hakan ran in circles around the group, catching every leaf before it flew away.",
        ],
        image: "assets/kitsune-dawn-crown-page-05.webp",
        alt: "Hakan using his glowing 999-step sandals to catch golden leaves around the group",
      },
      {
        title: "The Quick Leaf",
        paragraphs: [
          "The leaves spun together in Hakan's hands.",
          "They became one bright Quick Leaf.",
          "Bip Jr. bounced. \"You were fast and careful!\"",
          "Hakan grinned at Yusuf. \"I did not even run off the mountain.\"",
        ],
        image: "assets/kitsune-dawn-crown-page-06.webp",
        alt: "Hakan holding the glowing Quick Leaf while Bip Jr and Papa Bip watch proudly",
      },
      {
        title: "Mirror Crane Lake",
        paragraphs: [
          "The next path ended at a lake full of white mirror cranes.",
          "One crane showed Yusuf crossing the moon bridge for Hakan.",
          "Another showed Hakan stepping across the star stones for Yusuf.",
          "The lake whispered, \"Say what is true.\"",
        ],
        image: "assets/kitsune-dawn-crown-page-07.webp",
        alt: "Hakan and Yusuf standing at Mirror Crane Lake with reflections of their brave moments",
      },
      {
        title: "What Brothers See",
        paragraphs: [
          "Yusuf looked at Hakan. \"You are little, but your heart is huge.\"",
          "Hakan looked at Yusuf. \"You act calm, but you are brave even when you are scared.\"",
          "The cranes bowed.",
          "From the lake rose the True Reflection, shining clear as morning water.",
        ],
        image: "assets/kitsune-dawn-crown-page-08.webp",
        alt: "The True Reflection rising between Hakan and Yusuf beside the mirror cranes",
      },
      {
        title: "The Thunder Carp",
        paragraphs: [
          "At the Sun Gate, a giant thunder carp blocked the way.",
          "Cloud sparks popped from its whiskers. BOOM-pop! BOOM-pop!",
          "Bip Jr. hid behind Hakan. \"Is it angry?\"",
          "The carp sniffled. \"My bell is stuck.\"",
        ],
        image: "assets/kitsune-dawn-crown-page-09.webp",
        alt: "A gentle thunder carp blocking the Sun Gate with a small sky bell tangled in its whisker",
      },
      {
        title: "The Sky Bell Sound",
        paragraphs: [
          "Yusuf tied a safety sash around Hakan's waist.",
          "Hakan stepped close and untangled the little sky bell from the carp's whisker.",
          "The carp shook itself happily, and thunder rolled away like a drum.",
          "It gave them the Sky Bell Sound, humming inside a pearl.",
        ],
        image: "assets/kitsune-dawn-crown-page-10.webp",
        alt: "Yusuf holding a safety sash while Hakan frees the sky bell from the thunder carp",
      },
      {
        title: "Papa Bip Holds the Gate",
        paragraphs: [
          "At last they reached the Dawn Crown.",
          "It floated above the fox gate, cracked and trembling.",
          "The gate began to close with a deep moon-white groan.",
          "Papa Bip leaped forward and spread all nine tails wide. \"Not yet.\"",
        ],
        image: "assets/kitsune-dawn-crown-page-11.webp",
        alt: "Papa Bip spreading his nine white tails to hold open the closing fox gate beneath the cracked Dawn Crown",
      },
      {
        title: "The Tiny Fox-Door",
        paragraphs: [
          "The Dawn Crown floated behind a fox-door too small for people and too narrow for Papa Bip.",
          "Papa Bip held the gate open, but his paws slid in the clouds.",
          "Bip Jr. stared at the dark little doorway.",
          "\"I am only five tails,\" he whispered.",
        ],
        image: "assets/kitsune-dawn-crown-page-12.webp",
        alt: "Bip Jr facing the tiny fox-door while Papa Bip strains to hold the larger gate open",
      },
      {
        title: "Brave Does Not Mean Big",
        paragraphs: [
          "Yusuf knelt beside Bip Jr.",
          "\"I was scared on the moon bridge,\" he said. \"I crossed because Hakan needed me.\"",
          "Hakan held out the Quick Leaf, the True Reflection, and the Sky Bell Sound.",
          "\"We need you now.\"",
        ],
        image: "assets/kitsune-dawn-crown-page-13.webp",
        alt: "Yusuf encouraging Bip Jr while Hakan offers the three Dawn Crown pieces",
      },
      {
        title: "The Small Fox Saves the Crown",
        paragraphs: [
          "Bip Jr. slipped through the fox-door with the three pieces.",
          "Hakan waited. Yusuf waited. Even the wind waited.",
          "Bip Jr.'s five tails flashed inside the crown like little moons.",
          "When he came back, the Dawn Crown floated after him, whole and bright.",
        ],
        image: "assets/kitsune-dawn-crown-page-14.webp",
        alt: "Bip Jr repairing the golden Dawn Crown from inside the tiny fox-door",
      },
      {
        title: "The Gate Stays Open",
        paragraphs: [
          "Sunrise poured gold over the mountain.",
          "Papa Bip folded his tired tails, and the fox gate opened wider, warm and quiet.",
          "Bip bowed to Yusuf. Bip Jr. pressed his nose to Hakan's hand.",
          "\"Today, my son saved the Crown,\" Bip said.",
          "\"And my papa held the sky,\" Bip Jr. said proudly.",
          "\"When your charms glow,\" Bip told the brothers, \"we will hear you.\"",
          "And far below, the river, the stars, and the cherry trees all shone at once.",
        ],
        image: "assets/kitsune-dawn-crown-page-15.webp",
        alt: "The family and two white kitsunes celebrating as the fox gate stays open at sunrise",
      },
    ],
  },
  {
    "title": "Hakan, Yusuf, and the Hearthfolk Lantern",
    "libraryKicker": "Epic Fantasy Quest",
    "readerKicker": "A hill-road adventure with brave small friends",
    "description": "Hakan and Yusuf carry the Ember Lantern through a hill realm before the Ashen Guard can steal its light.",
    "cover": "assets/book-cover-fantasy-hearthfolk-lantern.webp",
    "coverAlt": "Cover art for Hakan, Yusuf, and the Hearthfolk Lantern showing the family, Hearthfolk, Button the pony, and the glowing Ember Lantern",
    "seriesId": "epic-fantasy",
    "pages": [
      {
        "title": "The Map Under the Rug",
        "paragraphs": [
          "Hakan's 999-speed boots blinked under his bed.",
          "A golden line zipped across the floor and slipped under the living room rug.",
          "Yusuf lifted the rug and found a tiny map glowing like toast.",
          "It showed three roads: hill, forest, and mountain."
        ],
        "image": "assets/fantasy-hearthfolk-page-01.webp",
        "alt": "Hakan and Yusuf finding a glowing map under the living room rug"
      },
      {
        "title": "The Round Door",
        "paragraphs": [
          "A round door opened in the baseboard with a pop.",
          "Inside the doorway, a small voice cried, \"The hill road is going dark!\"",
          "Angela wrapped a rust-orange scarf around Hakan. Koray handed Yusuf a pocket compass.",
          "\"Stay together,\" Koray said. The tiny door grew just big enough."
        ],
        "image": "assets/fantasy-hearthfolk-page-02.webp",
        "alt": "Angela and Koray helping Hakan and Yusuf step through a glowing round door"
      },
      {
        "title": "Hillhome Calls",
        "paragraphs": [
          "The family stepped into a green valley full of round doors and smoking chimneys.",
          "Hearthfolk hurried everywhere, carrying lanterns that flickered low.",
          "A little pony named Button trotted by with a biscuit basket on his back.",
          "Far above the hills, thorn-crows circled like black leaves."
        ],
        "image": "assets/fantasy-hearthfolk-page-03.webp",
        "alt": "Hakan, Yusuf, Angela, and Koray arriving in Hillhome with Hearthfolk and Button the pony"
      },
      {
        "title": "Milo Crumb's Mission",
        "paragraphs": [
          "Milo Crumb, a brave Hearthfolk baker, carried one bright Ember Lantern.",
          "\"This must reach Hillhome before sunset,\" he said. \"It wakes every home-light.\"",
          "A horn sounded from the far road.",
          "Milo gulped. \"The Ashen Guard heard it shine.\""
        ],
        "image": "assets/fantasy-hearthfolk-page-04.webp",
        "alt": "Milo Crumb giving the Ember Lantern mission to Hakan and Yusuf"
      },
      {
        "title": "Thorn-Crows Above",
        "paragraphs": [
          "The thorn-crows dived for the lantern.",
          "Hakan's boots flashed. He dashed under the apple trees so fast the crows chased only his golden blur.",
          "Yusuf pulled the real lantern under Button's biscuit blanket.",
          "The crows snapped at empty air and squawked with surprise."
        ],
        "image": "assets/fantasy-hearthfolk-page-05.webp",
        "alt": "Hakan making a golden speed blur while Yusuf hides the real Ember Lantern"
      },
      {
        "title": "Yusuf's Safe Path",
        "paragraphs": [
          "The open road looked faster, but Yusuf studied the map.",
          "\"Too straight,\" he said. \"That is where someone would wait.\"",
          "He led them through a sheep trail behind soft green hills.",
          "At the top, they saw black flags blocking the open road below."
        ],
        "image": "assets/fantasy-hearthfolk-page-06.webp",
        "alt": "Yusuf leading the family onto a hidden sheep trail while black flags block the open road"
      },
      {
        "title": "The Ashen Scouts",
        "paragraphs": [
          "Ashen Guard scouts stepped onto the sheep trail.",
          "Their cloaks puffed smoke, and their boots made no sound.",
          "The Hearthfolk trembled until Angela whispered, \"Find a rhythm.\"",
          "Soon pots, pans, and biscuit tins rang out: clang, clap, clang!"
        ],
        "image": "assets/fantasy-hearthfolk-page-07.webp",
        "alt": "Angela helping Hearthfolk make a pot and pan rhythm as Ashen scouts block the trail"
      },
      {
        "title": "The Golden Blur Plan",
        "paragraphs": [
          "Hakan ran a 999-speed circle around the scouts.",
          "Dust spun up like a tiny friendly storm.",
          "Yusuf called, \"Left now!\" and the Hearthfolk slipped past with the lantern.",
          "When the dust settled, the scouts were facing the wrong hill."
        ],
        "image": "assets/fantasy-hearthfolk-page-08.webp",
        "alt": "Hakan running a golden circle while Yusuf leads the Hearthfolk past the confused scouts"
      },
      {
        "title": "Angela's Bread Song",
        "paragraphs": [
          "The sheep trail ended at an old field with no path at all.",
          "Angela began a bread-kneading song: press, turn, pat, wait.",
          "The Hearthfolk joined in, clapping floury hands.",
          "One by one, old stepping stones woke under the grass."
        ],
        "image": "assets/fantasy-hearthfolk-page-09.webp",
        "alt": "Angela leading a bread song that wakes glowing stepping stones in the grass"
      },
      {
        "title": "The Grumble at the Bridge",
        "paragraphs": [
          "A big bridge grumble sat in the road, blocking the river.",
          "\"No crossing,\" he grumped. \"My cart wheel broke, and now everything is terrible.\"",
          "Koray knelt beside the cart. \"That I can fix.\"",
          "Milo offered warm seed cakes, and the grumble's frown got smaller."
        ],
        "image": "assets/fantasy-hearthfolk-page-10.webp",
        "alt": "Koray fixing a cart wheel for a friendly bridge grumble while Milo offers seed cakes"
      },
      {
        "title": "Wind at the Old Gate",
        "paragraphs": [
          "A cold wind rushed from the trees and almost blew out the Ember Lantern.",
          "Yusuf wrapped his coat around the light.",
          "Hakan raced ahead and slammed the old gate shut before more wind could pour through.",
          "Behind them, an Ashen horn blew again, much closer."
        ],
        "image": "assets/fantasy-hearthfolk-page-11.webp",
        "alt": "Yusuf shielding the Ember Lantern while Hakan races to shut an old windy gate"
      },
      {
        "title": "Hillhome at Sunset",
        "paragraphs": [
          "Hillhome appeared just as the sun touched the hills.",
          "Round windows waited dark and sleepy.",
          "Then the Ashen Guard rushed from the trees for one last try.",
          "Button stamped his little hooves, and the Hearthfolk raised pot-lid shields."
        ],
        "image": "assets/fantasy-hearthfolk-page-12.webp",
        "alt": "Hakan, Yusuf, and Hearthfolk reaching Hillhome at sunset as the Ashen Guard approaches"
      },
      {
        "title": "Small Shields, Big Hearts",
        "paragraphs": [
          "The pot lids flashed in the sunset.",
          "Angela sang the bread rhythm. Koray rang the grumble's repaired cart bell.",
          "Hakan and Yusuf lifted the Ember Lantern together.",
          "Warm light rolled over the Ashen Guard, and the smoky cloaks blew backward like old dust."
        ],
        "image": "assets/fantasy-hearthfolk-page-13.webp",
        "alt": "Hakan and Yusuf lifting the Ember Lantern as Angela and Koray help with song and bell"
      },
      {
        "title": "The Hill Lights Wake",
        "paragraphs": [
          "Every round window in Hillhome glowed gold.",
          "Hearthfolk cheered, Button ate three biscuits, and Milo Crumb bowed so low his hat fell off.",
          "The map in Yusuf's hand changed.",
          "A silver-green road grew from the hills into a dark forest."
        ],
        "image": "assets/fantasy-hearthfolk-page-14.webp",
        "alt": "Hillhome glowing gold while Yusuf's map reveals a silver-green forest road"
      },
      {
        "title": "The Elf-Road Appears",
        "paragraphs": [
          "Milo looked at the new road and stopped smiling.",
          "\"That is the Star-Elf Forest,\" he said. \"If it is calling, the trouble has reached the trees.\"",
          "Hakan touched his boots. Yusuf folded the map carefully.",
          "The next road was already waiting."
        ],
        "image": "assets/fantasy-hearthfolk-page-15.webp",
        "alt": "Hakan and Yusuf facing a silver-green road into the Star-Elf Forest at twilight"
      }
    ]
  },
  {
    "title": "Hakan, Yusuf, and the Star-Elf Forest",
    "libraryKicker": "Epic Fantasy Quest",
    "readerKicker": "A moonlit forest mission with star paths",
    "description": "The brothers restore the Silverleaf Bowstring before mist hides the road to the mountain.",
    "cover": "assets/book-cover-fantasy-star-elf-forest.webp",
    "coverAlt": "Cover art for Hakan, Yusuf, and the Star-Elf Forest showing the family, Star-Elves, moon deer, and glowing forest road",
    "seriesId": "epic-fantasy",
    "pages": [
      {
        "title": "The Silver-Green Road",
        "paragraphs": [
          "The map glowed on Hakan's blanket after bedtime.",
          "A silver-green road curled across the page like a leaf stem.",
          "Yusuf traced it with one finger. \"It starts where the hill light ended.\"",
          "Outside the window, one forest star blinked and went dark."
        ],
        "image": "assets/fantasy-star-elf-page-01.webp",
        "alt": "Hakan and Yusuf studying a glowing forest road map on Hakan's blanket"
      },
      {
        "title": "Under the Tall Trees",
        "paragraphs": [
          "The family stepped through the round door and into a forest of giant trees.",
          "Leaves shone like stars above them.",
          "Star-Elves waited on bridges woven from branches and moon-thread.",
          "Their queen, Liora, held a great silver bow with no string."
        ],
        "image": "assets/fantasy-star-elf-page-02.webp",
        "alt": "The family meeting Queen Liora and Star-Elves under giant glowing trees"
      },
      {
        "title": "The Broken Bowstring",
        "paragraphs": [
          "\"This bow opens the safe road to the mountain,\" Queen Liora said.",
          "\"But shadow moths stole the Silverleaf Bowstring.\"",
          "Mist crawled between the trunks, hiding the path stones.",
          "In the mist, something laughed without showing its face."
        ],
        "image": "assets/fantasy-star-elf-page-03.webp",
        "alt": "Queen Liora showing the great silver bow with its missing string in the misty forest"
      },
      {
        "title": "Piproot's Warning",
        "paragraphs": [
          "A shy tree sprite peeked from a knot in the bark.",
          "\"I am Piproot,\" he whispered. \"The moths carried the thread toward the Whispering Hollow.\"",
          "Hakan smiled gently. \"Can you show us?\"",
          "Piproot sneezed a puff of leaves and pointed the wrong way first."
        ],
        "image": "assets/fantasy-star-elf-page-04.webp",
        "alt": "Piproot the tree sprite sneezing leaves while Hakan and Yusuf listen"
      },
      {
        "title": "Hakan's Fast Dash",
        "paragraphs": [
          "Tiny silver sparkles from the moth wings floated ahead.",
          "Hakan's boots flashed, but Yusuf caught his sleeve.",
          "\"Fast, but careful,\" Yusuf said. \"The flowers are sleeping.\"",
          "Hakan dashed between blossoms without bending a single stem."
        ],
        "image": "assets/fantasy-star-elf-page-05.webp",
        "alt": "Hakan dashing carefully between sleeping flowers with glowing boots"
      },
      {
        "title": "Yusuf Reads the Branches",
        "paragraphs": [
          "The trail split into three misty paths.",
          "One smelled like honey. One hummed softly. One was silent.",
          "Yusuf looked up and saw the branches making arrows.",
          "\"The quiet path is fake,\" he said. \"The forest is warning us.\""
        ],
        "image": "assets/fantasy-star-elf-page-06.webp",
        "alt": "Yusuf reading branch arrows above three misty forest paths"
      },
      {
        "title": "Mist Wolves",
        "paragraphs": [
          "Whisper wolves made of mist circled the real path.",
          "They showed sharp shapes, but their paws made no marks.",
          "Angela hummed the bread rhythm from Hillhome, slower and softer.",
          "The elves raised light shields, and the wolves backed into fog."
        ],
        "image": "assets/fantasy-star-elf-page-07.webp",
        "alt": "Angela humming while soft mist wolves fade near Star-Elf light shields"
      },
      {
        "title": "The Moon Deer",
        "paragraphs": [
          "In the hollow, a moon deer stood with silver thread caught in its antlers.",
          "Shadow moths fluttered around it, trying to tangle the thread tighter.",
          "Hakan moved slowly, even though his boots wanted to run.",
          "\"I will not pull,\" he whispered. \"I will help.\""
        ],
        "image": "assets/fantasy-star-elf-page-08.webp",
        "alt": "Hakan and Yusuf carefully helping a moon deer with silver thread in its antlers"
      },
      {
        "title": "Thorn-Crows Return",
        "paragraphs": [
          "The thorn-crows from the hill road burst through the leaves.",
          "They dove for the silver thread.",
          "Yusuf opened his pocket compass; its needle spun toward a hollow log.",
          "\"Inside!\" he called, and everyone ducked as the crows crashed into a cloud of leaves."
        ],
        "image": "assets/fantasy-star-elf-page-09.webp",
        "alt": "Yusuf shielding Hakan and guiding everyone away from thorn-crows in the moonlit forest"
      },
      {
        "title": "Ashen Riders at the Bridge",
        "paragraphs": [
          "Ashen riders galloped toward the branch bridge.",
          "Koray spotted the bridge's loose vine latch.",
          "\"Hold here,\" he told Yusuf.",
          "Together, Koray and the elves dropped a glowing vine gate just in time."
        ],
        "image": "assets/fantasy-star-elf-page-10.webp",
        "alt": "Koray and Star-Elves dropping a glowing vine gate on a branch bridge"
      },
      {
        "title": "The Bowstring Restored",
        "paragraphs": [
          "Yusuf held the great silver bow steady.",
          "Hakan and Piproot tied the moon deer's thread to the bow tips.",
          "Queen Liora pulled the string once.",
          "The whole forest rang like a bright, gentle bell."
        ],
        "image": "assets/fantasy-star-elf-page-11.webp",
        "alt": "Yusuf holding the silver bow steady while Hakan and Piproot restore its bowstring"
      },
      {
        "title": "Stars Like Arrows",
        "paragraphs": [
          "The bow sent harmless star-arrows into the mist.",
          "Each arrow became a glowing path stone.",
          "The shadow moths tried to cover them, but the moon deer stamped silver sparks.",
          "The safe road began to shine."
        ],
        "image": "assets/fantasy-star-elf-page-12.webp",
        "alt": "Harmless star-arrows becoming glowing path stones in the Star-Elf Forest"
      },
      {
        "title": "The Forest Chooses",
        "paragraphs": [
          "The road did not open for the elves alone.",
          "It did not open for Hakan's speed alone.",
          "It opened when Hakan, Yusuf, Angela, Koray, Piproot, the elves, and the moon deer stepped together.",
          "The trees bowed, making a tunnel of leaves."
        ],
        "image": "assets/fantasy-star-elf-page-13.webp",
        "alt": "The family, Star-Elves, Piproot, and the moon deer stepping together as trees open a tunnel"
      },
      {
        "title": "Road to the Mountain",
        "paragraphs": [
          "Beyond the forest, a far mountain smoked under red clouds.",
          "The map burned one new line: Deep Dwarf Gate.",
          "A small dwarf messenger stumbled from the rocks, dusty and out of breath.",
          "\"The Ashen Guard is at our gate,\" he said. \"Bring the hill light and forest star!\""
        ],
        "image": "assets/fantasy-star-elf-page-14.webp",
        "alt": "A dwarf messenger arriving as the forest road opens toward a smoky mountain"
      },
      {
        "title": "The Mountain Calls",
        "paragraphs": [
          "Queen Liora gave Yusuf a silver leaf token.",
          "Piproot gave Hakan an acorn helmet that was much too small but very brave.",
          "The mountain road shook once under their feet.",
          "Somewhere deep below, a forge bell rang for help."
        ],
        "image": "assets/fantasy-star-elf-page-15.webp",
        "alt": "Queen Liora and Piproot giving gifts to Yusuf and Hakan before the mountain road"
      }
    ]
  },
  {
    "title": "Hakan, Yusuf, and the Deep Dwarf Gate",
    "libraryKicker": "Epic Fantasy Quest",
    "readerKicker": "A mountain-forge finale with every ally together",
    "description": "Hakan and Yusuf repair the Sunforge Key and close the Ashen Gate with help from every friend they made.",
    "cover": "assets/book-cover-fantasy-deep-dwarf-gate.webp",
    "coverAlt": "Cover art for Hakan, Yusuf, and the Deep Dwarf Gate showing the family, Bruni, allies, and the glowing mountain gate",
    "seriesId": "epic-fantasy",
    "pages": [
      {
        "title": "Mountain Smoke",
        "paragraphs": [
          "The map now glowed red at the mountain gate.",
          "The dwarf messenger led Hakan, Yusuf, Angela, and Koray up a stone road.",
          "Hakan's boots sparked on the rocks.",
          "Yusuf held the map tight as the mountain rumbled like a sleepy drum."
        ],
        "image": "assets/fantasy-deep-dwarf-page-01.webp",
        "alt": "The family following a dwarf messenger up a stone road toward a smoky mountain"
      },
      {
        "title": "The Deep Dwarf Hall",
        "paragraphs": [
          "Inside the mountain, dwarfs hammered glowing metal.",
          "Sparks flew safely into glass jars.",
          "Forge Master Bruni Stonehand showed them a cracked golden key as long as Hakan's arm.",
          "\"The Sunforge Key closes the Ashen Gate,\" Bruni said. \"But three sparks are missing.\""
        ],
        "image": "assets/fantasy-deep-dwarf-page-02.webp",
        "alt": "Forge Master Bruni showing Hakan and Yusuf the cracked Sunforge Key"
      },
      {
        "title": "Three Missing Sparks",
        "paragraphs": [
          "The key needed Hill Warmth, Forest Star, and Mountain Courage.",
          "Hill Warmth glowed in a jar from Hillhome.",
          "Forest Star shone inside Queen Liora's leaf token.",
          "Before anyone could cheer, little cave sneaks snatched the Hill Warmth jar and ran."
        ],
        "image": "assets/fantasy-deep-dwarf-page-03.webp",
        "alt": "Cute pebble-like cave sneaks stealing the Hill Warmth jar from Bruni's forge table"
      },
      {
        "title": "Cave Sneaks",
        "paragraphs": [
          "The cave sneaks were quick, but Hakan was quicker.",
          "His 999-speed boots flashed through crystal tunnels.",
          "The sneaks tossed the jar from one to another, giggling like rattling pebbles.",
          "Then the tunnel split into seven dark mouths."
        ],
        "image": "assets/fantasy-deep-dwarf-page-04.webp",
        "alt": "Hakan chasing cute cave sneaks through sparkling crystal tunnels"
      },
      {
        "title": "Yusuf's Echo Map",
        "paragraphs": [
          "\"Stop!\" Yusuf called.",
          "Hakan skidded to a sparkly halt.",
          "Yusuf tapped the stone wall and listened to the echoes.",
          "\"Only one tunnel answers twice,\" he said. \"That is where they went.\""
        ],
        "image": "assets/fantasy-deep-dwarf-page-05.webp",
        "alt": "Yusuf listening to echoes at seven crystal tunnel mouths while Hakan stops beside him"
      },
      {
        "title": "Crystal Goat Rescue",
        "paragraphs": [
          "They found the cave sneaks on a ledge with a crystal goat.",
          "The goat had Forest Star caught in its curly horn and was too scared to move.",
          "Angela sang softly while Koray made a rope pulley.",
          "Hakan returned the Hill Warmth jar, and Yusuf guided the goat down."
        ],
        "image": "assets/fantasy-deep-dwarf-page-06.webp",
        "alt": "Angela calming a crystal goat while Koray builds a rope pulley and the brothers help"
      },
      {
        "title": "The Ash Hounds",
        "paragraphs": [
          "Ash hounds blocked the forge stairs, breathing puffs of gray smoke.",
          "The dwarfs raised shield-drums.",
          "Boom-boom, boom-boom, BOOM.",
          "The sound shook the smoke apart until the hounds became harmless soot clouds."
        ],
        "image": "assets/fantasy-deep-dwarf-page-07.webp",
        "alt": "Dwarfs beating shield-drums while soft soot-cloud hounds dissolve on forge stairs"
      },
      {
        "title": "Mountain Courage",
        "paragraphs": [
          "Only Mountain Courage was missing.",
          "Hakan wanted to race ahead and find it first.",
          "But the path crossed a thin stone bridge, and Yusuf looked worried.",
          "Hakan held out his hand. \"Then we go together.\""
        ],
        "image": "assets/fantasy-deep-dwarf-page-08.webp",
        "alt": "Hakan holding out his hand to Yusuf before a safe stone bridge in a crystal cavern"
      },
      {
        "title": "Brother Spark",
        "paragraphs": [
          "When the brothers stepped onto the bridge together, the mountain grew quiet.",
          "A warm red spark rose between their hands.",
          "Bruni smiled. \"That is Mountain Courage.\"",
          "Yusuf whispered, \"It waited for both of us.\""
        ],
        "image": "assets/fantasy-deep-dwarf-page-09.webp",
        "alt": "Hakan and Yusuf holding hands as Mountain Courage glows between them"
      },
      {
        "title": "Bruni's Forge",
        "paragraphs": [
          "Bruni heated the Sunforge Key in a golden fire.",
          "Yusuf set the three sparks in the right order.",
          "Hakan turned the tiny locking pin with careful fingers.",
          "The key became whole and rang like sunrise."
        ],
        "image": "assets/fantasy-deep-dwarf-page-10.webp",
        "alt": "Bruni, Yusuf, Hakan, Angela, and Koray repairing the Sunforge Key in the forge"
      },
      {
        "title": "The Ashen Captain",
        "paragraphs": [
          "The Ashen Captain reached the gate in a cloak of smoke.",
          "\"Too late,\" he hissed. \"I will lock every warm road.\"",
          "The Ashen Guard filled the tunnel behind him.",
          "For one breath, even the dwarfs were silent."
        ],
        "image": "assets/fantasy-deep-dwarf-page-11.webp",
        "alt": "The Ashen Captain appearing as a soft smoke silhouette near the glowing mountain gate"
      },
      {
        "title": "Allies Arrive",
        "paragraphs": [
          "Then a pot-lid shield clanged.",
          "Milo Crumb and the Hearthfolk rolled in with Button and baskets of courage biscuits.",
          "Queen Liora and the Star-Elves lit the tunnel with silver leaves.",
          "Piproot sneezed at the Ashen Captain, which was not part of the plan but helped."
        ],
        "image": "assets/fantasy-deep-dwarf-page-12.webp",
        "alt": "Hearthfolk, Star-Elves, Button, Piproot, and the moon deer arriving to help at the Deep Dwarf Gate"
      },
      {
        "title": "The Final Stand",
        "paragraphs": [
          "No one fought alone.",
          "Hakan ran a 999-speed circle of golden light around the gate.",
          "Yusuf led the shield line: Hearthfolk low, elves high, dwarfs strong in the middle.",
          "Angela sang the road song, and Koray rang the forge bell until the whole mountain answered."
        ],
        "image": "assets/fantasy-deep-dwarf-page-13.webp",
        "alt": "Hakan making a golden speed circle while Yusuf leads the allies in front of the gate"
      },
      {
        "title": "The Gate Closes",
        "paragraphs": [
          "Bruni lifted the Sunforge Key, but it was too heavy for one person.",
          "Hakan and Yusuf took the middle. Angela, Koray, Bruni, Milo, and Liora helped from both sides.",
          "The key turned.",
          "The Ashen Gate closed with a deep golden boom, and the Ashen Captain's smoke cloak blew away into harmless gray dust."
        ],
        "image": "assets/fantasy-deep-dwarf-page-14.webp",
        "alt": "Hakan, Yusuf, Angela, Koray, Bruni, Milo, and Liora turning the Sunforge Key together"
      },
      {
        "title": "Friends of the Realm",
        "paragraphs": [
          "The three roads glowed at once: hill gold, forest silver, mountain red.",
          "Warm light ran all the way back to Hakan's living room rug.",
          "Bruni bowed. Liora smiled. Milo waved a biscuit.",
          "\"Hakan and Yusuf,\" they said together, \"Friends of the Hearthlight Realm.\""
        ],
        "image": "assets/fantasy-deep-dwarf-page-15.webp",
        "alt": "Hakan and Yusuf being honored as friends of the Hearthlight Realm while all allies celebrate"
      }
    ]
  },
  {
    title: "The Yusie Dragon Adventures",
    libraryKicker: "Yusie Dragon Collection",
    description:
      "Yusie grows from Marvel Tree guardian to sea-and-sky dragon across three connected adventures.",
    cover: "yusuf/assets/yusie-star-nest-cover.webp",
    coverAlt:
      "Collection cover for The Yusie Dragon Adventures showing Yusie flying toward the star nest above the Marvel Tree",
    href: "yusuf/",
  },
];

const comicBooks = [
  {
    title: "Yusuf and Hakan: Guardians of Moonfire Cape",
    libraryKicker: "Cinematic Comic",
    readerKicker: "Starfire comic adventure",
    description:
      "Yusuf becomes the elder starfire guardian, Hakan his junior brother, and two trusted allies help them save Moonfire Cape.",
    cover: "assets/comic-moonfire-cover.webp",
    coverAlt:
      "Comic cover for Yusuf and Hakan: Guardians of Moonfire Cape showing the brothers as starfire guardian creatures on a moonlit coast",
    format: "comic",
    pages: [
      {
        title: "The Watchers of Moonfire Cape",
        paragraphs: [
          "Yusuf, the elder starfire guardian, watched the coast with Hakan, his junior brother. The lighthouse kept their home safe.",
        ],
        image: "assets/comic-moonfire-panel-01.webp",
        alt: "Yusuf as a large starfire guardian creature and Hakan as his junior version watching Moonfire Cape at sunrise",
      },
      {
        title: "Arda in the Pines",
        paragraphs: [
          "They freed Arda, the sun-eagle, from shadow-kelp. A rescue became their first promise of friendship.",
        ],
        image: "assets/comic-moonfire-panel-02.webp",
        alt: "Yusuf and Hakan freeing Arda the golden sun-eagle from shadow-kelp in cliffside pines",
      },
      {
        title: "Mira's Warning",
        paragraphs: [
          "Below the turquoise sea, Mira the crystal turtle showed them the cracked moon pearl and warned of the Hollow Tide.",
        ],
        image: "assets/comic-moonfire-panel-03.webp",
        alt: "Mira the crystal turtle warning Yusuf and Hakan beneath the sea near a cracked moon pearl",
      },
      {
        title: "The Hollow Tide",
        paragraphs: [
          "The storm rose like a living wave. Yusuf shielded Hakan while their new friends held the line.",
        ],
        image: "assets/comic-moonfire-panel-04.webp",
        alt: "The Hollow Tide rising from storm waves while Yusuf protects Hakan near Moonfire Cape",
      },
      {
        title: "The Steady Wing",
        paragraphs: [
          "Yusuf taught Hakan the steady wingbeat: brave does not mean fast. Brave means flying together.",
        ],
        image: "assets/comic-moonfire-panel-05.webp",
        alt: "Yusuf teaching Hakan a steady wingbeat above Moonfire Cape during the storm",
      },
      {
        title: "The Broken Beacon",
        paragraphs: [
          "In the lighthouse chamber, the moonfire crystal had cracked. Hakan's small spark found the first golden line.",
        ],
        image: "assets/comic-moonfire-panel-06.webp",
        alt: "Yusuf and Hakan examining the cracked moonfire crystal inside the lighthouse beacon chamber",
      },
      {
        title: "Hakan's Dive",
        paragraphs: [
          "Hakan slipped into the glowing reef crack for the shard. Yusuf stayed close, lighting the deep water.",
        ],
        image: "assets/comic-moonfire-panel-07.webp",
        alt: "Hakan diving into a glowing reef crack while Yusuf protects him and Mira watches",
      },
      {
        title: "Yusuf Holds the Storm",
        paragraphs: [
          "Yusuf spread his wings against the Hollow Tide while Hakan carried the shard through Arda's path.",
        ],
        image: "assets/comic-moonfire-panel-08.webp",
        alt: "Yusuf holding back the Hollow Tide while Hakan flies through Arda's safe path with the shard",
      },
      {
        title: "Mira's Crystal Road",
        paragraphs: [
          "Mira lifted a crystal road from the sea. Every friend gave Hakan one more safe step toward the beacon.",
        ],
        image: "assets/comic-moonfire-panel-09.webp",
        alt: "Mira raising a glowing crystal road from the sea as Yusuf and Arda help Hakan reach the lighthouse",
      },
      {
        title: "United Moonfire",
        paragraphs: [
          "Brother fire met brother fire. The shard clicked home, and the beacon blazed blue and gold.",
        ],
        image: "assets/comic-moonfire-panel-10.webp",
        alt: "Yusuf and Hakan combining starfire to restore the moonfire beacon crystal",
      },
      {
        title: "The Storm Breaks",
        paragraphs: [
          "The Hollow Tide fell into harmless mist. Moonfire Cape shone brighter because they protected it together.",
        ],
        image: "assets/comic-moonfire-panel-11.webp",
        alt: "Yusuf, Hakan, Arda, and Mira watching the restored lighthouse shine after the storm breaks",
      },
      {
        title: "Guardians Together",
        paragraphs: [
          "That night, Yusuf, Hakan, Arda, and Mira watched the quiet sea. Far away, a new light waited.",
        ],
        image: "assets/comic-moonfire-panel-12.webp",
        alt: "Yusuf, Hakan, Arda, and Mira resting together on Moonfire Cape at night",
      },
    ],
  },
];

const collections = [
  {
    id: "cats-of-istanbul",
    title: "The Cats of Istanbul Adventures",
    libraryKicker: "Istanbul Cats Collection",
    description:
      "Misket, the secret Cats of Istanbul, and three connected city mysteries.",
    cover: "assets/book-cover-cats-of-istanbul.webp",
    coverAlt:
      "Collection cover for The Cats of Istanbul Adventures showing Hakan, Yusuf, Misket, and Istanbul",
  },
  {
    id: "book-magic",
    title: "The Moonlit Library Adventures",
    libraryKicker: "Book Magic Collection",
    description:
      "The secret Moonlit Library, the Last Page Bell, and connected book-magic mysteries.",
    cover: "assets/book-cover-moonlit-library.webp",
    coverAlt:
      "Collection cover for The Moonlit Library Adventures showing Hakan and Yusuf in a glowing secret library",
  },
  {
    id: "cappadocia-lanterns",
    title: "The Cappadocia Lantern Adventures",
    libraryKicker: "Cappadocia Lantern Collection",
    description:
      "Three connected quests with lost stars, hidden cave rivers, sky lanterns, and the Dawn Bell.",
    cover: "assets/book-cover-cappadocia-sky-lantern-caravan.webp",
    coverAlt:
      "Collection cover for The Cappadocia Lantern Adventures showing Hakan and Yusuf guiding sky lanterns over Cappadocia",
  },
  {
    id: "starlit-school",
    title: "The Starlit School Adventures",
    libraryKicker: "Wizard School Collection",
    description:
      "A four-book original magical-school series with spell-lanterns, listening magic, Asterhall mysteries, and an underwater reef classroom.",
    cover: "assets/book-cover-starlit-school-key.webp",
    coverAlt:
      "Collection cover for The Starlit School Adventures showing Hakan and Yusuf at Asterhall with a glowing school key",
  },
  {
    id: "aqualis",
    title: "The Lost City of Aqualis",
    libraryKicker: "Underwater Epic Collection",
    description:
      "A living compass, a missing sea-dragon mother, and one continuous three-book journey into a moving lost city.",
    cover: "assets/book-cover-aqualis-map-below-waves.webp",
    coverAlt:
      "Collection cover for The Lost City of Aqualis showing Hakan, Yusuf, Marin, and the golden city beneath the sea",
  },
  {
    id: "greek-mythology",
    title: "The Lost Oracle Trilogy",
    libraryKicker: "Greek Mythology Collection",
    description:
      "Athena's stolen Golden Thread begins one continuous journey from Athens to Crete and the heights of Olympus.",
    cover: "assets/book-cover-greek-bronze-owl-athens.webp",
    coverAlt:
      "Collection cover for The Lost Oracle Trilogy showing Hakan, Yusuf, Thalia, Glaux, Kryon, and the Acropolis",
  },
  {
    id: "kitsune",
    title: "The Kitsune Shrine Adventures",
    libraryKicker: "Ancient Japan Collection",
    description:
      "Bip, Bip Jr., cherry blossoms, moon bridges, and three connected shrine quests.",
    cover: "assets/book-cover-kitsune-moon-bridge.webp",
    coverAlt:
      "Collection cover for The Kitsune Shrine Adventures showing Hakan, Yusuf, and two white kitsunes at a mountain shrine",
  },
  {
    "id": "epic-fantasy",
    "title": "The Hearthlight Realm Adventures",
    "libraryKicker": "Epic Fantasy Collection",
    "description": "A three-book quest through hill homes, star forests, and deep mountain gates.",
    "cover": "assets/book-cover-fantasy-hearthfolk-lantern.webp",
    "coverAlt": "Collection cover for The Hearthlight Realm Adventures showing Hakan, Yusuf, the family, Hearthfolk, and the Ember Lantern"
  },
  {
    id: "space-team",
    title: "The Space Team Adventures",
    libraryKicker: "Space Team Collection",
    description:
      "Glim, Blip, Pidge, a grateful comet, and three connected star rescues.",
    cover: "assets/book-cover-little-lost-moon.webp",
    coverAlt:
      "Collection cover for The Space Team Adventures showing Hakan, Yusuf, Glim, Blip, Pidge, and a comet in space",
  },
];

const defaultLibraryTitle = "Choose Tonight's Adventure";
const defaultLibraryDescription =
  "Cozy picture-book stories made for curious readers, gentle magic, and one more page before sleep.";
const comicLibraryTitle = "Choose a Comic Adventure";
const comicLibraryDescription =
  "Cinematic captioned fantasy comics with full-picture pages, bold panel titles, and short readable captions.";

const formatOptions = [
  {
    title: "Picture Books",
    libraryKicker: "Classic Storybooks",
    description:
      "Open-book spreads with one illustration page and one story text page.",
    cover: "assets/book-cover-cats-of-istanbul.webp",
    coverAlt:
      "Picture books shelf cover showing Hakan and Yusuf's storybook adventures",
    action: "picture",
  },
  {
    title: "Comic Books",
    libraryKicker: "Cinematic Comics",
    description:
      "Two-page comic spreads with captions embedded directly in the artwork.",
    cover: "assets/comic-moonfire-cover.webp",
    coverAlt:
      "Comic books shelf cover showing Yusuf and Hakan as starfire guardians",
    action: "comic",
  },
];

let activeBook = books[0];
let activeFormat = null;
let activeCollectionId = null;
let currentPage = 0;
let pointerStartX = 0;

const pageEl = document.getElementById("page");
const storyImage = document.getElementById("storyImage");
const titleEl = document.getElementById("story-title");
const textEl = document.getElementById("storyText");
const storyPanel = document.querySelector(".story-panel");
const comicFrame = document.getElementById("comicFrame");
const comicImageRight = document.getElementById("comicImageRight");
const progressLabel = document.getElementById("progressLabel");
const progressBar = document.getElementById("progressBar");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const readButton = document.getElementById("readButton");
const stopButton = document.getElementById("stopButton");
const fullscreenButton = document.getElementById("fullscreenButton");
const bookCard = document.querySelector(".book-card");
const bookGrid = document.getElementById("bookGrid");
const siteKicker = document.getElementById("siteKicker");
const siteTitle = document.getElementById("siteTitle");
const libraryView = document.getElementById("libraryView");
const readerView = document.getElementById("readerView");
const formatView = document.getElementById("formatView");
const formatGrid = document.getElementById("formatGrid");
const libraryButton = document.getElementById("libraryButton");
const libraryTitle = document.getElementById("library-title");
const libraryDescription = document.getElementById("libraryDescription");
const collectionBackButton = document.getElementById("collectionBackButton");
const formatHomeButton = document.getElementById("formatHomeButton");
const speechSupported =
  "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;

let activeUtterance = null;

function createBookTile(item, onClick, index = 1) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "book-tile";
  button.setAttribute("aria-label", `Open ${item.title}`);
  button.addEventListener("click", onClick);

  const coverShell = document.createElement("span");
  coverShell.className = "cover-shell";

  const cover = document.createElement("img");
  cover.src = item.cover;
  cover.alt = item.coverAlt;
  cover.width = 941;
  cover.height = 1672;
  cover.decoding = "async";
  cover.loading = index === 0 ? "eager" : "lazy";

  const meta = document.createElement("span");
  meta.className = "book-meta";

  const kicker = document.createElement("span");
  kicker.className = "book-kicker";
  kicker.textContent = item.libraryKicker;

  const title = document.createElement("span");
  title.className = "book-title";
  title.textContent = item.title;

  const description = document.createElement("span");
  description.className = "book-description";
  description.textContent = item.description;

  coverShell.append(cover);
  meta.append(kicker, title, description);
  button.append(coverShell, meta);

  return button;
}

function renderFormatLanding() {
  formatGrid.textContent = "";
  activeFormat = null;
  activeCollectionId = null;
  formatView.hidden = false;
  libraryView.hidden = true;
  readerView.hidden = true;
  siteKicker.textContent = "Story library";
  siteTitle.textContent = "Hakan and Yusuf's Books";
  document.body.classList.remove("reader-open", "drop-cap-book", "comic-book-open");

  formatOptions.forEach((option, index) => {
    const tile = createBookTile(
      option,
      () => {
        if (option.action === "comic") {
          showComicLibrary();
          return;
        }

        showPictureLibrary();
      },
      index,
    );
    tile.classList.add("format-tile");
    formatGrid.append(tile);
  });
}

function renderLibrary() {
  bookGrid.textContent = "";

  if (activeFormat === "comic") {
    libraryTitle.textContent = comicLibraryTitle;
    libraryDescription.textContent = comicLibraryDescription;
    siteKicker.textContent = "Comic books";
    siteTitle.textContent = "Yusuf's Comic Books";
    collectionBackButton.hidden = true;
    formatHomeButton.hidden = false;

    comicBooks.forEach((book, index) => {
      bookGrid.append(
        createBookTile(book, () => {
          showReader(index, comicBooks);
        }, index),
      );
    });

    return;
  }

  if (activeCollectionId) {
    const collection = collections.find(({ id }) => id === activeCollectionId);
    const collectionBooks = books.filter(
      ({ seriesId }) => seriesId === activeCollectionId,
    );

    libraryTitle.textContent = collection.title;
    libraryDescription.textContent = collection.description;
    siteKicker.textContent = "Story collection";
    siteTitle.textContent = collection.title;
    collectionBackButton.hidden = false;
    formatHomeButton.hidden = false;

    collectionBooks.forEach((book) => {
      const bookIndex = books.indexOf(book);
      bookGrid.append(
        createBookTile(book, () => {
          showReader(bookIndex);
        }, bookIndex),
      );
    });

    return;
  }

  libraryTitle.textContent = defaultLibraryTitle;
  libraryDescription.textContent = defaultLibraryDescription;
  siteKicker.textContent = "Story library";
  siteTitle.textContent = "Hakan and Yusuf's Picture Books";
  collectionBackButton.hidden = true;
  formatHomeButton.hidden = false;

  collections.forEach((collection, index) => {
    bookGrid.append(
      createBookTile(collection, () => {
        showCollection(collection.id);
      }, index),
    );
  });

  books
    .filter(({ seriesId }) => !seriesId)
    .forEach((book, offset) => {
      const bookIndex = books.indexOf(book);
      bookGrid.append(
        createBookTile(book, () => {
          if (book.href) {
            window.location.href = book.href;
            return;
          }

          showReader(bookIndex);
        }, collections.length + offset),
      );
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

function setSpeechButtons(isReading = false) {
  if (!speechSupported) {
    readButton.hidden = true;
    stopButton.hidden = true;
    return;
  }

  readButton.hidden = false;
  stopButton.hidden = false;
  readButton.disabled = isReading;
  readButton.textContent = isReading ? "Reading..." : "Read to me";
  stopButton.disabled = !isReading;
}

function stopReading() {
  if (!speechSupported) return;

  window.speechSynthesis.cancel();
  activeUtterance = null;
  setSpeechButtons(false);
}

function getCurrentSpeechText() {
  if (activeBook.format === "comic") {
    const firstPageIndex = currentPage * 2;
    const spreadPages = activeBook.pages.slice(firstPageIndex, firstPageIndex + 2);

    return [
      activeBook.title,
      `Spread ${currentPage + 1}.`,
      ...spreadPages.flatMap((page) => [page.title, ...page.paragraphs]),
    ].join(" ");
  }

  const page = activeBook.pages[currentPage];
  const pageNumber = currentPage + 1;

  return [
    activeBook.title,
    `Page ${pageNumber}. ${page.title}.`,
    ...page.paragraphs,
  ].join(" ");
}

function readCurrentPage() {
  if (!speechSupported) return;

  stopReading();

  const utterance = new SpeechSynthesisUtterance(getCurrentSpeechText());
  utterance.lang = "en-US";
  utterance.rate = 0.92;
  utterance.pitch = 1.03;
  utterance.onend = () => {
    if (activeUtterance === utterance) {
      activeUtterance = null;
      setSpeechButtons(false);
    }
  };
  utterance.onerror = utterance.onend;

  activeUtterance = utterance;
  setSpeechButtons(true);
  window.speechSynthesis.speak(utterance);
}

function preloadNextPage() {
  const nextPageIndex =
    activeBook.format === "comic" ? (currentPage + 1) * 2 : currentPage + 1;
  const nextPages = activeBook.pages.slice(
    nextPageIndex,
    nextPageIndex + (activeBook.format === "comic" ? 2 : 1),
  );

  nextPages.forEach((page) => {
    const image = new Image();
    image.src = page.image;
  });
}

function renderPage(direction = 1) {
  stopReading();

  if (activeBook.format === "comic") {
    const spreadCount = Math.ceil(activeBook.pages.length / 2);
    const leftPage = activeBook.pages[currentPage * 2];
    const rightPage = activeBook.pages[currentPage * 2 + 1];
    const spreadNumber = currentPage + 1;

    storyImage.src = leftPage.image;
    storyImage.alt = leftPage.alt;
    titleEl.textContent = leftPage.title;
    storyPanel.hidden = true;
    comicFrame.hidden = !rightPage;
    comicImageRight.src = rightPage?.image || "";
    comicImageRight.alt = rightPage?.alt || "";
    pageEl.classList.add("comic-page-turn");
    progressLabel.textContent = `Spread ${spreadNumber} of ${spreadCount}`;
    progressBar.style.width = `${(spreadNumber / spreadCount) * 100}%`;
    backButton.disabled = currentPage === 0;
    nextButton.disabled = currentPage === spreadCount - 1;

    pageEl.classList.remove("turning");
    pageEl.style.setProperty("--turn-direction", direction);
    window.requestAnimationFrame(() => {
      pageEl.classList.add("turning");
    });

    preloadNextPage();
    return;
  }

  const page = activeBook.pages[currentPage];
  const pageNumber = currentPage + 1;

  storyPanel.hidden = false;
  comicFrame.hidden = true;
  pageEl.classList.remove("comic-page-turn");
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

function showReader(bookIndex, sourceBooks = books) {
  stopReading();

  activeBook = sourceBooks[bookIndex];
  currentPage = 0;
  formatView.hidden = true;
  libraryView.hidden = true;
  readerView.hidden = false;
  siteKicker.textContent = activeBook.readerKicker;
  siteTitle.textContent = activeBook.title;
  document.body.classList.toggle(
    "drop-cap-book",
    sourceBooks === books && bookIndex === 0,
  );
  document.body.classList.toggle("comic-book-open", activeBook.format === "comic");
  document.body.classList.toggle(
    "wide-art-book",
    activeBook.readerLayout === "wide-art",
  );
  document.body.classList.add("reader-open");
  renderPage(1);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showCollection(collectionId) {
  stopReading();

  activeFormat = "picture";
  activeCollectionId = collectionId;
  formatView.hidden = true;
  readerView.hidden = true;
  libraryView.hidden = false;
  document.body.classList.remove("reader-open");
  document.body.classList.remove("drop-cap-book");
  renderLibrary();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showPictureLibrary() {
  activeFormat = "picture";
  activeCollectionId = null;
  formatView.hidden = true;
  readerView.hidden = true;
  libraryView.hidden = false;
  document.body.classList.remove("reader-open", "drop-cap-book", "comic-book-open");
  renderLibrary();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showComicLibrary() {
  activeFormat = "comic";
  activeCollectionId = null;
  formatView.hidden = true;
  readerView.hidden = true;
  libraryView.hidden = false;
  document.body.classList.remove("reader-open", "drop-cap-book", "comic-book-open");
  renderLibrary();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function showFormatLanding() {
  stopReading();

  if (document.fullscreenElement) {
    await document.exitFullscreen();
  }

  renderFormatLanding();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function showLibrary() {
  stopReading();

  if (document.fullscreenElement) {
    await document.exitFullscreen();
  }

  activeCollectionId = null;
  formatView.hidden = true;
  readerView.hidden = true;
  libraryView.hidden = false;
  document.body.classList.remove("reader-open", "drop-cap-book", "comic-book-open");
  renderLibrary();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function nextPage() {
  const pageCount =
    activeBook.format === "comic"
      ? Math.ceil(activeBook.pages.length / 2)
      : activeBook.pages.length;

  if (currentPage < pageCount - 1) {
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
readButton.addEventListener("click", readCurrentPage);
stopButton.addEventListener("click", stopReading);
libraryButton.addEventListener("click", showLibrary);
collectionBackButton.addEventListener("click", showLibrary);
formatHomeButton.addEventListener("click", showFormatLanding);
window.addEventListener("beforeunload", stopReading);
setSpeechButtons(false);

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

renderFormatLanding();
