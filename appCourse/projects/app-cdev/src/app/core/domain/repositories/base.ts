import { Observable } from 'rxjs';

export type ResultByPage<T> = {
  data: T[];
  total: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
};

export type BaseRepository<Entity, Result> = {
  create(entity: Entity): Observable<Result>;
  update(entity: Entity): Observable<Result>;
  delete(id: string): Observable<Result>;
  getOne(id: string): Observable<Result>;
  getAll(): Observable<Result[]>;
  getByPage(page: number, limit: number): Observable<ResultByPage<Result>>;
};
