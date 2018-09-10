import { Component, TemplateRef, ViewContainerRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-directive-test',
  templateUrl: './directive-test.component.html',
  styleUrls: ['./directive-test.component.scss'],
})
export class DirectiveTestComponent implements AfterViewInit {
  context = {
    message: 'Hello ngOutletContext!',
    $implicit: 'Hello, Semlinker!'
  };

  @ViewChild('tpl')
  tplRef: TemplateRef<any>;

  constructor(private vcRef: ViewContainerRef) {}

  ngAfterViewInit() {
    this.vcRef.createEmbeddedView(this.tplRef);
  }
}
