# rx-fn-observe

> Observe any object's method calls

[![NPM Version][npm-image]][npm-url]

## Install

```bash
npm i -S rx-fn-observe
```

## API

The API provides two functions to observe calls to methods.
Both expect an object and the name of the function to observe.

```ts
observeArguments<T, K extends keyof T>(object: T, method: K): Observable<ArgumentList<T[K]>>
```

Emits the argument list passed to the method before the function body executes.

```ts
observeReturnValue<T, K extends keyof T>(object: T, method: K): Observable<ReturnType<T[K]>>
```

Emits the return value of the method after the function body has been executed.

## License

[ISC](LICENSE)

[npm-image]: https://img.shields.io/npm/v/rx-fn-observe.svg
[npm-url]: https://npmjs.org/package/rx-fn-observe
