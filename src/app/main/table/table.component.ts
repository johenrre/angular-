import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isNil, omitBy } from 'lodash';
import moment from 'moment';
import { of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { checkForm } from '~@helper/check-form';
import { TableService } from './table.service';

const { required, maxLength, minLength, max, min } = Validators;

export interface PagingTableConfig {
  data: any;
  page: number;
  total: number;
  size: number;
}

@Component({
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  isloadingForm = false;
  isvisibleModal = false;

  tableConfig: PagingTableConfig = {
    page: 1,
    total: 0,
    data: [],
    size: 10,
  };

  initDateTimeRange = [
    moment(new Date())
      .subtract(5, 'day')
      .toDate(),
    new Date(),
  ];

  form: FormGroup = this.fb.group({
    playerId: [null],
    auditedStatus: [null],
    paymentApproach: [null],
    payoutStatus: [null],
    dateTimeRange: [this.initDateTimeRange, required],
  });

  formEdite = this.fb.group({
    auditStatus: [1, [required]],
  });

  formExport: FormGroup = this.fb.group({
    time: [null, required],
  });

  constructor(
    private readonly fb: FormBuilder,
    private dataService: TableService,
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    checkForm(this.form);
    if (this.form.invalid) return;

    // this.isloadingForm = true;

    const { dateTimeRange, ...rest } = this.form.value;
    const startDateTime = moment(dateTimeRange[0]).format('YYYY-MM-DD HH:mm');
    const endDateTime = moment(dateTimeRange[1]).format('YYYY-MM-DD HH:mm');

    const queryValue = omitBy({ ...rest, startDateTime, endDateTime }, isNil);

    const { page, size } = this.tableConfig;

    const params = {
      ...queryValue,
      page,
      size,
    };

    this.tableConfig.data = this.dataService.getData();
    console.log('params', params);
    console.log('tableConfig', this.tableConfig);

    // this.dataService
    //   .withdrawalReportData(params)
    //   .pipe(
    //     catchError((err: HttpErrorResponse) => {
    //       if (err.error.isRESTful && err.status === 404) {
    //         this.isloadingForm = false;
    //         return of({
    //           withdrawals: [],
    //           count: 0,
    //         });
    //       }

    //       console.log(err);
    //       return throwError(err);
    //     }),
    //     tap((data: any) => {
    //       this.tableConfig.data = data.withdrawals;
    //       this.tableConfig.total = data.count;
    //       this.isloadingForm = false;
    //     }),
    //     catchError(err => {
    //       this.isloadingForm = false;
    //       return throwError(err);
    //     }),
    //   )
    //   .subscribe();
  }

  onClickEdite() {
    this.isvisibleModal = true;
  }

  onClickAdd() {
    this.isvisibleModal = true;
  }

  onHideModal() {
    this.isvisibleModal = false;
  }

  onReset() {
    this.form.reset();
  }

  onExport() {
    checkForm(this.form);
    if (this.form.invalid) return;

    const { dateTimeRange } = this.form.value;

    const params = {
      startDateTime: moment(dateTimeRange[0]).format('YYYY-MM-DD HH:mm'),
      endDateTime: moment(dateTimeRange[1]).format('YYYY-MM-DD HH:mm'),
    };
    console.log('导出Excel的params: ', params);
    const type =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    // this.dataService.downloadForm(type, params).subscribe(data => {
    //   if (
    //     data.headers.has('content-type') &&
    //     data.headers.get('content-type') === type
    //   ) {
    //     const blob = new Blob([data.body as any], { type });
    //     const url = window.URL.createObjectURL(blob);
    //     const a = document.createElement('a');
    //     document.body.appendChild(a);
    //     a.style.display = 'none';
    //     a.href = url;
    //     const t = moment().format('YYYY-MM-DD HH:mm:ss');
    //     a.download = `提现订单报表${t}`;
    //     a.click();
    //     window.URL.revokeObjectURL(url);
    //     a.remove();
    //   }
    // });
  }
}
