import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {forwardRef} from '@angular/core';

export function generateAccessor(Component){
  return {
    provide:     NG_VALUE_ACCESSOR,
    useExisting: forwardRef(Component),
    multi:       true
  };
}

export class GenericAccessor{
  innerValue = '';
  get value(){ return this.innerValue; }
  set value(value){
    if(this.innerValue!==value){
      this.innerValue = value;
      this.onChangeCallback(value);
    } //end if
  }
  onBlur(){ this.onTouchedCallback(); }
  writeValue(value){
    if(this.innerValue!==value){
      this.innerValue = value;
    } //end if
  }
  registerOnChange(fn){ this.onChangeCallback = fn; }
  registerOnTouched(fn){ this.onTouchedCallback = fn; }
}

