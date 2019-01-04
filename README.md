# sample-frontend

This Ember application is a rough sketch of the frontend for a user's professional development website. This application provides layout and styling for JSON content served up from an API.

The structure and styling of this frontend are stable and based on an [existing website](https://individual.utoronto.ca/daphnetan) I created for a client. The current application focuses on the mechanics of making API requests and formatting the content returned.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

You will also need a functioning API serving up content. This frontend will work as-is with [sample-backend-plus-api](https://github.com/sebiscig/sample-backend-plus-api). Details on requirements for developing your own API in below "Using your own API"

## Installation

* `git clone <repository-url>` this repository
* `cd testsite-frontend`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Using your own API

If you want to set up your own API:
* You need to update the apiHost environment variable (sample-frontend/config/environment.js) to match your host (the default host is for a lcoal Rails API running at localhost:3000/api)
* You need to expose the endpoints 'contacts', 'pages', and 'publications', and set your API to serialize the (right) data as JSON.
* Alternatively, modify the routes and models in this application to align with your API's endpoints and serialized data.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
