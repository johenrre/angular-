import { Directive, HostBinding, Input, HostListener, Attribute} from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[greet]'
})
export class GreetDirective {
  @Input() greet: string;

  @HostBinding() get innerText() {
    return this.greet;
  }

  attr!: any;

  @HostListener('click', ['$event'])
    onClick(event: any) {
      // 这个onClick名字竟然是任意的， 应该是判断跟HostListener 最近的一个函数。
      this.greet = 'clicked!';
    }

  // @Attribute('author') author: string;
  // 不是在constructs使用的话。  得不到 this.author的值
  constructor(@Attribute('author') author: string) {
    console.log('Attribute: ', author);
  }
}
