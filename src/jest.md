# Jest In Nutshell

## Matchers
> https://jestjs.io/docs/en/using-matchers#truthiness
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is

* Common
  * toBe uses Object.is to test exact equality. If you want to check the value of an object, use toEqual instead:
  * toEqual recursively checks every field of an object or array.

* Truthiness
  * toBeNull matches only null
  * toBeUndefined matches only undefined
  * toBeDefined is the opposite of toBeUndefined
  * toBeTruthy matches anything that an if statement treats as true
  * toBeFalsy matches anything that an if statement treats as false
