import { objectType, arg, stringArg, intArg } from 'nexus';
import SchemaUtils from './SchemaUtils';
import Enums from './Enums';
import { Stats } from './Stats';
import { Summary } from './Summary';
import { Orders } from './Orders';
import { Filters } from './Filters';
import { Product, Products, ProductVariant } from './Products';

export const Query = objectType({
    name: "Query",
    definition(t) {
        t.field("stats", {
            type: Stats,
            nullable: true,
            args: {
                interval: arg({ type: SchemaUtils.InputInterval }),
                filters: arg({ type: SchemaUtils.InputFilter })
            }
        });
        t.field("summary", {
            type: Summary,
            nullable: true,
            args: {
                interval: arg({ type: SchemaUtils.InputInterval }),
                filters: arg({ type: SchemaUtils.InputFilter }),
                groupBy: stringArg(),
                sortBy: stringArg(),
                limit: intArg()
            }
        });
        t.field("orders", {
            type: Orders,
            nullable: true,
            args: {
                interval: arg({ type: SchemaUtils.InputInterval }),
                filters: arg({ type: SchemaUtils.InputFilter }),
                sortBy: stringArg(),
                first: intArg(),
                after: stringArg(),
                limit: intArg()
            }
        })
        t.field("product", {
            type: Product,
            nullable: true
        })
        t.field("productVariant", {
            type: ProductVariant,
            nullable: true
        })
        t.field("products", {
            type: Products,
            nullable: true,
            args: {
                interval: arg({ type: SchemaUtils.InputInterval }),
                filters: arg({ type: SchemaUtils.InputFilter }),
                sortBy: stringArg(),
                first: intArg(),
                after: stringArg(),
                limit: intArg()
            }
        })
        t.field("filters", {
            type: Filters,
            nullable: true,
            args: {
                category: arg({ type: Enums.Category })
            }
        });
    }
});