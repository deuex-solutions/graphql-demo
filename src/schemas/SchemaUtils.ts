import { scalarType, inputObjectType, objectType } from 'nexus';
import { DateTime as LDateTime } from '@okgrow/graphql-scalars';
import { ProductOrVariant } from './Products';

const LJSON = require('graphql-type-json');
const JSON = scalarType(LJSON);

const DateTime = scalarType(LDateTime);

const InputFilter = inputObjectType({
    name: "InputFilter",
    definition(t) {
        t.field("filter", { type: JSON })
    }
});

const InputInterval = inputObjectType({
    name: "InputInterval",
    definition(t) {
        t.field("interval", { type: JSON })
    }
});

const ValueList = objectType({
    name: "ValueList",
    definition(t) {
        t.string("name", { nullable: true })
        t.string("value", { nullable: true })
    }
});

const PageInfo = objectType({
    name: "PageInfo",
    definition(t) {
        t.string("endCursor", { nullable: false })
        t.boolean("hasNextPage", { nullable: false })
    }
});

const Customer = objectType({
    name: "Customer",
    definition(t) {
        t.id("id", { nullable: false })
        t.string("name", { nullable: false })
        t.string("avatar", { nullable: true })
    }
});

const Geo = objectType({
    name: "Geo",
    definition(t) {
        t.string("city", { nullable: true })
        t.string("state", { nullable: true })
        t.string("country", { nullable: true })
    }
});

const Items = objectType({
    name: "Items",
    definition(t) {
        t.int("quantity", { nullable: false })
        t.field("product", { type: ProductOrVariant, nullable: false })
    }
})

export default {
    InputFilter,
    InputInterval,
    JSON,
    DateTime,
    ValueList,
    PageInfo,
    Customer,
    Geo,
    Items
};