import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne,
    ManyToMany
} from "typeorm";
import { Company } from "./company.model";
import { PermissionGroup } from "./permission_group.model";

@Entity("permission_params")
export class PermissionParam extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @ManyToOne(() => Company, (company) => company.permission_params)
    company: Company;

    @ManyToMany(() => PermissionGroup, (group) => group.params)
    groups: PermissionGroup[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}