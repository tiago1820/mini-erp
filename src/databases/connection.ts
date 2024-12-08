import { DataSource } from "typeorm";
import { User } from "../models/user.model";
import { Client } from "../models/client.model";
import { PermissionGroup } from "../models/permission_group.model";
import { PermissionParam } from "../models/permission_param.model";
import { Inventory } from "../models/inventory.model";
import { InventoryHistory } from "../models/inventory_history.model";
import { SaleProduct } from "../models/sale_product.model";
import { Sale } from "../models/sale.model";
import { Company } from "../models/company.model";
import { Purchase } from "../models/purchase.model";
import { PurchaseProduct } from "../models/purchase_product.model";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "tiago",
    password: "123456",
    database: "mini_erp",
    logging: true,
    entities: [
        User,
        Client,
        PermissionGroup,
        PermissionParam,
        Inventory,
        InventoryHistory,
        SaleProduct,
        Sale,
        Company,
        Purchase,
        PurchaseProduct
    ],
    synchronize: true
});