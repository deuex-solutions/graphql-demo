import { objectType } from 'nexus';
import SchemaUtils from './SchemaUtils';

export const Filters = objectType({
    name: "Filters",
    definition(t) {
        t.string("field", { nullable: true })
        t.string("name", { nullable: true })
        t.string("type", { nullable: true })
        t.field("valueList", {
            type: SchemaUtils.ValueList,
            list: true,
            nullable: true
        })
    }
});