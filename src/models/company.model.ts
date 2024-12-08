import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    OneToMany
} from "typeorm";
import { User } from "./user.model";
import { Sale } from "./sale.model";
import { SaleProduct } from "./sale_product.model";
import { Purchase } from "./purchase.model";
import { PurchaseProduct } from "./purchase_product.model";
import { PermissionParam } from "./permission_param.model";
import { PermissionGroup } from "./permission_group.model";
import { Inventory } from "./inventory.model";
import { InventoryHistory } from "./inventory_history.model";
import { Client } from "./client.model";

@Entity("companies")
export class Company extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => User, (user) => user.company)
    users: User[];

    @OneToMany(() => Sale, (sale) => sale.company)
    sales: Sale[];

    @OneToMany(() => SaleProduct, (saleProduct) => saleProduct.company)
    sales_products: SaleProduct[];

    @OneToMany(() => Purchase, (purchase) => purchase.company)
    purchases: Purchase[];

    @OneToMany(() => PurchaseProduct, (purchaseProduct) => purchaseProduct.company)
    purchases_products: PurchaseProduct[];

    @OneToMany(() => PermissionParam, (permissionParam) => permissionParam.company)
    permission_params: PermissionParam[];

    @OneToMany(() => PermissionGroup, (permissionGroup) => permissionGroup.company)
    permission_groups: PermissionGroup[];

    @OneToMany(() => Inventory, (inventory) => inventory.company)
    inventories: Inventory[];

    @OneToMany(() => InventoryHistory, (inventoryHistory) => inventoryHistory.company)
    inventory_histories: InventoryHistory[];

    @OneToMany(() => Client, (client) => client.company)
    clients: Client[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}