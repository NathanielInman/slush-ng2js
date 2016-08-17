import './textBox.styl';
import template from './textBox.jade';
import {Input,Component} from '@angular/core';
import {generateAccessor,GenericAccessor} from '../../Accessor';

@Component({
  selector:  'text-box',
  template:  template(),
  providers: [generateAccessor(()=>TextBoxComponent)]
})
export class TextBoxComponent extends GenericAccessor{
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() error = false;
  @Input() password = false;
  constructor(){
    super();
  }
  onChange(value){
    this.value = value;
  }
}
