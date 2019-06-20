import { enumType } from "nexus";

const Category = enumType({
    name: "Category",
    members: ['PRODUCTS', 'SALES', 'CUSTOMERS'],
});

const OrderStatus = enumType({
    name: "OrderStatus",
    members: ['CANCELLED', 'COMPLETED', 'PENDING'],
});

const OrderType = enumType({
    name: "OrderType",
    members: ['SALE', 'SUBSCRIPTION']
});

export default {
    Category,
    OrderStatus,
    OrderType
}