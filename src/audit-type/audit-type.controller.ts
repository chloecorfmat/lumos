import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuditTypeService } from './audit-type.service';
import { CreateAuditTypeDto } from './dto/create-audit-type.dto';
import { UpdateAuditTypeDto } from './dto/update-audit-type.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from '../user/decorators/roles.decorator';
import { Role } from '../user/enums/role.enum';

@Controller('audit-type')
export class AuditTypeController {
  constructor(private readonly auditTypeService: AuditTypeService) {}

  @Post()
  @ApiBearerAuth()
  @Roles(Role.Admin)
  create(@Body() createAuditTypeDto: CreateAuditTypeDto) {
    return this.auditTypeService.create(createAuditTypeDto);
  }

  @Get()
  findAll() {
    return this.auditTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.auditTypeService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @Roles(Role.Admin)
  update(@Param('id') id: string, @Body() updateAuditTypeDto: UpdateAuditTypeDto) {
    return this.auditTypeService.update(+id, updateAuditTypeDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @Roles(Role.Admin)
  remove(@Param('id') id: string) {
    return this.auditTypeService.remove(+id);
  }
}
