const fooWithOneArg = (a) => {
  console.log('1 arg ', a)
}
const fooWithTwoArgs = (a, b) => {
  console.log('2 args ', a, b)
}
const fooWithThreeArgs = (a, b, c) => {
  console.log('3 args ', a,  b, c)
}
const addMethod = function (target, methodName, method) {
  const old = target[methodName]
  target[methodName] = function () {
    if (arguments.length === method.length) {
      method.apply(this, arguments)
    } else {
      old.apply(this, arguments)
    }
  }
}
const targetObj = {}
addMethod(targetObj, 'foo', fooWithOneArg)
addMethod(targetObj, 'foo', fooWithTwoArgs)
addMethod(targetObj, 'foo', fooWithThreeArgs)
targetObj.foo(1)
targetObj.foo(1,2)
targetObj.foo(1,2,3)
