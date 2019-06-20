import { objectType } from 'nexus';
import SchemaUtils from './SchemaUtils';
import Enums from './Enums';

export const Orders = objectType({
    name: "Orders",
    definition(t) {
        t.string("sortBy", { nullable: true })
        t.field("edges", { type: OrderDetailEdges, list: true, nullable: false })
        t.field("pageInfo", { type: SchemaUtils.PageInfo, nullable: false })
        t.int("totalCount", { nullable: false })
    }
});

export const OrderDetailEdges = objectType({
    name: "OrderDetailEdges",
    definition(t) {
        t.string("cursor", { nullable: false })
        t.field("node", { type: OrderDetails, nullable: true })
    }
});

export const OrderDetails = objectType({
    name: "OrderDetails",
    definition(t) {
        t.id("id", { nullable: false })
        t.field("type", { type: Enums.OrderType, nullable: true })
        t.field("status", { type: Enums.OrderStatus, nullable: true })
        t.field("orderDate", { type: SchemaUtils.DateTime, nullable: true })

        t.field("customer", { type: SchemaUtils.Customer, nullable: true })
        t.field("geo", { type: SchemaUtils.Geo, nullable: true })
        t.field("items", { type: SchemaUtils.Items, list: true, nullable: true })

        t.int("netAmount", { nullable: false })
    }
})