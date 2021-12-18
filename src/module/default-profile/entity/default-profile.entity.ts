import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('DefaultProfiles')
export class DefaultProfile {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    
}