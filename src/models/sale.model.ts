import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne
} from "typeorm";
import { Company } from "./company.model";
import { SaleProduct } from "./sale_product.model";
import { Client } from "./client.model";
import { User } from "./user.model";

@Entity("sales")
export class Sale extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('timestamp')
    date_sale: Date;

    @Column('decimal', { precision: 10, scale: 2 })
    total_price: string;

    @OneToMany(() => SaleProduct, (saleProduct) => saleProduct.sale)
    products: SaleProduct[];

    @ManyToOne(() => Company, (company) => company.sales)
    company: Company;

    @ManyToOne(() => Client, (client) => client.sales)
    client: Client; 

    @ManyToOne(() => User, (user) => user.sales)
    user: User;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}