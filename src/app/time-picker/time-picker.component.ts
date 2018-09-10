import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})

export class TimePickerComponent {
  plainFooter = 'plain extra footer';
  footerRender = () => 'extra footer';
}
