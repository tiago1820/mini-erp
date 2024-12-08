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
import { User } from "./user.model";
import { PurchaseProduct } from "./purchase_product.model";

@Entity("purchases")
export class Purchase extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('timestamp')
    date_purchase: Date;

    @Column('decimal', { precision: 10, scale: 2 })
    total_price: string;

    @ManyToOne(() => Company, (company) => company.users)
    company: Company;

    @ManyToOne(() => User, (user) => user.purchases)
    user: User;

    @OneToMany(() => PurchaseProduct, (purchaseProduct) => purchaseProduct.purchase)
    products: PurchaseProduct[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}