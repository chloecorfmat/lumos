import { Test, TestingModule } from '@nestjs/testing';
import { AuditTypeController } from './audit-type.controller';
import { AuditTypeService } from './audit-type.service';

describe('AuditTypeController', () => {
  let controller: AuditTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuditTypeController],
      providers: [AuditTypeService],
    }).compile();

    controller = module.get<AuditTypeController>(AuditTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
