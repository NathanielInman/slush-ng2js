import template from './main.jade';
import './main.styl';
import {Component} from '@angular/core';

@Component({
  selector: 'main',
  template: template()
})
export class Main{
  constructor(){
    this.name = 'Angular 2';
    this.bounding = 'once';
  }
}

