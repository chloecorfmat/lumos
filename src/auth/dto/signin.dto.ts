import { IsArray, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../../users/enums/role.enum';

export class SignInDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  username: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  password: string;
}
