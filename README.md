# Sparkledge documentation

This repo is the repo where frontend code of the Sparkledge app is kept. \
The main branch is the master branch, where the final version of code created on side branches is stored.

## Getting started
To run the project on your machine, download the source code aviable in this repo. After that, run `npm install` in your console to install all of packages needed to launch the app. Then, propt `npm start` and open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Warning
To properly run the app, certain environmental variables are required. Ask the owner of the repository for the file with the variables.


## Technologies used
Sparkledge frontend application is built with `React.JS` library, `Typescript` language and `Redux` state container.\
For designing the interface, `styled-components` and `material UI` packages are in use.\
To maintain the connection with the backend of Sparkledge web service, application uses `axios` library.\
Full list of used packages and libraries can be found in `package.json` file.

## Project structure
All of the source files necessary to make the Sparkledge work correctly are stored in the `src` directory. There, they are divided into the following categories and are kept in the according folders:
### assets
In this folder, you can find all of the non-coding static resources like images, photos and background patterns. All of the graphical content should be saved into `.webp` file in order to reduce the weigh of recources and to improve loading speed of application.
### components
This is the directory where all of the components used to build the application are stored. \
The components folder contains `main.tsx` file, which is a "root file" of the project. By that, we mean the fact that `main.tsx` establishes app routing and provides graphical mode data. Apart from that, in the components folder, there are three folders:
#### subpages
Here all of the page views are kept.
#### subcomponents
The directory in which all components used for building the page views are stored.
#### helperComponents
If any sub-component requires a defragmentation, the code written to achieve that is placed in this folder.
### data
In this directory, all of the coding static data are kept. For example, the file `about.ts`, containing the data about the Sparkledge's staff that are later displayed in the about subpage.
### redux
Here all of the files dealing with the `redux` mechanics are hold. The directory contains two files and three subdirectories. 
In the `store.ts`, the redux store is established with the usage of the main reducer that is created in the `mainReducer.ts` file.   
In `mainReducer.ts`, all of the sub-reducers are combined into one. Then, with using `typeof` keyword, the type of main reducer is provided and exported to the application.\
    
Moreover, the redux directory contains the following sub-folders:
#### actions
In this subdirectory, redux actions are encoded and stored.
#### reducers
Here, all of the sub-reducers are kept.
#### types
In this folder, all of the types (names of the actions and all of other staff that is not meant to be changed during the usage of the app) is kept. The types are created in order to prevent errors caused by typos in the name of actions.  
To know more, check the [redux official site](https://redux.js.org/ "redux official site").
### styled
This directory contains all of the files that are used to built the application GUI with the `styled-components` library. The structure should be created exactly like the components directory in order to not make the project hard-to-read. If needed, code meant for `components/helperComponents` components can be stored in a files placed in `styled/subcomponents`.  
The directory consists of `main.tsx` file and two subdirectories: `subpages` and `subcomponents`.  
In the `main.tsx` file, all of the graphical interface is configured in two JSON objects: `LightMode` and `DarkMode`, which are used accordingly to the graphical mode chosen by the user. Also, the MainContainer section and the main preloader are defined in this file.

## Summing up
If you need any additional informations, contact [Szymon Kupisz](https://github.com/SKupisz/ "Szymon Kupisz") or write to us on [kontakt@sparkledge.pl](mailto:kontakt@sparkledge.pl "kontakt@sparkledge.pl")