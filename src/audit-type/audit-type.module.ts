import { Module } from '@nestjs/common';
import { AuditTypeService } from './audit-type.service';
import { AuditTypeController } from './audit-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditType } from './entities/audit-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuditType])],
  providers: [AuditTypeService],
  exports: [AuditTypeService],
  controllers: [AuditTypeController],
})
export class AuditTypeModule {}
