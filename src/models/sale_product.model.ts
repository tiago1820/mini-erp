import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne
} from "typeorm";
import { Sale } from "./sale.model";
import { Company } from "./company.model";
import { Inventory } from "./inventory.model";

@Entity("sales_products")
export class SaleProduct extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quant: number;

    @Column('decimal', { precision: 10, scale: 2 })
    sale_price: string;

    @ManyToOne(() => Company, (company) => company.sales_products)
    company: Company;

    @ManyToOne(() => Sale, (sale) => sale.products)
    sale: Sale;

    @ManyToOne(() => Inventory, (inventory) => inventory.saleProducts)
    inventory: Inventory;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}