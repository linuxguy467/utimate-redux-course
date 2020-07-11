import { pipe } from 'lodash/fp';
//function add(a) {
//    return function(b) {
//        return a + b
//    }
//}
const add = (a) => (b) => a + b;

// N => 1
add(1)(5); // add(a, b)

const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
//const wrapInSpan = str => `<span>${str}</span>`
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

const transform = pipe(trim, toLowerCase, wrap('div'));
transform(input);
