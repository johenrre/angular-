import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import decodeJWT from 'jwt-decode';
import moment from 'moment';

import { AuthInfo } from '~@interface/auth-info.interface';
import { Payload } from '~@interface/payload.interface';

export interface GetJWTResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class JWTService {
  private _jwt: string | null = null;

  get jwt() {
    return this._jwt;
  }

  // private _payload?: Payload;
  private _payload?: any;

  get payload() {
    return this._payload;
  }

  get id() {
    if (!this._payload) return;
    return this._payload.id;
  }

  get valid() {
    return !!this._payload;
  }

  // constructor(private http: HttpClient) {
  //   const jwt = this.getFromLocalStorage();
  //   const success = this.init(jwt);

  //   if (!success) this.clear();
  // }

  constructor(private http: HttpClient) {
    const jwt = this.getFromLocalStorage();
    this._payload = jwt;
  }

  fetch(info: AuthInfo) {
    return this.http.post<GetJWTResponse>('api/token', info);
  }

  // create(jwt: string) {
  //   const success = this.init(jwt);
  //   if (!success) return false;
  //   this.save(jwt);
  //   return true;
  // }

  create(jwt: string) {
    // 干掉原来走服务器
    this.save(jwt);
    this._payload = jwt;
    return true;
  }

  private getFromLocalStorage() {
    return localStorage.getItem('token');
  }

  private save(jwt: string) {
    localStorage.setItem('token', jwt);
  }

  clear() {
    localStorage.removeItem('token');
    this._payload = undefined;
  }

  private init(jwt?: string | undefined | null) {
    try {
      if (!jwt) throw new TypeError(`无效的 JSON Web Token`);
      const payload = decodeJWT<Payload>(jwt);
      if (moment().unix() > payload.exp)
        throw new Error('JSON Web Token 已过期');
      this._payload = payload;
      this._jwt = jwt;
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}
