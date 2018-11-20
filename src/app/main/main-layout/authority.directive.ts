import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { CurrentUserService } from '~@core/current-user.service';

import { Authority } from '~@interface/authority.interface';

@Directive({ selector: '[appAuthority]' })
export class AuthorityDirective {
  private hasView = false;

  authorities: Authority[] = [];

  @Input()
  set appAuthority(code: string) {
    // let access = false;

    // this.authorities.forEach(a => {
    //   if (a.id.split('#')[0].split(':').indexOf(code) !== -1) {
    //     access = true;
    //   }
    // });

    // if (this.currentUserService.isSuperAdmin()) {
    //   access = true;
    // }

    // if (access && !this.hasView) {
    //   this.viewContainer.createEmbeddedView(this.templateRef);
    //   this.hasView = true;
    // } else if (!access && this.hasView) {
    //   this.viewContainer.clear();
    //   this.hasView = false;
    // }
  }

  constructor(
    private currentUserService: CurrentUserService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {
    // this.authorities = currentUserService.authorities;
  }
}
