import { Observable } from 'rxjs';

import { proxyObservable } from './proxy-observable';
import { FunctionKeys, ReturnType } from './types';

export function observeReturnValue<T extends object, F extends FunctionKeys<T>>(object: T, method: F): Observable<ReturnType<T[F]>> {
    return proxyObservable(object, method, (source$) => (target, thisArg, argumentList) => {
        const returnValue = Reflect.apply(target, thisArg, argumentList);
        source$.next(returnValue);
        return returnValue;
    });
}
