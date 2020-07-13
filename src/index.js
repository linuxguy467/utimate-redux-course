import { loadBugs } from './store/bugs';
import configureStore from './store/configureStore';

const store = configureStore();

store.dispatch(loadBugs());

// store.dispatch({
//   type: 'error',
//   payload: { message: 'An error occured' },
// });

// store.subscribe(() => {
//   console.log('Store changed!');
// });

// store.dispatch(userAdded({ name: 'User 1' }));
// store.dispatch(userAdded({ name: 'User 2' }));
// store.dispatch(projectAdded({ name: 'Project 1' }));
// store.dispatch(bugAdded({ description: 'Bug 1' }));
// store.dispatch(bugAdded({ description: 'Bug 2' }));
// store.dispatch(bugAdded({ description: 'Bug 3' }));
// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
// store.dispatch(bugResolved({ id: 1 }));

// const bugs = getBugsbyUser(1)(store.getState());
// console.log(bugs);
