import {
    BaseEntity,
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
import { Editorial } from './editorial.entity';
  
  @Entity('ediciones')
  export class Edicion extends BaseEntity {
    
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
  
    @Column({
      type: 'varchar',
      unique: true,
      length: 25,
      nullable: false,
      comment: 'Edición',
    })
    edicionname: string;
  
    @Column({ 
      type: 'numeric', 
      nullable: false, 
      comment: 'Número Edición' 
    })
    numeroedicion: string;
  
    @Column({ 
      type: 'varchar', 
      nullable: false, 
      comment: 'Detalle' 
    })
    detalle: string;
  
    @BeforeInsert()
    @BeforeUpdate()
    async setEdicionName() {
      if (!this.edicionname) {
        return;
      }
      this.edicionname = this.edicionname.toUpperCase();
    }
  }