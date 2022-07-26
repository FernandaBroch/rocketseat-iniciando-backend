import { query } from "express";
import { MigrationInterface, QueryRunner, QueryRunnerAlreadyReleasedError, TableColumn, TableForeignKey } from "typeorm";

export class AlterBarberToBarberId1614658070329 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('appointments', 'barber');
    await queryRunner.addColumn('appointments', new TableColumn({
      name: 'barber_id',
      type: 'uuid',
      isNullable: true,
    }))

    await queryRunner.createForeignKey('appointments', new TableForeignKey({
      name: 'AppointmentBarber',
      columnNames: ['barber_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    }))
  }


  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('appointments', 'AppointmentBarber');

    await queryRunner.dropColumn('appointments', 'barber_id');

    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'barber',
        type: 'varchar',
      }),
    );

  }

}
