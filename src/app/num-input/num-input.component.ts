import { Component } from '@angular/core';

@Component({
  selector: 'app-num-input',
  templateUrl: './num-input.component.html',
  styleUrls: ['./num-input.component.scss']
})
export class NumInputComponent {
  demoValue = 100;
  formatterPercent = (value: any) => `${value} %`;
  parserPercent = (value: any) => value.replace(' %', '');
  formatterDollar = (value: any) => `$ ${value}`;
  parserDollar = (value: any) => value.replace('$ ', '');
}
