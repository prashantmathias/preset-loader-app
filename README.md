## Preset Loader App

An app to store user presets for Eqs and Compressors deployed with Heroku.

## Links

- [Preset loader API](https://warm-inlet-18237.herokuapp.com/test)
  - [/eq](https://warm-inlet-18237.herokuapp.com/eq)
  - [/comp](https://warm-inlet-18237.herokuapp.com/comp)
- [Preset Loader Client App](https://agile-beach-74577.herokuapp.com/)


## API Build approach

- Built with Node.js and express
- modules used: body-parser, express, lodash, method-override, mongoose, node-restful.
- Created Models, Controllers and Routes files for Eq and Compressor presets
- Setup Procfile and app.json for Heroku deployment
- Used mlab addon in Heroku to connect to mongoDB


## Client App Build approach

- Built with Yeoman Angular with Grunt
- Used Restangular to communicate with RESTful API (installed with bower)
- Yeoman generator commands Used
  - App setup command
  ```
  yo angular
  ```
  - Eq routes setup commands
  ```
  yo angular:route eq
  yo angular:route eq-add --uri=create/eq
  yo angular:route eq-view --uri=eq/:id
  yo angular:route eq-delete --uri=eq/:id/delete
  yo angular:route eq-edit --uri=eq/:id/edit
  ```
  - Compressor routes setup commands
  ```
  yo angular:route comp
  yo angular:route comp-add --uri=create/comp
  yo angular:route comp-view --uri=comp/:id
  yo angular:route comp-delete --uri=comp/:id/delete
  yo angular:route comp-edit --uri=comp/:id/edit
  ```
- Added angular factories to configure Restangular in client/app/scripts/app.js
- Added code to Angular controllers to handle basic CRUD operations in client/app/scripts/Controllers
- Added html and Angular code to perform basic CRUD operations in client/app/views
- Added code for basic node.js/express server in web.js and Procfile for Heroku deployment
- Ran Grunt build command to create /dist file before deployment to Heroku
