import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAuditType1718808006071 implements MigrationInterface {
    name = 'CreateAuditType1718808006071'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "audit_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "document" character varying NOT NULL, "version" double precision NOT NULL, CONSTRAINT "PK_ac0ffa8d4c1a47d98155773a3e1" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "audit_type"`);
    }

}
