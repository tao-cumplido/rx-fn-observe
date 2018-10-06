import test from 'ava';
import { merge } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { observeArguments, observeReturnValue } from '../src';

test('combined', (t) => {
    const object = {
        foo: (x: [number]) => ++x[0],
    };

    setTimeout(() => object.foo([1]));

    return merge(
        observeArguments(object, 'foo').pipe(map((args) => t.is(args[0][0], 1))),
        observeReturnValue(object, 'foo').pipe(map((x) => t.is(x, 2)))
    ).pipe(take(2));
});
