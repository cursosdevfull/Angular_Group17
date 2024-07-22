import { validate } from 'uuid';

export class Role {
  private roleId: string;

  constructor(roleId: string) {
    if (!validate(roleId)) throw new Error('RoleId invalid');

    this.roleId = roleId;
  }
}
