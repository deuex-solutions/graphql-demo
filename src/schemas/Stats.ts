import { objectType, arg } from 'nexus';
import SchemaUtils from './SchemaUtils';

export const Stats = objectType({
    name: "Stats",
    definition(t) {
        t.field("interval", { type: SchemaUtils.JSON, nullable: true })
        t.field("filters", { type: SchemaUtils.JSON, nullable: true })

        t.int("orderCount", { nullable: true })
        t.int("grossAmount", { nullable: true })
        t.int("netAmount", { nullable: true })

        t.int("recurringOrderCount", { nullable: true })
        t.int("recurringGrossAmount", { nullable: true })
        t.int("recurringNetAmount", { nullable: true })

        t.int("customerCount", { nullable: true })

        t.int("refundCount", { nullable: true })
        t.int("refundAmount", { nullable: true })

        t.int("averageRevenuePerDay", { nullable: true })
        t.int("averageRevenuePerCustomer", { nullable: true })
        t.int("averageRevenuePerOrder", { nullable: true })

        //used by summary schema
        t.string("grouping", { nullable: true })
    }
});