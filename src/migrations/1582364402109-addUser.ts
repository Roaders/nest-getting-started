import {MigrationInterface, QueryRunner} from "typeorm";

export class addUser1582364402109 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`INSERT INTO "user"("name") VALUES ("Giles Roadnight")`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
