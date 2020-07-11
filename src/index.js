import { bugAdded, bugResolved } from './actions';
import store from './store';

// state = reducer(state, action);
// notify subscribers

// const unsubscribe = store.subscribe(() => {
//   console.log('Store changed!', store.getState());
// });

store.dispatch(bugAdded('Bug 1'));
store.dispatch(bugResolved(1));

// unsubscribe();

// store.dispatch({
//   type: 'bugRemoved',
//   payload: {
//     id: 1,
//   },
// });

console.log(store.getState());
