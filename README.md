# homepage

## Project setup

    nvm use
    npm install

### Compiles and hot-reloads for development

    npm run serve

### Compiles and minifies for production

    npm run build

#### Notes

* `--modern` flag seems to be resulting in no different build at all. Also it breaks because of webpack's copy plugin in vue.config.js
* `--https` flag fails hot reloading etc. during development
* `--no-unsafe-inline` flag seems to make no difference since there is no inline script to begin with.
* The _prerender-spa_ plugin seems to do nothing.
