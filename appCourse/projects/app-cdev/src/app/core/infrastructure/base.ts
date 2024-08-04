import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { map, Observable } from 'rxjs';

import env from '../../../assets/environment/env.json';
import { ResultByPage } from '../domain/repositories/base';

export abstract class BaseInfrastructure<
  Entity extends { properties: Record<string, any> },
  Result
> {
  private readonly http: HttpClient = inject(HttpClient);

  constructor(private readonly endpoint: string) {}

  create(entity: Entity): Observable<Result> {
    return this.http
      .post<Result>(`${env.apiUrl}/v1/${this.endpoint}`, entity.properties)
      .pipe(map((resp: any) => resp.result.response));
  }
  update(entity: Entity): Observable<Result> {
    return this.http
      .put<Result>(`${env.apiUrl}/v1/${this.endpoint}`, entity.properties)
      .pipe(map((resp: any) => resp.result.response));
  }
  delete(id: string): Observable<Result> {
    return this.http
      .delete<Result>(`${env.apiUrl}/v1/${this.endpoint}/${id}`)
      .pipe(map((resp: any) => resp.result.response));
  }
  getOne(id: string): Observable<Result> {
    return this.http
      .get<Result>(`${env.apiUrl}/v1/${this.endpoint}/${id}`)
      .pipe(map((resp: any) => resp.result.response));
  }
  getAll(): Observable<Result[]> {
    return this.http
      .get<Result[]>(`${env.apiUrl}/v1/${this.endpoint}`)
      .pipe(map((resp: any) => resp.result.response));
  }
  getByPage(page: number, limit: number): Observable<ResultByPage<Result>> {
    return this.http
      .get<ResultByPage<Result>>(
        `${env.apiUrl}/v1/${this.endpoint}/page/${page}/size/${limit}`
      )
      .pipe(map((resp: any) => resp.result.response));
  }
}
