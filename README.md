<h1 align="center">
    <img alt="Ecoleta" title="#ecoleta" src="assets/logo.png" width="250px" />
</h1>

<h2 align="center">
  Next Level Week: Ecoleta
</h2>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/EricSchmiele/ecoleta">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/EricSchmiele/ecoleta">
  
  <a href="https://github.com/EricSchmiele/ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/EricSchmiele/ecoleta">
  </a>

  <a href="https://github.com/EricSchmiele/ecoleta/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/EricSchmiele/ecoleta">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
  <a href="#about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#installing-the-application">Installing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <!--<a href="#running-the-application">Running</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#testing">Testing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;-->
  <a href="#built-with">Built with</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <!--<a href="#layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;-->
  <a href="#contributing">Contributing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

<br>

<p align="center">
  <img alt="Frontend" src="assets/screen.jpeg" width="50%">
</p>


## About

A project developed during the Next Level Week: a platform to help finding locations for selective collection of items such as batteries, lamps and recyclables.

## Installing the application

In order to install the application dependencies, after dowloading or branching you should run the terminal code `npm install` in the following folders:

* <u>ecoleta/server/</u>
* <u>ecoleta/web/</u>
<!--* <u>br.com.bethehero/mobile/</u>-->

Initializing database: run the code `npm run knex:migrate` (to create the database) and `npm run knex:seed` (to insert the initial data) both in the folder <u>ecoleta/server/</u>.

<!--## Running the application

On separate terminal tabs, run the code `npm start` on the folders:

* <u>br.com.bethehero/backend/</u>
* <u>br.com.bethehero/frontend/</u>
* <u>br.com.bethehero/mobile/</u>

Aditionally, in order to run the mobile application, install the <strong>Expo</strong> app on your smart phone from your standard app store and read the QR code that will be generated after running the terminal code in the <u>br.com.bethehero/mobile/</u> folder.

## Testing

All tests can be run using <strong>supertest</strong> with the following line in terminal: `npm test` 

So far there are two tests:

Back end:
* ong.spec
* generateUniqueId.spec-->

## Built with

* [Node.js](https://nodejs.org/en/)
* [React](https://reactjs.org)
<!--* [React Native](https://facebook.github.io/react-native/)
* [Expo](https://expo.io/)-->

<!--
## Layout

 You can download the layout (`.sketch`) using [this link](.github/DevRadar.sketch).

To open it in any SO, use [Figma](https://figma.com).
-->

## Contributing

* Fork this repository;
* Create a branch with your feature: `git checkout -b my-feature`;
* Commit your changes: `git commit -m 'feat: My new feature: <description>'`;
* Push it to your branch: `git push origin my-feature`.

After merging your pull request, your branch can be deleted;

## License

This project uses the MIT license. Read [LICENSE](LICENSE.txt) for details.