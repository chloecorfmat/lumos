import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class UpdateAuditTypeDto {
  @ApiProperty({
    type: String,
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    type: String,
  })
  @IsOptional()
  @IsString()
  document?: string;

  @ApiProperty({
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  version?: number;
}
