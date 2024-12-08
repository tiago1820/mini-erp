import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne
} from "typeorm";
import { Company } from "./company.model";
import { Inventory } from "./inventory.model";
import { User } from "./user.model";

@Entity("inventory_histories")
export class InventoryHistory extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    action: String;

    @Column('timestamp')
    date_action: Date;

    @ManyToOne(() => Company, (company) => company.inventory_histories)
    company: Company;

    @ManyToOne(() => Inventory, (inventory) => inventory.histories, { onDelete: 'CASCADE' })
    inventory: Inventory;

    @ManyToOne(() => User, (user) => user.inventoryHistories, { nullable: false })
    user: User;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}