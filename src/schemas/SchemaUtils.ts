import { scalarType, inputObjectType } from 'nexus';
const LJSON = require('graphql-type-json');
const JSON = scalarType(LJSON);

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

export default {
    InputFilter,
    InputInterval,
    JSON
};