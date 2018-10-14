# hypermd-flowchart

Use flowchart.js to render 'flowchart' code blocks

[Demo](https://hypermd.github.io/hypermd-flowchart/example/) | [GitHub](https://github.com/HyperMD/hypermd-flowchart) | [![NPM version](https://img.shields.io/npm/v/hypermd-flowchart.svg?style=flat-square)](https://npmjs.org/package/hypermd-flowchart)

## How to use

1. install `hypermd-flowchart`
2. `import` before creating HyperMD editor
3. create HyperMD editor

### For webpack / parcel

First of all, install the packages: `npm install --save hypermd-flowchart`

```js
import * as HyperMD from "hypermd"
import "hypermd-flowchart"

const your_textarea = document.getElementById('input-box')
const editor = HyperMD.fromTextArea(your_textarea)
```

### For requirejs (example)

In your HTML:

```html
<textarea id="input-box" cols="30" rows="10">```flow
st=>start: Start:>http://www.google.com[blank]
e=>end:>http://www.google.com
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>http://www.google.com
io=>inputoutput: catch something...
para=>parallel: parallel tasks

st->op1->cond
cond(yes)->io->e
cond(no)->para
para(path1, bottom)->sub1(right)->op1
para(path2, top)->op1
```
</textarea>

<script src="https://cdn.jsdelivr.net/npm/requirejs/require.js"></script> <!-- 👈 RequireJS -->
<script src="https://cdn.jsdelivr.net/npm/hypermd/goods/patch-requirejs.js"></script> <!-- 👈 IMPORTANT -->
<script data-main src="main.js"></script>
```

In your main.js

```js
// before defining your main entry, don't forget :
requirejs.config({
  packages: [
    { name: 'hypermd-flowchart', main: 'index.js' },
    { name: 'flowchart.js', main: 'release/flowchart.min.js' },
  ]
})

// then, add "hypermd-flowchart" to your main-entry's dependency list.
```

Finally, here is [an example of `main.js`](./example/requirejs-main.js) and [a live demo](https://hypermd.github.io/hypermd-flowchart/example/).

### For Plain Browser Env

*Why hurting yourself? The bundlers and module loaders are the future!*

Add these HTML after loading HyperMD, before creating a editor.

```html
  <script src="https://cdn.jsdelivr.net/npm/hypermd-flowchart/index.js"></script>
```

## APIs

This module exports following symbols.

(In plain browser env, they are stored in global variable `HyperMD_PowerPack.flowchart`)

- `flowchartRenderer`: a CodeRenderer for HyperMD.FoldCode, which may be useless for you.

### flowchart.js drawing Options

**In most cases you don't need this!** If you want to set the 2nd parameter of flowchart.js `diagram.drawSVG`, please try `editor.setOption("flowchart", { ... YOUR OPTION ... })`


[flowchart.js]: https://flowchart.js.org/
