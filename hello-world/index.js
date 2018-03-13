const add = (x, y) => x + y;

const log = (func, ...args) => {
    console.log(...args);
    func(...args);
}

log(add);