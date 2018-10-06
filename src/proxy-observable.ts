import { Observable, Subject } from 'rxjs';

export function proxyObservable<T extends object, K extends keyof T, R>(
    object: T,
    method: K,
    // tslint:disable-next-line:ban-types
    callback: (source$: Subject<R>) => ProxyHandler<Function>['apply']
): Observable<R> {
    if (typeof object[method] !== 'function') {
        throw new TypeError(`'${method}' isn't a function`);
    }

    const source$ = new Subject<R>();

    object[method] = new Proxy(object[method] as any, {
        apply: callback(source$),
    });

    return new Observable((observer) => source$.subscribe(observer));
}
