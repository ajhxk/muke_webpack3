export function print () {
    return console.log.apply(console, arguments);
}

export const add = (a, b) => (a + b);

export const minus = (a, b) => (a - b);