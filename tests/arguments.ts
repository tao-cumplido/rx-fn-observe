import test from 'ava';
import { first, map } from 'rxjs/operators';

import { observeArguments } from '../src';

test('unmodified argument list', (t) => {
    const object = {
        foo(x: [number]) {
            x[0] = 2;
        },
    };

    setTimeout(() => object.foo([1]));

    return observeArguments(object, 'foo').pipe(
        first(),
        map((args) => t.is(args[0][0], 1))
    );
});
