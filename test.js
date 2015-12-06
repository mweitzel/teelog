var tlog = require('./index')

function foo(bar) { return bar * 100 }

console.log(foo(tlog(5)) === 500)
