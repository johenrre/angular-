import { Component, Input, OnInit } from '@angular/core';
import { MenusService } from './menus.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
})
export class MenusComponent implements OnInit {
  @Input()
  isCollapsed: boolean;

  menus: any;

  constructor(private menu: MenusService) {}

  ngOnInit() {
    this.menus = this.menu.menus();
  }
}
