// Awaited<T>
// nested Promise<Promise<T>>
// Thenables -> .then
// Awaited<T>

type promise1 = Awaited<Promise<number>>; // number
type Promise2 = Awaited<Promise<Promise<String>>>;
type Awaited1 = Awaited<string>; // only a string not a promise

type PromiseUnionExample = Awaited<Promise<string | number>>;

async function fetchCount() {
  return 42 as const;
}

type ResolvedFetchCountValue = Awaited<ReturnType<typeof fetchCount>>;

async function getData() {
  return Promise.all([
    Promise.resolve(1 as const),
    Promise.resolve("x" as const),
  ] as const);
}

type TupleWithPromise = Awaited<ReturnType<typeof getData>>; // [1, 'x] readonly
