import { objectType } from 'nexus';
import SchemaUtils from './SchemaUtils';
import { Stats } from './Stats';

export const Summary = objectType({
    name: "Summary",
    definition(t) {
        t.field("interval", { type: SchemaUtils.JSON, nullable: true })
        t.field("filters", { type: SchemaUtils.JSON, nullable: true })
        t.string("groupBy", { nullable: true })
        t.string("sortBy", { nullable: true })
        t.int("limit", { nullable: true })

        t.field("stats", { type: Stats, nullable: true })
    }
});