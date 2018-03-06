import mongo_, { parseQuery } from './engine/mongo';

export default mongo_;

export function parseCouchDBQuery(a, q) {
    return parseQuery(a, q);
}

export const mongo = mongo_;
