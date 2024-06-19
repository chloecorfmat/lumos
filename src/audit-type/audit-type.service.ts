import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuditTypeDto } from './dto/create-audit-type.dto';
import { UpdateAuditTypeDto } from './dto/update-audit-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuditType } from './entities/audit-type.entity';

@Injectable()
export class AuditTypeService {
  constructor(
    @InjectRepository(AuditType)
    private auditTypeRepository: Repository<AuditType>,
  ) {}
  async create(createAuditTypeDto: CreateAuditTypeDto): Promise<AuditType> {
    const newAuditType = this.auditTypeRepository.create({
      ...createAuditTypeDto,
    });
    return this.auditTypeRepository.save(newAuditType);
  }

  findAll() {
    return `This action returns all auditType`;
  }

  findOne(id: number) {
    return this.auditTypeRepository.findOne({ where: { id: id } });
  }

  async update(
    id: number,
    updateAuditTypeDto: UpdateAuditTypeDto,
  ): Promise<AuditType> {
    const auditType = await this.auditTypeRepository.findOne({
      where: { id: id },
    });

    if (!auditType) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    const updatedAuditType = Object.assign(auditType, updateAuditTypeDto);
    return this.auditTypeRepository.save(updatedAuditType);
  }

  remove(id: number) {
    return `This action removes a #${id} auditType`;
  }
}
