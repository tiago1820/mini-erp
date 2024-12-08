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
import { SaleProduct } from "./sale_product.model";
import { InventoryHistory } from "./inventory_history.model";

@Entity("inventories")
export class Inventory extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column('decimal', { precision: 10, scale: 2 })
    price: string;

    @Column()
    quant: number;

    @Column()
    min_quant: number;

    @ManyToOne(() => Company, (company) => company.inventories)
    company: Company;

    @OneToMany(() => SaleProduct, (saleProduct) => saleProduct.inventory)
    saleProducts: SaleProduct[];

    @OneToMany(() => InventoryHistory, (inventoryHistory) => inventoryHistory.inventory)
    histories: InventoryHistory[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}