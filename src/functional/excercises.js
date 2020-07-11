import { pipe } from 'lodash/fp';

// Excercise 1

const extractTag = ({ tag }) => tag;

const toLowerCase = (str) => str.toLowerCase();

// const wrapInParentheses = (str) => `(${str})`;
const wrap = ({ opening, closing }) => (str) => `${opening}${str}${closing}`;

export const transform = pipe(
  extractTag,
  toLowerCase,
  wrap({
    opening: '(',
    closing: ')',
  })
);

const input = { tag: 'JAVASCRIPT' };
const output = transform(input);

console.log(`output="${output}"`);

// Excercise 2

const recipe = {
  name: 'Spaghetti Bolognese',
  ingredients: ['egg', 'salt'],
};

// Add cream to ingredients
const added = {
  ...recipe,
  ingredients: [...recipe.ingredients, 'cream'],
};

// replace 'egg' with 'egg white'
const updated = {
  ...recipe,
  ingredients: recipe.ingredients.map((ingredient) =>
    ingredient === 'egg' ? 'egg white' : ingredient
  ),
};

// const [, ...rest] = recipe.ingredients;
// const deleted = {
//   ...recipe,
//   ingredients: [...rest],
// };
const deleted = {
  ...recipe,
  ingredients: recipe.ingredients.filter((ingredient) => ingredient !== 'egg'),
};

console.log(deleted);
