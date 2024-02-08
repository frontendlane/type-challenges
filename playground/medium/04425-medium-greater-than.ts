/*
  4425 - Greater Than
  -------
  by ch3cknull (@ch3cknull) #medium #array

  ### Question

  In This Challenge, You should implement a type `GreaterThan<T, U>` like `T > U`

  Negative numbers do not need to be considered.

  For example

  ```ts
  GreaterThan<2, 1> //should be true
  GreaterThan<1, 1> //should be false
  GreaterThan<10, 100> //should be false
  GreaterThan<111, 11> //should be true
  ```

  Good Luck!

  > View on GitHub: https://tsch.js.org/4425
*/

/* _____________ Your Code Here _____________ */

type Fill<Content, Size extends number, Container extends Array<Content> = []> = Container['length'] extends Size
	? Container
	: Fill<Content, Size, [...Container, Content]>

type Decrement<N extends number> = Fill<'', N, []> extends [unknown, ...infer Rest] ? Rest['length'] : never

type GreaterThan<Left extends number, Right extends number> = Left extends 0
	? false
	: Left extends Right
		? false
		: GreaterThan<Decrement<Left>, Right> extends false
			? true
			: false

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
	Expect<Equal<GreaterThan<1, 0>, true>>,
	Expect<Equal<GreaterThan<5, 4>, true>>,
	Expect<Equal<GreaterThan<4, 5>, false>>,
	Expect<Equal<GreaterThan<0, 0>, false>>,
	Expect<Equal<GreaterThan<10, 9>, true>>,
	Expect<Equal<GreaterThan<20, 20>, false>>,
	Expect<Equal<GreaterThan<10, 100>, false>>,
	Expect<Equal<GreaterThan<111, 11>, true>>,
	Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4425/answer
  > View solutions: https://tsch.js.org/4425/solutions
  > More Challenges: https://tsch.js.org
*/
