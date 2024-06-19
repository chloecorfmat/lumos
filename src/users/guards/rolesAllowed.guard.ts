import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UpdateUserDto } from '../dto/updateUser.dto';
import { ROLES_ALLOWED_KEY } from '../decorators/rolesAllowed.decorator';

@Injectable()
export class RolesALlowedGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const body = request.body as UpdateUserDto;

    for (const property in body) {
      if (body.hasOwnProperty(property)) {
        const propertyRoles = Reflect.getMetadata(
          ROLES_ALLOWED_KEY,
          body,
          property,
        );
        if (
          propertyRoles &&
          !propertyRoles.some((role) => user.roles?.includes(role))
        ) {
          return false;
        }
      }
    }
    return true;
  }
}
