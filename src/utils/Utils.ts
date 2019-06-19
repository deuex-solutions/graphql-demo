import { scalarType, inputObjectType } from 'nexus';
const LJSON = require('graphql-type-json');
const JSON = scalarType(LJSON);

const InputFilter = inputObjectType({
    name: "InputFilter",
    definition(t) {
        t.field("filter", { type: JSON })
    }
});

export default {
    InputFilter,
    JSON
};