import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('categories', { schema: 'ventas' })
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @Column('varchar', {
    name: 'title',
    nullable: false,
    comment: 'category title',
  })
  title: string;

  @Column('varchar', {
    name: 'description',
    nullable: false,
    comment: 'description title',
  })
  description: string;

  @BeforeInsert()
  @BeforeUpdate()
  async setTitle() {
    if (!this.title) {
      return;
    }
    this.title = this.title.toLocaleUpperCase();
  }
}
