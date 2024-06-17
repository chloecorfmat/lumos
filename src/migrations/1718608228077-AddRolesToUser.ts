import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRolesToUser1718608228077 implements MigrationInterface {
    name = 'AddRolesToUser1718608228077'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "roles" text array NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "roles"`);
    }

}
