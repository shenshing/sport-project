export type Lit = string | number | boolean | undefined | null | void | {};
export const tuple = <T extends Lit[]>(...args: T) => args;

// ********
// ORDER BY
// ********

export const generateOrder = <T>(...keys: T[]) => {
  const orders = {};

  keys.forEach(x => {
    const splits = !(x as any).includes('`') ? (x as any).split('.') : [x];
    const key = splits.length > 1 ? splits[1] : splits[0];
    const orderKey = key.replace(/`/g, '');

    orders[`${orderKey} ASC`] = JSON.parse(`{"${x}": "ASC"}`); // `${x} ASC`;
    orders[`${orderKey} DESC`] = JSON.parse(`{"${x}": "DESC"}`); // `${x} DESC`;
  });

  return orders;
};
