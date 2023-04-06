Welcome to the Life Itself primary repo. This repo powers the next generation website and especially our digital notebook/garden.

Two main parts:

`content/` most of the content including digital notebook/garden (recommending editing in obsidian)

`/` flowershow and nextjs based webapp that creates the life itself website (mainly using content!)

You may also want to visit the [issues section »][issues] or check out the [discussions in the forum][forum].

[issues]: https://github.com/life-itself/community/issues
[forum]: https://github.com/life-itself/community/discussions

lifeitself.org website using Flowershow and NextJS.

## Layout

```
flowershow    # standard flowershow template app installed
content       # content for the site
```

## Working on the site locally

### Make sure you have node installed

- Open terminal
- See if you have node
  ```bash
  # this result in a node prompt
  # if command not found then you do not have node
  node
  # check version >= 16
  node --version
  ```
- If you do not have node do: `brew install node`

### Install dependencies

In the `site` folder (this folder)

```
npm install
```

### Run the development server

```
npm run dev
```

You can then open the development server at http://localhost:3000
