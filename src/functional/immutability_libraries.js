import { produce } from 'immer';
import { Map } from 'immutable';

// Immutable.js
let book1 = Map({ title: 'Harry Potter' });

//function publish(book) {
//    book.isPublished = true
//}

function publish1(book1) {
  return book1.set('isPublished', true);
}

book1 = publish1(book1);

//console.log(book1.get("title"))
console.log(book1.toJS());

// Immer
let book = { title: 'Harry Potter' };

function publish(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

let updated = publish(book);

console.log(book);
console.log(updated);
