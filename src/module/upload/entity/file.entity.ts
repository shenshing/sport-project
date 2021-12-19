import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import * as T from '../common';

@Entity('Files')
export class File {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({type: 'varchar'})
    name!: string;

    @Column({type: 'varchar', nullable: true})
    originalName?: string;

    @Column({type: 'int'})
    size!: number;

    @Column({type: 'varchar'})
    url!: string;   

    @Column({type: 'varchar'})
    contentType!: string;

    @Column({type: 'enum', enum: T.FileTypeEnum})
    type!: T.FileType | string;

    @Column({type: 'enum', enum: T.StatusEnum})
    status!: T.StatusType | string;

    @CreateDateColumn()
    createdAt!: Date | string;

    @UpdateDateColumn()
    updatedAt!: Date | string;

    @Column({type: 'varchar', length: 36, nullable: true})
    createdBy?: string;

    @Column({type: 'varchar', length: 36, nullable: true})
    updatedBy?: string;

}