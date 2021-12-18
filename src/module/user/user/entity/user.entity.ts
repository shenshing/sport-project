import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import * as T from '../common';

@Entity('Users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    // @Column({type: 'varchar'})
    // name!: string;

    @Column({type: 'varchar'})
    firstName!: string;

    @Column({type: 'varchar'})
    lastName!: string;

    @Column({type: 'varchar', nullable: true})
    email?: string;

    @Column({type: 'varchar'})
    phone!: string;

    @Column({type: 'enum', enum: T.GenderEnum})
    gender!: T.GenderType | string;

    @Column({type: 'varchar', length: 1024, nullable: true})
    password?: string;

    @Column({type: 'varchar', length: 36})
    profileImageId!: string;

    @Column({type: 'varchar'})
    profileImageUrl!: string;

    @CreateDateColumn()
    createdAt!: Date | string;

    @UpdateDateColumn()
    updatedAt!: Date | string;
}