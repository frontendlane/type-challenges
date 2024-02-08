/*
  30301 - IsOdd
  -------
  by jiangshan (@jiangshanmeta) #medium #string

  ### Question

  return true is a number is odd

  > View on GitHub: https://tsch.js.org/30301
*/

/* _____________ Your Code Here _____________ */

type IsOddDigit<D extends string> = D extends '0'
	? false
	: D extends '1'
		? true
		: D extends '2'
			? false
			: D extends '3'
				? true
				: D extends '4'
					? false
					: D extends '5'
						? true
						: D extends '6'
							? false
							: D extends '7'
								? true
								: D extends '8'
									? false
									: D extends '9'
										? true
										: false

type LastCharacter<S extends string> = S extends `${string}${infer Rest}` ? (Rest extends '' ? S : LastCharacter<Rest>) : S

type IsOdd<T extends number> = `${T}` extends `${infer StringT}` ? IsOddDigit<LastCharacter<StringT>> : false

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
	Expect<Equal<IsOdd<2023>, true>>,
	Expect<Equal<IsOdd<1453>, true>>,
	Expect<Equal<IsOdd<1926>, false>>,
	Expect<Equal<IsOdd<number>, false>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/30301/answer
  > View solutions: https://tsch.js.org/30301/solutions
  > More Challenges: https://tsch.js.org
*/
