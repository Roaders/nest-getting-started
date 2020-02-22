import {MigrationInterface, QueryRunner} from "typeorm";

export class addAgeAddress1582365717351 implements MigrationInterface {
    name = 'addAgeAddress1582365717351'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "temporary_user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "age" integer NOT NULL DEFAULT 40, "address" varchar NOT NULL DEFAULT "1 High Street")`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_user"("id", "name") SELECT "id", "name" FROM "user"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "age" integer NOT NULL, "address" varchar NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "user"("id", "name", "age", "address") SELECT "id", "name", "age", "address" FROM "temporary_user"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_user"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`, undefined);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "user"("id", "name") SELECT "id", "name" FROM "temporary_user"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_user"`, undefined);
    }

}
