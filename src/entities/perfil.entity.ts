import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('perfiles')
export class Perfil extends BaseEntity {

    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
      })
      createAt: Date;
    
      @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
      })
      updateAt: Date;
    
      @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        nullable: true,
      })
      deleteAt: Date;

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', unique: true, length: 25, nullable: false, comment:'Nombre' })
    perfilname: string;

    @Column({ type: "varchar", nullable: false, comment: 'Correo'})
    email: string;

    @Column({ type: "varchar", nullable:false, comment: 'Contraseña'})
    password: string;

}