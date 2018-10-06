import test from 'ava';
import { first, map } from 'rxjs/operators';

import { observeReturnValue } from '../src';

test('return value', (t) => {
    const object = {
        foo(x: number) {
            return x + 1;
        },
    };

    setTimeout(() => object.foo(1));

    return observeReturnValue(object, 'foo').pipe(
        first(),
        map((x) => t.is(x, 2))
    );
});
