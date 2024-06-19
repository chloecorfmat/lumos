import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { TypeOrmConfigService } from './typeorm.config';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './user/guards/roles.guard';
import { AuthGuard } from './auth/auth.guards';
import { AuditTypeModule } from './audit-type/audit-type.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    AuditTypeModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
