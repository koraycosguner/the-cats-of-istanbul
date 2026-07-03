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
  {
    title: "Hakan and the Little Lost Moon",
    libraryKicker: "Space Team Adventure",
    readerKicker: "A glowing space rescue among the stars",
    description:
      "Hakan helps a lost moon friend cross a shifting asteroid field before the comet passes.",
    cover: "assets/book-cover-little-lost-moon.webp",
    coverAlt:
      "Cover art for Hakan and the Little Lost Moon showing Hakan, Yusuf, Glim, Blip, Pidge, and a glowing comet in space",
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
    title: "Hakan and Yusuf and the Kitsune Moon Bridge",
    libraryKicker: "Kitsune Shrine Quest",
    readerKicker: "An ancient Japan brother adventure",
    description:
      "White kitsunes, cherry blossoms, and a moon bridge lead the brothers to a sleeping river spirit.",
    cover: "assets/book-cover-kitsune-moon-bridge.webp",
    coverAlt:
      "Cover art for Hakan and Yusuf and the Kitsune Moon Bridge showing the brothers with two white kitsunes at a moonlit shrine",
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
    title: "Yusie and the Marvel Tree Dragon",
    libraryKicker: "Yusuf Dragon Adventure",
    description:
      "A blue egg, 999-speed boots, and a red rooster-dragon by the Mediterranean.",
    cover: "yusuf/assets/yusie-cover.webp",
    coverAlt:
      "Cover art for Yusie and the Marvel Tree Dragon showing Yusuf, Hakan, a blue egg, and a red rooster-dragon by the sea",
    href: "yusuf/",
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
    button.addEventListener("click", () => {
      if (book.href) {
        window.location.href = book.href;
        return;
      }

      showReader(index);
    });

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
  siteTitle.textContent = "Hakan and Yusuf's Picture Books";
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
