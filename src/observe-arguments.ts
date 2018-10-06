import { Observable } from 'rxjs';

import { proxyObservable } from './proxy-observable';
import { ArgumentList, FunctionKeys } from './types';

export function observeArguments<T extends object, F extends FunctionKeys<T>>(object: T, method: F): Observable<ArgumentList<T[F]>> {
    return proxyObservable(object, method, (source$) => (target, thisArg, argumentList) => {
        source$.next(argumentList);
        return Reflect.apply(target, thisArg, argumentList);
    });
}
