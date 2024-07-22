import { Observable } from 'rxjs';

import { IResponseRegister } from '../../infrastructure/dtos/register.dto';
import { AuthRegister } from '../roots/auth-register';

export interface AuthRepository {
  register(authRegister: AuthRegister): Observable<IResponseRegister>;
}
