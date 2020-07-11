import store from './store';

const unsubscribe = store.subscribe(() => {
  console.log('Store changed!', store.getState());
});

store.dispatch({
  type: 'bugAdded',
  payload: {
    description: 'Bug1',
  },
});

unsubscribe();

store.dispatch({
  type: 'bugRemoved',
  payload: {
    id: 1,
  },
});

console.log(store.getState());
