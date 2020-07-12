import * as actions from './actions';
import store from './store';

store.subscribe(() => {
  console.log('Store changed!');
});

store.dispatch(actions.bugAdded('Bug 1'));
store.dispatch(actions.bugAdded('Bug 2'));
store.dispatch(actions.bugAdded('Bug 3'));
store.dispatch(actions.bugResolved(1));

console.log(store.getState());
