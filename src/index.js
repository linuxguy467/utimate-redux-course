import { bugAdded, bugResolved, getUnresolvedBugs } from './store/bugs';
import configureStore from './store/configureStore';
import { projectAdded } from './store/projects';

const store = configureStore();

store.subscribe(() => {
  console.log('Store changed!');
});

store.dispatch(projectAdded({ name: 'Project 1' }));
store.dispatch(bugAdded({ description: 'Bug 1' }));
store.dispatch(bugAdded({ description: 'Bug 2' }));
store.dispatch(bugAdded({ description: 'Bug 3' }));
store.dispatch(bugResolved({ id: 1 }));

const unresolvedBugs = getUnresolvedBugs(store.getState());
const unresolvedBugs2 = getUnresolvedBugs(store.getState());

console.log(unresolvedBugs === unresolvedBugs2);
