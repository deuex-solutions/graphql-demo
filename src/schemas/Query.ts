import { objectType, arg, stringArg, intArg } from 'nexus';
import SchemaUtils from './SchemaUtils';
import { Stats } from './Stats';
import { Summary } from './Summary';

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
    }
});