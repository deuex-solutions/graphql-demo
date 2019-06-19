import { objectType, arg } from 'nexus';
import Utils from '../utils/Utils';
import { Stats } from './Stats';

export const Query = objectType({
    name: "Query",
    definition(t) {
        t.field("stats", {
            type: Stats,
            nullable: true,
            args: {
                interval: arg({ type: Utils.InputFilter }),
                filters: arg({ type: Utils.InputFilter })
            }
        });
    }
});