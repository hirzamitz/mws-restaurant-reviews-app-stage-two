# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 2

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage Two**, you will complete the following tasks:
1. Change the data source for your restaurant requests to pull JSON from the server 
2. Parse the response and use the response to generate the site UI 
3. Cache the JSON responses for offline use by using the IndexedDB API.
4. Follow the recommendations provided by Lighthouse to achieve the required performance targets.

![Restaurant Reviews App](https://github.com/hirzamitz/mws-restaurant-reviews-app-stage-two-client/blob/master/MWS-Stage-Two.png)

### What do I do from here?

1. Start up the development server by following the instructions [here](https://github.com/hirzamitz/mws-restaurant-reviews-app-stage-two-server/blob/master/README.md). 

2. Install project dependencies by running *npm i* on a terminal

3. Run the default gulp task by running *gulp* on a terminal

4. Add your Google Maps API key to index.html (line 62) and restaurant.html (line 87)

5. Start up the client server in the dist folder. In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

6. With your server running, visit the site: `http://localhost:8000`.

7. Write code to implement the updates to get this site on its way to being a mobile-ready website.

## Project Submission Summary: Stage 2

The following changes were completed to satisfy the requirements for Stage 2: 
1. Application Data and Offline Use
    - [x] The client application should pull restaurant data from the development server, parse the JSON response, and use the information to render the appropriate sections of the application UI.
    - [x] The client application works offline. JSON responses are cached using the IndexedDB API. Any data previously accessed while connected is reachable while offline.
2. Responsive Design and Accessibility
    - [x] The application maintains a responsive design on mobile, tablet and desktop viewports.
    - [x] The application retains accessibility features from the Stage 1 project. Images have alternate text, the application uses appropriate focus management for navigation, and semantic elements and ARIA attributes are used correctly.
3. Performance
    - [x] Lighthouse targets for each category exceed:
            Performance: > 70
            Progressive Web App: > 90
            Accessibility: > 90

![Lighthouse Report](https://github.com/hirzamitz/mws-restaurant-reviews-app-stage-two-client/blob/master/Lighthouse%20Report.png)

### Troubleshooting Tips

* If the restaurant data is not being displayed after starting up the client server using "python3 -m http.server <port>", make sure that the port in js/dbhelper.js matches the server port
    
