import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import env from '../../../assets/environment/env.json';
import { AuthLoginResponse } from './auth-login.response';
import { AuthTokens } from './auth-tokens';
import { AuthVerifyResponse } from './auth-verify.response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  login(
    email: string,
    password: string,
    recaptchaCode: string
  ): Observable<AuthTokens> {
    return this.http
      .post<AuthLoginResponse>(`${env.apiUrl}/v1/auth/login`, {
        email,
        password,
        recaptchaCode,
      })
      .pipe(map((data: AuthLoginResponse) => data.result.response));
  }

  verifyToken(token: string): Observable<AuthTokens> {
    return this.http
      .post<AuthVerifyResponse>(
        `${env.apiUrl}/v1/auth/verify-2fa`,
        { token },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
          },
        }
      )
      .pipe(map((data: AuthVerifyResponse) => data.result.response));
  }
}
