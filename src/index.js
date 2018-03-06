import ext_ from './engine/ext';
import mongo_ from './engine/mongo';

export { minimize } from './utils';

export default mongo_;

export function parseCouchDBQuery(a, q) {

    if (!q['selector']) {
        throw new Error('Query needs a selector field');
    }

    const result = [];

    for (const key in a) {
        if (a.hasOwnProperty(key)) {
            const value = a[key];

            const test = mongo_.test(value, q);

            if (test) {
                result.push({
                    key,
                    value
                });
            }

        }
    }

    let skip = q['skip'] | 0;
    let limit = q['limit'] | result.length;


    return result.slice(skip, limit);
}

export const ext = ext_;
export const mongo = mongo_;
