import './btn.styl';
import template from './btn.jade';
import {Component,Input} from '@angular/core';

@Component({
  selector: 'btn',
  template: template()
})
export class BtnComponent{
  @Input() color = 'primary';
  @Input() disabled = true;
  @Input() text = '';
}
