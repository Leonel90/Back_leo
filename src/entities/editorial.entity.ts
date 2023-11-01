import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Edicion } from "./edicion.entity";

@Entity('editoriales')
export class Editorial extends BaseEntity {

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

    @ManyToOne(type => Edicion, {cascade: true, nullable: false,})
    books: Edicion;

    @Column({ type: 'varchar', unique: true, length: 25, nullable: false, comment:'Nombre' })
    editorialname: string;

    @Column({ type: "varchar", nullable: false, comment: 'Correo'})
    email: string;

    @Column({ type: "varchar", nullable:false, comment: 'Detalle'})
    descripcion: string;

    @Column({ type: 'varchar', length: 100, comment: 'Direccion'})
    direction: string;

}