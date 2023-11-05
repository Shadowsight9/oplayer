# OPlayer UI

[![npm](https://img.shields.io/npm/v/oplayer-ui-plus?style=flat-square&label=oplayer-ui-plus)](https://www.npmjs.com/package/oplayer-ui-plus)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/oplayer-ui-plus?style=flat-square)
[![npm dm](https://img.shields.io/npm/dm/oplayer-ui-plus?style=flat-square)](https://www.npmjs.com/package/oplayer-ui-plus)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/oplayer-ui-plus/badge)](https://www.jsdelivr.com/package/npm/oplayer-ui-plus)

![oplayer-mobile](https://github.com/shiyiya/oplayer/raw/main/packages/ui/oplayer-ui-mobile.jpg)

## Install

```bash
npm i @oplayer/core oplayer-ui-plus
```

```html
<script src="https://cdn.jsdelivr.net/npm/@oplayer/core@latest/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/oplayer-ui-plus@latest/dist/index.core.js"></script>

<!-- or just one -->
<!-- <script src="https://cdn.jsdelivr.net/npm/@oplayer/core@latest/dist/index.ui.js"></script> -->
```

## Basic

```js
const player = Player.make('#player', {
  source: {
    title: '君の名は',
    src: 'https://oplayer.vercel.app/君の名は.mp4',
    poster: 'https://oplayer.vercel.app/poster.png'
  }
})
  .use([OUI()])
  .create()
```
