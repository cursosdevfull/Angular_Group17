import { Inject, Injectable, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { filter, map, switchMap } from 'rxjs';

import { AuthRepository } from '../domain/repositories/auth.repository';
import { AuthRegister } from '../domain/roots/auth-register';
import { AuthInfrastructure } from '../infrastructure/auth.infrastructure';
import {
  IResponseRegister,
  RegisterDto,
  RegisterInfo,
} from '../infrastructure/dtos/register.dto';

@Injectable()
export class AuthApplication {
  constructor(
    @Inject(AuthInfrastructure) private readonly authRepository: AuthRepository
  ) {}

  credentials = signal<AuthRegister>({} as AuthRegister);

  private registerObservable = toObservable(this.credentials).pipe(
    filter(Boolean),
    switchMap((authRegister: AuthRegister) =>
      this.authRepository
        .register(authRegister)
        .pipe(
          map((item: IResponseRegister) => RegisterDto.fromDataToRequest(item))
        )
    )
  );

  registerSignal = toSignal<RegisterInfo, RegisterInfo>(
    this.registerObservable,
    { initialValue: {} as RegisterInfo }
  );

  /*  register(authRegister: AuthRegister): Signal<RegisterInfo> {
    return toSignal<RegisterInfo, RegisterInfo>(
      this.authRepository
        .register(authRegister)
        .pipe(
          map((item: IResponseRegister) => RegisterDto.fromDataToRequest(item))
        ),
      { initialValue: {} as RegisterInfo }
    );
  } */
}
