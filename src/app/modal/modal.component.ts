import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent {
  isVisible = false;
  isOkLoading = false;
  isDisable = false;

  footer = [
    {
      label: 'ok',
      disabled: () => this.isDisable,
      type: 'primary',
    }
  ];

  getFooter() {
    return [
      {
        label: 'ok',
        disabled: this.isDisable,
        type: 'primary',
      }
    ];
  }

  getVal() {
    return 1;
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    window.setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleClick() {
    this.isDisable = !this.isDisable;
  }
}
