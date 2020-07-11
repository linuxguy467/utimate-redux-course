import { compose, pipe } from 'lodash/fp';

// trim
// wrapInDiv
let input = '  JavaScript  ';
//let output = "<div>"+ input.trim() +"</div>"

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
//const wrapInSpan = str => `<span>${str}</span>`
//const wrap = (type, str) => `<${type}>${str}</${type}>`
const toLowerCase = (str) => str.toLowerCase();

//const result = wrapInDiv(toLowerCase(trim(input)))

const transformCompose = compose(wrapInDiv, toLowerCase, trim);
transformCompose(input);

const transform = pipe(trim, toLowerCase, wrapInDiv);
transform(input);
