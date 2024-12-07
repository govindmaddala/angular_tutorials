### Angular Tutorials:
#### Setup of project and run the project:
- Angular setup:
    **``` npm i -g @angular/cli ```**
- Angular Version checking:
    **``` ng version ```**
- Project Creation: 
    **``` ng new <project_name> ```**

    
#### Manual Component:
- Here **_1_ManualComponent.component.ts** file is created. It contains all the content.
```
|__ angular_1_ManualComponent
    |___1_ManualComponent.component.ts
```

- **_1_ManualComponent.component.ts**
```
import { Component } from "@angular/core";

@Component({
    selector: "app-_1_ManualComponent",
    template: "<h2>_1_ManualComponent Template</h2>",
    styles: ['h2{color: red}']
})
export default class _1_ManualComponent{}
```

- In **app.component.ts**: add **_1_ManualComponent** in imports array.
```imports: [RouterOutlet, _1_ManualComponent],```
- In **app.component.html**: add **<app-_1_ManualComponent></<app-_1_ManualComponent>** in desired place.

#### Manually Separate components:
- Here selector, template and styles contains in separate files and they are integrated into component annotation.
```
|__ angular_2_ManualSeparate
    |__ _2_ManualSeparate.component.css
    |__ _2_ManualSeparate.component.spec.ts
    |__ _2_ManualSeparate.component.html
    |__ _2_ManualSeparate.component.ts
```
- Now **_2_ManualSeparate.component.ts** contains all the content:
```
import { Component } from "@angular/core";
@Component({
    selector: "app_2_ManualSeparate",
    templateUrl: "./_2_ManualSeparate.component.html",
    styleUrls: ["./_2_ManualSeparate.component.css"]
})
export default class _2_ManualSeparate{}
```
- In **app.component.ts**: add **_2_ManualSeparate** in imports array.
```imports: [RouterOutlet, _2_ManualSeparate],```
- In **app.component.html**: add **<app_2_ManualSeparate></<app_2_ManualSeparate>** in desired place.


#### Generate Component from CMD:
- We can generate all these files from cmd using following command:
```ng generate component [component_name]```
```ng g c [component_name]```
- Creates a new, generic component definition in the given project. 
- for running **```ng g c angular_3_GC```** it creates following files:
```
    |__app
        |__angular-3-gc
            |__angular-3-gc.component.css
            |__angular-3-gc.component.html
            |__angular-3-gc.component.spec.ts
            |__angular-3-gc.component.ts
```
- Previously it used to configure the component into **app.module.ts** (now app.component.ts is serving this file's purpose) also, but now we have to import that manually.
- Content of **angular-3-gc.component.ts** is as follows:
```
import { Component } from '@angular/core';
@Component({
  selector: 'app-angular-3-gc',
  imports: [],
  templateUrl: './angular-3-gc.component.html',
  styleUrl: './angular-3-gc.component.css'
})
export class Angular3GCComponent {}
```

- In **app.component.ts**: add **Angular3GCComponent** in imports array.
```imports: [RouterOutlet, FeaturesComponentComponent],```
- In **app.component.html**: add **<app-angular-3-gc></<app-angular-3-gc>** in desired place.

#### Angular Data binding:
- **{{}}** is used for string interpolation.
- Let's say there is an variable is there in component page. Here it is in **angular-4-data-binding-component.ts**:
    - ``` varFromComponent: string = "Variable from Angular4DataBindingComponent" ```
    - Now in **angular-4-data-binding-component.html**, I can access this by 
    - ```<h3>{{varFromComponent}}</h3>``` and in UI it gives **Variable from Angular4DataBindingComponent** value.


#### Props Passing:
- Props passing from parent to child and vice-versa is bit easy when compared to react.
##### From Parent to Child component:
- From parent to child, we can pass by using **@Input()** decorator.
- Code part:
    - In Parent Level:
        - In **angular-5-p2c-ds-parent.component.ts**:
            ```
            import { Component } from '@angular/core';
            import { Angular5P2cDsChildComponent } from '../angular-5-p2c-ds-child/angular-5-p2c-ds-child.component';

            @Component({
            selector: 'app-angular-5-p2c-ds-parent',
            imports: [Angular5P2cDsChildComponent],
            templateUrl: './angular-5-p2c-ds-parent.component.html',
            styleUrl: './angular-5-p2c-ds-parent.component.css'
            })

            export class Angular5P2cDsParentComponent {
            msgFromP2C: string = "Message from parent(Angular5P2cDsParentComponent) to child (Angular5P2cDsChildComponent)"
            }
            ```
            i.e 
            - in imports: Angular5P2cDsChildComponent i.e child component is imported.
            - msgFromP2C variable is declared.
        - In ****angular-5-p2c-ds-parent.component.html**:
            ```
            <app-angular-5-p2c-ds-child [fromParent] = "msgFromP2C"></app-angular-5-p2c-ds-child>
            ```
            - child template **app-angular-5-p2c-ds-child** is used and fromParent is passed to the child template and msgFromP2C variable is assigned.
            - PS: **fromParent** same word has to be used in child component to access the variable passed from parent to child.
    - In Child Level:
        - In **angular-5-p2c-ds-child.component.ts**:
            ```
            import { Component, Input } from '@angular/core';
            @Component({
            selector: 'app-angular-5-p2c-ds-child',
            imports: [],
            templateUrl: './angular-5-p2c-ds-child.component.html',
            styleUrl: './angular-5-p2c-ds-child.component.css'
            })
            export class Angular5P2cDsChildComponent {

            @Input() fromParent: string | undefined;
            }
            ```
            - @Input decorator is used and here fromParent word which is similar to the word used in **angular-5-p2c-ds-parent.component.html**
        - In **angular-5-p2c-ds-child.component.html**:
            ```<h3>{{fromParent}}</h3>```
    - In app.component.ts: import parent component and in app.component.html use parent template as per the requirement.