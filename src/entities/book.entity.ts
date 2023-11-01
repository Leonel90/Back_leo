import {
    BaseEntity,
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
import { Author } from './autor.entity';
  
  @Entity('books')
  export class Book extends BaseEntity {
    
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

    @ManyToOne(type => Author, {cascade: true, nullable: false,})
    books: Author;
  
    @PrimaryGeneratedColumn('increment')
    id: number;
  
    @Column({
      type: 'varchar',
      unique: true,
      length: 25,
      nullable: false,
      comment: 'Nombre',
    })
    bookname: string;
  
    @Column({ 
      type: 'numeric', 
      nullable: false, 
      comment: 'Precio' 
    })
    price: number;
  
    @Column({ 
      type: 'varchar', 
      nullable: false, 
      comment: 'Descripción' 
    })
    description: string;
  
    @BeforeInsert()
    @BeforeUpdate()
    async setBookName() {
      if (!this.bookname) {
        return;
      }
      this.bookname = this.bookname.toUpperCase();
    }
  }