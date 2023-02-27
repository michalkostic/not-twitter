# Road to web application

## Value proposition?

What do you want to build? Why you want to build it?

## Paper prototype + UX

Sketch with pen and paper (or pencil and iPad).
Focus on user goals and journeys.

## Plain HTML file

As simple prototype as it gets, can be accessed via file protocol for quick testing.

## Simple HTTP Server

Serve the file via simple HTTP server
```
python -m http.server 8001
```

## Add basic style for better visualization

Pick the frontend design framework and apply light styling - mostly grid. You could work with plain HTML+CSS for now and go straight to adding functionality, but it helps to visualize the app. Mild styling helps the components to become more visible - it will help you structuring your web app down the line.

* Bootstrap
  * For the design challenged people
* CSS 5 Grid
  * CSS is getting closer to SCSS and other preprocessors
* Tailwind
  * Keep everything in your hands (might become jQuery of CSS one day)
* SCSS
  * The CSS preprocessor if you need the power

## Frontend architecture - Single Page App vs Server Side Rendering

Pick the approach that suits your application better.

### Single Page App (SPA)
* More seamless interaction
* Interactive development in browser
* Browser dev tools (e.g. state visualization)
* More work is done on client - less server cost


### Server Side Rendering (SSR)
* Simpler (dependent on your experience)
* For use cases like blogs and news - better user experience
* Better SEO
* Requires backend server


### Hybrid SSR with some client functionality
* Server side rendering the page structure, dynamic components on local page (e.g. table or client side form validations)
* Adds some complexity
* Sometimes done for 


## Make it move with JavaScript

We have picked Single Page Application approach so we will stay in browser as long as possible without using backend. That means we will keep the data local for now without need for API.

Pick one of:
* Plain JavaScript
* jQuery - saner plain JavaScript
  * Recommended for simple pages
* React - golden standard
  * Pick if you want a job
* Angular
  * Enterprise ready for better or worse
* Solid.js
  * Better React
* Svelte
  * More magic, more hip


## Persist with backend

Pick one of:

* Node.js + Express
  * Consider typescript for more type safety
* Java Spring MVC
* PHP + Laravel
* Firebase

Database

* PostgreSQL or MySQL
  * Simple, fast, well understood
* MongoDB
  * Great dev experience to iterate at a cost of higher maintenance complexity

## Dependencies, building, linting, auto formatting

