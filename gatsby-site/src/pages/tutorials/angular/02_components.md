---
_id: 2
title: "Components"
description: "Angular Components"
date: "2019-08-02"
image: ../images/angular_8_components.png
widget: false
tags: ["angular", "tutorial", "angular8", "components"]
category: "angular"
---

<!-- 02 - components  -->

# Components

Components help us break a functionality into smaller chunks of code which could be reused by including and inserting them in appropriate modules and components.

## Default Component

**AppComponent** is the default component created along with the application with a boilerplate code and links to the official Angular documentation and sample project.

### Create your first component

To create a component with the Angular Cli use the below command.

`ng g c home`

When run successfully the following output is displayed on the Terminal.

```
CREATE src/app/home/home.component.scss (0 bytes)
CREATE src/app/home/home.component.html (19 bytes)
CREATE src/app/home/home.component.spec.ts (614 bytes)
CREATE src/app/home/home.component.ts (262 bytes)
UPDATE src/app/app.module.ts (467 bytes)
```

This creates a folder with the name of the component (home) and the necessary files required by the component. Also it updates the **app.module.ts** where the new component is added to **'declarations'**

**Note:** The word 'Component' is added by default to the components created with CLI so avoid including it in the name while generating a component. i.e. ~~`ng g c home-component`~~

### Preview your Home Component

Replace the content of the app.component.html with the below code to preview your newly created Home Component.

`<app-home></app-home>`

Using the selector of the component created (details can be found in the component's .ts file) a component is included inside any other component.

```
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
```

Using the selector 'app-home' the HomeComponent is included in the AppComponent.

If the component's template is very small we can delete the ./home.component.html file and include the code inside the .ts file as below.

```
@Component({
  selector: 'app-home',
  template: `<p>home works!</p>`,
  styleUrls: ['./home.component.scss']
})
```
**Note:** the meta information inside the @Component decorator includes a *template* instead of *templateUrl*.

Once you save the changes of the app.component.html, the browser automatically refreshes with the new changes and you could see the template 

`home works!`

rendered on the page.

### Play around

- [x] Try modifying the template in the .ts file / .html file (remember to update the right information in the component's meta data)
- [x] Try adding CSS classes in the ./home.component.scss file and play with styling your first component