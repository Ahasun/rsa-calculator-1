/* global BigInt */

const randojs = require("@nastyox/rando.js");
const rando = randojs.rando;

export const initialState = {
  p: BigInt(0),
  q: BigInt(0),
  n: BigInt(0),
  phi: BigInt(0),
  e: BigInt(0),
  d: BigInt(0),
  errorbag: [],
};

const power = (a, b, n) => {
  [a, b, n] = [BigInt(a), BigInt(b), BigInt(n)];
  let res = BigInt(1);
  a %= n;
  while (b > BigInt(0)) {
    if (b & BigInt(1)) res = (res * a) % n;
    b >>= BigInt(1);
    a = (a * a) % n;
  }
  return res;
};

const millerTest = (d, n) => {
  [d, n] = [BigInt(d), BigInt(n)];
  const a =
    BigInt(2) +
    (BigInt(rando(100000000, 10000000000000000000000)) % (n - BigInt(4)));
  let p = power(a, d, n);
  if (p === BigInt(1) || p === n - BigInt(1)) return true;

  while (d !== n - BigInt(1)) {
    p = (p * p) % n;
    d *= BigInt(2);

    if (p === BigInt(1)) return false;

    if (p === n - BigInt(1)) return true;
  }
  return false;
};

const checkPrime = (n) => {
  n = BigInt(n);

  if (n <= BigInt(1) || n === BigInt(4)) return false;
  if (n <= BigInt(3)) return true;
  let d = n - BigInt(1);

  while (d % BigInt(2) === BigInt(0)) d /= BigInt(2);
  for (var i = 0; i < 2000; ++i) {
    if (!millerTest(d, n)) return false;
  }
  return true;
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_P_AND_Q": {
      const p = BigInt(action.item.p);
      const q = BigInt(action.item.q);
      if (!checkPrime(p) || !checkPrime(q)) {
        return {
          ...state,
          errorbag: [
            ...state.errorbag,
            { message: "P and Q should be prime numbers." },
          ],
        };
      }
      const n = p * q;
      const phi = (p - BigInt(1)) * (q - BigInt(1));
      return { ...state, p, q, n, phi, errorbag: [] };
    }
    default:
      return state;
  }
};

export default reducer;
