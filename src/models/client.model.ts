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
import { Sale } from "./sale.model";

@Entity("clients")
export class Client extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column()
    email: String;

    @Column()
    phone: number;

    @Column()
    address: String;

    @Column()
    address_neighb: String;

    @ManyToOne(() => Company, (company) => company.clients)
    company: Company;

    @OneToMany(() => Sale, (sale) => sale.client)
    sales: Sale[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}