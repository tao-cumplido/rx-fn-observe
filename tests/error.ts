import test from 'ava';

import { proxyObservable } from '../src/proxy-observable';

test('invalid function', (t) => {
    const object = {
        foo: () => {},
        bar: null,
    };

    t.throws(() => proxyObservable(object, 'bar', () => () => {}), TypeError);
});
