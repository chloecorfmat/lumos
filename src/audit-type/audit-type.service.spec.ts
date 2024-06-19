import { Test, TestingModule } from '@nestjs/testing';
import { AuditTypeService } from './audit-type.service';

describe('AuditTypeService', () => {
  let service: AuditTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuditTypeService],
    }).compile();

    service = module.get<AuditTypeService>(AuditTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
