import { parseCouchDBQuery } from '../src';
import { expect } from 'chai';

let eq1 = (a, q, r) => expect(parseCouchDBQuery(a, q).map(t => t.key)).to.deep.eq(r);

describe('test parsequery', () => {

    it('implicit $eq', () => {
        eq1({
            test1: { foo: 1 },
            test2: { foo: 5 }
        }, {
            selector:
                {
                    foo: 1
                }
        }, ['test1']);
    });

    it('$and should match two positives', () => {
        eq1({
            test1: { foo: { bar: '123' } },
            test2: { foo: { bar: '125' } }
        }, {
            selector: { $and: [{ foo: { $exists: true } }, { 'foo.bar': { $eq: '123' } }] }
        }, ['test1']);
    });

    it('$and should match two positives', () => {
        eq1({
            test1: { foo: { bar: '123' } },
            test2: { foo: { bar: '123' } }
        }, {
            selector: { $and: [{ foo: { $exists: true } }, { 'foo.bar': { $eq: '123' } }] }
        }, ['test1', 'test2']);
    });


});
