import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
    JoinTable,
    ManyToMany
} from "typeorm";
import { Company } from "./company.model";
import { User } from "./user.model";
import { PermissionParam } from "./permission_param.model";

@Entity("permission_groups")
export class PermissionGroup extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @ManyToOne(() => Company, (company) => company.permission_groups)
    company: Company;

    @OneToMany(() => User, (user) => user.group)
    users: User[];

    @ManyToMany(() => PermissionParam)
    @JoinTable({
        name: "permission_group_params",
        joinColumn: {
            name: "group_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "param_id",
            referencedColumnName: "id"
        }
    })
    params: PermissionParam[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}