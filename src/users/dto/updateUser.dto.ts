import { IsArray, IsOptional, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { RolesAllowed } from '../decorators/rolesAllowed.decorator';
import { Role } from '../enums/role.enum';

export class UpdateUserDto {
  @ApiProperty({
    type: String,
  })
  @IsOptional()
  @IsString()
  username?: string;

  @ApiProperty({
    type: String,
  })
  @IsOptional()
  @IsString()
  email?: string;

  @ApiProperty({
    type: String,
  })
  @IsOptional()
  @IsString()
  @Length(8, 100)
  password?: string;

  @ApiProperty({
    type: Array,
  })
  @IsOptional()
  @IsArray()
  @RolesAllowed(Role.Admin)
  roles?: string[];
}
