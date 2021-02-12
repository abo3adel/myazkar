import { Category } from './Category';
import { ManyToOne } from 'typeorm';
import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';

@Entity('azkar')
export class Zikr extends BaseEntity
{
    @PrimaryGeneratedColumn({unsigned: true})
    id!: number;

    @Column({unique: true})
    body!: string;

    @Column({unsigned: true, default: 3, type: 'integer'})
    count!: number;

    @Column({default: false})
    by_user!: boolean;

    @ManyToOne(() => Category, category => category.azkar, {
        onDelete: 'CASCADE'
    })
    category!: Category;
}