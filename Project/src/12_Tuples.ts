// tuples - In TypeScript, a tuple is a specialized array with a fixed length and predefined / fixed types for each position. 

const userEntry: [string, number] = ["Omm", 23];

type ResponseFlow = [status: number, message?: string];

const r11: ResponseFlow = [200];

const corners: readonly [number, number] = [0, 0];