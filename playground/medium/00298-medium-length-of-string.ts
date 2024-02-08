/*
  298 - Length of String
  -------
  by Pig Fang (@g-plane) #medium #template-literal

  ### Question

  Compute the length of a string literal, which behaves like `String#length`.

  > View on GitHub: https://tsch.js.org/298
*/

/* _____________ Your Code Here _____________ */

type Fill<Content, Size extends number, Container extends Array<Content> = []> = Container['length'] extends Size
	? Container
	: Fill<Content, Size, [...Container, Content]>

type Increment<N extends number> = [...Fill<'', N, []>, '']['length'] extends infer IncrementedNumber extends number
	? IncrementedNumber
	: never

type RecursiveLengthOfString<S extends string, Count extends number> = S extends `${infer First}${infer Rest}`
	? First extends ''
		? Count
		: RecursiveLengthOfString<Rest, Increment<Count>>
	: Count

type LengthOfString<S extends string> = RecursiveLengthOfString<S, 0>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
	Expect<Equal<LengthOfString<''>, 0>>,
	Expect<Equal<LengthOfString<'kumiko'>, 6>>,
	Expect<Equal<LengthOfString<'reina'>, 5>>,
	Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/298/answer
  > View solutions: https://tsch.js.org/298/solutions
  > More Challenges: https://tsch.js.org
*/
