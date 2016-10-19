# htmlmodule

[![Build Status](https://travis-ci.org/aristov/htmlmodule.svg?branch=master)](https://travis-ci.org/aristov/htmlmodule)
[![Build Status](https://saucelabs.com/buildstatus/aristov7)](https://saucelabs.com/beta/builds/44b58f67a1704937b76d4bb53241e970)
[![NPM Version](https://img.shields.io/npm/v/htmlmodule.svg?maxAge=2592000)](https://www.npmjs.com/package/htmlmodule)
[![dependencies Status](https://david-dm.org/aristov/htmlmodule/status.svg)](https://david-dm.org/aristov/htmlmodule)
[![devDependencies Status](https://david-dm.org/aristov/htmlmodule/dev-status.svg)](https://david-dm.org/aristov/htmlmodule?type=dev)

<em>work in progress</em>

The htmlmodule provides web application semantics and functionality of native browser DOM API.

```js
const htmlspec = a({ 
    href : 'https://html.spec.whatwg.org', 
    children : 'HTML specification' 
});
```

The code above uses htmlmodule to create a hyperlink with a reference to specification.
A browser creates the same link, when it processes the following markup:

```html
<a href=https://html.spec.whatwg.org>HTML specification</a>
```

The htmlmodule does not generate a markup. It assembles the `HTMLAnchorElement` instance from scratch.

## Try now

— <a href="//aristov.github.io/htmlmodule/" title="read-eval-print-loop">REPL machine!</a>

## Usage

Use a [module bundler](http://webpack.github.io/) and a [transpiler](http://babeljs.io) to transform and pack modules for in-browser usage.

### Installation

```
npm install htmlmodule
```

### Create application

```js
// import element assemblers
import { form, label, input, button } from 'htmlmodule';

// create application
const websearch = 
    form({
        action : '//yandex.com/search',
        target : '_blank',
        children : [
            label([
                'Search ',
                input({ type : 'search', name : 'text' })
            ]),
            button('Find')
        ]
    });
    
// insert to document
document.body.append(websearch);
```

Just created `websearch` variable is a DOM structure with the respective HTML markup:

```html
<form action=//yandex.com/search target=_blank>
    <label>
        Search 
        <input type=search name=text>
    </label>
    <button>Find</button>
</form>
```

<h2 id="globalscript">Global script distribution</h2>

Get the module by appending the distribution script to a page body:

```html
<script src=https://rawgit.com/aristov/htmlmodule/master/dist/dist.window.htmlmodule.min.js></script>
<script>
(({ header, main, footer, article, section, a, button, input, img, video, canvas, data, ... }) => {

    // make magic...

})(window.htmlmodule);
</script> 
```

The script exposes the `htmlmodule` global variable to the `window` object.

## Compatibility

The core htmlmodule components don't require anything except DOM.
You can use the module in combination with any other framework or library.

### Browser support

Module works fine without any shims, but some new HTML5 elements and features are implemented in modern browsers only.
The built-in [shim bundle](/shim/index.js) partially fixes browser compatibility. It includes:

- [Babel polyfill](http://babeljs.io/docs/usage/polyfill/)
- [dom4 polyfill](https://www.npmjs.com/package/dom4)
- [author DOM shims](/shim)

The shim bundle is used in the [unit-testing](#user-content-testing) environments.

### Shim bundle setup

For a wide browser support you must import the shim bundle first.
There are some ways to do this.

#### Shim distribution script — recommended.

```html
<!-- minified shim bundle -->
<script src=https://rawgit.com/aristov/htmlmodule/master/dist/dist.shim.min.js></script>

<!-- project code including htmlmodule imports -->
<script src=./build/build.project.js></script>
```

#### Shim-charged distribution 

[The "global script" distribution](#user-content-globalscript) includes the shim bundle out of the box.

#### Single bundle for all

Install the third-party polyfill libraries first:

```
npm install babel-polyfill
npm install dom4
```

Import the shim bundle into your project:

```js
import 'htmlmodule/shim';

// the rest of your code including htmlmodule imports
```

#### Custom way

- You may add your own and any other shims if needed.
- You may decline to use the shim bundle at all, if there's no need to support an old browser versions.

## Documentation

[JSDoc API](//aristov.github.io/htmlmodule/api)

## Development

### Environment

- browser
- node + webpack

### Install

```
git clone git@github.com:aristov/htmlmodule.git
cd htmlmodule
npm install
```

### Build

To run commands locally, use `./node_modules/.bin/` in your `PATH`:

```
export PATH=./node_modules/.bin:$PATH
```

Build distribution assets:

```
webpack
```

#### Options

Build minified distribution assets:

```
MIN=true webpack
```

Build docs, specs and repl-machine:

```
DOCS=true webpack
```

Disable babel transpiling:

```
ES6=true webpack
```

### Develop

Use watch mode:

```
WATCH=true webpack
```

Run dev server (`DOCS + ES6 + WATCH`):

```
npm start
```

Run static server:

```
static
```

Open in browser [localhost:8080/docs](http://localhost:8080/docs)

<h3 id="testing">Testing</h3>

#### Test using node

```
npm test
```

#### Test in browser

Run dev + static server and open [localhost:8080/docs/spec.html](http://localhost:8080/docs/spec.html) in browser.

#### Online tests

Check [spec suite](//aristov.github.io/htmlmodule/spec.html) in your browser.

## License

[The MIT License (MIT)](https://raw.githubusercontent.com/aristov/htmlmodule/master/LICENSE)
