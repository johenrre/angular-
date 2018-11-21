import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenusService {
  constructor() {}
  _Menus = [
    {
      text: '表单',
      link: '/form',
      icon: 'form',
      children: [],
    },
    {
      text: '表格',
      link: '/table',
      icon: 'table',
      children: [],
    },
    {
      text: '图表',
      link: '',
      icon: 'area-chart',
      children: [
        {
          text: 'echarts折线图',
          link: '/charts/line',
          icon: '',
        },
        {
          text: 'ngx折线图',
          link: '/charts/ngxLine',
          icon: '',
        },
      ],
    },
  ];
  menus() {
    return this._Menus;
  }
}
