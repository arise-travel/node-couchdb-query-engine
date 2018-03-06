import Engine from '../engine';

const mongo = new Engine();
export default mongo;

export function parseQuery(data, query) {
    if (!query['selector']) {
        throw new Error('Query needs a selector field');
    }

    const result = [];

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const value = data[key];

            const test = mongo.test(value, query['selector']);

            if (test) {
                result.push({
                    key,
                    value
                });
            }

        }
    }

    let skip = query['skip'] | 0;
    let limit = query['limit'] | result.length;


    return result.slice(skip, limit);

}

// Comparision

mongo.append2(require('../rules/eq'));
mongo.append2(require('../rules/ne'));
mongo.append2(require('../rules/gt'));
mongo.append2(require('../rules/gte'));
mongo.append2(require('../rules/lt'));
mongo.append2(require('../rules/lte'));
mongo.append2(require('../rules/in'));
mongo.append2(require('../rules/nin'));

// Logical

mongo.append2(require('../rules/or'));
mongo.append2(require('../rules/and'));
mongo.append2(require('../rules/nor'));
mongo.append2(require('../rules/not'));

// Element

mongo.append2(require('../rules/exists'));
mongo.append2(require('../rules/type'));

// Evaluation

mongo.append2(require('../rules/mod'));
mongo.append2(require('../rules/regex'));

// Array

mongo.append2(require('../rules/all'));
mongo.append2(require('../rules/elem-match'));
mongo.append2(require('../rules/size'));
