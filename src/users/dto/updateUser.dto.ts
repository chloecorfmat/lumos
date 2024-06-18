import { IsArray, IsOptional, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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
  roles?: string[];
}
