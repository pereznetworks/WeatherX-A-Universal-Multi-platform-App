# TD-Project12 : My Captsone Project for Team TreeHouse FSJS Tech Degree

# GO-LIVE Date: May 1, 2019:  
[Project Site](./)

- STEPS:
  - I: review project standard and exceed requirements and re-design weather using EXPRESS, PUG and PostgreSQL
  - II: plan modules and write unit-tests using Mocha-Chai
  - III: add any custom code following the module-pattern and npm, so that these can be re-used, and as beginning of a code-base
  - IV: Rewrite project to use pug-html rendering and associated routes
  - V: use a Heroku supported PostgreSQL Implementation
  - VI: implement Heroku best practice in process of doing steps I through IV
  - VII: test and fix any UI and Server-side bugs
  - VII: perform Heroku and Express pre-deployment steps
  - IX: deploy to Heroku live - retest all modules and modiules of project
  - X: Finish Documentation and Submit project

# PROJECT UPDATE:
- Well after much consternation it looks like I will be dropping REACT... :white_frowning_face:
  - and implementing the views of my Weather App using PUG….
  - on the bright-side I will finally be deploying my app and submitting... :rolling_on_the_floor_laughing: …  
  - so on my express server
    - the home page will be rendered with a simple app header and input form
    - ….after….location input is submitted
    - …the server receive the location input via get /:location route,  I think
    - the server will make the api calls, response will be stored, indexing of data using PostgreSQL db,
    - model validation and and data model methods will process the data
    - then data points will be dropped into HTML using PUG templates
    - the home view will re-rendered again, with a sub-view containing a location-Bar, for the weather forecast summary
    - I will not have a backend server…
    - just a front-end server with 2 routes:
      - 1 for home, which have the input search form as a sub-view
        - and also will also render the weather-summaries sub-view for each location…
        - and then the full weather-details view that is rendered when a location-weather-summary is clicked-on…
    - well that's it :sweat_smile:  
    - of course many details to work out… but I now see light at the end of my tunnel…. :joy:

# FINAL PUSH:
  - now for the final push on this project…. on your mark, get set.. :sonic:

# PROJECT Documentation

  I of course will be rewriting the project-documentation and the project-site for this project

# License:

[MIT](https://github.com/pereznetworks/TD-Project12/blob/master/LICENSE)
