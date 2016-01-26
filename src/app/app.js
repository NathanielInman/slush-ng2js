import 'reflect-metadata/Reflect';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
  selector: 'my-app',
  template: '<h1>My first {{name}} app!</h1>'
})
class MyApp {
  constructor(){
    this.name = 'angular2';
  }
}

bootstrap(MyApp);

