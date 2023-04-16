# PWA-Text-Editor

[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Project Summary

To build a single page text editor application that runs in the browser and functions offline. To feature a number of data persistence techniques that server a redundancy in case one of the features is not supported by the browser. Starter code has been provided. 
and once built the application is to be deployed to Heroku.

An integral feature of the application is the creation of a **PWA Service Worker** to enable fast loading and offline access.

## Packages Used

|          Package               |                                      Description                                                                             |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| Node.js                        |Executes JavaScript code outside a web browser.
| Express.js                     |A Node.js web application framework providing broad features to build a web & mobile application.                        |
Webpack  |A module bundler primarily for bundling JavaScript files for usage in a browser. It can also bundle HTML, CSS, and images. 
|Webpack-loader  | Transforms JavaScript features that have not been loaded into the browser yet. e.g. Typescript into JavaScript.                                                                              |
|Webpack-dev-server     | A built-in developer server that can be used as an HTTP server for serving files while developing. Enables use of hot module replacement which updates code on a webpage without requiring the developer to reload the page.
|Webpack Manifest              | Used to resolve and load modules once they have been bundled and shipped to the browser.
|Babel                  |An npm JavaScript compiler that reads your JavaScript and converts into other JavaScript. Basically makes your new JavaScript suitable for older browsers.
| Workbox | A set of modules that simplify common **Service Worker** interactions such as routing and caching.
|idb  | A relatively small storage library that mirrors indexDB but is easier to use.| 

## PWA Text Editor

The PWA-Text-Editor is a fully functioning Progressivive Web Application (PWA) which has been developed as an easy-to-use text editor to take notes both using the web and offline. The offline capabality is achieved by creating a **Service Worker** and Cache API's to cache assts and API responses. 

## Project Description
 
The main objective of this project was to produce a text editor application that had the capability to store and edit text both on and offline.

Even though starter code was provided the project still required a considerable amount of careful coding to ensure the Service Worker was created and files bundled and loaded using Webpack manifest. Also required coding to install and create database storage using indexDb (idb). 

The project also required build proper scripts to enable use of the various packages used, as listed above.

## Usage

*CLI or Terminal*

Run the command **npm run start** from your CLI or Terminal. The application should be listening on http://localhost:3000/, which you can access in your browser.

*Internet*

Visit the deployed site (see link below). Enter text and click off the window to save. As the text is persistent, it will remain even when you refresh or revisit the application. The application can be used offline and will store your changes in Cache until back online.

## Deployed Application and Screenshots

Link to Heroku: https://nc-pwa-text-editor.herokuapp.com/

### Screenshots

![image](https://user-images.githubusercontent.com/115671306/232265817-f9e0ad76-4bc0-4fe0-b668-5fa78a90f606.png)




## License

MIT 



