import * as actions from './actionTypes';
import store from './store';

// state = reducer(state, action);
// notify subscribers

// const unsubscribe = store.subscribe(() => {
//   console.log('Store changed!', store.getState());
// });

store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: 'Bug1',
  },
});

// unsubscribe();

// store.dispatch({
//   type: 'bugRemoved',
//   payload: {
//     id: 1,
//   },
// });

console.log(store.getState());
