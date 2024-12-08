import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { Company } from "./company.model";
import { Purchase } from "./purchase.model";

@Entity("purchases_products")
export class PurchaseProduct extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column()
    quant: number;

    @Column('decimal', { precision: 10, scale: 2 })
    purchase_price: string;

    @ManyToOne(() => Company, (company) => company.purchases_products)
    company: Company;

    @ManyToOne(() => Purchase, (purchase) => purchase.products)
    purchase: Purchase;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}