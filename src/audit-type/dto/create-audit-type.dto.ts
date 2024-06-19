import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Min } from 'class-validator';

export class CreateAuditTypeDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  document: string;

  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  @Min(0)
  version: number;
}
