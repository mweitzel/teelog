## tlog

debug/log objects inline, and without a temporary variable

if you want to know what `foo` is before it enters `bar`
```js
foo(bar)
```

log it inline
```js
require('tlog')

foo(tlog(bar))
```

