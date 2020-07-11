// import { bugAdded, bugResolved } from './actions';
// import store from './store';
import * as actions from './actions';
import store from './customStore';

store.subscribe(() => {
  console.log('Store changed');
});
store.dispatch(actions.bugAdded('Bug 1'));

console.log(store.getState());

// state = reducer(state, action);
// notify subscribers

// const unsubscribe = store.subscribe(() => {
//   console.log('Store changed!', store.getState());
// });

// store.dispatch(bugAdded('Bug 1'));
// store.dispatch(bugResolved(1));

// unsubscribe();

// store.dispatch({
//   type: 'bugRemoved',
//   payload: {
//     id: 1,
//   },
// });

// console.log(store.getState());
