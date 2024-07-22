import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import env from '../../../assets/environment/env.json';
import { AuthRepository } from '../domain/repositories/auth.repository';
import { AuthRegister } from '../domain/roots/auth-register';
import { IResponseRegister } from './dtos/register.dto';

@Injectable()
export class AuthInfrastructure implements AuthRepository {
  constructor(private readonly http: HttpClient) {}

  register(authRegister: AuthRegister): Observable<IResponseRegister> {
    return this.http.post<IResponseRegister>(
      `${env.apiUrl}/v1/auth/register`,
      authRegister.properties
    );
  }
}
