cordova-grunt
=============

# Cordova grunt script to clean and copy images

When you have a cordova project, some folders and image files are :
- irrelevant
- not generated

Icons are only generated with Phonegap Build.

The reference file structure this script is based on can be found here : https://github.com/phonegap/phonegap-start
The script is all about copying icons.
A clean task was added to remove a scss folder (considering you work with Ionic UI framework).

You mus build your cordova project BEFORE you run the grunt command.

# Usage

## Install grunt

> npm install -g grunt-cli --save-dev

## Create Cordova project

> cordova create TestCordova

> cd TestCordova/www

> cordova platform add android

## Copy desired assets
Let's say we start with Ionic, copy scss from Ionic distribution in your project.


## Install grunt tasks

> cd TestCordova

> Copy the provided Grunt files

> npm install

## Run grunt tasks

> grunt


