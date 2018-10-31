import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { jwtInterceptor } from './jwt.interceptor';

@NgModule({
  imports: [HttpClientModule],
  providers: [jwtInterceptor],
})
export class CoreModule {
  constructor(
    @Optional()     // 构造函数参数装饰器，用于将依赖项标记为可选。
    @SkipSelf()     // 一个构造函数参数装饰器，它告诉DI框架依赖解析应该从父注入器开始。
    parentModule: CoreModule,
  ) {
    if (parentModule)
      throw new Error('CoreModule 已经加载，只能在 AppModule 导入它。');
  }
}
