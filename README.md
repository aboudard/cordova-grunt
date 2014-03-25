cordova-grunt
=============

This project aims to make the build process of a cordova-ionic Android project easier.

# Cordova grunt script to build a Ionic project.

When you have a cordova project, some folders and image files are :
- irrelevant
- not generated
- depending on the UI framework you use

Icons are only generated with Phonegap Build.

The reference file structure this script is based on can be found here : https://github.com/phonegap/phonegap-start
The script is all about copying icons.
A clean task was added to remove a /scss folder (considering you work with Ionic UI framework).
A clean task was added to remove a /res folder (from phoengap-start)
A sass compiling task was added for the ionic app.scss.


## The grunt command will build the Android application for you. Here are the steps :

- sass compile
- Android cordova build
- clean scss and res folders in platform folder
- copy assets in platform folder



# Usage

## Install grunt

> npm install -g grunt-cli --save-dev

## Create Cordova project

> cordova create TestCordova

> cd TestCordova/www

> cordova platform add android

## Copy desired assets
Let's say we start with Ionic, copy /scss from Ionic distribution in your /www project.
You copy the /res folder from phonegap-start in your /www folder.


## Install grunt tasks

> cd TestCordova

Copy the provided Grunt files

> npm install

## Run grunt tasks

> grunt


