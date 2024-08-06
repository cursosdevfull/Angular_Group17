import { BaseRepository } from '../domain/repositories/base';

export abstract class BaseApplication<
  Entity,
  Result,
  Repository extends BaseRepository<Entity, Result>
> {
  protected abstract repository: Repository;

  create(entity: Entity) {
    return this.repository.create(entity);
  }

  update(entity: Entity) {
    return this.repository.update(entity);
  }

  delete(id: string) {
    return this.repository.delete(id);
  }

  getOne(id: string) {
    return this.repository.getOne(id);
  }

  getAll() {
    return this.repository.getAll();
  }

  getByPage(page: number, limit: number) {
    return this.repository.getByPage(page, limit);
  }
}
