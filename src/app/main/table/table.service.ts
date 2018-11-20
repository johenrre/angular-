import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService, NzNotificationService } from 'ng-zorro-antd';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor(
    private readonly http: HttpClient,
    private readonly message: NzMessageService,
    private readonly notice: NzNotificationService,
  ) {}

  getData() {
    return [
      {
      createTime: '2018/11/19',
      nick: 'rookie',
      level: '45',
      money: 10000,
      },
    ];
  }

  errorHander = (err: HttpErrorResponse, text: string) => {
    if (err.status === 404) {
      this.message.info(`暂无${text}`);
    } else if (!err.error.isRESTful) {
      this.message.error(`错误 ${err.statusText}，获取${text}失败`);
    } else {
      if (err.error.detail.error) {
        this.message.error(err.error.detail.error);
      } else {
        const errMassage = JSON.stringify(err.error.detail, null, 4);
        this.notice.create('error', '请求参数错误', errMassage);
      }
    }
    return throwError(err);
  };

  download(type: string) {
    return this.http
      .get('api/withdrawal-order/withdraw-excel', {
        headers: { Accept: type },
        responseType: 'arraybuffer',
        observe: 'response',
      })
      .pipe(catchError(err => this.errorHander(err, '可导出的人工转账数据')));
  }

  downloadWithdrawalReport(type: string, params: any) {
    return this.http
      .get('api/withdrawal-order/report-excel', {
        headers: { Accept: type },
        responseType: 'arraybuffer',
        observe: 'response',
        params,
      })
      .pipe(catchError(err => this.errorHander(err, '可导出的提现数据')));
  }
}
