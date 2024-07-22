import { Role } from '../entities/role';

export class AuthRegister {
  private name: string;
  private lastname: string;
  private email: string;
  private password: string;
  private image?: string;
  private roles: Role[];

  constructor(
    name: string,
    lastname: string,
    email: string,
    password: string,
    roles: Role[]
  ) {
    if (name.trim().length < 3)
      throw new Error('Name must have 3 characters at least');
    if (lastname.trim().length < 3)
      throw new Error('Lastname must have 3 characters at least');
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
      throw new Error('Email invalid');
    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/))
      throw new Error('Password invalid format');
    if (roles.length < 1) throw new Error('Roles must have 1 role at least ');

    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.roles = roles;
  }

  get properties() {
    return {
      name: this.name,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      roles: this.roles,
    };
  }
}
