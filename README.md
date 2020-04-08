# CoronaApp
A project is performing basic crud operation but a structure is totally different.In this project I used many of things lie
- Use ngrx for maintaining the store (action,dispatcher,reducer,effects,store)
- Use rxjs operator like map, pipe,mergemap,switchmap for the calling the api and update the store
- Created a loading service so when api call it is automatiocally show loading and when error occured or got a success response then loading goes  hide
- Use authgaurd for maintain the routes after the login
- Created toaster service for showing success message
- Created two module login dashboard with lazyload feature
- used bosstarp for responsive design
- used core and shared module in the structure so share will be used in appmodule like a provide which should inject on root level
- Perform CRUD operation
- ReactiveForm validation on login and dashboard
- Create a global api service and use a env value there
- Defined modal service for showng a  modal
- Define the state of api request and response using typescript

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.


## Application cred
   email : "covid19@gmail.com" 
   password : "covid@123"

## Development server

Run `ng serve --opem` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
