import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class CategoryPage {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    category_id: number;

    @Column({ nullable: true })
    show_at: Date;

    @Column({ nullable: true })
    hide_at: Date;

    @Column({ nullable: true })
    updated_at: Date;

    @Column({ nullable: true })
    createdAt: Date;

    @Column({ nullable: true })
    updatedAt: Date;

}
