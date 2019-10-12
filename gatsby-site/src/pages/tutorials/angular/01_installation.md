---
_id: 1
title: "Installation"
description: "Angular 8 Cli Installation"
date: "2019-08-03"
image: ../images/angular_8_logo.jpg
widget: false
tags: ["angular", "tutorial", "angular8", "installation"]
category: "angular"
---

<!-- 01 - Installation  -->

# Angular Tutorials
###### ng v8.2.0

## Installation

* Install [NODE](https://nodejs.org/)

* Run the following commands to check Node installation and then install Angular-CLI.
`node -v` should return the version of Node installed in the machine. Mine is **v12.7.0**

* Install Angular cli 
`npm install -g @angular.cli` installs the latest Angular-Cli globally

* Verify Angular Cli installation 
`ng --version` hould return the following.

```
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 8.2.0
Node: 12.7.0
OS: darwin x64
Angular: 8.2.0
... animations, cli, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.802.0
@angular-devkit/build-angular     0.802.0
@angular-devkit/build-optimizer   0.802.0
@angular-devkit/build-webpack     0.802.0
@angular-devkit/core              8.2.0
@angular-devkit/schematics        8.2.0
@ngtools/webpack                  8.2.0
@schematics/angular               8.2.0
@schematics/update                0.802.0
rxjs                              6.4.0
typescript                        3.5.3
webpack                           4.38.0

```

## Create a New Angular (8) Project

#### `ng new my-app` 
creates the new project with the name my-app with all the required dependencies installed.

**Note:** You may be prompted to choose if you require 'routing-module' and preferred 'stylesheet' preprocessors. Choose according to your preference. You can also mention your preference in the command to create a new project. `ng new my-app --routing --style=scss` will create a new Angular application with a Routing module and set the schematics for stylesheets as SCSS. This can be verified by going to the **angular.json** 

``` 
"schematics": {
    "@schematics/angular:component": {
        "style": "scss"
    } 
```

## Start your Angular application

Run `ng serve` to start your angular application.

Visit `localhost:4200` (port 4200 is used by default) to see your application up and running.
