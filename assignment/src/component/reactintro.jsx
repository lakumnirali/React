import React, { Component } from 'react';

class reactintro extends Component {
    render() {
        return (
            <div>
                <ul><h1><li> What is React Js?</li></h1></ul>
                <p>FrontEnd Development tool for creating single page application</p><br />
                <p>React, also known as ReactJS, is a well-known front-end JavaScript library for developing user interfaces and related components. It employs the MVC architecture, with a different table of presentation and data availability. One of its distinguishing features is the Virtual DOM and how it handles document access and manipulation. The DOM interacts well with HTML and XML documents, causing them to behave similarly to a tree structure, and each HTML element functions as an object.</p><br />
                <p>React, which is powered by Facebook, has been recognized as a fantastic library in the front-end family of tools. It uses the JSX coding style, with a mix of HTML quotes and tag syntax, to create the components. It breaks down larger components into smaller ones that can be managed separately and individually. With this feature, developers' overall productivity is bound to rise. Developers can check out various React Admin Template available in the market to accelerate their development process and create professional and visually appealing admin interfaces.</p>
                <h3>Pros:</h3>
                <ul><li>Component reusability facilitates collaboration and reuse in other parts of the application. </li></ul>
                <ul><li>Through the use of virtual DOM, you can achieve consistent and seamless performance.</li></ul>
                <ul><li>It is the ultimate solution to writing components in React hooks because it allows you to write components without classes and makes learning React easier. </li></ul><br />
                <h3>cons:</h3>
                <ul><li>React dev tools are advanced and extremely useful. </li></ul>
                <ul><li>Due to this frontend framework's multiple and constant updates, it is hard to create proper documentation, which has an effect on the learning curve for beginners. </li></ul>
                <ul><li>When starting out with the framework, developers find it difficult to understand the complexities of JSX. </li></ul>
                <ul><li>It only provides solutions for the front end. </li></ul>
                <ul><h1><li> What is React Js?</li></h1></ul>
                <ul>npm is the world's largest Software Registry.</ul>
                <ul>The registry contains over 800,000 code packages.</ul>
                <ul>Open-source developers use npm to share software.</ul>
                <ul>Many organizations also use npm to manage private development.</ul>
                <ul>npm is free to use.</ul>
                <ul>You can download all npm public software packages without any registration or logon.</ul>
                <h2>Installing npm:</h2>
                <ul><li>npm is installed with Node.js</li></ul>
                <ul><li>This means that you have to install Node.js to get npm installed on your computer.</li></ul>
                <ul><li>Download Node.js from the official Node.js web site: https://nodejs.org</li></ul>
                <h3>Software Package Manager:</h3>
                <ul><li>The name npm (Node Package Manager) stems from when npm first was created as a package manager for Node.js.</li></ul>
                <ul><li>All npm packages are defined in files called package.json.</li></ul>
                <ul><li>The content of package.json must be written in JSON.</li></ul>
                <ul><h1><li> What is Role of Node Js in react Js?</li></h1></ul>
                <p>ReactJS uses Node.js, a JavaScript runtime, to build your JavaScript code.</p>
                <p>Basically, the ReactJS is a JavaScript framework which needs the help of node js and npm(Package manager) to tell the native side(Android/iOS) that these are packages I need to run my app. And it adds all the dependencies needed to run the app.</p>
               <p>Nodejs is not compulsorily required to run react code or build react apps. It is required to use so many tools that makes react development easy and avoid doing things manually. For example - Tool chain create-react-app is a npm package(which in turn require nodejs to be installed on system) which setup development environment and makes so many things already configured.</p>
               <ul><h1><li> What is CLI command In React Js?</li></h1></ul>
              <p>Command-line interfaces (CLIs) built-in Node. js authorize automating repetitive tasks while leveraging the Node. js ecosystem. Package managers like npm and yarn are distributed and ingested across multiple platforms.</p>
              <ul><h1><li> What is Components in React Js?</li></h1></ul>
              <p>Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.</p>
              <ul><h1><li> What is Header and Content Components in React Js?</li></h1></ul>
              <p>Headers are compositions that extend standard navbar functionalities. They contain additional components like a jumbotron, sub-navbar, or image covers which serve as a containers for extra navigation elements - usually links, forms, or call-to-action buttons.</p>
              <ul><h1><li> How to install React Js on Windows, Linux Operating System? How to Install
NPM and How to check version of NPM?</li></h1></ul>
               <h3>Windows</h3>
            <p>Step 1: Install Node.js installer for windows. Click on this link. Here install the LTS version (the one present on the left). Once downloaded open NodeJS without disturbing other settings, click on the Next button until it’s completely installed.</p>
            <p>Step 2: Open command prompt  to check whether it is completely installed or not type the command - </p>
            <p>Step 3: Now in the terminal run the below command: npm install -g create-react-app  </p>
            <p>Step 4:Now Create a new folder where you want to make your react app using the below command: 

mkdir newfolder</p>
<p>Step 5: Now inside this folder run the command –create-react-app reactfirst YOUR_APP_NAME</p>
             <p>Step 6: Now open the IDE of your choice for eg.  Visual studio code and open the folder where you have installed the react app newfolder (in the above example)  inside the folder you will see your app’s name reactapp (In our example). Use the terminal and move inside your app name folder.Use command  cd reactapp (your app name)</p>
              <p>Step 7: To start your app run the below command npm start </p>
              <h3>Linux Operating System</h3>
            </div>
        );
    }
}

export default reactintro;