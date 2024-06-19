import { IsArray, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  username: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  email: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  @Length(8, 100)
  password: string;

  @ApiProperty({
    type: Array,
  })
  @IsArray()
  roles: string[];
}
