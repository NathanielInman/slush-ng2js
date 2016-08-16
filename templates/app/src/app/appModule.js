import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {Main} from './components/main/main';
import {BtnComponent} from './components/btn/btn';
import {TextBoxComponent} from './components/textBox/textBox';

@NgModule({
  imports:      [BrowserModule,FormsModule],
  declarations: [Main,BtnComponent,TextBoxComponent],
  bootstrap:    [Main]
})
export class AppModule {}

