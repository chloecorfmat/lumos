import { Role } from '../enums/role.enum';

export const ROLES_ALLOWED_KEY = 'roles';
export const RolesAllowed = (...roles: Role[]): PropertyDecorator => {
  return (target: Object, propertyKey: string | symbol) => {
    Reflect.defineMetadata(ROLES_ALLOWED_KEY, roles, target, propertyKey);
  };
};
