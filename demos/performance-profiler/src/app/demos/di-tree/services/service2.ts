import {Injectable} from '@angular/core';

export class Service2 {
  value: string = 'service2';
  constructor() {
    this.value = this.value + ' Id: ' + Math.floor(Math.random() * 500);
  }
}
