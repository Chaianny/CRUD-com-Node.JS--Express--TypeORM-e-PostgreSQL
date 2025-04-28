import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategories1745874545414 implements MigrationInterface {


    /* quero subir sa migraçao do krl mas ta dando erro e eu n consigo entender */
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"categories",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name:"name",
                        type:"varchar",
                        isUnique:true 
                    },
                    {
                        name:"description",
                        type:"varchar",
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    /* quando eu quiser reverter a migration que eu fiz, caso faça merda, consigo reverter sa merda, mas nao esta rodando o comando  */
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categories");
    }

}
