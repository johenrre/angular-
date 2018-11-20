import { Pipe, PipeTransform } from '@angular/core';
import isFinite from 'lodash/isFinite';
import toNumber from 'lodash/toNumber';

@Pipe({ name: 'yuan' })
export class YuanPipe implements PipeTransform {
  transform(value: number | string): number | string {
    const num = toNumber(value);

    if (isFinite(num)) return `${+value / 100}元`;

    return value;
  }
}
