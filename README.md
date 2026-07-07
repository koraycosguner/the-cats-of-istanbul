# The Cats of Istanbul

A polished, mobile-friendly GitHub Pages picture-book website for young readers.

Included stories:

- _Hakan and the Cats of Istanbul_
- _Hakan, Yusuf, and the Blue Tile Map_
- _Hakan, Yusuf, and the Galata Moon Bell_
- _Hakan and the Moonlit Library_
- _Hakan, Yusuf, and the Clockwork Chapter_
- _Hakan, Yusuf, and the Ink Dragon's Promise_
- _Hakan and the Lanterns of Cappadocia_
- _Hakan and the Little Lost Moon_
- _Hakan, Yusuf, and the Comet Key_
- _Hakan, Yusuf, and the Starlight Harbor_
- _Hakan and Yusuf and the Kitsune Moon Bridge_
- _Hakan and Yusuf and the Kitsune Star Garden_
- _Hakan and Yusuf and the Kitsune Dawn Crown_
- _Hakan, Yusuf, and the Hearthfolk Lantern_
- _Hakan, Yusuf, and the Star-Elf Forest_
- _Hakan, Yusuf, and the Deep Dwarf Gate_
- _Yusie and the Marvel Tree Dragon_

This is a static HTML, CSS, and JavaScript storybook library with a front landing page, collection cards, book cover cards, generated storybook artwork, page-turn navigation, keyboard controls, swipe controls, fullscreen support where the browser allows it, and fixed two-page book spreads on larger screens. The Cats of Istanbul, Moonlit Library, Kitsune, Hearthlight Realm, and Space Team stories are grouped under umbrella collection cards so readers can choose among connected sequels.

## Reading Level

The story text is written for roughly 2nd-3rd grade readers. It uses short paragraphs, lively clues, page-end surprises, and warm adventure language to encourage a child to keep reading. Later books use simpler vocabulary and clearer sentence structure while keeping the adventures exciting.

## Layout

The main book is designed as a constant 16:9 open-book spread on tablet and desktop screens:

- left page: illustration
- right page: story text
- center: subtle book spine
- page edges: compact arrow controls

On narrow phone screens, the pages stack so the text remains readable.

## Run Locally

Open `index.html` directly in a browser.

You can also use a simple local server:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a GitHub repository named `the-cats-of-istanbul`.
2. Add these project files to the repository root.
3. Commit and push to the `main` branch.
4. In GitHub, open **Settings -> Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Set the branch to **main** and the folder to **/root**.
7. Save the settings and wait for GitHub Pages to publish the site.

Suggested repo settings:

```text
Settings -> Pages -> Deploy from branch -> main -> root
```

## Files

- `index.html` - semantic storybook markup
- `style.css` - responsive open-book styling
- `script.js` - main library data, page navigation, swipe controls, progress, and story text
- `yusuf/` - Yusuf's standalone Yusie dragon picture book
- `assets/*.webp` - optimized generated cover and storybook artwork used by the site
- `assets/page-01.png` through `assets/page-10.png` - source-quality generated artwork backups for the first book
- `assets/favicon.svg` - local favicon

## Notes

- No backend is required.
- No external libraries are used.
- No browser text-to-speech is included, because realistic paid-app narration requires real human or neural audio assets.
- The website works on GitHub Pages.
- The story images are local assets, so there are no remote image dependencies.
