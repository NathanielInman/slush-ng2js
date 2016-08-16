import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone'; //dev only
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AppModule} from './AppModule';

// Determine whether we are production viable or not
//enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);

