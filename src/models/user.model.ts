import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany
} from "typeorm";
import { Company } from "./company.model";
import { PermissionGroup } from "./permission_group.model";
import { Sale } from "./sale.model";
import { Purchase } from "./purchase.model";
import { InventoryHistory } from "./inventory_history.model";

@Entity("users")
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: String;

    @Column()
    password: String;

    @ManyToOne(() => Company, (company) => company.users)
    company: Company;

    @ManyToOne(() => PermissionGroup, (group) => group.users)
    group: PermissionGroup;

    @OneToMany(() => Sale, (sale) => sale.user)
    sales: Sale[];

    @OneToMany(() => Purchase, (purchase) => purchase.user)
    purchases: Purchase[];

    @OneToMany(() => InventoryHistory, (history) => history.user)
    inventoryHistories: InventoryHistory[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}